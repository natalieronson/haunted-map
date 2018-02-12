//Set up map

const mapApp = {};

mapApp.data = [
    {
        "name": "Royal Ontario Museum",
        "position": {
            "lat": 43.667676,
            "lng": -79.394678
        },
        "description": "Two ghosts are reported to inhabit the ROM. The original director, Charles Trick Currelly has been seen wandering the building in a nightshirt. The ghost of a young girl has also often been witnessed watching the shows in the since closed Planetarium."
    },
    {
        "name": "354 Jarvis Street",
        "position": {
            "lat": 43.663504,
            "lng": -79.377367
        },
        "description": "This house used to be part of a girls school. Tenants who lived there reported seeing a young girl in a pinafore dress. They would frequently hear the sounds of someone crying at night, unexplained footsteps and doors that seemed to open and close themselves."
    },
    {
        "name": "Glendon College",
        "position": {
            "lat": 43.727733,
            "lng": -79.378034
        },
        "description": "Witnesses report walking through the gardens near Glendon Manor and seeing a sad looking woman dressed in white. She appeared to be levitating several inches above the ground. "
    },
    {
        "name": "Todmorden Mills",
        "position": {
            "lat": 43.684970,
            "lng": -79.360050
        },
        "description": "There are reports of several ghosts at Todmorden Mills. Stories circulate about an older woman who likes to walk the premises at night. Another prescence has been heard making loud noises and moving furniture and objects."
    },
    {
        "name": "Gooderham & Worts Limited",
        "position": {
            "lat": 43.651458,
            "lng": -79.357480
        },
        "description": "In 1834, shortly after his wife had passed away during childhood, a man named James Wort drowned in a well on the property. Employees working on the property have since experienced doors opening and closing on their own, strange sounds and flickering lights. One worker recounts seeing a man appear to enter through a closed door and then disappear shortly after."
    },
    {
        "name": "Osgoode Hall",
        "position": {
            "lat": 43.652291,
            "lng": -79.385756
        },
        "description": "There are various accounts about Osgood Hall. Witnesses report hearing chattering in the chambers that stops as soon as the doors are opened. Others report feeling a strong presence while in the building, despite being alone."
    },
    {
        "name": "St. Michael's Hospital",
        "position": {
            "lat": 43.653241,
            "lng": -79.377669
        },
        "description": "St. Michael's Hospital is rumoured to be haunted by a woman named Sister Vincenza, or Vinnie as she is nicknamed. Vinnie was part of the group of nuns that ran the hospital. She can often be seen in her nuns attire still caring for the patients all these years later."
    },
    {
        "name": "Mackenzie House",
        "position": {
            "lat": 43.655910,
            "lng": -79.378449
        },
        "description": "Reported to be one of the most haunted houses in Toronto, this was home to Toronto's first Mayor, William Lyon Mackenzie. Although he and his family only lived in the house for two years, there have been frequent reports of them being seen there many years after their passing."
    },
    {
        "name": "Gibraltar Point Lighthouse",
        "position": {
            "lat": 43.613962,
            "lng": -79.385342
        },
        "description": "Mr. John Paul Rademulle was the first lighthouse keeper at Gibraltar Point. One night he was murdered by two drunken soldiers after refusing to sell them beer. There was never a conviction for his murder and there have been reports of seeing him there lighting the beacon or wandering the lighthouse"
    },
    {
        "name": "Fort York",
        "position": {
            "lat": 43.637713,
            "lng": -79.406216
        },
        "description": "Fort York was built to defend against the United States during the early 1800s. It was the site of several battles stretching from 1812 to 1814. Many report feeling the remnants of those battles when they visit."
    },
    {
        "name": "Old City Hall",
        "position": {
            "lat": 43.652723,
            "lng": -79.382048
        },
        "description": "Now the site of the municipal courts, this building was previously used to hold prisoners and many report still hearing their cries. It is also the location of the last hanging in Canada and these men are reported to haunt Courtroom 33 to this day."
    },
    {
        "name": "Christie Mansion",
        "position": {
            "lat": 43.664220,
            "lng": -79.390049
        },
        "description": "This mansion belonged to Mr. Christie of cookie fame. As the story goes, Robert Christie had a mistress that he wanted to live in the mansion with him. He kept her hidden in a fully furnished secret room called Room 29 where never left. She eventually committed suicide and is said to still be haunting the premises of that room."
    },
    {
        "name": "Macdonald-Mowat House",
        "position": {
            "lat": 43.662077,
            "lng": -79.396969
        },
        "description": "The former home of Sir John A. Macdonald, several people report seeing a man in a frock coat appear on the second floor."
    },
    {
        "name": "Trinity College",
        "position": {
            "lat": 43.665350,
            "lng": -79.395531
        },
        "description": "Built by Bishop John Strachan, apparitions of him have been reported walking the halls. One witness recalled hearing the organ being played late at night and seeing strange movements. Others report a grey woman sitting in the pews of the chapel or waiting outside of it."
    },
    {
        "name": "University College",
        "position": {
            "lat": 43.663316,
            "lng": -79.396713
        },
        "description": "The site of an infamous fight, the area is reported to be haunted by one of the duelers, Ivan Reznikoff. After finding out his girlfriend was also seeing another man, Reznikoff confronted the man and a fight began. He chased Paul Diablos through the building with an axe. They ended up at the top of the tower where Reznikoff swung at Diablos, missed and plumetted to his death. Diablos buried Reznikoff in the foundations of the building and fled the city."
    },
    {
        "name": "Old Bank of Montreal",
        "position": {
            "lat": 43.647497,
            "lng": -79.377690
        },
        "description": "Now the Hockey Hall of Fame, this building was previously home to the Bank of Montreal. Early in the 1900's a young woman was working as a teller at the bank when she was shot and killed in a robbery. Witnesses have reported seeing a woman in old fashioned clothes standing near the offices and vaults as well as other mysterious activity including flickering lights and doors that appear to lock themselves."
    },
    {
        "name": "Old Mill Subway Station",
        "position": {
            "lat": 43.650326,
            "lng": -79.495121
        },
        "description": "A witness reported working in the Old Mill subway station early in the morning. While waiting for his coworker to return he heard a woman's voice softly whisper in his ear but when he turned around nobody was there. Other workers report seeing a woman and child walking the tracks."
    },
    {
        "name": "Swansea Fire Hall",
        "position": {
            "lat": 43.649091,
            "lng": -79.478255
        },
        "description": "This fire hall once served as both a fire station and a town jail. It has many reports of being haunted by both a deceased firefighter and a young girl."
    },
    {
        "name": "Humber River Bridge",
        "position": {
            "lat": 43.631869,
            "lng": -79.471002
        },
        "description": "Several reports persist of the area under the bridge by the Humber River. Stories talk about odd balls of light in the trees. One witness recounts mysterious balls of light following them throughout the forest. Another remembered seeing a mysterious figure walk through a fence and disappear."
    },
    {
        "name": "Old Mill",
        "position": {
            "lat": 43.651603,
            "lng": -79.49346
        },
        "description": "A woman dressed in white with long flowing black hair has been often reported to haunt the Old Mill Inn. One set of witnesses report seeing both a man and a woman together on the bridge by the Inn, both dressed in white. Both figures were only visible briefly and then quickly disappeared with the flicker of a lamp."
    },
    {
        "name": "Gibson House",
        "position": {
            "lat": 43.769851,
            "lng": -79.414916
        },
        "description": "The Gibson house was home to David Gibson. Originally exiled for participating in the Rebellion of 1837, he was eventually pardoned and returned to what was then York County. His house was built in 1851 and is now a museum but many still report seeing a man at the window. A worker at the museum reported a feeling of being watched in the cellar and an unwelcome presence both there and upstairs."
    },
    {
        "name": "David Duncan House",
        "position": {
            "lat": 43.758550,
            "lng": -79.348917
        },
        "description": "A haunted presence has been reported in the men's washroom at the David Duncan House. One man reported feeling an eerie sensation come over him while in the washroom and then someone pulling on his earlobe. Another reported being locked in the men's washroom and hearing an infant crying. After several minutes the crying stopped and the lock then turned easily."
    },
    {
        "name": "Overland Learning Center",
        "position": {
            "lat": 43.731975,
            "lng": -79.348481
        },
        "description": "Although now only hosting classes for adults, the center was once home to an elementary school. Reports of a young child haunting the building persist. Chalk marks have been found in the hallway and staff members have returned after the weekend to inexplicable messes."
    },
    {
        "name": "The Sister's Restaurant",
        "position": {
            "lat": 43.774184,
            "lng": -79.183622
        },
        "description": "Now closed, staff at the restaurant reported seeing the apparition of an adult woman. Workers at the Salvation army next door also reported strange events. Bouncing objects would appear and staff sometimes caught a glimpse of a dark mysterious figure."
    },
    {
        "name": "The Guild Inn",
        "position": {
            "lat": 43.747902,
            "lng": -79.192106
        },
        "description": "The Guild Inn was constructed in 1914 as a summer home for a wealthy family. The purpose of the tunnels below the house is not certain. Some say they were built for soldiers during the war and originally ran all the way to the Scarborough Blufs. Workers at the Inn have reported paranormal activity while using the tunnels. Strange occurences have also been reported throughout the Inn."
    },
    {
        "name": "R. H. King Academy",
        "position": {
            "lat": 43.722112,
            "lng": -79.238083
        },
        "description": "Reports at the school include odd sensations such as smelling a woman's perfume despite being alone or having the sensation of being touched but no one being around. One incident involves security being called to the building after motion sensors were activated and although no one was found, they heard door knobs rattling and voices in the halls."
    },
    {
        "name": "High Park",
        "position": {
            "lat": 43.646777,
            "lng": -79.463680
        },
        "description": "Witnesses have reported seeing an older man dressed all in black on the road out of the park. All recalled seeing him standing in the exact same location, often late in the evening."
    },

];





