// 🔍 Search & Filter Logic
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const posts = document.querySelectorAll('.post');

// Function to filter posts based on search and category
function filterPosts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    posts.forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase();
        const category = post.getAttribute('data-category');

        const matchesSearch = title.includes(searchText);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        post.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
}

searchInput.addEventListener('input', filterPosts);
categoryFilter.addEventListener('change', filterPosts);

// 🖼️ Image click-to-enlarge functionality
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = 0;
        popup.style.left = 0;
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.background = 'rgba(0,0,0,0.8)';
        popup.style.display = 'flex';
        popup.style.alignItems = 'center';
        popup.style.justifyContent = 'center';
        popup.style.zIndex = 9999;

        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';
        fullImg.style.borderRadius = '10px';

        popup.appendChild(fullImg);
        document.body.appendChild(popup);

        popup.addEventListener('click', () => popup.remove());
    });
});

// Interactive Trip Plans - Display itinerary based on selection
const itineraryDetails = document.getElementById('itineraryDetails');
const destinationSelect = document.getElementById('destinationSelect');

const itineraries = {
    bali: {
        title: "Bali Itinerary (7 Days)",
        days: [
            "Day 1: Arrival and Explore Ubud",
            "Day 2: Beach Day at Kuta",
            "Day 3: Visit Tanah Lot Temple",
            "Day 4: Explore Uluwatu",
            "Day 5: Hiking Mt. Batur",
            "Day 6: Day trip to Nusa Penida",
            "Day 7: Relaxation and Shopping"
        ]
    },
    kathmandu: {
        title: "Kathmandu Itinerary (5 Days)",
        days: [
            "Day 1: Arrival and Thamel Exploration",
            "Day 2: Visit Pashupatinath Temple and Boudhanath Stupa",
            "Day 3: Swayambhunath (Monkey Temple)",
            "Day 4: Day trip to Bhaktapur",
            "Day 5: Shopping and Departure"
        ]
    },
    pokhara: {
        title: "Pokhara Itinerary (4 Days)",
        days: [
            "Day 1: Arrival and Lakeside Walk",
            "Day 2: Visit World Peace Pagoda and Sarangkot",
            "Day 3: Boating in Phewa Lake and Explore Caves",
            "Day 4: Paragliding and Relax"
        ]
    },
    paris: {
        title: "Paris Itinerary (5 Days)",
        days: [
            "Day 1: Arrival and Eiffel Tower",
            "Day 2: Louvre Museum and Seine River Cruise",
            "Day 3: Montmartre and Sacré-Cœur",
            "Day 4: Palace of Versailles",
            "Day 5: Shopping and Departure"
        ]
    }
};

// Update Itinerary based on destination selection
destinationSelect.addEventListener('change', function() {
    const selectedDestination = destinationSelect.value;
    const itinerary = itineraries[selectedDestination];

    if (itinerary) {
        itineraryDetails.innerHTML = `
            <h3>${itinerary.title}</h3>
            <ul>
                ${itinerary.days.map(day => `<li>${day}</li>`).join('')}
            </ul>
        `;
    }
});

// Downloadable Itinerary Logic
// (Optional: Include any logic to handle downloadable itinerary templates if needed, such as providing PDF download links)

const languageSwitcher = document.getElementById('languageSwitcher');

// Load default language (English)
let currentLanguage = 'en';

const languageData = {
  en: {
    "header": {
      "welcome": "Welcome to Travel with Kiran",
      "about": "About",
      "destination": "Destination",
      "budgetTips": "Budget Travel Tips",
      "blog": "Blog",
      "contact": "Contact"
    },
    "footer": {
      "copyright": "© 2025 Travel with Kiran. All Rights Reserved."
    },
    "about": {
      "title": "About Me",
      "content": "Hi, I'm Kiran, an avid traveler who loves sharing tips, guides, and personal stories about the world's best destinations!"
    }
  },
  es: {
    "header": {
      "welcome": "Bienvenido a Travel with Kiran",
      "about": "Acerca de",
      "destination": "Destino",
      "budgetTips": "Consejos de Viaje Económico",
      "blog": "Blog",
      "contact": "Contacto"
    },
    "footer": {
      "copyright": "© 2025 Travel with Kiran. Todos los derechos reservados."
    },
    "about": {
      "title": "Sobre mí",
      "content": "¡Hola, soy Kiran, un ávido viajero que ama compartir consejos, guías e historias personales sobre los mejores destinos del mundo!"
    }
  }
};

// Function to change content based on selected language
function changeLanguage(lang) {
  const data = languageData[lang];

  // Header
  document.getElementById('headerWelcome').textContent = data.header.welcome;
  document.getElementById('headerAbout').textContent = data.header.about;
  document.getElementById('headerDestination').textContent = data.header.destination;
  document.getElementById('headerBudgetTips').textContent = data.header.budgetTips;
  document.getElementById('headerBlog').textContent = data.header.blog;
  document.getElementById('headerContact').textContent = data.header.contact;

  // Footer
  document.getElementById('footerCopyright').textContent = data.footer.copyright;

  // About Section
  document.getElementById('aboutTitle').textContent = data.about.title;
  document.getElementById('aboutContent').textContent = data.about.content;
}

// Event Listener for Language Switcher
languageSwitcher.addEventListener('change', function() {
  currentLanguage = languageSwitcher.value;
  changeLanguage(currentLanguage);
});

// Initial load with default language (English)
changeLanguage(currentLanguage);


