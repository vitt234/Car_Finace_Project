import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    // if (u.username === "oe" && u.password === "oe") {
    //   console.log("in oe");
    //   sessionStorage.setItem("role", "oe");
    //   this.router.navigateByUrl("role/oe/oedashboard");
    // }
    // if (u.username === "re" && u.password === "re") {
    //   console.log("in re");
    //   sessionStorage.setItem("role", "re");
    //   this.router.navigateByUrl("role/re/redashboard");
    // }
    // if (u.username === "bm" && u.password === "bm") {
    //   console.log("in bm");
    //   sessionStorage.setItem("role", "bm");
    //   this.router.navigateByUrl("role/bm/bmdashboard");
    // }
    // if (u.username === "cm" && u.password === "cm") {
    //   console.log("in cm");
    //   sessionStorage.setItem("role", "cm");
    //   this.router.navigateByUrl("role/cm/cmdashboard");
    // }
    // if (u.username === "ah" && u.password === "ah") {
    //   console.log("in ah");
    //   sessionStorage.setItem("role", "ah");
    //   this.router.navigateByUrl("role/ah/ahdashboard");
    // }
    if (u.username === 'ad' && u.password === 'ad') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl("role/admin/adminbash");
    }
    if (u.username === 'emp' && u.password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl("role/emp/empdash");
    }

    if (u.username === 're' && u.password === 're') {
      console.log('in emp');
      sessionStorage.setItem('role', 're');
      this.router.navigateByUrl("role/re/re");
    }

    if (u.username === 'oe' && u.password === 'oe') {
      console.log('in emp');
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl("role/oe/custDetails");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log('in emp');
      sessionStorage.setItem('role', 'cm');
      this.router.navigateByUrl("role/cm/cm");
    }
    if (u.username === 'ah' && u.password === 'ah') {
      console.log('in emp');
      sessionStorage.setItem('role', 'ah');
      this.router.navigateByUrl("role/ah/ah");
    }


  }
  signup(u) {
    console.log("signup");
  }
}
