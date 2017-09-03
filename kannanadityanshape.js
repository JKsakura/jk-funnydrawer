//Concentric Regular Polygons
function kannanadityanshape(context, position, sides, radii, colors) {
/*
context: context of HTML5 canvas element
position: x and y coordinates of center, [x, y]
sides: number of sides 
radii: radii of excircles of polygons, [r0, r1, ...]
colors: fill styles (colors/gradients) corresponding to radii, [c0, c1, ...]
*/ 
    
    //Check the arguments
    if (sides < 3) alert("Warning: Number of sides must be greater than 2.");
    if (position.length < 2) alert("Warning: Position of shape not specified correctly.");
    if (radii.length != colors.length) alert("Warning: The shape may not display as expected because the arrays 'radii' and 'colors' are not of the same length.");
    
    //Sort radii (and corresponding colors) in descending order 
    var tempR, tempC;
    for(var s = 0; s < radii.length-1; s++) {
        for(var t = s+1; t < radii.length; t++) {
            if (radii[t] > radii[s]) {
                tempR = radii[s];
                radii[s] = radii[t];
                radii[t] = tempR;
                
                tempC = colors[s];
                colors[s] = colors[t];
                colors[t] = tempC;
            }
        }
    }

    //Declare variables
    var angle = 2*Math.PI/sides;
    var r;
    var x = position[0];
    var y = position[1];
    
    //Loop to draw and fill the polygons
    for(var j = 0; j < radii.length; j++) {
        r = radii[j];
        context.beginPath();
        context.moveTo(x+r, y);
        for(var i = 1; i <= sides;i++) {
            context.lineTo(x+r*Math.cos(i*angle), y+r*Math.sin(i*angle));
        }
        context.fillStyle = colors[j];
        context.fill();
    }
}