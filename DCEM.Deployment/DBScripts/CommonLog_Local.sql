SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CommonLog_Local](
	[id] [uniqueidentifier] NOT NULL,
	[parentid] [uniqueidentifier] NOT NULL,
	[contextinfo] [nvarchar](max) NOT NULL,
	[actionname] [nvarchar](300) NOT NULL,
	[parentactionname] [nvarchar](300) NOT NULL,
	[prelevelid] [uniqueidentifier] NOT NULL,
	[currentlevelid] [uniqueidentifier] NOT NULL,
	[requestbody] [nvarchar](max) NOT NULL,
	[responsebody] [nvarchar](max) NOT NULL,
	[requesturi] [nvarchar](500) NOT NULL,
	[message] [nvarchar](max) NOT NULL,
	[level] [int] NOT NULL,
	[root] [bit] NOT NULL,
	[createtime] [datetime] NOT NULL,
	[modifytime] [datetime] NOT NULL,
	[sequence] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_CommonLog_Local] PRIMARY KEY NONCLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

/****** Object:  Index [CI-CommonLog_Local]    Script Date: 2019/11/12 14:08:59 ******/
CREATE UNIQUE CLUSTERED INDEX [CI-CommonLog_Local] ON [dbo].[CommonLog_Local]
(
	[sequence] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

ALTER TABLE [dbo].[CommonLog_Local] ADD  CONSTRAINT [DF_CommonLog_Local_id]  DEFAULT (newsequentialid()) FOR [id]
GO


