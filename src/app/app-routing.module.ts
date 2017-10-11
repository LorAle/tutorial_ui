import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // local
    {
        path: '',
        redirectTo: 'persons',
        pathMatch: 'full'
    },
    // local/persons
    {
        path: 'persons',
        loadChildren: './person/person.module#PersonModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
