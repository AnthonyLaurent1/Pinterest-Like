import { Component, OnInit } from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public image = File

  public datas: string[] = Object.keys(localStorage)

  constructor() { }

  removeFavorite(key: string) {
    localStorage.removeItem(key);
    location.reload()
  }

  removeAllFavorites() {
    localStorage.clear()
    location.reload()
  }

  ngOnInit(): void { }

}
