import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  //aqui es donde se configura la logica del filtro
  transform(arreglo: any[], text: string, columna: string): any[] {
    
    if( text === ''){
      return arreglo;
    }
    text = text.toLowerCase();
    
    
    return arreglo.filter( item => {      
      //item toma lo que viene en el arreglo y lo filtra por la columna   
     return item[columna].toLowerCase().includes( text );     
      
    });  
    
  }

}
