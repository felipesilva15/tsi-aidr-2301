import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  data: Date = new Date();

  ngOnInit():void{
    setInterval(() => {
      this.data = new Date();
    }, 1000);
  }
}
