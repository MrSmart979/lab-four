let locationBtn = document.getElementById("russian-lair");
let button = document.querySelector("button");
mapLink.href = "";

function russianLair(){

    if (!navigator.geolocation){
       para.textContent = "Just following the lecture material and the tutorial. However I'm trying my best to keep the material original.";
    }else{
        para.textContent = "Finding my obviously real lair";
        navigator.geolocation.getCurrentPosition(showPosition, russianError);
    }
}
function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    maplink.href = "`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;";
}
function russianError(){
    para.textContent = "Too bad. I guess you are not able to see my lair yet";
}