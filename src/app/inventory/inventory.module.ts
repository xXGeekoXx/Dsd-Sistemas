import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTableComponent } from './components/content-table/content-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContentTableComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContentTableComponent,
    SidebarComponent
  ]
})

export class InventoryModule { }
