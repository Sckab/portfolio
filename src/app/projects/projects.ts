import { Component } from '@angular/core'
import { Card } from './card/card'

@Component({
  selector: 'pf-projects',
  imports: [
    Card,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
