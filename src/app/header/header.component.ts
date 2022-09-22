import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile : string = 'assets/profile.jpg';

  name : string = 'Pinterest Like';

  logo : string = 'assets/logo.jpg';


  constructor() { }

  ngOnInit(): void {

  }

}
