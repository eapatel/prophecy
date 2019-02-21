import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http.service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pcsearch',
  templateUrl: './pcsearch.component.html',
  styleUrls: ['./pcsearch.component.css']
})
export class PcsearchComponent implements OnInit {
  
  postcodeArray = [];
  myControl = new FormControl();
  currentSelectedPostcode = [];

  constructor(private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.myControl.valueChanges
    //.pipe(
      //debounceTime(1000)
    //)
    .subscribe(newValue => this.searchPostcode())
  }

  displayFn(option) {
    if(option)
    return option.postcode;
  }

  getClosestSuburb(option){
    console.log(option);
  this.currentSelectedPostcode = [];
    this.httpServiceService.getSuburbsWithinRadius(option.latitude, option.longitude,4000).subscribe(
      value => {        
        value.forEach(element => {          
            console.log(element);
            this.currentSelectedPostcode.push(element);
                    
        });
      }
    )
  }
  searchPostcode(){
    if(this.myControl.value.length > 2){
      this.postcodeArray = [];
      this.currentSelectedPostcode = [];
      this.httpServiceService.getSuburbsFromPostcode(this.myControl.value).subscribe(value => {
        console.log(value);
        
          value.forEach(element => {
            if(element.postcode.toString().indexOf(this.myControl.value) !== -1){
              console.log(element);
              this.postcodeArray.push(element);
                   }
          });
      })
    }
  }
}
