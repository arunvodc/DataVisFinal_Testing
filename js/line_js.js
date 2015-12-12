var data_full;
var state_id;
var data;
var path;
var valueline;
var xAxis;
var yAxis;
var svg;
var x1_domain;
var x2_domain;
var y1_domain;
var y2_domain;
var margin = {top: 200, right: 80, bottom: 30, left: 200},
    width = 1600 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var x;
var y;
var parseDate = d3.time.format("%Y").parse;
d3.csv("crime.csv", function(error,data_all)
{
	data_full = data_all;
	x1_domain = d3.extent(data_full, function(d) { return d.year; })
	y1_domain =	d3.extent(data_full, function(d) { return +d.Violent_Crime_rate; })
	
	x = d3.scale.linear().domain(x1_domain).range([0, width-100]);
	y = d3.scale.linear().domain(y1_domain).range([height, 0]);

function make_x_axis() {        
    return d3.svg.axis()
        .scale(x)
         .orient("bottom")
         .ticks(11)
}

function make_y_axis() {        
    return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
}

svg.append("g")         
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_axis()
            .tickSize(-height, 0, 0)
            .tickFormat("")
        )

    svg.append("g")         
        .attr("class", "grid")
        .call(make_y_axis()
            .tickSize(-width, 0, 0)
            .tickFormat("")
        )		
var xAxis = d3.svg.axis().scale(x)
			.orient("bottom").ticks(20).tickFormat(d3.format("d"));
 
var yAxis = d3.svg.axis().scale(y)
			.orient("left").ticks(10);

	    svg.append("g")
        .attr("class", "y axis")
		//.transition().duration(1500).ease("sin-in-out") 
        .call(yAxis)
		.selectAll("text")
            .style("fill", "white")
			.style("font-size","14px")
			.style("font-family","Verdana")
			.attr("dx", "-.5em");
		
    svg.append("g")
        .attr("class", "x axis")
		.attr("transform", "rotate(90)")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
		.selectAll("text")
            .style("fill", "white")
			.style("font-size","14px")
			.style("font-family","Verdana")
			.attr("dy", "1.2em")
			/*.attr("dx", "-1em")
			.attr("dy", "1.5em")
			.attr("transform","rotate(-45)");*/
	
});
var g;
call_svg("flag");

function call_svg(objButton)
{
	if(objButton.value=="Remove")
	{
					d3.select('svg').selectAll('path').remove()
	}

svg = d3.select("#line_graph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + (margin.left+150) + "," + (margin.top-10) + ")");

g = svg.append("g")


}
