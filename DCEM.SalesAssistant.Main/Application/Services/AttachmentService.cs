using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using System.Threading.Tasks;
using System.Xml.Linq;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using DCEM.Main.Entities;
using DCEM.Main;
using DCEM.SalesAssistant.Main.ViewModel;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class AttachmentService : IAttachmentService
    {
        private CrmService _crmService;

        public AttachmentService(CrmService crmService)
        {
            _crmService = crmService;
        }


        /// <summary>
        /// 新建附件
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> Add(List<AttachmentAddResponse> model)
        {

            var validateResult = new ValidateResult();
            try
            {
                foreach (var item in model)
                {
                    var entity = new CrmExecuteEntity("mcs_attachment", Guid.NewGuid());
                    if (item.attrname != null)
                        entity.Attributes.Add(item.attrname, new CrmEntityReference(item.entitylookup, Guid.Parse(item.id)));
                    if (item.filename != null)
                        entity.Attributes.Add("mcs_filename", item.filename);
                    if (item.filesize != null)
                        entity.Attributes.Add("mcs_filesize", item.filesize);
                    entity.Attributes.Add("mcs_filetype", item.filename.Split('.')[1]);
                    if (item.url != null)
                        entity.Attributes.Add("mcs_fileurl", item.url);
                    if (item.mcs_partnertype != null)
                        entity.Attributes.Add("mcs_partnertype", item.mcs_partnertype);
                    if (item.mcs_filecategory != null)
                        entity.Attributes.Add("mcs_filecategory", item.mcs_filecategory);

                    await _crmService.Create(entity, null);
                }

                #region 组装数据返回 
                validateResult.Result = true;
                validateResult.Description = "操作成功";
                #endregion
            }
            catch (Exception e)
            {
                validateResult.Result = false;
                validateResult.Description = e.Message;
            }

            return validateResult;

        }
    }
}
