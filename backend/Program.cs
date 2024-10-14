using Backend.Contexts;
using Backend.Entities;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

builder.Services.AddDbContext<TodoDbContext>(options =>
    options.UseMongoDB(
        configuration.GetSection("Database")["ConnectionString"] ?? "",
        configuration.GetSection("Database")["Name"] ?? ""
    )
);


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

string route = "api/todo";

/// <summary>
/// List all todos
/// </summary>
app.MapGet(route, async (TodoDbContext context) =>
{
    var todos = await context.Todos.ToListAsync();

    Log.Information("Fetched todos: {@Todos}", todos);

    return Results.Ok(new ApiResponse(data: todos));
});

/// <summary>
/// Get single todo by id
/// </summary>
app.MapGet($"{route}/{{id}}", async (string id, TodoDbContext context) =>
{
    var findTodo = await context.Todos.FindAsync(id);
    if (findTodo is not Todo) throw new Exception("Todo not found.");

    Log.Information("Finded todo: {@FindTodo}", findTodo);

    return Results.Ok(new ApiResponse(data: findTodo));
});

/// <summary>
/// Add new todo
/// </summary>
app.MapPost(route, async (Todo todo, TodoDbContext context) =>
{
    todo.Id = ObjectId.GenerateNewId().ToString();
    todo.IsCompleted = false;
    todo.CreatedTime = DateTime.Now;
    todo.UpdatedTime = DateTime.Now;

    var addedTodo = context.Todos.Add(todo);
    await context.SaveChangesAsync();

    Log.Information("Added todo: {@AddedTodo}", addedTodo.Entity);

    return Results.Ok(new ApiResponse(data: addedTodo.Entity));
});

/// <summary>
/// Update todo by id
/// </summary>
app.MapPut($"{route}/{{id}}", async (string id, Todo todo, TodoDbContext context) =>
{
    var findTodo = await context.Todos.FindAsync(id);
    if (findTodo is not Todo) throw new Exception("Todo not found.");

    findTodo.IsCompleted = todo.IsCompleted;
    findTodo.CreatedTime = findTodo.CreatedTime;
    findTodo.UpdatedTime = DateTime.Now;

    var updatedTodo = context.Todos.Update(findTodo);

    Log.Information("Updated todo: {@UpdatedTodo}", updatedTodo.Entity);

    await context.SaveChangesAsync();

    return Results.Ok(new ApiResponse(data: updatedTodo.Entity));
});


/// <summary>
/// Delete todo by id
/// </summary>
app.MapDelete($"{route}/{{id}}", async (string id, TodoDbContext context) =>
{
    var findTodo = await context.Todos.FindAsync(id);
    if (findTodo is null) throw new Exception("Todo not found.");

    var deletedTodo = context.Todos.Remove(findTodo);

    Log.Information("Deleted todo: {@DeletedTodo}", deletedTodo.Entity);

    await context.SaveChangesAsync();

    return Results.Ok(new ApiResponse(data: deletedTodo.Entity));
});

/// <summary>
/// Global exception handler
/// </summary>
app.Use(async (context, next) =>
{
    try
    {
        await next.Invoke();
    }
    catch (Exception exception)
    {
        Log.Error(exception.Message);
        context.Response.StatusCode = StatusCodes.Status400BadRequest;
        await context.Response.WriteAsJsonAsync(new ApiResponse(success: false, message: exception.Message));
    }
});

app.UseSwagger();
app.UseSwaggerUI();

app.Run();