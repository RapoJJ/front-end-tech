import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {
  transform(newItems: any, filter: string): any {
    if (!newItems || !filter) {
      return newItems;
    }
    return newItems.filter(newItem => newItem.Title.toLowerCase().includes(filter.toLowerCase()));
  }
}
