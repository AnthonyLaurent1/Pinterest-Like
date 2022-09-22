import {Component, Input, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() fileName = File;

  key = Object.keys(this.fileName);

  constructor() { }

  ngOnInit(): void {
    console.log(this.key)
  }

}
