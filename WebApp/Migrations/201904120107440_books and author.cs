namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class booksandauthor : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Authors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        LastnName = c.String(nullable: false),
                        Email = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);

            CreateTable(
               "dbo.Books",
               c => new
               {
                   Id = c.Int(nullable: false, identity: true),
                   Title = c.String(nullable: false),
                   Description= c.String(nullable: false),
                   PublishedOn = c.DateTime(nullable: false),
                   AuthorId = c.Int(nullable: false),
               })
               .PrimaryKey(t => t.Id);

            CreateIndex("dbo.Books", "AuthorId");
            AddForeignKey("dbo.Books", "AuthorId", "dbo.Authors", "Id", cascadeDelete: true);
            
        }
        
        public override void Down()
        {
            AddColumn("dbo.Books", "Author", c => c.String(nullable: false));
            DropForeignKey("dbo.Books", "AuthorId", "dbo.Authors");
            DropIndex("dbo.Books", new[] { "AuthorId" });
            DropColumn("dbo.Books", "AuthorId");
            DropTable("dbo.Authors");
        }
    }
}
