import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
image = 'assets/github.png'
  github = {
    'Anthony': 'https://github.com/AnthonyLaurent1',
    'Adrien' : 'https://github.com/E-Adrien8',
    'Mathieu': 'https://github.com/matgoy',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
