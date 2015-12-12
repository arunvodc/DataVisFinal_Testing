function slider()
{
var margin = {top: 20, right: 30, bottom: 10, left: 50},
    width = 1300 - margin.left - margin.right,
    height = 100 - margin.bottom - margin.top,
    startingValue = 1983;

// sets scale for slider
var x = d3.scale.linear()
    .domain([1966,2012])
    .range([0, width])
    .clamp(true);

// defines brush
var brush = d3.svg.brush()
    .x(x)
    .extent([startingValue, startingValue])
    .on("brush", brushed);

var svg = d3.select("#slider").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
  // classic transform to position g
    .attr("transform", "translate(50,20)");

svg.append("g")
    .attr("class", "x axis")
    // put in middle of screen
    .attr("transform", "translate(0," + height / 2 + ")")
    // inroduce axis
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(function(d) { return d; })
      .tickSize(5)
      .tickPadding(15)
      .tickValues([1966, 2012]))
  .select(".domain")
  .select(function() {console.log(this); return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

var slider = svg.append("g")
    .attr("class", "slider")
    .call(brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("g")
    .attr("class", "handle")

handle.append("path")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("d", "M 0 -20 V 20")

handle.append('text')
  .text(startingValue)
  .attr("transform", "translate(" + (-18) + " ," + (height / 2 - 25) + ")");

slider
    .call(brush.event)

function brushed() {
  var value = brush.extent()[0];

  if (d3.event.sourceEvent) { // not a programmatic event
    handle.select('text');
    value = Math.round(x.invert(d3.mouse(this)[0]));
    brush.extent([value, value]);
  }

  handle.attr("transform", "translate(" + x(value) + ",0)");
  handle.select('text').text(Math.round(value))
  def_year = value
 call(type,def_year)

}
}