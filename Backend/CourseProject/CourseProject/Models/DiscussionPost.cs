namespace CourseProject.Models
{
    public class DiscussionPost
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid InventoryId { get; set; }
        public string UserId { get; set; }
        public string ContentMd { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
