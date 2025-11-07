using Microsoft.AspNetCore.Identity;

namespace CourseProject.Models
{
    public class ApplicationUser : IdentityUser
    {
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
