import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NowPlaying, Movie } from '../interfaces/cartelera-response';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/movie-details';
import { Credits, Cast } from '../interfaces/credits-response';
import { TopRated } from '../interfaces/toprated';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  movies:Movie[]=[];
  public cargando:boolean = false;

  constructor(private http:HttpClient) { }

  get params(){
    return {
      api_key:'0441c4db2a92748936c3e9dddc8a3b2c',
      language:'en',
      page: this.carteleraPage.toString()
    }
  }

  getCartelera():Observable<Movie[]>{
    if (this.cargando){
      return of([]);
    }

    /* if (this.movies.length > 0){
      return of(this.movies);
    } */

    this.cargando = true;

    return this.http.get<NowPlaying>(`${this.baseURL}/movie/now_playing`,{
                  params:this.params
                })
                .pipe(
                  map(resp=>resp.results),
                  tap((/* resp */)=>{
                    /* this.movies = resp; */
                    this.carteleraPage += 1;
                    this.cargando = false;
                  })
                )
  }

  get peliculas(){
    return this.movies;
  }

  buscarPelicula(texto:string):Observable<Movie[]>{
    const params = { ...this.params, page: '1', query:texto, include_adult:'false' }

    return this.http.get<NowPlaying>(`${this.baseURL}/search/movie`,{
      params
    })
    .pipe(
      map(resp=>resp.results)
    )
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getPeliculaDetalle(id:string){
    return this.http.get<MovieDetails>(`${this.baseURL}/movie/${id}`,{
      params:this.params
    })
    .pipe(
      catchError(err=>of(null))
    )
  }

  getCast(id:string):Observable<Cast[]>{
    return this.http.get<Credits>(`${this.baseURL}/movie/${id}/credits`,{
      params:this.params
    })
    .pipe(
      map(resp=>resp.cast),
      catchError(err=>of(null))
    )
  }

  getTopRated():Observable<TopRated>{
    return this.http.get<TopRated>(`${this.baseURL}/movie/top_rated`,{
      params:this.params
    })
  }

}

