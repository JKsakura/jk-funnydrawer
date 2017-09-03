function qingzhaoshape(context, x, y, z) {
    context.beginPath();
    context.arc(x, y, 60, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#009999";
    context.fill();
    
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();
    
    context.beginPath();
    context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "green";
    context.fill();
    
    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
    
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "orange";
    context.fill();
    
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#FF6600";
    context.fill();

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, z);
    context.stroke();
}