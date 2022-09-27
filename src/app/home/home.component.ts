import {Component, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileName = File;

  keys = Object.keys(this.fileName);

  itemPerPage : number = this.keys.length

  numberItem: number[] = [10, 20, 50]

  page: number = 1;

  list: string[] = [];

  constructor() { }

  changeNumberItemsPerPage(event: Event) {
    this.page = 1
    this.itemPerPage = parseInt((event.target as HTMLInputElement).value);
    this.showImage()
  }

  nextPage() {
    this.page+=1;
    this.showImage()
  }

  previousPage() {
    this.page-=1;
    this.showImage()
  }

  showImage(): void {
    let startId: number = (this.page - 1) * this.itemPerPage;
    let endId: number = startId + this.itemPerPage;
    this.list = this.keys.slice(startId, endId);
  }

  ngOnInit(): void {
    this.showImage();
  }
}
