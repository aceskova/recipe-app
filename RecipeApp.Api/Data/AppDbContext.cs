using Microsoft.EntityFrameworkCore;
using RecipeApp.Api.Models;

namespace RecipeApp.Api.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
    }
}