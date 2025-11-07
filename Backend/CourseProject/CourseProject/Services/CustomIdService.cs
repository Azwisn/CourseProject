namespace CourseProject.Services
{
    public class CustomIdService : ICustomIdService
    {
        public Task<string> GenerateNewAsync(int inventoryId, CancellationToken ct)
        {
            return Task.FromResult(Guid.NewGuid().ToString("N"));
        }

        public Task<bool> ValidateFormatAsync(int inventoryId, string customId)
        {
            return Task.FromResult(!string.IsNullOrWhiteSpace(customId));
        }
    }
}
