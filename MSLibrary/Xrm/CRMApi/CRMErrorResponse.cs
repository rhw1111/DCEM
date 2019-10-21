using System.Runtime.Serialization;

namespace MSLibrary.Xrm
{

	[DataContract(Name = "errorResponse")]
	public class CRMErrorResponse {
		public CRMErrorResponse() { }
		[DataMember(Name = "error")]
		public error error { get; set; }
	}

	[DataContract(Name = "error")]
	public class error {
		[DataMember(Name = "code")]
		public string code { get; set; }
		[DataMember(Name = "message")]
		public string message { get; set; }
		[DataMember(Name = "innererror")]
		public innererror innererror { get; set; }
	}

	[DataContract(Name = "innererror")]
	public class innererror {
		public innererror() { }
		[DataMember(Name = "message")]
		public string message { get; set; }
		[DataMember(Name = "type")]
		public string type { get; set; }
		[DataMember(Name = "stacktrace")]
		public string stacktrace { get; set; }
	}

}
