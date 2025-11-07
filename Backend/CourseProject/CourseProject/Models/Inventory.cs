namespace CourseProject.Models
{
    public class Inventory
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string OwnerId { get; set; } = string.Empty;
        public ApplicationUser? Owner { get; set; }
        public bool IsPublicWrite { get; set; }
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();
    }
}
