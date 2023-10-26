import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../interfaces/material';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  public stockList: Material[] = [];

  constructor( private materialService: MaterialService ) { 
    
  }

  ngOnInit(): void {
    this.materialService.loadLocalStorage();
    this.stockList = this.materialService.stockElements;
  }

}
