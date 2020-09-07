import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  //cada vez que se necesite un elemento del html se utiliza el viewchild
  @ViewChild(IonSegment) segment: IonSegment; 

  superheroes: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //console.log(this.segment.value);    
    //this.segment.value = 'todos';
    
    
    this.superheroes = this.dataService.getHeroes();
  }
  
  segmentChanged(event){
    const valorSegmento = event.detail.value;
    //console.log(valorSegmento)
    // si el valor que le llega es todos que se encuentra en el value del html me trae todo el arreglo
    //asi como esta en el pipe
    if(valorSegmento === 'todos' ){
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
    
    
  }
}
