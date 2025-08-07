import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass:string):string {

    const size=pass.length;
    let maskPasssword='';
    for (let i = 0; i < size; i++) {
      maskPasssword=maskPasssword+"*";
    }
    return maskPasssword;
  }

}
