
function mode(hbtn) {  //function to decide the modes
    var hbtn1 = document.getElementById("hbtn1");
    var hbtn2 = document.getElementById("hbtn2");
    var mode1 = document.getElementById("mode1");
    var mode2 = document.getElementById("mode2");
    
    /*  switch the mode to draw   */
    switch(hbtn) {
            case hbtn1:  //  highlight the customized button and show the mode1 input box
                if(hbtn1.style.backgroundColor != "#3b8eff") {
                    hbtn1.style.backgroundColor = "#3b8eff";
                }
                hbtn2.style.backgroundColor = "#333";
                mode1.style.display = "block";
                mode2.style.display = "none";
            break;
            case hbtn2:  //  highlight the random button and show the mode2 input box
                if(hbtn2.style.backgroundColor != "#3b8eff") {
                    hbtn2.style.backgroundColor = "#3b8eff";
                }
                hbtn1.style.backgroundColor = "#333";
                mode2.style.display = "block";
                mode1.style.display = "none";
            break;
    }
}

function img(ibtn) {  //  switch the three images
    var ibox1 = document.getElementById("ibox1");
    var ibox2 = document.getElementById("ibox2");
    var ibox3 = document.getElementById("ibox3");//draw the mickey according the assigned parameter
    
    /*  switch the picture to draw  */
    switch(ibtn) {
            /* draw the 1st Image */
            case ibtn1:
            ibtn = ibtn1;  //  in the image1, show the image1 input box
                if(ibtn1.style.borderColor != "#3b8eff") {
                    ibtn1.style.borderColor = "#3b8eff";
                }
                ibtn2.style.borderColor = "#333";
                ibtn3.style.borderColor = "#333";
                ibox1.style.display = "block";
                ibox2.style.display = "none";
                ibox3.style.display = "none";
                ibox4.style.display = "block";
                sbtn1.style.display = "block";
                sbtn2.style.display = "none";
                sbtn3.style.display = "none";
            break;
            
            /*  draw the 2nd Image  */
            case ibtn2:  //  in the image2, show the image2 input box
            ibtn = ibtn2;
                if(ibtn2.style.borderColor != "#3b8eff") {
                    ibtn2.style.borderColor = "#3b8eff";
                }
                ibtn1.style.borderColor = "#333";
                ibtn3.style.borderColor = "#333";
                ibox1.style.display = "block";
                ibox2.style.display = "block";
                ibox3.style.display = "none";
                ibox4.style.display = "none";
                sbtn2.style.display = "block";
                sbtn1.style.display = "none";
                sbtn3.style.display = "none";
            break;
            
            /*  draw the 3td Image  */
            case ibtn3:  //  in the image3, show the image3 input box
            ibtn = ibtn3;
                if(ibtn3.style.borderColor != "#3b8eff") {
                    ibtn3.style.borderColor = "#3b8eff";
                }
                ibtn1.style.borderColor = "#333";
                ibtn2.style.borderColor = "#333";
                ibox1.style.display = "block";
                ibox2.style.display = "none";
                ibox3.style.display = "block";
                ibox4.style.display = "none";
                sbtn3.style.display = "block";
                sbtn1.style.display = "none";
                sbtn2.style.display = "none";
            break;
    }
    
}

function drawit(ibtn) {  //  draw the image according to the mode and image
    var canvaspos = document.getElementById("myCanvas");  //get the Canvas Id
    var ctx = canvaspos.getContext("2d");  //get the context as 2d
    var xpos = parseInt(document.getElementById("x").value);  //get the X
    var ypos = parseInt(document.getElementById("y").value);  //get the Y
    var rpos = parseInt(document.getElementById("r").value);  //get the Length
    var spos = parseInt(document.getElementById("s").value);  //get the Sides
    var cpos = document.getElementById("c").value;  //get the color
    var position = [xpos,ypos];
    radii = [100, 90, 80, 70, 60, 50, 40];
    colors = ["#611D55", "#006AA4", "#76BD18", "#F7D513", "#F78613", "#CC2129", "#000000"];
    switch(ibtn) {
            case ibtn1:
                if(xpos<1 || xpos>400) {//if X invalid, alert 
                    alert("Please input a valid X Coordinate");
                }
                if(ypos<1 || ypos>600) {//if Y invalid, alert
                    alert("Please input a valid Y Coordinate");
                }
                if(xpos>0 && xpos<401 && ypos>0 && ypos<601) {//else, call function and draw it
                    alisiyevichshape(ctx, xpos, ypos, cpos);
                }
            break;
            
            case ibtn2:
                if(xpos<1 || xpos>400) {//if X invalid, alert 
                    alert("Please input a valid X Coordinate");
                }
                if(ypos<1 || ypos>600) {//if Y invalid, alert
                    alert("Please input a valid Y Coordinate");
                }
                if(rpos<1 || rpos>600) {//if Y invalid, alert
                    alert("Please input a valid Length");
                }
                if(xpos>0 && xpos<401 && ypos>0 && ypos<601 && rpos>0 && rpos<601) {//else, call function and draw it
                    qingzhaoshape(ctx, xpos, ypos, rpos);
                }
            break;
            
            case ibtn3:
                if(xpos<1 || xpos>400) {//if X invalid, alert 
                    alert("Please input a valid X Coordinate");
                }
                if(ypos<1 || ypos>600) {//if Y invalid, alert
                    alert("Please input a valid Y Coordinate");
                }
                if(spos<3) {//if Sides less than 3, alert
                    alert("Please input a valid Number");
                }
                if(xpos>0 && xpos<401 && ypos>0 && ypos<601 && spos>2) {//else, call function and draw it
                    kannanadityanshape(ctx, position, spos, radii, colors);
                }
            break;
    }
}

function randomDraw() {
    var canvaspos = document.getElementById("myCanvas");  //get the Canvas Id
    var ctx = canvaspos.getContext("2d");  //get the context as 2d
    for(var i=0;i<10;i++) {  //use for loop draw 10 mickeys
        var xpos = Math.floor(Math.random()*400);  //random X
        var ypos = Math.floor(Math.random()*700);  //random Y
        var rpos = Math.floor(Math.random()*600);  //random Radius
        var cpos = "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);  //Random color
        var spos = Math.floor(Math.random()*(8-3)+3);  //random Sides
        var ipos = Math.floor(Math.random()*4);  //random Images
        var position = [xpos,ypos];
        radii = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
        var colors = new Array();
        for(var i=0; i<10; i++) {
            colors[i] = "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);  //Random color;
        }
        
        switch(ipos) {  //select one image, call function and draw it
                case 1:
                    alisiyevichshape(ctx, xpos, ypos, cpos);
                break;
                case 2:
                    qingzhaoshape(ctx, xpos, ypos, rpos);
                break;
                case 3:
                    kannanadityanshape(ctx, position, spos, radii, colors);
                break
        }
    }
}

/*  the function to change the background color  */
function bcgcolor(cbtn) {
    var cbtnpos = cbtn.name;
    document.getElementById("myCanvas").style.background = cbtnpos;
}