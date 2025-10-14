using Microsoft.EntityFrameworkCore;
using UserService.Data;

namespace UserService.Endpoints;

public static class BlogEndpoints
{
    public static void MapBlogEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/blogs");

        group.MapGet("/", async (UserDbContext db) => await db.Blogs.Select(x => new { x.Id, x.Title }).ToListAsync());

        group.MapGet("/{id:int}", async (int id, UserDbContext db) =>
        {
            var blog = await db.Blogs.FindAsync(id);
            return blog is not null ? Results.Ok(blog) : Results.NotFound();
        });
    }
}
