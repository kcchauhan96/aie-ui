import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/landing-page']);
  }

}
