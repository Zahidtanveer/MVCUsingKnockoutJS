using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using UsingKnockoutJS.Models;

namespace UsingKnockoutJS.Data
{
    public class StudentDbContext : DbContext
    {

        public StudentDbContext()
            : base("name=dbConnection")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            
        }
        public DbSet<Student> student { get; set; }
    }
}