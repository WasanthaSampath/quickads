import {ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import{UserComponent} from './components/user.component';
import{IndexComponent} from './components/index.component';

const appRoutes: Routes=[
    {
        path:'',
        component:IndexComponent
    }
    ,
    {
        path:'user',
        component: UserComponent
    }
]

export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);