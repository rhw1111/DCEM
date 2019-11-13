
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HashGroupStrategy]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](100)  NOT NULL,
	[strategyservicefactorytype] [varchar](500) NOT NULL,
	[strategyservicefactorytypeusedi] [bit] NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_HashGroupStrategy_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_HashGroupStrategy_Name] UNIQUE NONCLUSTERED 
(
	[name] DESC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 1024)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )
GO

ALTER TABLE [dbo].[HashGroupStrategy] ADD  DEFAULT (newsequentialid()) FOR [id]
GO


