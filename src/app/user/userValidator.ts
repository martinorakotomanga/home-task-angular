import { AbstractControl } from "@angular/forms";

export class userValidator {
    public static matriculeValidator(c: AbstractControl): { [key: string ]: boolean } | null {

        if(!/^[0-9]{5,5}$/.test(c.value)) {
            return { 'isNotMatricule': true }
        }

        return null;
    }
}