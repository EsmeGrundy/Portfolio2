$("document").ready(function() {
    $("#intro").bind("mouseover", mouseOverMe)//binds a hover function to the header in the jumbotron
            .bind("mouseout", mouseOutMe);
    $("body").scrollspy({target: ".navbar"});
});

function mouseOverMe() {
    $("#intro").html("I'm a senior in Computer Science");//when the user hovers over the intro, the text changes
}

function mouseOutMe() {
    $("#intro").html("Click the button to find out more!");//when the user moves away from the intro, the text changes
}
