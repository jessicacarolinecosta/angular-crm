import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { LeadService } from '../../../../services/lead/lead.service';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  leadList: any;
  displayedColumns: string[] = ['name', 'email', 'phone', 'state', 'city'];

  constructor(private leadService: LeadService) {

    this.leadService.list()
      .subscribe(data => {
        this.leadList = data;
      }, error => {
        alert(error.error.erro);
      },);

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
