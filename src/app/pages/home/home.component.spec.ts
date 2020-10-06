import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageScrollService } from 'ngx-page-scroll-core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent 
      ],
      imports: [
        ComponentsModule,
        HttpClientTestingModule
      ],
      providers: [
        PageScrollService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('el arreglo de movies debe tener algo', ()=>{//probando arreglos
    expect(component.movies).toBeGreaterThan(1);
  })

  it('la variable pantalla debe tener un valor now o top', ()=>{//probando strings
    const pant = component.pantalla;
    console.log(pant);
    expect(pant).toContain('now');

  })

  it('El scroll debe ser falso',()=>{
    expect(component.scroll).toBeFalsy();
  })
});