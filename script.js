function addPoint(){
	let xChoice = document.getElementById("x-value").value
	let yChoice = document.getElementById("y-value").value 
	let svgns = "http://www.w3.org/2000/svg", container=document.getElementById('container');
	let circle = document.createElementNS(svgns, 'circle');
	circle.setAttributeNS(null, 'cx', xchoice*20);
	circle.setAttributeNS(null, 'cy', (200-(ychoice*20)));
	circle.setAttributeNS(null, 'r', 5);
	circle.setAttributeNS(null, 'style', 'fill: blue; stroke: black; stroke-width: 1px;');
	container.appendChild(circle);
}
function pointClick(){
	let point = document.getElementById("")
}
function pointHighlight(){
	let circle = document.getE
	circle.classList.add("orange");
}
function pointUnhighlight(){
	circle.classList.remove("orange");
}

document.getElementById("button1").addEventListener("onclick", addPoint);
document.getElementByClassName("point").addEventListener("onclick", pointClick);
document.getElementByClassName("point").addEventListener("mouseover", pointHighlight);
document.getElementByClassName("point").addEventListener("mouseout", pointUnhighlight);