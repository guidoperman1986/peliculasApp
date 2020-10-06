import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public movie:MovieDetails;
  public cast: Cast[]=[];

  constructor(private activatedRoute:ActivatedRoute, private peliculasService:PeliculasService, private location:Location, private router:Router) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id)
    ]).subscribe(([movie,cast])=>{
      if (null) {//validacion si el codigo de pelicula es erroneo
        this.router.navigateByUrl('/home');
        return;
      }
      
      this.movie = movie;
      this.cast = cast.filter(c=>c.profile_path !== null);
    })


    //this.peliculasService.getPeliculaDetalle(id).subscribe(movie=>{      
    //  if (null) {
    //    this.router.navigateByUrl('/home');
    //    return;
    //  }
    //  this.movie = movie;
    //})
//
    //this.peliculasService.getCast(id).subscribe(cast=>{
    //  this.cast = cast.filter(c=>c.profile_path !== null);
    //})




  }

  regresar(){
    this.location.back();
  }

}
