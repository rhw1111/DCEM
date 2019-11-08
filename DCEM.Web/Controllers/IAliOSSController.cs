using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DCEM.Web.Controllers
{
    [Route("api/AliOss")]
    [ApiController]
    public class IAliOSSController: ApiController
    {
        [HttpGet]
        [Route("Get")]
        public ActionResult<string> GetAuthToken()
        {
            string token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFXX2tmMjE3bVlVSkpIWDZXZ0M3cTZENXdHcyJ9.eyJhdWQiOiJ1cm46bWljcm9zb2Z0OnVzZXJpbmZvIiwiaXNzIjoiaHR0cDovL3N1YmNybWFkZnMuc29rb24uY29tL2FkZnMvc2VydmljZXMvdHJ1c3QiLCJpYXQiOjE1NzA2OTcyNjgsImV4cCI6MTU3MDcwMDg2OCwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTVlMDE0YzctYjFmZi00NWEzLThjMGEtOTkxZjVhYTdjZThmIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMC0xMFQwODo0Nzo0OC40NjJaIiwidmVyIjoiMS4wIiwic3ViIjoieGxiUytucnpma05DRkROR3IzSFRqMWp0WElub1pMZnhwZlJteGxTUnVJTT0ifQ.MxGLdCBE3lI1jpcyZAwHPpnTf5wYyEUTgAJboAPUtmQRkB-PBJUUWL4AHxk2v50W8dlYNR0YywIfeEdHq7EXriBpb7m8X6L89fYkr1jUn-B4Ke7CyCFgX-5atOfm8uCTFWLt0f5JgEVQDE36cRGJ1QAUiSoVoPKUBEie9wEQAT0-XmHSXN7fmroH3JyGEQ7n3ZzxDZFWpjsM5Q31CQWYGww6vyB44Q3RSmc3KxPv9uvucE8OZBjGD_Vv7cGfGByiwEgL-YTA52X-ImHJOPmieVCpFl04BiAsD2sgutK4cvIeSHryjGNqGn1vMLa0yKPvHD0Mvm3Ixt0kPiIbc0Li_Q";
            return token;
        }

    }
}
