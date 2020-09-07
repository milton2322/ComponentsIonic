import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string; 

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgs(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  salirConArgs(){
    this.modalCtrl.dismiss({
      firstName: 'Entro',
      lastName: 'Final'
    });
  }

}
