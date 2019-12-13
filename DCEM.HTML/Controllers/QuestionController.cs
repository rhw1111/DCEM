using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DCEM.HTML.Controllers
{
    public class QuestionController : Controller
    {
        /// <summary>
        /// 问卷调查落地页
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }
         
    }
}