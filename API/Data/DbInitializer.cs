using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public class DbInitializer
    {
          public static async Task Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;
 
            var products = new List<Product>
            {
                new Product
                {
                    Name = "CPU Core i5-13600k",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictureUrl = "/images/products/intel-core-i5-13600k.png",
                    Brand = "intel",
                    Type = "CPU",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "CPU Core i9-12900k",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/intel-core-i9-12900k.png",
                    Brand = "intel",
                    Type = "CPU",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ZOTAC GAMING GeForce RTX 4090",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/zotac-rtx-4090.png",
                    Brand = "Zotac",
                    Type = "GPU",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Corsair Ram PC DDR4 32GB/3600MHz",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 25000,
                    PictureUrl = "/images/products/corsair-ddr4-vengeance-rgb-pro.png",
                    Brand = "Corsair",
                    Type = "RAM",
                    QuantityInStock = 100
                },
            };
 
            foreach (var product in products)
            {
                context.Products.Add(product);
            }
 
            context.SaveChanges();
        }

    }
}