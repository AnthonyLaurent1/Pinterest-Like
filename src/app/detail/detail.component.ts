import {Component, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';
import {ActivatedRoute} from "@angular/router";
import * as light from '@fortawesome/free-regular-svg-icons';
import * as solid  from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public  id: string = '';

  public fileName: any = File;

  public favoriteButton: IconDefinition = light.faHeart;

  constructor(private route: ActivatedRoute) {}

  addFavorite(): void {
    if (localStorage.getItem(this.id)) {
      localStorage.removeItem(this.id);
      this.favoriteButton = light.faHeart
    } else {
      localStorage.setItem(this.id, this.id);
      this.favoriteButton = solid.faHeart
    }
  }

  verifyFavoriteExist(): void {
    if (localStorage.getItem(this.id)) {
      this.favoriteButton = solid.faHeart
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.verifyFavoriteExist()
  }
}
