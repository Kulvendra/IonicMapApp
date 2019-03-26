import { Component, OnInit, ViewChild } from '@angular/core';
import {google } from 'google-maps'
  import { from } from 'rxjs';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent  {

  @ViewChild("map") mapElement;
  map:any;
  start = 'chicago, il';
  end = 'chicago, il';
 
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor() {

      console.log("hello kullu");
       
   }

   ngOnInit(){
        this.initMap();
        
       
   }

   initMap(){

     this.directionsDisplay = new google.maps.DirectionsRenderer();
      let coords = new google.maps.LatLng(32.8017914,74.8968102);
        
        let mapoption :  google.maps.MapOptions={
          center: {lat: 41.85, lng: -87.65},
          zoom:11,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          
        }

    this.map = new google.maps.Map(this.mapElement.nativeElement,mapoption);

    let marker : google.maps.Marker = new google.maps.Marker({
      map:this.map,
      position:{lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);
   }

   openFilters(){
     console.log("done kullu singh");
   }

   clicked(){
          console.log("Multiple Marker Clicked");

          // this.map = new google.maps.Map(this.mapElement.nativeElement,mapoption);

          let coordinates=[[25.1972,55.2744],[25.19854,55.277320],[25.19832,55.277366],[25.19764,55.277377],[25.19982,55.277399]];

          let mapProp :  google.maps.MapOptions={
            center:new google.maps.LatLng(25.1972,55.2744),
            zoom:11,
            mapTypeId:google.maps.MapTypeId.ROADMAP
            
          }
          var newmap = new google.maps.Map(this.mapElement.nativeElement,mapProp);
          
          for (var j=0;j<coordinates.length;j++){            
          let marker  = new google.maps.Marker({
            position:new google.maps.LatLng(coordinates[j][0],coordinates[j][1]),
            animation:google.maps.Animation.BOUNCE
          });         
          marker.setMap(newmap);
    
        // this.map = new google.maps.Map(this.mapElement.nativeElement,mapProp);
        //   marker.setMap(newMap,mapProp);

        }    

        

   }

   recenter(){
    console.log("recentered");

    let coords = new google.maps.LatLng(32.8017914,74.8968102);
        
    let mapoption :  google.maps.MapOptions={
      center:coords,
      zoom:11,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      
    }

this.map = new google.maps.Map(this.mapElement.nativeElement,mapoption);

let marker : google.maps.Marker = new google.maps.Marker({
  map:this.map,
  position:coords,
  animation:google.maps.Animation.DROP
});
   }

   draw(){

  //       console.log("draw clicked");

  //       let points = [
  //         {
  //           lat: 26.8542306,
  //           lng:75.8070968 
  //         },
  //         {
  //           lat: 26.8810001,
  //           lng: 75.8011206
  //         }
  //     ];

  //     let coords = new google.maps.LatLng( 26.8542306,75.8070968 );
        
  //     let mapoption :  google.maps.MapOptions={
  //       center:coords,
  //       zoom:17,
  //       mapTypeId:google.maps.MapTypeId.ROADMAP
        
  //     }
  
  // this.map = new google.maps.Map(this.mapElement.nativeElement,mapoption);

      
  // this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //   zoom: 7,
  //   center: {lat: 41.85, lng: -87.65}
  // });

        
          this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: google.maps.TravelMode.DRIVING
          }, (response, status) => {
            console.log(response);
            if (status.toString() =="OK" ) {
              console.log("Done");
              this.directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        
          
        
          this.directionsDisplay.setMap(this.map);

          // google.maps.event.addDomListener(window,'load',);
   }

   



}
