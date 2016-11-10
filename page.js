/**
 * Created by byron on 11/9/16.
 */
var dataset = []
d3.csv("na_player.json", function(data) {

	dataset = data.map(function (d) {
		return [+d["id"], +d["assists"], +d["champLevel"], +d["deaths"], +d["doubleKills"], +d[""], +d["firstBloodKill"],
			+d["firstInhibitorAssist"], +d["firstInhibitorKill"], +d["firstTowerAssist"], +d["firstTowerKill"], +d["goldEarned"],
			+d["goldSpent"], +d["inhibitorKills"], +d["killingSprees"], +d["kills"], +d["largestCriticalStrike"],
			+d["largestKillingSpree"], +d["largestMultiKill"], +d["magicDamageDealt"], +d["magicDamageTaken"], +d["minionKill"],
			+d["neutralMinionsKilled"], +d["neutralMinionsKilledEnemyJungle"], +d["pentaKills"], +d["physicalDamageDealt"],
			+d["physicalDamageDealtToChampions"], +d["physicalDamageTaken"], +d["quadraKills"], +d["sightWardsBoughtInGame"],
			+d["totalDamageDealt"], +d["totalDamageDealtToChampions"], +d["totalDamageTaken"], +d["totalHeal"],
			+d["totalTimeCrowdControlDealt"], +d["totalUnitsHealed"], +d["towerKills"], +d["tripleKills"], +d["trueDamageDealt"]
			+ d["trueDamageDealtToChampions"], +d["trueDamageTaken"], +d["visionWardsBoughtInGame"], +d["wardsKilled"], +d["wardsPlaced"], +d["winner"]];
	});


});

d3.select("body")
.enter().append("p")
.text(function (b) {
	return b + "!"; });