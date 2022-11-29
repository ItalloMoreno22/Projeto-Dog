import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogz',
  templateUrl: './dogz.component.html',
  styleUrls: ['./dogz.component.css']
})
export class DogzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
