import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataGridService, Order } from './data-grid.service';
import { LayoutStateService } from './layout-state.service';

@Component({
    selector: 'app-data-grid',
    templateUrl: './data-grid.component.html',
    styleUrls: ['./data-grid.component.scss'],
    providers: [DataGridService]
})
export class DataGridComponent implements OnInit {

    orders: Array<Order>;

    constructor(private service: DataGridService, private httpClient: HttpClient, private layoutStateService: LayoutStateService) {
        this.orders = service.getDataSource();
    }

    ngOnInit(): void {
    }

    loadState(): Promise<any> {
        const gridPromise = new Promise<Object>(resolve => {
            resolve(JSON.parse(localStorage.getItem('custom-grid-state')));
        });

        return gridPromise;
    }

    saveState = state => {
        console.log(state);
        console.log(JSON.stringify(state));
        localStorage.setItem('custom-grid-state', JSON.stringify(state));
        this.layoutStateService.sendStorageRequest('custom-grid-state', 'json', 'Patch', state);
    };
}
