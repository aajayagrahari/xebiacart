import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../model/user.model';
import { AppService } from '../appService/app.service';
import { StorageSevice } from '../appService/storage.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [AppService,StorageSevice],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'xebiacart';
  public userdata = new Users();
  constructor(private _appservice: AppService,public _storageservice: StorageSevice,protected _route: Router) {
   
  }

  ngOnInit(): void {
    
  }

  ValidateUser(params){
    this._appservice.ValidateUser(params.username).subscribe((result) => {
      if (result.ErrorCode != undefined) {
        alert('failed')
      }
      else {
        this._storageservice.save("Login", "true");
        this._storageservice.save("UserName", result[0].fullName);
        this._route.navigate(['/home']);
      }
      
  });
  }

}
