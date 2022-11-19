import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value.trim()) {
      return 'assets/images/lama.jpg';
    } else {
      return value;
    }
  }
}
