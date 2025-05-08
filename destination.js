const cityData = {
    paris: {
        coords: { lat: 48.8566, lng: 2.3522 },
        attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"]
    },
    tokyo: {
        coords: { lat: 35.6895, lng: 139.6917 },
        attractions: ["Tokyo Tower", "Shibuya Crossing", "Meiji Shrine"]
    },
    pokhara: {
        coords: { lat: 28.2096, lng: 83.9856 },
        attractions: ["Phewa Lake", "World Peace Pagoda", "Sarangkot"]
    },
    newyork: {
        coords: { lat: 40.7128, lng: -74.006 },
        attractions: ["Central Park", "Statue of Liberty", "Times Square"]
    },
    rome: {
        coords: { lat: 41.9028, lng: 12.4964 },
        attractions: ["Colosseum", "Trevi Fountain", "Vatican City"]
    },
    kyoto: {
        coords: { lat: 35.0116, lng: 135.7681 },
        attractions: ["Fushimi Inari Shrine", "Kinkaku-ji", "Arashiyama Bamboo Grove"]
    },
    sydney: {
        coords: { lat: -33.8688, lng: 151.2093 },
        attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"]
    },
    reykjavik: {
        coords: { lat: 64.1466, lng: -21.9426 },
        attractions: ["Hallgrímskirkja", "Blue Lagoon", "Sun Voyager"]
    },
    barcelona: {
        coords: { lat: 41.3851, lng: 2.1734 },
        attractions: ["Sagrada Familia", "Park Güell", "Gothic Quarter"]
    }
};

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 48.8566, lng: 2.3522 } // Default to Paris
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("citySelect");

    select.addEventListener("change", function () {
        const city = this.value;
        if (cityData[city]) {
            const { coords, attractions } = cityData[city];
            map.setCenter(coords);

            new google.maps.Marker({
                position: coords,
                map: map,
                title: city.charAt(0).toUpperCase() + city.slice(1)
            });

            const list = attractions.map(item => `<li>${item}</li>`).join("");
            document.getElementById("attractionList").innerHTML = `
                <h3>Top Attractions in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
                <ul>${list}</ul>
            `;
        }
    });
});
