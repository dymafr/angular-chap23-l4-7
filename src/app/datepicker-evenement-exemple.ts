import { Component } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

@Component({
  selector: "datepicker-evenement-exemple",
  templateUrl: "datepicker-evenement-exemple.html"
})
export class DatepickerEvenementExemple {
  evenements: string[] = [];

  ajouterEvenement(type: string, evenement: MatDatepickerInputEvent<Date>) {
    this.evenements.push(`${type}: ${evenement.value}`);
  }
}
