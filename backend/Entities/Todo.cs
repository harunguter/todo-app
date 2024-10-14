using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Backend.Entities;

public record Todo
{
    public Todo()
    {
        Id = ObjectId.GenerateNewId().ToString();
        Content = string.Empty;
        IsCompleted = false;
        CreatedTime = DateTime.Now;
        UpdatedTime = DateTime.Now;
    }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string Id { get; set; }

    [BsonElement("content")]
    public string Content { get; set; }

    [BsonElement("is_completed")]
    public bool IsCompleted { get; set; }

    [BsonElement("created_time")]
    public DateTime CreatedTime { get; set; }

    [BsonElement("updated_time")]
    public DateTime UpdatedTime { get; set; }
}
