import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  public Fname=" ";
  public Mname=" ";
  public Lname=" ";
  constructor() { }

  ngOnInit(): void {
  }

}
