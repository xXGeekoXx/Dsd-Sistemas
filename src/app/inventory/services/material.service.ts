import { Injectable } from '@angular/core';
import { Material } from '../interfaces/material';

@Injectable({providedIn: 'root'})

export class MaterialService {

  private elements: Material[] = [];
  private groups: string[] = [];

  constructor() { }

  saveElement( material: Material ) {
    console.log( material );
    this.elements.push(material);
    this.saveLocalStorage();
  }

  editElement( id_Element: number, material: Material ) {
    this.elements[ id_Element ] = material;
    this.saveLocalStorage();
    console.log( this.elements );
  }

  deleteElement ( id_Element: number ): void {
    id_Element < 1 ? this.elements.shift() : this.elements.splice( id_Element, id_Element );
    this.saveLocalStorage();
    return;
  }

  saveGroupElement( group: string ): void {
    console.log( group );
    this.groups.push('Pollo');
    console.log( this.groups );
    /* this.saveLocalStorage(); */
  }

  get stockElements(): Material[] {
    return this.elements;
  }

  get groupElements(): string[] {
    return this.groups;
  }

  private saveLocalStorage(): void {
    localStorage.setItem('Inventory', JSON.stringify( this.stockElements ));
    localStorage.setItem('Groups', JSON.stringify( this.groups ));
  }

  loadLocalStorage(): void {
    if (!this.stockElements ) { 
      console.log('ERROR TO LOAD INVENTORY');
      return 
    }
    this.elements = JSON.parse(localStorage.getItem('Inventory'));
    this.groups = JSON.parse(localStorage.getItem('Groups'));
    console.log('Get Local Storage Successful');
  }
  
}