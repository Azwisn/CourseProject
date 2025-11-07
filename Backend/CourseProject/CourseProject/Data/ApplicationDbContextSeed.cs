//using Microsoft.AspNetCore.Identity;

//namespace CourseProject.Data
//{
//    public static class ApplicationDbContextSeed
//    {
//        public static async Task SeedAsync(IServiceProvider sp)
//        {
//            var userMgr = sp.GetRequiredService<UserManager<ApplicationUser>>();
//            var ctx = sp.GetRequiredService<ApplicationDbContext>();

//            if (!ctx.Users.Any())
//            {
//                var admin = new ApplicationUser { UserName = "admin", Email = "admin@example.com", DisplayName = "Admin" };
//                await userMgr.CreateAsync(admin, "Admin123!");
//                await userMgr.AddClaimAsync(admin, new System.Security.Claims.Claim("role", "admin"));
//            }

//            if (!ctx.Inventories.Any())
//            {
//                var adminUser = await userMgr.FindByNameAsync("admin");
//                var books = new Inventory
//                {
//                    Title = "Книги",
//                    DescriptionMd = "Инвентарь: Книги",
//                    OwnerId = adminUser?.Id
//                };
//                var office = new Inventory
//                {
//                    Title = "Офисная техника",
//                    DescriptionMd = "Инвентарь: Офисная техника",
//                    OwnerId = adminUser?.Id
//                };

//                ctx.Inventories.AddRange(books, office);
//                await ctx.SaveChangesAsync();

//                // Create some items
//                for (int i = 1; i <= 12; i++)
//                {
//                    ctx.Items.Add(new Item
//                    {
//                        InventoryId = books.Id,
//                        CustomId = $"BOOK-{i:D4}"
//                    });
//                }
//                for (int i = 1; i <= 10; i++)
//                {
//                    ctx.Items.Add(new Item
//                    {
//                        InventoryId = office.Id,
//                        CustomId = $"OFF-{i:D4}"
//                    });
//                }

//                await ctx.SaveChangesAsync();
//            }
//        }
//    }
//}
