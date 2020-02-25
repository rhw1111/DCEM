using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PALibrary.PAEntityExtensions;

namespace PALibrary.PAEntityExtensions
{
    /// <summary>
    /// PAEntity的快捷查询辅助类
    /// </summary>
    public static class PAEntityQueryHelper
    {
        /// <summary>
        /// 根据Fetch查询字符串获取第一条记录
        /// </summary>
        /// <param name="strFetch">Fetch查询字符串</param>
        /// <returns></returns>
        public static Entity Retrive(string strFetch)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            FetchExpression fetch = new FetchExpression(strFetch);
            var response = orgService.RetrieveMultiple(fetch);
            if (response.Entities.Count > 0)
            {
                return response.Entities[0];
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// 根据Fetch查询字符串获取所有记录
        /// </summary>
        /// <param name="strFetch">Fetch查询字符串</param>
        /// <param name="callBack"></param>
        public static void RetriveAll(string strFetch, Action<Entity> callBack)
        {
            int page = 1, count = 500;
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);


            while (true)
            {
                doc.Root.SetAttributeValue("page", page.ToString());
                doc.Root.SetAttributeValue("count", count.ToString());

                FetchExpression fetchExpression = new FetchExpression(doc.ToString());
                var queryResponse = orgService.RetrieveMultiple(fetchExpression);
                foreach (var entityItem in queryResponse.Entities.ToList())
                {
                    callBack(entityItem);
                }

                if (!queryResponse.MoreRecords)
                {
                    break;
                }

                page++;
            }

        }

        /// <summary>
        /// 根据Fetch查询字符串获取Top记录
        /// </summary>
        /// <param name="strFetch"></param>
        /// <param name="size"></param>
        /// <param name="callBack"></param>
        public static void RetrievTop(string strFetch, int size, Action<Entity> callBack)
        {
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            doc.Root.SetAttributeValue("count", size.ToString());

            FetchExpression fetchExpression = new FetchExpression(doc.ToString());
            var queryResponse = orgService.RetrieveMultiple(fetchExpression);
            foreach (var entityItem in queryResponse.Entities.ToList())
            {
                callBack(entityItem);
            }


        }

        /// <summary>
        /// 根据Fetch查询字符串获取Top记录
        /// </summary>
        /// <param name="strFetch"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        public static List<Entity> RetrievTop(string strFetch, int size)
        {
            List<Entity> result = new List<Entity>();
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            doc.Root.SetAttributeValue("count", size.ToString());

            FetchExpression fetchExpression = new FetchExpression(doc.ToString());
            var queryResponse = orgService.RetrieveMultiple(fetchExpression);
            foreach (var entityItem in queryResponse.Entities.ToList())
            {
                result.Add(entityItem);
            }

            return result;
        }




        /// <summary>
        /// 根据Fetch查询字符串获取第一条记录
        /// </summary>
        /// <param name="strFetch">Fetch查询字符串</param>
        /// <returns></returns>
        public static T Retrive<T>(string strFetch)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            FetchExpression fetch = new FetchExpression(strFetch);
            var response = orgService.RetrieveMultiple(fetch);
            if (response.Entities.Count > 0)
            {
                return response.Entities[0].ConvertToDomainEntity<T>();
            }
            else
            {
                return default(T);
            }
        }

        /// <summary>
        /// 根据Fetch查询字符串获取所有记录
        /// </summary>
        /// <param name="strFetch">Fetch查询字符串</param>
        /// <param name="callBack"></param>
        public static void RetriveAll<T>(string strFetch, Action<T> callBack)
        {
            int page = 1, count = 500;
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);


            while (true)
            {
                doc.Root.SetAttributeValue("page", page.ToString());
                doc.Root.SetAttributeValue("count", count.ToString());

                FetchExpression fetchExpression = new FetchExpression(doc.ToString());
                var queryResponse = orgService.RetrieveMultiple(fetchExpression);
                foreach (var entityItem in queryResponse.Entities.ToList())
                {
                    callBack(entityItem.ConvertToDomainEntity<T>());
                }

                if (!queryResponse.MoreRecords)
                {
                    break;
                }

                page++;
            }

        }

        /// <summary>
        /// 根据Fetch查询字符串获取Top记录
        /// </summary>
        /// <param name="strFetch"></param>
        /// <param name="size"></param>
        /// <param name="callBack"></param>
        public static void RetrievTop<T>(string strFetch, int size, Action<T> callBack)
        {
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            doc.Root.SetAttributeValue("count", size.ToString());

            FetchExpression fetchExpression = new FetchExpression(doc.ToString());
            var queryResponse = orgService.RetrieveMultiple(fetchExpression);
            foreach (var entityItem in queryResponse.Entities.ToList())
            {
                callBack(entityItem.ConvertToDomainEntity<T>());
            }


        }

        /// <summary>
        /// 根据Fetch查询字符串获取Top记录
        /// </summary>
        /// <param name="strFetch"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        public static List<T> RetrievTop<T>(string strFetch, int size)
        {
            List<T> result = new List<T>();
            var doc = XDocument.Parse(strFetch);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            doc.Root.SetAttributeValue("count", size.ToString());

            FetchExpression fetchExpression = new FetchExpression(doc.ToString());
            var queryResponse = orgService.RetrieveMultiple(fetchExpression);
            foreach (var entityItem in queryResponse.Entities.ToList())
            {
                result.Add(entityItem.ConvertToDomainEntity<T>());
            }

            return result;
        }


    }
}
