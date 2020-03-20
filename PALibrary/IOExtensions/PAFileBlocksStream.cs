using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Xrm.Sdk;
using Microsoft.Crm.Sdk.Messages;

namespace PALibrary.IOExtensions
{
    /// <summary>
    /// 基于PA文件块的文件流
    /// </summary>
    public class PAFileBlocksStream : Stream
    {
        private string _fileContinuationToken;
        private long _fileSize;
        //private long _perSize = (long)1024 * 1024 * 3;
        private long _perSize = (long)1024 * 10;
        private long _position = 0;
        private bool _complete = false;
        private IOrganizationService _orgService;

        private List<byte> _currentBytes = new List<byte>();

        public PAFileBlocksStream(string fileContinuationToken,long fileSize, IOrganizationService orgService)
        {
            _fileContinuationToken = fileContinuationToken;
            _fileSize = fileSize;
            _orgService = orgService;
        }
        public override bool CanRead
        {
            get
            {
                return true;
            }
        }

        public override bool CanSeek
        {
            get
            {
                return false;
            }
        }

        public override bool CanWrite
        {
            get
            {
                return false;
            }
        }

        public override long Length
        {
            get
            {
                return _fileSize;
            }
        }

        public override long Position { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public override void Flush()
        {
            throw new NotImplementedException();
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            if (offset<0 || count<0 ||(offset + count>buffer.Count()))
            {
                throw new IndexOutOfRangeException("buffer out of count in Read of PAFileBlocksStream");
            }

            //本次操作总共读取的字节数
            List<byte> currentBytes = new List<byte>();
            //还需要从服务中读取的字节数
            int stillReadSize = 0;
            int resultSize = 0;
            if (_currentBytes.Count()>=count)
            {
                currentBytes.AddRange(_currentBytes.Take(count).ToList());
                _currentBytes.RemoveRange(0, count);
                resultSize = count;
            }
            else
            {
                currentBytes.AddRange(_currentBytes);
                _currentBytes.Clear();
                stillReadSize = count - currentBytes.Count();
                resultSize = currentBytes.Count();
            }


            while (!_complete && stillReadSize != 0)
            {
                DownloadBlockRequest request = new DownloadBlockRequest()
                {
                    BlockLength = _perSize,
                    FileContinuationToken = _fileContinuationToken,
                    Offset = _position
                };

                var response = (DownloadBlockResponse)_orgService.Execute(request);
                _position = _position + response.Data.Count();
                _currentBytes.AddRange(response.Data);

                if (_currentBytes.Count<_perSize)
                {
                    _complete = true;
                }

                if (stillReadSize >= _currentBytes.Count())
                {
                    currentBytes.AddRange(_currentBytes);                    
                    stillReadSize = stillReadSize - _currentBytes.Count();
                    _currentBytes.Clear();
                }
                else
                {
                    currentBytes.AddRange(_currentBytes.Take(stillReadSize).ToList());
                    _currentBytes.RemoveRange(0, count);
                    stillReadSize = 0;
                }

                if (stillReadSize==0 || _complete)
                {
                    break;
                }
            }

            /*for(var index= offset; index<= offset + currentBytes.Count-1;index++)
            {
                buffer[index] = currentBytes[index - offset];
            }
            */
            currentBytes.CopyTo(buffer, offset);
            return currentBytes.Count;
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            throw new NotImplementedException();
        }

        public override void SetLength(long value)
        {
            throw new NotImplementedException();
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            throw new NotImplementedException();
        }
    }
}
