function draw_line(state_id, value, item)
{
var color = "red";
console.log(state_id);

if(state_id=="Rhode Island")
	color="#e74c3c";
else if(state_id=="South Dakota")
	color="#f1c40f";
else if(state_id=="Vermont")
	color="#2ecc71";
else if(state_id=="Iowa")
	color="#3498db";
else if(state_id=="Nebraska")
	color="#7f8c8d";
else if(state_id=="North Dakota")
	color="#7FFF00";
else if(state_id=="New Hampshire")
	color="#FAEBD7";
else if(state_id=="Wisconsin")
	color="#00FFFF";
else if(state_id=="Connecticut")
	color="#7FFFD4";
else if(state_id=="Utah")
	color="#D2691E";
else if(state_id=="Maine")
	color="#00FFFF";
else if(state_id=="Minnesota")
	color="#FBB917";
else if(state_id=="Massachusetts")
	color="#FFEBCD";
else if(state_id=="Washington")
	color="#806517";
else if(state_id=="Oregon")
	color="#FF2400";
else if(state_id=="Montana")
	color="#FCDFFF";
else if(state_id=="Hawaii")
	color="#C6AEC7";
else if(state_id=="Idaho")
	color="#ffff00";
else if(state_id=="Pennsylvania")
	color="#008080";
else if(state_id=="Kansas")
	color="#B22222";
else if(state_id=="New Jersey")
	color="#808000";
else if(state_id=="Colorado")
	color="#BA55D3";
else if(state_id=="Indiana")
	color="#FFEBCD";
else if(state_id=="West Virginia")
	color="#A52A2A";
else if(state_id=="Ohio")
	color="#FF6347";
else if(state_id=="California")
	color="#191970";
else if(state_id=="New York")
	color="#D2B48C";
else if(state_id=="Wyoming")
	color="#CD853F";
else if(state_id=="Michigan")
	color="#DAA520";
else if(state_id=="Missouri")
	color="#006400";
else if(state_id=="Oklahoma")
	color="#6A5ACD";
else if(state_id=="Arizona")
	color="#2F4F4F";
else if(state_id=="New Mexico")
	color="#B0E0E6";
else if(state_id=="Illinois")
	color="#20B2AA";
else if(state_id=="Kentucky")
	color="#FFA07A";
else if(state_id=="Maryland")
	color="#8FBC8F";
else if(state_id=="Arkansas")
	color="#00FFFF";
else if(state_id=="Tennessee")
	color="#1E90FF";
else if(state_id=="Virginia")
	color="#FFF5EE";
else if(state_id=="Delaware")
	color="#FFFAFA";
else if(state_id=="Texas")
	color="#BC8F8F";
else if(state_id=="North Carolina")
	color="#FFF8DC";
else if(state_id=="Mississippi")
	color="#800000";
else if(state_id=="Louisiana")
	color="#696969";
else if(state_id=="Florida")
	color="#A0522D";
else if(state_id=="Nevada")
	color="#7CFC00";
else if(state_id=="Alabama")
	color="#5F9EA0";
else if(state_id=="Georgia")
	color="#DC143C";
else if(state_id=="South Carolina")
	color="#FFD700";
else if(state_id=="Alaska")
	color="#F0E68C";
else if(state_id=="Nevada")
	color="#87CEFA";
else if(state_id=="Columbia")
	color="Red";
else
	color="Red";

data = 
data_full.filter(function(d)
{
return d.State==state_id;
})

valueline = d3.svg.line().interpolate("basis")
    .x(function(d) { return x(d.year); })
	.y(function(d) {
		return y(+d.Violent_Crime_rate);
	});
var str1 = state_id;
var str2 = str1.replace(" ", "_");
console.log(str2);
path =  svg.append("path").datum(data)
		.attr("class",str2)
        .attr("d", valueline)
		//.style("stroke", function(d) { return "hsl(" + Math.random() * 360 + ",100%,50%)";; });
		.style("stroke",color)
		.style("stroke-width",3);
		var totalLength = path.node().getTotalLength();
		  
		 if(value == true)
		 {
		  path
				.attr("stroke-dasharray", totalLength + " " + totalLength)
				.attr("stroke-dashoffset", totalLength)
				.transition()
				.duration(1500)
				.ease("sin-in-out")
				.attr("stroke-dashoffset", 0);
		 }
		 else{
			str1 = state_id;
			str2 = str1.replace(" ", "_");

			 d3.select('#line_graph').selectAll("."+str2).remove();
		 }
}
