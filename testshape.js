function tellme() {//draw the mickey according the assigned parameter
    var canvaspos = document.getElementById("myCanvas");  //get the Canvas Id
    var ctx = canvaspos.getContext("2d");  //get the context as 2d
    var xpos = parseInt(document.getElementById("x").value);  //get the X
    var ypos = parseInt(document.getElementById("y").value);  //get the Y
    var rpos = parseInt(document.getElementById("r").value);  //get the Radius
    var cpos = document.getElementById("c").value;  //get the color
    if(xpos<1 || xpos>1000) {//if X invalid, alert 
        alert("Please input a valid X Coordinate");
    }
    if(ypos<1 || ypos>500) {//if Y invalid, alert
        alert("Please input a valid Y Coordinate");
    }
    if(rpos<1 || rpos>100) {//if Radius invalid, alert
        alert("Please input a valid Size");
    }
    if(xpos>0 && xpos<1001 && ypos>0 && ypos<501 && rpos>0 && rpos<101) {//else, draw it
        zhongshape(ctx,xpos,ypos,rpos,cpos);
    }
}

function giveme() {//draw the mickey randomly 
    var canvaspos = document.getElementById("myCanvas");  //get the Canvas Id
    var ctx = canvaspos.getContext("2d");  //get the context as 2d
    for(var i=0;i<10;i++) {  //use for loop draw 10 mickeys
        var xpos = Math.floor(Math.random()*1300);  //random X
        var ypos = Math.floor(Math.random()*750);  //random Y
        var rpos = Math.floor(Math.random()*(30-5)+5);  //random Radius
        var cpos = "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);  //Random color
        zhongshape(ctx,xpos,ypos,rpos,cpos);
    }
}