import {Component, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public file = File;

  public keys: string[] = Object.keys(this.file).sort();

  public itemsPerPage : number = this.keys.length

  public numbersItem: number[] = [10, 20, 50]

  public page: number = 1;

  public list: string[] = [];

  public numberMaxPage: number = 0

  constructor() { }

  changeNumberItemsPerPage(event: Event): void {
    this.page = 1
    this.itemsPerPage = parseInt((event.target as HTMLInputElement).value);
    this.showImages()
    this.numberMaxPage = Math.ceil(this.keys.length / this.itemsPerPage)
  }

  nextPage(): void {
    this.page+=1;
    this.showImages()
  }

  previousPage(): void {
    this.page-=1;
    this.showImages()
  }

  showImages(): void {
    let startId: number = (this.page - 1) * this.itemsPerPage;
    let endId: number = startId + this.itemsPerPage;
    this.list = this.keys.slice(startId, endId);
  }

  sortImages(): void {
    this.keys = this.keys.reverse();
    this.showImages()
  }

  ngOnInit(): void {
    this.showImages();
  }
}
