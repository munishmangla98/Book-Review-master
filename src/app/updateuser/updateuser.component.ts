import { Component } from '@angular/core';
import { user_signup } from '../data_type';
import { ActivatedRoute } from '@angular/router';
import { UserSignupService } from '../servives/user_signup.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  userdata: undefined | user_signup;
  userUpdatedMessage:undefined | string;

  
  constructor(private route: ActivatedRoute, private user: UserSignupService) { }
  ngOnInit(): void {
    let user_signupId = this.route.snapshot.paramMap.get('id')
    user_signupId && this.user.getuser(user_signupId).subscribe((data) => {
      console.warn(data);
      this.userdata = data
    })
  }
  
  userUpdate(data: user_signup): void {
    console.warn(data);
    if(this.userdata){
      data.id=this.userdata.id;
    }
    this.user.updated_user(data).subscribe((result)=>{
      if(result){
        this.userUpdatedMessage="user updated";
      }
    });
    setTimeout(() => {
      this.userUpdatedMessage=undefined;
    }, 3000);
  }
}
