using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Contexts;

public class TodoDbContext : DbContext
{
    public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options) { }
    public DbSet<Todo> Todos => Set<Todo>();
}
