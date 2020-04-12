import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ServiceService]
})
export class UserComponent implements OnInit {

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.postUser(form.value).subscribe(
      res => {},
      err => {}
    );
  }

}
