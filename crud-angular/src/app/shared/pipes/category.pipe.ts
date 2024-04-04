import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
// pipes geralmente são muito uteis para testes, por serem bem diretos:
// recebemos valores, aplicamos a logica e retornamos.
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
