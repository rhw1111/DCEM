
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SystemConfiguration]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](100) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[content] [nvarchar](max) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 1048576)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )
GO

ALTER TABLE [dbo].[SystemConfiguration] ADD  DEFAULT (newsequentialid()) FOR [id]
GO
 