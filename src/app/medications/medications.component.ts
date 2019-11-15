import { Component, OnInit } from '@angular/core';
import { WidgetStateModel } from '../widget-state.model';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {

  widgetState: WidgetStateModel = {
    storageKey: 'visit-history',
    rowNumber: 1,
    isVisible: true,
    height: 50
  };

  constructor() { }

  ngOnInit(): void {
  }
}
