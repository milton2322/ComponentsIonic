import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //esto es un decorador que usaremos en el html para darle un nombre a los titulos
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
