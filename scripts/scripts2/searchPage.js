
const mountainList = document.querySelector("#Territories-location-list");
const TerritoriesTableBody = document.querySelector("#Territories-tbl-body");
const ParksTableBody = document.querySelector("#parks-tbl-body");
const parkLocationList = document.querySelector("#parks-location-list");

function loadLocationList() {
  let option = new Option("Select Location...");
  mountainList.appendChild(option);

  
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location; 
    mountainList.appendChild(option);
  }
}

function loadParksLocationList() {
  let option = new Option("Select Location...");
  parkLocationList.appendChild(option);

  
  for (const location of parkTypesArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    parkLocationList.appendChild(option);
  }
}




loadLocationList();

loadParksLocationList();


function buildTerritoriesRow(tbody, Territories) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = Territories.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = Territories.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = Territories.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = Territories.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = Territories.ZipCode;

  let cell6 = row.insertCell(5);

 
  if (Territories.Phone) {
      cell6.innerText = Territories.Phone;
  }


  let cell7 = row.insertCell(6);

  if (Territories.Visit) {
  cell7.innerText = Territories.Visit;
  }else{
    cell7.innerText = "N/A";
  }
}

function loadTerritoriesTable(location) {
  TerritoriesTableBody.innerHTML = "";
  const filteredParks = nationalParksArray.filter(
    (park) => park.State == location
  );
  for (const park of filteredParks) {
    buildTerritoriesRow(TerritoriesTableBody, park);
  }
}

function loadParksTable(location) {
  ParksTableBody.innerHTML = "";
  const filteredParks = nationalParksArray.filter(
    (park) => park.LocationName.includes(location) 
  );
  for (const park of filteredParks) {
    buildTerritoriesRow(ParksTableBody, park);
  }
}

function handleLocationChanged() {
  const location = mountainList.value;
  loadTerritoriesTable(location);
}


function handleParksLocationChanged() {
  const location = parkLocationList.value;
  loadParksTable(location);
}


function displayTable(parksDropDown) {
 
 let displayTerritories = document.getElementById("TerritoriesArticle");
 let displayParks = document.getElementById("ParksArticle");

if (parksDropDown == 1) {
 displayTerritories.style.display = "block";
 displayParks.style.display = "none";

} 
if (parksDropDown == 2){
  displayParks.style.display = "block";
  displayTerritories.style.display = "none";

}
}