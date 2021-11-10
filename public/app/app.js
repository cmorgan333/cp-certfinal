function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

MODEL.updateView(pageID)
}

function initURLListener(){
    $(window).on("hashChange", changeRoute);
    changeRoute();
}



$(document).ready(function() {
    initURLListener();
});