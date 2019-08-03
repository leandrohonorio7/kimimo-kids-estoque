import {DataSource} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'quantidade'];
  dataSource = new ExampleDataSource();
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  quantidade: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Camisa 1', quantidade: 1},
  {position: 2, name: 'Camisa 2', quantidade: 4},
  {position: 3, name: 'Short 1', quantidade: 6},
  {position: 4, name: 'Short 2', quantidade: 9},
  {position: 5, name: 'Sapato 1', quantidade: 10},
  {position: 6, name: 'Sapato 2', quantidade: 12},

];

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'quantidade', 'link'];
  dataSource = ELEMENT_DATA;
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {
  }
}
