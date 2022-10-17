import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { trips } from '../data/trips';
import { TripDataService } from 'src/app/services/trip-data.service';
import { Trip } from 'src/app/models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]   //declare TripDataService as a provider to this class
})
export class TripListingComponent implements OnInit {

  //trips: Array<any> = trips;
  trips: Trip[];  //define trips variable as array of Trip objects

  message: string;

  constructor(
    private tripDataService: TripDataService,
    private authService: AuthenticationService,
    private router: Router
    ) { }  //inject instance of service when class created

  private addTrip(): void {
    console.log('Inside TripListingComponent#addTrip');
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService //function to call service getTrips()
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
        this.trips = foundTrips;  //stores returned trips in local class variable
      });
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  ngOnInit(): void {
    this.getTrips();  //invoke the local getTrips() when class initialized
  }

}
