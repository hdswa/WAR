import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: JobsComponent }
    ])],
    exports: [RouterModule]
})
export class JobsRoutingModule { }
