import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
public iswarning=true;
public iserror=false;
  public abc={"bg-success":this.iswarning,"bg-danger":this.iserror};
  constructor() { }

  ngOnInit(): void {
  }

}
