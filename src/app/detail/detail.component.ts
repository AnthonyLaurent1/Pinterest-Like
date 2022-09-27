import {Component, Input, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public  id: string = '';

  public fileName: any = File;

  constructor(private route: ActivatedRoute) {
  }

  addFavorite() {
    localStorage.setItem(this.id, this.id);
  }

  verifyFavoriteExist(): boolean {
    const button: any = document.getElementById('btn-favorite');
    if (localStorage.getItem(this.id)) {
      button.innerHTML = 'Déja dans vos favoris';
      return true
    }

    return false
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
}
