function call(type,def_year)
{
	var a = type
	
	d3.csv("crime.csv", function(error,data){
		
	 var d1 = data.filter(function(d,i){
		 if(d['year']==def_year){
		   return d['year']
			}; 
		})
		
	var state_id = d1.map(function(d) 
	 {
		   return d['id']	 
	 })
	 
	 var crime_type = d1.map(function(d) 
	 {
		   return parseFloat(d[a])
	 })
	 
	 var match = d1.map(function(d) 
	 {
		   return d['match']	 
	 })
	 
	 
	 	function tooltipHtml(n, d){	 // function to create html content string in tooltip div.
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.state)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.type)+"</td></tr>"
			"</table>";
	
	
	}
	
	 
	 var colorMap = d3.scale.linear()
						.domain(d3.extent(crime_type))
						.range(["#FFEC8B","#800000" ])
						
		
	
	 
	var sampleData ={};	/* Sample random data. */	
	state_id
		.forEach(function(d,i){ 
			var type = crime_type[i];
			
			sampleData[d]={state:state_id[i],color:colorMap(type),type:crime_type[i],rape_rank:d1[i].rape_rank,Murder_rank:d1[i].MNMR_rank,robbery_rate_rank:d1[i].robbery_rate_rank,
			assault_rate_rank:d1[i].assault_rate_rank,property_crime_rate_rank:d1[i].property_crime_rate_rank,burglary_rate_rank:d1[i].burglary_rate_rank,
			larceny_theft_rate_rank:d1[i].larceny_theft_rate_rank,motor_vehicle_theft_rate_rank:d1[i].motor_vehicle_theft_rate_rank};
		})
		
		
	/* draw states on id #statesvg */	

	uStates.draw("#statesvg", sampleData,state_id);

	
})
}