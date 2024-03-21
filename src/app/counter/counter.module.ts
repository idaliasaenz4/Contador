import { NgModel } from "@angular/forms";
import { counterComponent } from './counter.component';
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({

    declarations: [counterComponent,ButtonAddComponent,ButtonDisComponent],
    imports: [CommonModule],
    exports: [counterComponent],
    
})
export class CounterModule{

}