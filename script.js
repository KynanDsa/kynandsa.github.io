<script>
			require([ 
				"esri/Map", "esri/views/MapView", "esri/widgets/Sketch", "esri/layers/GraphicsLayer", "esri/widgets/Home" 
					], (Map, MapView, Sketch, GraphicsLayer, Home) => {
			
					const graphicsLayer = new GraphicsLayer();
			
					const map = new Map({
						basemap: "streets-night-vector", // Specified World Street Map (Night) basemap
						layers: [graphicsLayer]
					});
					
					const view = new MapView({
						container: "viewDiv", 
						map: map,
						zoom: 12, // Specified zoom to display streets
						center: [-75.695, 45.425] // Specified coordinates for Ottawa
					});	
					
					view.when(() => {
						const sketch = new Sketch({
							layer: graphicsLayer,
							view: view,
							creationMode: "update"
						});
						
					view.ui.add(sketch, "top-right");	
					});
					
					const homeBtn = new Home({
						view: view
					});
					
					view.ui.add(homeBtn, "top-left");	
				});
			</script>
