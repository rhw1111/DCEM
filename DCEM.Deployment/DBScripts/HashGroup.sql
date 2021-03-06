﻿  
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HashGroup]
(
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](150) NOT NULL,
	[type] [varchar](150) NOT NULL,
	[count] [bigint] NOT NULL,
	[strategyid] [uniqueidentifier] NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,

INDEX [NCI_HashGroup_CreateTime] NONCLUSTERED 
(
	[createtime] DESC
),
INDEX [NCI_HashGroup_Name] UNIQUE NONCLUSTERED 
(
	[name] ASC
),
INDEX [NCI_HashGroup_StrategyID] NONCLUSTERED 
(
	[strategyid] DESC
),
 PRIMARY KEY NONCLUSTERED HASH 
(
	[id]
)WITH ( BUCKET_COUNT = 2048)
)WITH ( MEMORY_OPTIMIZED = ON , DURABILITY = SCHEMA_AND_DATA )
GO

ALTER TABLE [dbo].[HashGroup] ADD  DEFAULT (newsequentialid()) FOR [id]
GO

ALTER TABLE [dbo].[HashGroup]  WITH CHECK ADD  CONSTRAINT [FK_HashGroup_StrategyId] FOREIGN KEY([strategyid])
REFERENCES [dbo].[HashGroupStrategy] ([id])
GO

ALTER TABLE [dbo].[HashGroup] CHECK CONSTRAINT [FK_HashGroup_StrategyId]
GO

