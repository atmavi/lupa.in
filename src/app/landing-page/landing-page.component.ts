import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import {LupainService} from '../services/lupain.service';
import { Observable } from 'rxjs';


interface iLand {
  _id: string,
  address: string,
  image: string,
  contact: string,
  entered: Date
}

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {
  res: any;
  entered: Date;

  constructor(private lupainService: LupainService) { }

  ngOnInit() {
    this.lupainService.getLand('http://localhost:3000/lands')
      .subscribe(res => {
        this.res= res;
      });
  }

}
