import {Component, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fileName = File;

  public keys = Object.keys(this.fileName);

  public itemsPerPage : number = this.keys.length

  public numbersItems: number[] = [10, 20, 50]

  public page: number = 1;

  public list: string[] = [];

  public numberMaxPage: number = 0

  constructor() { }

  changeNumberItemsPerPage(event: Event) {
    this.page = 1
    this.itemsPerPage = parseInt((event.target as HTMLInputElement).value);
    this.showImage()
    this.numberMaxPage = Math.ceil(this.keys.length / this.itemsPerPage)
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
    let startId: number = (this.page - 1) * this.itemsPerPage;
    let endId: number = startId + this.itemsPerPage;
    this.list = this.keys.slice(startId, endId);
  }

  ngOnInit(): void {
    this.showImage();
  }
}
