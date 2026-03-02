// Program.cs - hlavní vstupní bod pro ASP.NET Core Web API
using Microsoft.EntityFrameworkCore;
using RecipeApp.Api.Data;

var builder = WebApplication.CreateBuilder(args);

// ✅ přidat Controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DbContext (SQLite databáze)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=recipes.db"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDev",
        policy => policy
            .WithOrigins("http://localhost:3000")  // <- adresa tvého React dev serveru
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

var app = builder.Build();

// Swagger jen v Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// ✅ použít CORS
app.UseCors("AllowReactDev");

app.UseAuthorization();

// ✅ napojení controllerů
app.MapControllers();

app.Run();