import { Component, ViewChild, ElementRef } from '@angular/core';
import { Material } from 'src/app/inventory/interfaces/material';
import { MaterialService } from 'src/app/inventory/services/material.service';

@Component({
  selector: 'add-element-modal',
  templateUrl: './add-element-modal.component.html',
  styleUrls: ['./add-element-modal.component.css']
})
export class AddElementModalComponent {

  @ViewChild( 'txtName'         ) public tagName!:          ElementRef<HTMLInputElement>;
  @ViewChild( 'txtQuantity'     ) public tagQuantity!:      ElementRef<HTMLInputElement>;
  @ViewChild( 'txtDescription'  ) public tagDescription!:   ElementRef<HTMLInputElement>;
  @ViewChild( 'txtGroup'        ) public tagGroup!:         ElementRef<HTMLSelectElement>;

  constructor(private materialService: MaterialService) { }

  saveMaterial( name: string, quantity: number, description: string, group: string ): void {

    if( !name || !description ) {
      console.log('ERROR TO SAVE');
      return;
    }

    const material: Material = { name, quantity, description, group }
    this.materialService.saveElement( material );
    this.cleanModal();
  }

  cleanModal(): void {
    this.tagName.nativeElement.value =         '';
    this.tagQuantity.nativeElement.value =    '1';
    this.tagDescription.nativeElement.value =  '';
    this.tagGroup.nativeElement.selectedIndex = 0; 
  }

}
