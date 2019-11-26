using System;
using System.Collections.Generic;
using System.Text;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using MSLibrary.DAL;
using DCEM.ConfigurationService.Main.Entities;

namespace DCEM.ConfigurationService.Main.DAL
{
    public static class EntityDBContextFactory
    {
        public static MainDBContext Create(DbConnection conn)
        {
            DbContextOptions<MainDBContext> option = new DbContextOptions<MainDBContext>();
            DbContextOptionsBuilder<MainDBContext> optionBuilder = new DbContextOptionsBuilder<MainDBContext>(option);    
            MainDBContext context = new MainDBContext(optionBuilder.UseSqlServer(conn).Options);

            return context;
        }

        public static MainDBContext Create(string strConn)
        {
            DbContextOptions<MainDBContext> option = new DbContextOptions<MainDBContext>();
            DbContextOptionsBuilder<MainDBContext> optionBuilder = new DbContextOptionsBuilder<MainDBContext>(option);
            MainDBContext context = new MainDBContext(optionBuilder.UseSqlServer(strConn).Options);

            return context;
        }

    }


    /// <summary>
    /// 实体框架上下文
    /// </summary>
    public class MainDBContext : DbContext
    {
        public MainDBContext(DbContextOptions options) : base(options)
        {

        }

        /// <summary>
        /// 服务描述
        /// </summary>
        public DbSet<ServiceDescription> ServiceDescriptions { get; set; }

        /// <summary>
        /// 配置实体映射
        /// </summary>
        /// <param name="modelBuilde"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilde)
        {
            modelBuilde.Entity<ServiceDescription>().ToTable("ServiceDescription").HasKey((entity) => entity.ID);
            modelBuilde.Entity<ServiceDescription>().Property((entity) => entity.Name).IsRequired().HasColumnType("varchar(150)").HasMaxLength(150);
            modelBuilde.Entity<ServiceDescription>().Property((entity) => entity.AuthInfoType).IsRequired().HasColumnType("varchar(150)").HasMaxLength(150);
            modelBuilde.Entity<ServiceDescription>().Property((entity) => entity.Address).IsRequired().HasColumnType("varchar(200)").HasMaxLength(200);
            modelBuilde.Entity<ServiceDescription>().Property((entity) => entity.CreateTime).IsRequired();
            modelBuilde.Entity<ServiceDescription>().Property((entity) => entity.ModifyTime).IsRequired();
        }
    }
    }
