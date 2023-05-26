async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
  }
  
const mountainsTableBody = document.querySelector("#mountains-tbl-body");
const mountainList = document.querySelector("#mountain-list");


function loadLocationList() {
  let option = new Option("Select Location...", ""); 
  mountainList.appendChild(option); 

  
  for (const mountain of mountainsArray) {
    let option = document.createElement("option"); 
    option.value = mountain.name; 
    option.innerText = mountain.name; 
    mountainList.appendChild(option); 
  }
}


loadLocationList();


function buildMountainsRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  let img = document.createElement("img");
  img.src = `./Images/${mountain.img}`;
  img.width = 335;
  img.height = 220;
  cell1.appendChild(img);

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.name;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountain.desc;

  let cell4 = row.insertCell(3);
  cell4.innerText = mountain.elevation;

  let cell5 = row.insertCell(4);
  cell5.innerText = mountain.effort;

  let cell6 = row.insertCell(5);


  cell6.innerText = getSunsetForMountain(mountain.coords);

  let cell7 = row.insertCell(6);

  if (mountain.Visit) {
    cell7.innerText = mountain.Visit;
  }
} 

function loadMountainsTable(mountainName) {
  mountainsTableBody.innerHTML = "";
  const filteredMountains = mountainsArray.filter(
    (mountain) => mountain.name == mountainName
  );
  for (const mountain of filteredMountains) {
    buildMountainsRow(mountainsTableBody, mountain);
  }
}


function handleMountainChanged() {
  const mountainName = mountainList.value;
  loadMountainsTable(mountainName);
} 


