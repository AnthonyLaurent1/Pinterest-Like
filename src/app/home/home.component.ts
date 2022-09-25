import {Component, OnInit} from '@angular/core';
import File from '../../assets/resources/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileName = File;

  key = Object.keys(this.fileName);

  itemPerPage : number[] = [10, 20, 50]

  page: any = localStorage.getItem('page');

  array50: string[][] = this.sortArray(this.key, 50, 32, 50, 50);
  array20: string[][]    = this.sortArray(this.key, 20, 2, 20, 20);
  array10: string[][]    = this.sortArray(this.key, 10, 2, 10, 10)

  setNumberItemPerPage(n: string) {
    localStorage.setItem('page', n)
    location.reload()
  }

  sortArray(key: string[], start: number, length: number, incre: number, slice: number): string[][] {
    let array: string[][] = []

    for (let i = start; i < key.length + length ; i+=incre) {
      let e = key.slice(i-slice, i)
      array.push(e)
    }
    return array
  }

  constructor() {}

  ngOnInit(): void {

  }

}
