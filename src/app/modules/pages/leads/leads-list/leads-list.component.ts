import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  leadList: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];

  constructor() {
    this.leadList = [
      {id: 1, name: 'Fulano 1', email: 'fulano1@hotmail.com', phone: '(11) 1111-1111'},
      {id: 2, name: 'Fulano 2', email: 'fulano2@hotmail.com', phone: '(22) 2222-2222'},
      {id: 3, name: 'Fulano 3', email: 'fulano3@hotmail.com', phone: '(33) 3333-3333'},
      {id: 4, name: 'Fulano 4', email: 'fulano4@hotmail.com', phone: '(44) 4444-4444'},
      {id: 5, name: 'Fulano 5', email: 'fulano5@hotmail.com', phone: '(55) 5555-5555'},
      {id: 6, name: 'Fulano 6', email: 'fulano6@hotmail.com', phone: '(66) 6666-6666'},
      {id: 7, name: 'Fulano 7', email: 'fulano7@hotmail.com', phone: '(77) 7777-7777'},
      {id: 8, name: 'Fulano 8', email: 'fulano8@hotmail.com', phone: '(88) 8888-8888'},
      {id: 9, name: 'Fulano 9', email: 'fulano9@hotmail.com', phone: '(99) 9999-9999'},
      {id: 10, name: 'Fulano 10', email: 'fulano10@hotmail.com', phone: '(11) 1111-1111'},
      {id: 11, name: 'Fulano 11', email: 'fulano1@hotmail.com', phone: '(11) 1111-1111'},
      {id: 12, name: 'Fulano 12', email: 'fulano2@hotmail.com', phone: '(22) 2222-2222'},
      {id: 13, name: 'Fulano 13', email: 'fulano3@hotmail.com', phone: '(33) 3333-3333'},
      {id: 14, name: 'Fulano 14', email: 'fulano4@hotmail.com', phone: '(44) 4444-4444'},
      {id: 15, name: 'Fulano 15', email: 'fulano5@hotmail.com', phone: '(55) 5555-5555'},
      {id: 16, name: 'Fulano 16', email: 'fulano6@hotmail.com', phone: '(66) 6666-6666'},
      {id: 17, name: 'Fulano 17', email: 'fulano7@hotmail.com', phone: '(77) 7777-7777'},
      {id: 18, name: 'Fulano 18', email: 'fulano8@hotmail.com', phone: '(88) 8888-8888'},
      {id: 19, name: 'Fulano 19', email: 'fulano9@hotmail.com', phone: '(99) 9999-9999'},
      {id: 20, name: 'Fulano 20', email: 'fulano10@hotmail.com', phone: '(11) 1111-1111'},
    ];

    this.leadList = new MatTableDataSource(this.leadList);
   }

   @ViewChild(MatSort, {static: true}) sort: MatSort;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   ngOnInit() {
     this.leadList.sort = this.sort;
     this.leadList.paginator = this.paginator;
   }

   applySearch(value: string) {
    this.leadList.filter = value.trim().toLowerCase();
  }

}
