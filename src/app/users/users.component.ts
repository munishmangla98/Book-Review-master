import { Component } from '@angular/core';
import { UserSignupService } from '../servives/user_signup.service';
import { user_signup } from '../data_type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
userlist:undefined | user_signup[];
usermessage :undefined|string;


  constructor(private user:UserSignupService){}
  ngOnInit(data: user_signup):void{
    this.user_deleted_Update_list(data);
  }
  deleteuser(id:string):void{
    // console.warn("test id", id)
    this.user.deleteUser(id).subscribe((result)=>{
    if(result){
      this.usermessage="user delete";
      // this.user_deleted_Update_list(data:user_signup);
      }
    })


    setTimeout(() => {
      this.usermessage=undefined;
    }, 2000);
  }

  user_deleted_Update_list(data:user_signup):void{
    this.user.userlist(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.userlist=result;
      }
    })
  }
}
