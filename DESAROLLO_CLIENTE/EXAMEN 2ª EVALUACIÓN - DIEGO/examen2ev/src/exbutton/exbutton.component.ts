import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
})
export class EXButtonComponent {

  justDoIt(msg: any) {
    console.log("Exercise 5 done!");
}

}
