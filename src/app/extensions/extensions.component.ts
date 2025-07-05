import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extensions',
  standalone: false,
  templateUrl: './extensions.component.html',
  styleUrl: './extensions.component.scss'
})
export class ExtensionsComponent {
  extensiones: any[] = [];
  filteredExtensions: any[] = [];
  selectedActive : string = '';

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.apiService.getExtensions().subscribe(data =>{
      this.extensiones = data;
      this.filteredExtensions = this.extensiones;
      console.log(data);
    });
  }

  filterExtensions(tipo: string){
    switch(tipo){
      case 'all':
        this.filteredExtensions = this.extensiones;
        this.selectedActive = 'all';
        break;
      case 'active':
        this.filteredExtensions = this.extensiones.filter(e => e.isActive);
        this.selectedActive = 'active';
        break;
      case 'inactive':
        this.filteredExtensions = this.extensiones.filter(e => e.isActive == false);
        this.selectedActive = 'inactive';
        break;
      default:
        console.log("Algo salio mal");
    }
      
  }
}
