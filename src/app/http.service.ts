import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
    
  constructor(private http: HttpClient) {    
  }

  /*
error : Access to XMLHttpRequest at 'http://v0.postcodeapi.com.au/suburbs.json?postcode=5000' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  */

  public getSuburbsFromPostcode(postcode : number): any {  
    return this.http.get("/api/suburbs.json" +
     "?postcode="  + postcode 
     )                        
  }
  
  public getSuburbsWithinRadius(lat : number, long : number , distance: number): any {
    return this.http.get("/api/radius.json" +
     "?latitude=" + lat + 
     "&longitude=" + long + "&distance=" + distance);
  }
}
