import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { TopComponent } from './top/top.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    HomeComponent, 
    PeliculasComponent,     
    BuscarComponent, TopComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RatingModule,
    PipesModule,
    NgxPageScrollCoreModule
  ]
})
export class PagesModule { }
