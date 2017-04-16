import {NgModule} from '@angular/core';
import {ProductFilterPipe} from './product-filter.Pipe';
import{ ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';


@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ]

})
export class ProductModule{

}