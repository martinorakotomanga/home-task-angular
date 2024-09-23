import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayTaskBgColor'
})
export class DayTaskBgColorPipe implements PipeTransform {

  transform(day: string): string {
    let color;

    switch(day) {
      case 'Chambre 1':
        color = '-info';
        break;
      case 'Chambre 2':
        color = '-success';
        break;
      case 'Chambre 3':
        color = '-warning'; 
        break;
      default :
        color = '-danger';
        break;
    }

    console.log('----------------------',color);

    return `border${color}`;
  }
}
