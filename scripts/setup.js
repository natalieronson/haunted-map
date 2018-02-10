//Set up map

const mapApp = {};

// mapApp.file = '../scripts/locations.json';

// mapApp.data = JSON.parse($.getJSON({ 'url': mapApp.file, 'async': false }).responseText);
mapApp.data = [
    {
        "name": "Casa Loma",
        "position": {
            "lat": 43.678088,
            "lng": -79.409401
        },
        "description": "Insert description of Casa Loma here"
    },

    {
        "name": "Royal Ontario Museum",
        "position": {
            "lat": 43.667676,
            "lng": -79.394678
        },
        "description": "Insert description of ROM here"
    }
];





function initMap(content) {
    //set initial longitude and latitude of map
    let myLatLng = { lat: 43.648453, lng: -79.39831 };

    //creating inital map
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });


    //import location object as markers to map
    for(let i = 0; i < mapApp.data.length; i++) {
        // mapApp.createMarker();
        // let marker = new google.maps.Marker({
        //     position: {
        //         "lat": 43.678088,
        //         "lng": -79.409401
        //     },
        //     map: map,
        //     title: "Insert title here"
        // });
        //create marker
        let marker = new google.maps.Marker({
            position: mapApp.data[i].position,
            map: map,
            title: mapApp.data[i].name  
        });


        //create infowindow for marker
        // let infowindow = new google.maps.InfoWindow({
        //     content: mapApp.data[i].description
        // });

        let content = mapApp.data[i].description;

        //open infowindow on click
        // marker.addListener("click", function () {
        //     // infowindow.open(map, marker);
        //     console.log(marker.title);
        //     // $(".marker-info").html(`<h2>${marker.title}</h2><br><p>${content}</p>`);
        
        //     // $(".toggle-container").addClass("marker-info-fade");
        //     // $(".marker-info").addClass("marker-info-fade");
          
        // });
        google.maps.event.addListener(marker, 'click', function(){
            console.log("clicky click");
            $(".marker-info").html(`<div class="closeDesc">
                    <i class="fa fa-times" id="x-icon"></i>
                </div><h2>${marker.title}</h2><br><p>${content}</p>`);
            $(".toggle-container").show();
            $(".marker-info").fadeIn();
            
            
        });
    }  
    
}


//Select by neighbourhood
    //Adjust latitude and longitude of map/zoom

mapApp.placeCoordinates = [
    {
        name: "East York",
        coordinates: {
            lat: 43.709182,
            lng: -79.361160
        }
    },
    {
        name: "North York",
        coordinates: {
            lat: 43.754137,
            lng: -79.439941
        }
    },
    {
        name: "Scarborough",
        coordinates: {
            lat: 43.754287,
            lng: -79.221878
        }
    },
    {
        name: "Etobicoke",
        coordinates: {
            lat: 43.675779,
            lng: -79.543893
        }
    },
    {
        name: "The Junction",
        coordinates: {
            lat: 43.667638,
            lng: -79.473574
        }
    }
]


//retrieve the coordinates
mapApp.getCoordinates = function(place) {

    let loc = mapApp.placeCoordinates.find(function (element) {
        return element.name === place;
    });
    // console.log(loc.coordinates)
    return loc.coordinates;
}

//center the view on the selected neighbourhood
mapApp.createNewView = function(location) {
    //retrieve the coordinates of the neighbourhood
    let myLatLng = mapApp.getCoordinates(location);

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });


    //import location object as markers to map
    for (let i = 0; i < mapApp.data.length; i++) {
        // mapApp.createMarker();
        // let marker = new google.maps.Marker({
        //     position: {
        //         "lat": 43.678088,
        //         "lng": -79.409401
        //     },
        //     map: map,
        //     title: "Insert title here"
        // });
        //create marker
        let marker = new google.maps.Marker({
            position: mapApp.data[i].position,
            map: map,
            title: mapApp.data[i].name
        });


        //create infowindow for marker
        // let infowindow = new google.maps.InfoWindow({
        //     content: mapApp.data[i].description
        // });

        let content = mapApp.data[i].description;

        //open infowindow on click
        // marker.addListener("click", function () {
        //     // infowindow.open(map, marker);
        //     console.log(marker.title);
        //     // $(".marker-info").html(`<h2>${marker.title}</h2><br><p>${content}</p>`);

        //     // $(".toggle-container").addClass("marker-info-fade");
        //     // $(".marker-info").addClass("marker-info-fade");

        // });
        google.maps.event.addListener(marker, 'click', function () {
            console.log("clicky click");
            $(".marker-info").html(`<div class="closeDesc">
                    <i class="fa fa-times" id="x-icon"></i>
                </div><h2>${marker.title}</h2><br><p>${content}</p>`);
            $(".toggle-container").show();
            $(".marker-info").fadeIn();


        });
    }

}




mapApp.neighbourhood = $(".neighbourhood-list");

mapApp.createViewOnClick = function() {
    mapApp.neighbourhood.on("click", "li", function () {
    let location = $(this).text();
    $(".dropdown-button").text(location);
    mapApp.createNewView(location); 
    });
}

mapApp.events = function () {
    mapApp.createViewOnClick();
    mapApp.submitForm();
    mapApp.toggleDropdown(".dropdown-button", ".neighbourhood-list", 400);
    mapApp.fadeIn(".contribute", ".form-area", 400);
    mapApp.fadeOut("")

    // mapApp.closeForm();
    // mapApp.fadeOut = function() {
//     $(".closeForm").on("click", function (e) {
//         $(".form-area").fadeOut({
//             duration: 400
//         });
//         console.log("clicked x");
//     });
// }
    mapApp.fadeOut(".closeForm", ".form-area", 400);
    mapApp.fadeOut(".closePopup", ".popup", 400);
    mapApp.fadeOut(".closeDesc", ".toggle-container", 400);
    mapApp.fadeOut(".closeDesc", "marker-info", 400);
    $(".marker-info").on("click", ".closeDesc", function () {
        console.log("close the popup!");
        $(".marker-info").fadeOut();
        $(".toggle-container").fadeOut();
    });

    // mapApp.closePopup();
    mapApp.fadeIn(".marker-info");
}

mapApp.init = function() {
    // mapApp.hide(".popup");
    mapApp.events();
    
}

$(function() {
    mapApp.init();
});


//User submission form (different js file)
    //Accept user input and send as email to me
    //Remove text from form once submitted
mapApp.submitForm = function() {
    $("form").on("submit", function (e) {
        console.log("I was clicked!");
        e.preventDefault();
        $(".form-input").val("");
        mapApp.show(".popup");
        mapApp.hide(".form-area");
    });
}

mapApp.toggleDropdown = function (clickedButton, list, duration) {
    $(clickedButton).on("click", function(){
        $(list).slideToggle({
            duration: duration
        });
    });
}








//Map styling


mapApp.hide = function(hidden) {
    $(hidden).hide();
}

mapApp.show = function(shown) {
    $(shown).show();
}

//fade in
mapApp.fadeIn = function (button, fade, duration) {
    $(button).on("click", function(){
        $(fade).fadeIn(duration);
    });
}

//Close form

mapApp.fadeOut = function (button, fade, duration) {
    $(button).on("click", function () {
        $(fade).fadeOut(duration);
    });
}
// mapApp.fadeOut = function() {
//     $(".closeForm").on("click", function (e) {
//         $(".form-area").fadeOut({
//             duration: 400
//         });
//         console.log("clicked x");
//     });
// }

//Close popup
mapApp.closePopup = function() {
    $(".closePopup").on("click", function () {
        mapApp.hide(".popup");
    });
}






