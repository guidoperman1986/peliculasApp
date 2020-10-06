import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';
import { TopRated } from '../../interfaces/toprated';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[]=[];
  moviesSlideShow: Movie[]=[];
  pantalla:string = 'now';
  topMovies:TopRated;
  scroll:boolean;

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max){
      if (this.peliculasService.cargando) return;

      this.peliculasService.getCartelera().subscribe(movies=>{
        this.movies.push(...movies);
      })
    }

  }

  constructor(private peliculasService:PeliculasService/* , private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any  */) { 
    fromEvent(window,'scroll')
      .pipe(
        tap(() => {this.scroll = true}),
        debounceTime(3000)
      )
      .subscribe(()=>this.scroll = false)
  }

  ngOnDestroy(): void {
    this.peliculasService.resetCarteleraPage();
  }

  ngOnInit() {
    this.peliculasService.getCartelera().subscribe(movies=>{      
      this.movies = movies;    
      this.moviesSlideShow = movies;  
    });

    this.peliculasService.getTopRated()
        .subscribe(top=>{
          this.topMovies=top;
          console.log(top)
        })    
  }

  mostrar(page:string){
    this.pantalla = page;
  }

  getToTheTop(){
    /* console.log('toco'); */
    /* this.pageScrollService.scroll({ */
    /*   document: this.document, */
    /*   scrollTarget: '#tabs', */
    /*   speed:2000 */
    /* }); */
  }

}
