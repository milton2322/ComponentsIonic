import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  //se declara un arreglo vacio
  dataAlbum: any[] = [];
  textBuscar = '';

  constructor(private dataService: DataService) { }
  

  ngOnInit() {

    this.dataService.getAlbums()
      .subscribe( dataAlbum => {
        console.log( dataAlbum);
        this.dataAlbum = dataAlbum;        
      });
  }

  buscar( event){
    //aqui se obtiene el valor del seachbar
    this.textBuscar = event.detail.value;
    console.log(this.textBuscar);
    
  }

}
