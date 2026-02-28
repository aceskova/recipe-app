namespace RecipeApp.Api.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int CookingTime { get; set; } // v minutách
    }
}