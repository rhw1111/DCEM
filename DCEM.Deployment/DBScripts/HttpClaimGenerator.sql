/****** Object:  Table [dbo].[HttpClaimGenerator]    Script Date: 2019/11/11 18:40:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HttpClaimGenerator]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[type] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_HttpClaimGenerator_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_HttpClaimGenerator_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
INDEX [NCI_HttpClaimGenerator_Sequence] NONCLUSTERED 
(
	[sequence] DESC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 2048)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )

GO

ALTER TABLE [dbo].[HttpClaimGenerator] ADD  DEFAULT (newsequentialid()) FOR [id]
GO


