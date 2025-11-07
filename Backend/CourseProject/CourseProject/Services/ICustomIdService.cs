namespace CourseProject.Services
{
    public interface ICustomIdService
    {
        Task<string> GenerateNewAsync(int inventoryId, CancellationToken ct);
        Task<bool> ValidateFormatAsync(int inventoryId, string customId);
    }
}
