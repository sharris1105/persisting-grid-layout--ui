import { Component, OnInit } from '@angular/core';
import { WidgetStateModel } from '../widget-state.model';

@Component({
    selector: 'app-visit-history',
    templateUrl: './visit-history.component.html',
    styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {

    widgetState: WidgetStateModel = {
        storageKey: 'visit-history',
        rowNumber: 0,
        isVisible: true,
        height: 100
    };

    constructor() { }

    ngOnInit(): void {
    }
}
