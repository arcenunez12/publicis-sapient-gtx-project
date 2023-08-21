// Task 0
// Sign up for a Mapbox account and add your access token below. Remove YOUR-ACCESS-TOKEN-HERE, and put your token between the quotes
mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVhYXJjZSIsImEiOiJjbGttczdyNHQxaXNtM2twNHdlbzZ0aGZuIn0.phit1V-QxVRJnj1RqzOa0Q";

// Task 1
function filterPlacesByType(typePreference) {
  // Step 1: Create a new filteredPlaces array and store it in a variable.
  let filteredPlaces = [];
  // Step 2: Loop through PLACES array.
  for (let i = 0; i < PLACES.length; i++) {
    // Get the place object from PLACES array at index i.
    let placeObject = PLACES[i];
    // Get the type from the placeObject.
    let type = placeObject.type;
    // Step 3: If a place object's type property matches the typePreference parameter, 
    // add it to filteredPlaces.
    if (type === typePreference) {
      // Add (as in .push()) the placeObject to the filteredPlaces array.
      filteredPlaces.push(placeObject);
    }
  }
  // Step 4: After the loop, return filteredPlaces array.
  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable.
  let divElement = document.createElement("div");
  // Step 2: Add the col class to the new div element.
  divElement.classList.add("col");
  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed.
  // onclick="centerPlaceOnMap('Atlanta')" with the onclick="centerPlaceOnMap('${place.name}')"
  // onclick="centerPlaceOnMap(" atlanta")"="" with the onclick="centerPlaceOnMap("${place.name}")"
  divElement.innerHTML = `
  <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
    <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
    <div class="card-body">
      <h5 class="card-title">${place.name}</h5>
      <p class="card-text">${place.location}</p>
    </div>
  </div>`
  // Step 4: Return the element.
  //console.log(divElement.innerHTML);
  return divElement;
}

//createCard(PLACES[0]);

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id "recommendations" in a variable.
  let theRecommendations = document.getElementById("recommendations");
  // Step 2: Clear the "recommendations" innerHTML.
  theRecommendations.innerHTML = "";
  // Step 3: Loop through the filteredPlaces array.
  for (let i = 0; i < filteredPlaces.length; i++) {
    // Get the place object from the filteredPlaces array at index i.
    let thePlace = filteredPlaces[i];
    // Step 4: Create a card for each place using the createCard function.
    let cardForPlace = createCard(thePlace);
    // Step 5: Add/append each card to the recommendations DOM element.
    theRecommendations.appendChild(cardForPlace);
  }
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array.
  for (let i = 0; i < PLACES.length; i++) {
    // Get the place object from PLACES at index i.
    let placeObject = PLACES[i];
    // Get the name from the name property of the placeObject.
    let name = placeObject.name;
    console.log(placeName);
    console.log(name);
    // Step 2: If a place object's name property matches the placeName parameter, 
    // return that place object.
    if(name === placeName) {
      // Return the placeObject.
      return placeObject;
    }
  }
}

