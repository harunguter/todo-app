namespace Backend.Models;

public class ApiResponse
{
    public ApiResponse(object? data = null, bool success = true, string message = "")
    {
        Success = success;

        if (string.IsNullOrEmpty(message))
        {
            Message = Success ?
                "Request successful." :
                "Request failed.";
        }
        else
        {
            Message = message;
        }

        Data = data;
    }

    public bool Success { get; }
    public string Message { get; }
    public object? Data { get; }
}
