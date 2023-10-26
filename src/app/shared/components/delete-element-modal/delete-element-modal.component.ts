import { Component, Input } from '@angular/core';
import { MaterialService } from 'src/app/inventory/services/material.service';

@Component({
  selector: 'delete-element-modal',
  templateUrl: './delete-element-modal.component.html',
  styleUrls: ['./delete-element-modal.component.css']
})
export class DeleteElementModalComponent {

  @Input() public id_Material: number;

  constructor( private materialService: MaterialService ) { }

  deleteMaterial( id_Material: number): void {
    this.materialService.deleteElement( id_Material );
  }

}
