import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  public name="";
  public email="";
  public subject="";
  public students=[{name:"mrunal",email:"mrunal@gmail.com",subject:"m1"},{name:"mrunal",email:"mrunal@gmail.com",subject:"m1"}];
  constructor() { }

  ngOnInit(): void {
  }

}
