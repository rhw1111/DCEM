using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
   public interface IMemberRightsService
    {
        /// <summary>
        /// 测试权益
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<MemberRightsResponse> GetTest(string name);
    }



    public class MemberRightsResponse 
    {
        public string msgCode { get; set; }

        public string msg { get; set; }

        public List<List<RespItem>> resp { get; set; }
    }

   

    public class RespItem
    {
        public string primaryActiveCode { get; set; }
        public string userId { get; set; }
        public string orderNo { get; set; }
        public string optionType { get; set; }
        public string paymentStatus { get; set; }
        public string mobilePhone { get; set; }
        public string orderDescription { get; set; }
        public DateTime date { get; set; }
        public string region { get; set; }
        public string city { get; set; }
        public string marketingCampaign { get; set; }
        public decimal amount { get; set; }
        public string emailAddress { get; set; }
        public string gender { get; set; }
        public string isOrder { get; set; }
        public List<RightsPackage> rightsChosen { get; set; }
    }

    public class RightsPackage
    {
        public string rightCode { get; set; }
        public string rightName { get; set; }
        public decimal amount { get; set; }
        public string status { get; set; }
        public string rightType { get; set; }
        public List<RightsDetails> rightsDetails { get; set; }
    }

    public class RightsDetails
    {
        public string rightCode { get; set; }
        public string rightName { get; set; }
        public string skuCode { get; set; }
        public List<Attrs> attrs { get; set; }
    }

    public class Attrs
    {
        public string AttrBaseCode { get; set; }
        public string AttrValueBaseCode { get; set; }
    }


}
