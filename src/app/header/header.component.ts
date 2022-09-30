import { Component, OnInit} from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile : IconDefinition = faUser;

  name : string = 'Pinterest Like';

  logo : string = 'assets/logo.png';

  constructor() { }

  ngOnInit(): void {}

}
