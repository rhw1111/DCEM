CREATE TABLE [dbo].[ClaimContextGenerator]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[type] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_ClaimContextGenerator_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_ClaimContextGenerator_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
INDEX [NCI_ClaimContextGenerator_Sequence] NONCLUSTERED 
(
	[sequence] DESC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 2048)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )

GO

ALTER TABLE [dbo].[ClaimContextGenerator] ADD  DEFAULT (newsequentialid()) FOR [id]
GO