using CourseProject.Data;
using CourseProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;

namespace CourseProject.Hubs
{
    [Authorize]
    public class DiscussionHub : Hub
    {
        private readonly ApplicationDbContext _db;
        public DiscussionHub(ApplicationDbContext db) { _db = db; }

        public async Task SendPost(Guid inventoryId, string contentMd)
        {
            var userId = Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var post = new DiscussionPost { InventoryId = inventoryId, UserId = userId, ContentMd = contentMd };
            _db.DiscussionPosts.Add(post);
            await _db.SaveChangesAsync();
            await Clients.Group(inventoryId.ToString()).SendAsync("NewPost", new { post.Id, post.UserId, post.ContentMd, post.CreatedAt });
        }

        public override Task OnConnectedAsync()
        {
            var inventoryId = Context.GetHttpContext()?.Request.Query["inventoryId"].FirstOrDefault();
            if (Guid.TryParse(inventoryId, out var id))
                Groups.AddToGroupAsync(Context.ConnectionId, id.ToString());
            return base.OnConnectedAsync();
        }
    }
}
