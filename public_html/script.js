$("document").ready(function() {
    $("#intro").bind("mouseover", mouseOverMe)
            .bind("mouseout", mouseOutMe);
});

function mouseOverMe(){
    $("#intro").html("I'm a senior in Computer Science");
}

function mouseOutMe(){
    $("#intro").html("Click the button to find out more!");
}