function initMap(content) {
    //set initial longitude and latitude of map
    let myLatLng = { lat: 43.648453, lng: -79.39831 };

    //creating inital map
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#02111c' }] },
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
                stylers: [{ color: '#2e302f' }]
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
                elementType: 'labels',
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [{ color: "#2f3948" }]
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
                stylers: [{ color: '#242d3a' }]
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

        let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ebedce");

        let marker = new google.maps.Marker({
            position: mapApp.data[i].position,
            map: map,
            icon: pinImage,
            title: mapApp.data[i].name  
        });

       

        let content = mapApp.data[i].description;

       
        google.maps.event.addListener(marker, 'click', function(){
            console.log("clicky click");
            $(".marker-info").html(`<div class="closeDesc">
                    <i class="fa fa-times" id="x-icon"></i>
                </div><h2>${marker.title}</h2><hr><br><p>${content}</p>`);
            $(".toggle-container").show();
            $(".marker-info").fadeIn();
            
            
        });
    }  
    
}


//Select by neighbourhood


mapApp.placeCoordinates = [
    {
        name: "Toronto City Center",
        coordinates: {
            lat: 43.647459,
            lng: -79.377658
        }
    },
    {
        name: "North York",
        coordinates: {
            lat: 43.757614,
            lng: -79.362009
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
            lat: 43.650065,
            lng: -79.495008
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
        zoom: 13,
        center: myLatLng,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#02111c' }] },
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
                stylers: [{ color: '#2e302f' }]
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
                elementType: 'labels',
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [{ color: "#2f3948" }]
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
                stylers: [{ color: '#242d3a' }]
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
        

        let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ebedce");

        let marker = new google.maps.Marker({
            position: mapApp.data[i].position,
            map: map,
            icon: pinImage,
            title: mapApp.data[i].name
        });



        let content = mapApp.data[i].description;

        
        google.maps.event.addListener(marker, 'click', function () {
            console.log("clicky click");
            $(".marker-info").html(`<div class="closeDesc">
                    <i class="fa fa-times" id="x-icon"></i>
                </div><h2>${marker.title}</h2><hr><br><p>${content}</p>`);
            $(".toggle-container").show();
            $(".marker-info").fadeIn();


        });
    }


}




mapApp.neighbourhood = $(".neighbourhood-list");

mapApp.createViewOnClick = function() {
    mapApp.neighbourhood.on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
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
    mapApp.flicker();
    mapApp.smoothScroll();
    mapApp.toggleSidebar();
    mapApp.fadeOut(".closeForm", ".form-area", 400);
    mapApp.fadeOut(".closePopup", ".popup", 400);
    mapApp.fadeOut(".closeDesc", ".toggle-container", 400);
    mapApp.fadeOut(".closeDesc", "marker-info", 400);
    $(".marker-info").on("click", ".closeDesc", function () {
        console.log("close the popup!");
        $(".marker-info").fadeOut();
        $(".toggle-container").fadeOut();
    });

    
    mapApp.fadeIn(".marker-info");
}

mapApp.init = function() {
    
    mapApp.events();
    
}

$(function() {
    mapApp.init();
});



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

mapApp.flicker = function() {
    let i = 1;
    const setFlicker = setInterval(function () {
    let rand = Math.floor(Math.random() * 15);
    let letter = `.letter${rand}`;
    console.log(letter);
    $(letter).addClass("text-flicker-in-glow");
    if (i < 14) {
        i++;
    }
    else {
        clearInterval(setFlicker);
    }
    }, 1000)  
}

mapApp.smoothScroll = function() {
    const scroll = setTimeout(function(){
       $('html, body').animate({
          scrollTop: $("#map").offset().top
       },1000);
    },5000);
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


//Close popup
mapApp.closePopup = function() {
    $(".closePopup").on("click", function () {
        mapApp.hide(".popup");
    });
}

mapApp.toggleSidebar = function() {
    $(".expand-sidebar, .close-sidebar").on("click", function() {
        console.log("clicked the expand sidebar");
        $("aside").toggleClass("slide");
        $(".expand-sidebar").toggleClass("hideArrow");
        $(".close-sidebar").toggleClass("showArrow");
    });
}












