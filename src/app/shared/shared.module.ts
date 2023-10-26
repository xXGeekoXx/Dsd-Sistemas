import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';


import { AddElementModalComponent } from './components/add-element-modal/add-element-modal.component';
import { EditElementModalComponent } from './components/edit-element-modal/edit-element-modal.component';
import { DeleteElementModalComponent } from './components/delete-element-modal/delete-element-modal.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { NgxModalComponent } from './components/ngx-modal/ngx-modal.component';

@NgModule({
  declarations: [
    AddElementModalComponent,
    EditElementModalComponent,
    DeleteElementModalComponent,
    AddGroupComponent,
    NgxModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
    /* TooltipModule.forRoot() */
  ],
  exports: [
    AddElementModalComponent,
    EditElementModalComponent,
    DeleteElementModalComponent,
    AddGroupComponent,
    NgxModalComponent
  ]
})
export class SharedModule { }
