import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public image: string = 'assets/github.png'

  public accounts: string[] = [
      'https://github.com/AnthonyLaurent1',
      'https://github.com/E-Adrien8',
      'https://github.com/matgoy'
  ]

  constructor() { }

  ngOnInit(): void {}

}
