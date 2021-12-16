
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const App_routes: Routes = [
    {path : 'loginpage', component: LoginpageComponent},
    { path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(App_routes);