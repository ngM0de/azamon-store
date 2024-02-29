import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'abstractToFormControl',
  standalone: true
})
export class AbstractToFormControlPipe implements PipeTransform {

  transform(abstractControl: AbstractControl): FormControl {
    return abstractControl as FormControl;
  }

}
