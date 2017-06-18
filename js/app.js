mapboxgl.accessToken = 'pk.eyJ1IjoiamluYWxmb2ZsaWEiLCJhIjoiOE53X2toRSJ9.2aMeuYERrEvKHul16lAJjA';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/jinalfoflia/cj3vjeoku07182smjptw1rnph',
		center: [32.245574, 28.325215],
		zoom: 1.85,
		hash: true,
		attributionControl:false
	});

    var Japan = [139.93281,37.48161];  
	var Lima = [-77.04106,-12.05915]; 
	var Boulder = [-105.264,40.0071; // 15.13/40.0071/-105.264/0/60
	var Kampala = [24.4,32.5789]; // 15.96/0.312/32.5789/24.4/6
	var Avignon = [4.8128,43.9449]; // 15.31/43.9449/4.8128/-21.7/60
	var Buenos_Aires = [-58.4101,-34.5867]; //15.4/-34.5867/-58.4101/0/60
	var Kathmandu = [85.31711,27.70119]; //16.1/27.70119/85.31711/0/60


	//set specific zoom for each city
	var JapanZoom = 16.06;
	var LimaZoom = 16.14;
	var BoulderZoom = 15.13;
	var KampalaZoom = 15.96;
	var AvignonZoom = 15.31;
    var Buenos_AiresZoom = 15.4;
    var KathmanduZoom = 16.1;



	function fly(city,cityZoom) {
    
    	map.flyTo({
        	center: city,
			zoom: cityZoom,
			speed:0.3,
			curve:2,
			pitch:60,
			bearing:0
	});
}



function showhide()
 {
      var div = document.getElementById("sidebar");
	  if (div.style.display !== "none") {
		  div.style.display = "none";
		}
	  else {
		    div.style.display = "block";
		}
 }


map.on('click', function (e) {
	console.log(map.getZoom());
	map.featuresAt(e.point, {
		radius: 10,
		layer: ['conference copy'],
		includeGeometry: true
			}, function (err, features) {
				if (err) throw err;

				if (features.length > 0) {

					var popupHTML = '<h5>' + '<a href="http://www.openstreetmap.org/edit?editor=id&node=' + features[0].properties._osm_node_id +'">'+ features[0].properties.name+"</a>"+'</h5>'+ 
					                "Last edited by: "+ '<a href="http://www.openstreetmap.org/user/' + features[0].properties._user +'">' +features[0].properties._user+"</a>";

					var popup = new mapboxgl.Popup()
								.setLngLat(features[0].geometry.coordinates)
								.setHTML(popupHTML)
								.addTo(map);
							}
						});

});


