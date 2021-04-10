function russianMAP(){
    let exibitionCenter ={
        /*Note. This may not lead to the Russian Exibition Center in Moskaw */ 
        latitude:55.8310,
        longitude: 37.6298,
    };

    let russianCenter = document.getElementById("map");
    let map = new google.maps.Map(mapSpot,{
        zoom: 5,
        center: exibitionCenter,
    });

    let russianMarker = new.google.maps.Marker({
        position: exibitionCenter, map:map
    });
}
var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: `${path}/m`});