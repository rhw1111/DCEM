 
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HashRealNode]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](100)  NOT NULL,
	[groupid] [uniqueidentifier] NOT NULL,
	[nodekey] [nvarchar](4000)  NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_HashNode_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_HashNode_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 512)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )
GO

ALTER TABLE [dbo].[HashRealNode] ADD  DEFAULT (newsequentialid()) FOR [id]
GO

ALTER TABLE [dbo].[HashRealNode]  WITH CHECK ADD  CONSTRAINT [FK_HashNode_HashRealNodeGroupId] FOREIGN KEY([groupid])
REFERENCES [dbo].[HashGroup] ([id])
GO

ALTER TABLE [dbo].[HashRealNode] CHECK CONSTRAINT [FK_HashNode_HashRealNodeGroupId]
GO


