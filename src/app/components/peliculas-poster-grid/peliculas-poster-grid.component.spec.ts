import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPosterGridComponent } from './peliculas-poster-grid.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Movie } from '../../interfaces/cartelera-response';

describe('PeliculasPosterGridComponent', () => {
  let component: PeliculasPosterGridComponent;
  let fixture: ComponentFixture<PeliculasPosterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PeliculasPosterGridComponent        
      ],
      imports: [ 
        PipesModule, 
        RatingModule,
        RouterModule.forRoot([])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
