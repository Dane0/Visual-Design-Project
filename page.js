/**
 * Created by byron on 11/9/16.
 */
var dataset = []
d3.csv("na_player.csv", function(data) {
	dataset = data.map(function(d) {
		return [+d["assists"], +d["champLevel"]];
	});
	console.log(dataset);
});