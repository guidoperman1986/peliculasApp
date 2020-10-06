import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSlideshowComponent } from './cast-slideshow.component';
import { ComponentsModule } from '../components.module';
import { APP_BASE_HREF } from '@angular/common';

describe('CastSlideshowComponent', () => {
  let component: CastSlideshowComponent;
  let fixture: ComponentFixture<CastSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        /* CastSlideshowComponent */ 
      ],
      imports: [
        ComponentsModule,
        
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
