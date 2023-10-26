import { Component, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from 'src/app/inventory/services/material.service';

@Component({
  selector: 'add-group-modal',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {

  @ViewChild('txtAddGroup') public tagAddGroup!: ElementRef<HTMLInputElement>;

  constructor(private materialService: MaterialService) { }

  saveGroup( group: string ): void {
    this.materialService.saveGroupElement( group );
    //Clean Modal ↓↓↓
    this.tagAddGroup.nativeElement.value = ''; 
  }

}
