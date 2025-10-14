using Microsoft.EntityFrameworkCore;
using UserService.Models;

namespace UserService.Data;

public class UserDbContext : DbContext
{
    public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
    
   public DbSet<Blog> Blogs { get; set; } 
   public DbSet<Vote> Votes { get; set; }

   protected override void OnModelCreating(ModelBuilder modelBuilder)
   {
       
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<Blog>(entity =>
      {
          entity.ToTable("blogs");
          entity.HasIndex(e => e.Id);
      });
      modelBuilder.Entity<Vote>(entity =>
      {
          entity.ToTable("votes");
          entity.HasIndex(e => e.Id);

      });


   }
}