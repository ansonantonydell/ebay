import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { Page1Component} from './page1/page1.component';
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { Page4Component } from "./page4/page4.component";
import { Page5Component } from "./page5/page5.component";
import { Page6Component } from "./page6/page6.component";
import { Page7Component } from "./page7/page7.component";
import { Page8Component } from "./page8/page8.component";
import { Page9Component } from "./page9/page9.component";
const routes:Routes = [
    {path: 'institution', component: Page1Component },
    {path:'admission', component: Page2Component},
    {path:'academics', component: Page3Component},
    {path:'student', component: Page4Component},
    {path:'reserch&consultancy', component: Page5Component},
    {path:'prakashabavan', component: Page6Component},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}