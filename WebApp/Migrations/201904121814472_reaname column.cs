namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class reanamecolumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Authors", "LastName", c => c.String(nullable: false));
            DropColumn("dbo.Authors", "LastnName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Authors", "LastnName", c => c.String(nullable: false));
            DropColumn("dbo.Authors", "LastName");
        }
    }
}
