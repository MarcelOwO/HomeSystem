namespace UserService.Models;

public class Vote
{
    public Guid Id { get; set; }
    public string UserId { get; set; }
    public string Name { get; set; }
}