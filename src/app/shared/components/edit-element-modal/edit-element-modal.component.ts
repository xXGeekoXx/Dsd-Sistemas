import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Material } from 'src/app/inventory/interfaces/material';
import { MaterialService } from 'src/app/inventory/services/material.service';

@Component({
  selector: 'edit-element-modal',
  templateUrl: './edit-element-modal.component.html',
  styleUrls: ['./edit-element-modal.component.css']
})
export class EditElementModalComponent {

  public elements: Material[] = this.materialService.stockElements;

  @Input() material: Material;
  @Input() id_Material: number;

  @ViewChild( 'txtEditName'         ) public tagName!:          ElementRef<HTMLInputElement>;
  @ViewChild( 'txtEditQuantity'     ) public tagQuantity!:      ElementRef<HTMLInputElement>;
  @ViewChild( 'txtEditDescription'  ) public tagDescription!:   ElementRef<HTMLInputElement>;
  @ViewChild( 'txtEditGroup'        ) public tagGroup!:         ElementRef<HTMLSelectElement>;

  constructor(private materialService: MaterialService) { }

  editMaterial(): void {

    console.log( this.id_Material );
    console.log( this.material );

/*     console.log( this.material.name )
    console.log( this.material.quantity )
    console.log( this.material.description )
    console.log( this.material.group) */

    this.tagName.nativeElement.value                  = this.material.name;
    this.tagQuantity.nativeElement.valueAsNumber      = this.material.quantity;
    this.tagDescription.nativeElement.value           = this.material.description;
    this.tagGroup.nativeElement.selectedIndex         = this.id_Material;

    /* console.log( this.material )
    
    if ( this.material) {
      console.log('Get Stock Successful');
      return;
    }

    console.log('Error To Load Stock') */

  }

  saveEditMaterial( name, quantity, description, group ): void {
    const element: Material = { name, quantity, description, group };
    this.materialService.editElement( this.id_Material, element );
  }

}
