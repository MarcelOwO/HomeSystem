using UserService.Endpoints;
using UserService.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddEnvironmentVariables();

var config = builder.Configuration;

var connectionString = $"Host={config["AUTH_DB_HOST"] ?? "localhost"};" +
                       $"Database={config["POSTGRES_DB"]};" +
                       $"Username={config["POSTGRES_USER"]};" +
                       $"Password={config["POSTGRES_PASSWORD"]}";

builder.Services.AddDbContext<UserDbContext>(options => { options.UseNpgsql(connectionString); });

var app = builder.Build();


app.UseHttpsRedirection();

app.MapNameEndpoints();
app.MapBlogEndpoints();

app.Run();
