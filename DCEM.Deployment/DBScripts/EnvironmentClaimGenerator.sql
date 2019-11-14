/****** Object:  Table [dbo].[EnvironmentClaimGenerator]    Script Date: 2019/11/11 18:39:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EnvironmentClaimGenerator]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[type] [varchar](150) COLLATE Chinese_PRC_Stroke_90_BIN2 NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_EnvironmentClaimGenerator_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_EnvironmentClaimGenerator_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
INDEX [NCI_EnvironmentClaimGenerator_Sequence] NONCLUSTERED 
(
	[sequence] DESC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 2048)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )

GO

ALTER TABLE [dbo].[EnvironmentClaimGenerator] ADD  DEFAULT (newsequentialid()) FOR [id]
GO


