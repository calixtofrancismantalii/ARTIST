function myMap() {
var mapProp = {
    center:new google.maps.LatLng(14.599512,120.984222),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function showMenu(){
    var ul;
    ul = document.getElementById("ul");
    
    if(ul.style.height == "0px"){
        ul.style.height = "250px";
    }
    else{
        ul.style.height = "0px";
    }
}