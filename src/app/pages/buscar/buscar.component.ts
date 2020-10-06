import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  movies:Movie[]=[];
  busqueda:string;

  constructor(private activatedRoute:ActivatedRoute, private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({texto})=>{      
      this.busqueda = texto;
      this.peliculasService.buscarPelicula(texto).subscribe(movies=>{
        /* console.log(movies); */
        this.movies = movies;
      })
    })
  }

}
