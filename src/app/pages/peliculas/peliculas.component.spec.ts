import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasComponent } from './peliculas.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasComponent ],
      imports: [
        PipesModule,
        RatingModule,
        ComponentsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
