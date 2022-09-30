import { Component, OnInit } from '@angular/core';
import File from '../../assets/resources/__credits.json';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public datas: string[] = Object.keys(localStorage)

  public remove: IconDefinition = faTrashAlt

  public numberFavorite: number = localStorage.length

  constructor() { }

  removeFavorite(key: string) {
    localStorage.removeItem(key);
    location.reload()
  }

  removeAllFavorites(): void {
    localStorage.clear()
    location.reload()
  }

  ngOnInit(): void { }
}
