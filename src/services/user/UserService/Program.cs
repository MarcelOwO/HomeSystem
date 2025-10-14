using UserService.Endpoints;

var builder = WebApplication.CreateBuilder(args);


builder.Configuration.AddEnvironmentVariables();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


app.UseHttpsRedirection();

app.MapNameEndpoints();
app.MapBlogEndpoints();

app.Run();