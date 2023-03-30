import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  allCharacters: any;
  
  constructor(private rms: RickAndMortyService) {}

  ngOnInit(): void {
      this.rms.getAllCharacter().then(res =>{
        console.log("Desde el component: ",res);
        this.allCharacters = res

      }).catch(any =>{
        console.log(any);
      });
  }
}
