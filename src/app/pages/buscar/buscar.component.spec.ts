import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComponent } from './buscar.component';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuscarComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarComponent ],
      imports: [ 
        ComponentsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('la busqueda debe contener algo',()=>{
    component.busqueda = 'Star Trek';
    /* expect(component.busqueda).toEqual('Star Trek'); */
    expect(component.busqueda).not.toBe('');
  })
});
