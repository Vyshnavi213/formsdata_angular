import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    }
}



//Validator functions accepts only one parameter at a time
//so we are creating a factory function which accepts a string as a parameter and returns the validator function itself