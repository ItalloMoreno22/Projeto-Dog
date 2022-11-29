
import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Messa } from '../message';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DOGComponent implements OnInit {

  constructor(private getservice: DogsService) { }

  dg?:Messa

  ngOnInit(): void {
    this.View();
  }

  View(){
    this.getservice.msDog().subscribe(dog => this.dg = dog)
  }

}
