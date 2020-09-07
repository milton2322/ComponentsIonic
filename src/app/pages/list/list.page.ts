import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
//decorador busca en el html el apuntador lista de nombre lista que esta despues del metodo viewchild
//para que este metodo tambien tome los metodos que se encuentran en la lista, lista tiene que ser de tipo IonList
//sin el IonList no se puede invocar closeSlidingItems que es lo que nos ayudara a cerrar el sliding
  @ViewChild('lista') lista: IonList;

  users: Observable<any>;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.users = this.dataService.getUsers();
  }

  favorite(users){
    console.log('favorite',users);
    this.lista.closeSlidingItems();    
  }

  share(users){
    console.log('share', users);
    this.lista.closeSlidingItems();
  }

  trash(users){
    console.log('trash', users);
    this.lista.closeSlidingItems();
  }

}
