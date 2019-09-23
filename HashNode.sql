
/****** Object:  Table [dbo].[HashNode]    Script Date: 9/20/2019 1:53:54 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HashNode]
(
	[id] [uniqueidentifier] NOT NULL,
	[groupid] [uniqueidentifier] NOT NULL,
	[realnodeid] [uniqueidentifier] NOT NULL,
	[code] [bigint] NOT NULL,
	[status] [int] NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_GroupIdCode] UNIQUE NONCLUSTERED 
(
	[groupid] ASC,
	[code] ASC
),
INDEX [NCI_GroupIdStatus] NONCLUSTERED 
(
	[groupid] ASC,
	[status] ASC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 512)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )
GO

ALTER TABLE [dbo].[HashNode] ADD  DEFAULT (newsequentialid()) FOR [id]
GO

ALTER TABLE [dbo].[HashNode]  WITH CHECK ADD  CONSTRAINT [FK_HashGroupId] FOREIGN KEY([groupid])
REFERENCES [dbo].[HashGroup] ([id])
GO

ALTER TABLE [dbo].[HashNode] CHECK CONSTRAINT [FK_HashGroupId]
GO

ALTER TABLE [dbo].[HashNode]  WITH CHECK ADD  CONSTRAINT [FK_HashRealNodeId] FOREIGN KEY([realnodeid])
REFERENCES [dbo].[HashRealNode] ([id])
GO

ALTER TABLE [dbo].[HashNode] CHECK CONSTRAINT [FK_HashRealNodeId]
GO


