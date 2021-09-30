// src/DisplayMapClass.js
import * as React from 'react';
import axios from 'axios'
import H from "@here/maps-api-for-javascript";

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };

  async componentDidMount() {
    let latitude = 19.06
    let longitude = 72.83
    const params = {
        'apikey':'tuo6JgL1XwUOMT6mCmk3yiBckTn-8NZOoJRVN1S5CUo',
        'q':'hospital',
        'limit': 5,
        'at':latitude+','+longitude,
      };
    const res = await axios.get('https://discover.search.hereapi.com/v1/discover', { params });
    console.log(res.data.items[0]['title'])

    let hospitalOne = res.data.items[0]['title']
    let hospitalOne_address =  res.data.items[0]['address']['label']
    let hospitalOne_lat = res.data.items[0]['position']['lat']
    let hospitalOne_lng = res.data.items[0]['position']['lng']


    let hospitalTwo = res.data.items[1]['title']
    let hospitalTwo_address =  res.data.items[1]['address']['label']
    let hospitalTwo_lat = res.data.items[1]['position']['lat']
    let hospitalTwo_lng = res.data.items[1]['position']['lng']

    let hospitalThree = res.data.items[2]['title']
    let hospitalThree_address =  res.data.items[2]['address']['label']
    let hospitalThree_lat = res.data.items[2]['position']['lat']
    let hospitalThree_lng = res.data.items[2]['position']['lng']


    let hospitalFour = res.data.items[3]['title']
    let hospitalFour_address =  res.data.items[3]['address']['label']
    let hospitalFour_lat = res.data.items[3]['position']['lat']
    let hospitalFour_lng = res.data.items[3]['position']['lng']

    let hospitalFive = res.data.items[4]['title']
    let hospitalFive_address =  res.data.items[4]['address']['label']
    let hospitalFive_lat = res.data.items[4]['position']['lat']
    let hospitalFive_lng = res.data.items[4]['position']['lng']

    const platform = new H.service.Platform({
        apikey: "tuo6JgL1XwUOMT6mCmk3yiBckTn-8NZOoJRVN1S5CUo"
    });

    
    var maptypes = platform.createDefaultLayers();

      // Initialize a map:
      var map = new H.Map(
        this.mapRef.current,
        maptypes.raster.terrain.map,
        {
          zoom: 15,
          center: { lat: latitude, lng: longitude }  
        });
		
    //const defaultLayers = platform.createDefaultLayers();

    //// Create an instance of the map
    //const map = new H.Map(
    //  this.mapRef.current,
    //  defaultLayers.vector.normal.map,
    //  {
    //    // This map is centered over Europe
    //    center: { lat: latitude, lng: longitude },
    //    zoom: 15,
    //    pixelRatio: window.devicePixelRatio || 1
    //  }
    //);

    var mapEvents = new H.mapevents.MapEvents(map);
	
	// Instantiate the default behavior, providing the mapEvents object:
	var behavior = new H.mapevents.Behavior(mapEvents);


    var myLocation_marker = new H.map.Marker({ lat: latitude, lng: longitude });
	var hospitalOne_marker = new H.map.Marker({ lat: hospitalOne_lat, lng: hospitalOne_lng });
	var hospitalTwo_marker = new H.map.Marker({ lat: hospitalTwo_lat, lng: hospitalTwo_lng });
	var hospitalThree_marker = new H.map.Marker({ lat: hospitalThree_lat, lng: hospitalThree_lng });
	var hospitalFour_marker = new H.map.Marker({ lat: hospitalFour_lat, lng: hospitalFour_lng });
	var hospitalFive_marker = new H.map.Marker({ lat: hospitalFive_lat, lng: hospitalFive_lng });

    map.addObject(myLocation_marker);
	map.addObject(hospitalOne_marker);
	map.addObject(hospitalTwo_marker);
	map.addObject(hospitalThree_marker);
	map.addObject(hospitalFour_marker);
	map.addObject(hospitalFive_marker);

    var ui = H.ui.UI.createDefault(map, maptypes);

    myLocation_marker.addEventListener('tap', function(evt) {
    
		// Create an info bubble object at a specific geographic location:
		var bubble = new H.ui.InfoBubble({ lng: longitude, lat: latitude }, {
                content: ''
             });
		bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>"Hi"</h3><p>"This is you!"</p></div>');
		// Add info bubble to the UI:
		ui.addBubble(bubble);
	});	

    hospitalOne_marker.addEventListener('tap', function(evt) {

    // Create an info bubble object at a specific geographic location:
    var bubble = new H.ui.InfoBubble({ lng: hospitalOne_lng, lat: hospitalOne_lat }, {
            content: ''
        });
    bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>'+hospitalOne+'</h3><p>'+hospitalOne_address+'</p></div>');
    // Add info bubble to the UI:
    ui.addBubble(bubble);
    });

    hospitalTwo_marker.addEventListener('tap', function(evt) {

    // Create an info bubble object at a specific geographic location:
    var bubble = new H.ui.InfoBubble({ lng: hospitalTwo_lng, lat: hospitalTwo_lat }, {
            content: ''
        });
        bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>'+hospitalTwo+'</h3><p>'+hospitalTwo_address+'</p></div>');
    // Add info bubble to the UI:
    ui.addBubble(bubble);
    });

    hospitalThree_marker.addEventListener('tap', function(evt) {

    // Create an info bubble object at a specific geographic location:
    var bubble = new H.ui.InfoBubble({ lng: hospitalThree_lng, lat: hospitalThree_lat }, {
            content: ''
        });
        bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>'+hospitalThree+'</h3><p>'+hospitalThree_address+'</p></div>');
    // Add info bubble to the UI:
    ui.addBubble(bubble);
    });

    hospitalFour_marker.addEventListener('tap', function(evt) {

    // Create an info bubble object at a specific geographic location:
    var bubble = new H.ui.InfoBubble({ lng: hospitalFour_lng, lat: hospitalFour_lat }, {
            content: ''
        });
        bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>'+hospitalFour+'</h3><p>'+hospitalFour_address+'</p></div>');
    // Add info bubble to the UI:
    ui.addBubble(bubble);
    });

    hospitalFive_marker.addEventListener('tap', function(evt) {

    // Create an info bubble object at a specific geographic location:
    var bubble = new H.ui.InfoBubble({ lng: hospitalFive_lng, lat: hospitalFive_lat }, {
            content: ''
        });
        bubble.setContent('<div style="height: 130px; overflow: auto; width: 270px;"><h3>'+hospitalFive+'</h3><p>'+hospitalFive_address+'</p></div>');
    // Add info bubble to the UI:
    ui.addBubble(bubble);
    });
    
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "100%" }} />
    );
  }
}