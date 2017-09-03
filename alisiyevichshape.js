
function alisiyevichshape(context, x, y, color) {
	  // Umbrella
  	  context.beginPath();
	  context.arc(x, y, 50, 1 * Math.PI, 0);
	  context.moveTo(x-52, y+2);
	  context.lineTo(x+52, y+2);
	  context.moveTo(x, y+2);
	  context.lineTo(x, y+55);
  	  context.fillStyle = color;
     	  context.fill();
     	  context.strokeStyle = '#FFFFFF';
	  context.lineWidth=4;
      	  context.stroke();
	  
	  // Straw
	  context.beginPath();
	  context.moveTo(x-45, y+45);
	  context.lineTo(x-57, y+15);
	  context.lineWidth=2;
	  context.strokeStyle = '#370606';
	  context.stroke();
	
	  // Arch for umbrella
	  context.beginPath();
	  context.moveTo(x+1,y+53);
	  context.bezierCurveTo(x+1,y+53,x-10,y+75,x-20,y+55);
	  context.strokeStyle = '#FFFFFF';
	  context.lineWidth=4;
	  context.stroke();
	  
	  // Cocktail glass
	  context.beginPath();
	  context.rect(x-55, y+35, 20, 40);
	  context.strokeStyle = '#87bddc';
	  context.lineWidth=2;
	  context.stroke();
	  
	  // Cocktail
	  context.beginPath();
	  var gradient = context.createLinearGradient(0, y+55, 0, y+75);
	  gradient.addColorStop(0, '#f8d825');
	  gradient.addColorStop(1, '#df1313');
	  context.fillStyle = gradient;
	  context.fillRect( x-54,y+45,18,29);
};