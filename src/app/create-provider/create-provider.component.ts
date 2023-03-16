import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent {
constructor(private router:Router) {
}
  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
  goToProfile(){
    this.router.navigate(['/showProfile'])
  }
  goToEditProfile(){
    this.router.navigate(['/changeInfo'])
  }
  goToProvider(){
    this.router.navigate(['/supplier'])
  }
}
