import { Injectable } from '@angular/core';
import { MedicationsComponent } from '../medications/medications.component';
import { VisitHistoryComponent } from '../visit-history/visit-history.component';

@Injectable()
export class WidgetService {
    setWidgetLayout(): Array<any> {
        const array = [new VisitHistoryComponent(), new MedicationsComponent()];

        return array.sort(a => a.widgetState.rowNumber);
    }
}
