using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using UserService.Data;
using UserService.Models;


namespace UserService.Endpoints;

public static class NameEndpoints
{
    public static void MapNameEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/names");

        group.MapGet("/", async (UserDbContext db) => { await db.Votes.ToListAsync(); });

        group.MapPost("/", async (HttpContext context, Vote vote, UserDbContext db) =>
        {
            var voterName = context.User.Identity?.Name;

            if (voterName == null)
            {
                return Results.BadRequest();
            }

            vote.Name = voterName;

            db.Votes.Add(vote);
            await db.SaveChangesAsync();
            return Results.Created($"/api/names/{vote.Id}",vote);
        });
    }
}