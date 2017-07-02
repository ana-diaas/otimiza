import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private route: Router,
             ) { }
 
  dashboard(){
      this.route.navigate(['/dashboard']);
  }

}
