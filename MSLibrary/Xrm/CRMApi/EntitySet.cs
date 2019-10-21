using Newtonsoft.Json;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace MSLibrary.Xrm
{
	/// <summary>
	/// Named collections of entities (e.g. accounts is an entity set containing account entities). An entity's key uniquely identifies the entity within an entity set
	/// </summary>
	/// <typeparam name="T"></typeparam>
	[DataContract(Name = "EntitySet")]
	public class EntitySet<T> {

		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		[DataMember(Name = "@odata.nextLink")]
		public string nextLink { set; get; }

		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		[DataMember(Name = "@odata.count")]

		public int count { set; get; }

		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		[DataMember(Name = "pagenum")]
		public int pagenum { set; get; }

		[DataMember(Name = "value")]
		public T[] value { get; set; }
	}
}
