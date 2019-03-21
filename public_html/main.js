
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','http://localhost:8383/SARA/data.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data){
    var htmlString = "<section id='cta' class='wow fadeIn'>\n\
                        <div class='container'>\n\
                        <div class='row'>";
    
    for(i = 0; i < data.length; i++){
        htmlString += "<div class='col-sm-9'><h2><a href='"+ data[i].webpageURL +"'>" + data[i].title +"</a></h2>";
        htmlString += "<p><a href='"+ data[i].webpageURL +"'>" + data[i].webpageURL +"</a></p>";
        htmlString += "<p>" + data[i].description +"</p></div>"; 
    }
    htmlString +="</div></div></section>"
     animalContainer.insertAdjacentHTML('afterend', htmlString);
}
    
