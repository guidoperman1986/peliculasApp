import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PeliculasService } from './peliculas.service';
import { Observable, empty } from 'rxjs';
/* import 'rxjs/add/observable/from'; */


describe('PeliculasService', () => {
  let service = new PeliculasService(null);


  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]

  }));

  it('should be created', () => {
    //const service: PeliculasService = TestBed.get(PeliculasService);
    service = TestBed.get(PeliculasService);
    expect(service).toBeTruthy();
  });

  xit('cargar las movies de cartelera', ()=>{
      const espia = spyOn(service,'getCartelera').and.callFake(()=>{
        return empty();

      })

      expect(espia).toHaveBeenCalled();
  });

});

