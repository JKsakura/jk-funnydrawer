function zhongshape(context,x,y,r,c) {  //a: Canvas Context, b: X, c:Y, d:Radius, e:Body Color
    //draw the left ear
    context.beginPath();
    context.arc(x,y,r,0,2*Math.PI);
    context.fillStyle="#000";
    context.fill();
    context.closePath();
    //draw the right ear
    context.beginPath();
    context.arc(x+r*3.5,y,r,0,2*Math.PI);
    context.fillStyle="#000";
    context.fill();
    context.closePath();
    //draw the body
    context.beginPath();
    context.arc(x+r*1.75,y+r*2,r*2,0,2*Math.PI);
    context.fillStyle="#000";
    context.fill();
    context.closePath();
    //draw the body color
    context.beginPath();
    context.arc(x+r*1.75,y+r*2,r*2,0,Math.PI);
    context.fillStyle=c;
    context.fill();
    context.closePath();
    //draw the button
    context.beginPath();
    context.arc(x+r*1.25,y+r*2.6,r*0.2,0,2*Math.PI);
    context.fillStyle="#fff";
    context.fill();
    context.closePath();
    //draw the button
    context.beginPath();
    context.arc(x+r*2.25,y+r*2.6,r*0.2,0,2*Math.PI);
    context.fillStyle="#fff";
    context.fill();
    context.closePath();
}
