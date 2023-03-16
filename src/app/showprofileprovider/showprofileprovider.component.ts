import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showprofileprovider',
  templateUrl: './showprofileprovider.component.html',
  styleUrls: ['./showprofileprovider.component.css']
})
export class ShowprofileproviderComponent {
constructor(private router:Router) {
}
  logout(){
    localStorage.clear();
    this.router.navigate([''])
  };
  goToProfile(){
    this.router.navigate(['/showProfile'])
  };
  goToEditProfile(){
    this.router.navigate(['/changeInfo'])
  }
  goToProvider(){
    this.router.navigate(['/supplier'])
  };
}
