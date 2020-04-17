import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    if(this.service.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form: NgForm){
    this.service.login(form.value).subscribe(
      res => {
        this.service.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        console.log(err);
      }
    );
  }

}
