using System.Data.Common;
using CoreMVCWebApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreMVCWebApplication.Data
{
    public class MyDbContext : DbContext
    {


        public MyDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Emp> MyProperty { get; set; }
    }

}
