function findNearbyShopsAndAttractions() {
    const shopResults = document.getElementById("shopResults");
    const category = document.getElementById("categorySelect").value;  // Get selected category
  
  
    let predefinedShops = {
        gear: [
          {
            name: "Sunrise Adventure Trek",
            address: "Kathmandu,Nepal",
            link: "https://sunriseadventuretrek.com/blogs/best-trekking-gears-shop-in-kathmandu" // Link to the store's website
          },
          {
            name: "Footprint Adventure",
            address: "Kathmandu, Nepal",
            link: "https://www.footprintadventure.com/blog/top-trekking-and-hiking-gear-shops-in-nepal" // Link to the store's website
          }
        ],
        books: [
          {
            name: "The Longest Way Home",
            address: "Thamel, Kathmandu",
            link: "https://www.thelongestwayhome.com/blog/nepal/bookshops-in-kathmandu-nepal/?srsltid=AfmBOoqnvVvFCkzXRgAxh41xrlQ8SoaapzOjkHe3oCnyUqkEVr9a2XpB" // Link to the store's website
          },
          {
            name: "Pilgrims Books",
            address: "Kathmandu, Nepal",
            link: "https://pilgrimsbooks.com/" // Link to the store's website
          }
        ],
        souvenir: [
          {
            name: "Trip Advisor",
            address: "Kathandu, Nepal",
            link: "https://www.tripadvisor.com/Attractions-g293890-Activities-c26-t144-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html" // Link to the store's website
          },
          {
            name: "Full Time Explorer",
            address: "Kathmandu, Nepal",
            link: "https://fulltimeexplorer.com/nepal-souvenirs-kathmandu/" // Link to the store's website
          }
        ]
        // Add more categories and shops as needed...
      };
      
  
      const shops = predefinedShops[category];

      if (shops && shops.length > 0) {
        let htmlContent = `<p>Here are nearby options for "${category}":</p>`;
        shops.forEach(shop => {
          htmlContent += `
            <div class="shop">
              <h4><a href="${shop.link}" target="_blank">${shop.name}</a></h4>
              <p>${shop.address}</p>
            </div>
          `;
        });
        shopResults.innerHTML = htmlContent;
      } else {
        shopResults.innerHTML = "<p>No shops found in this category.</p>";
      }
    }