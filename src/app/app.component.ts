import { Component } from '@angular/core';
import { Profile } from './models/profile';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myappCRUD';
  profiles:Profile[] = []

  constructor(private ProfileServ:ProfileService) {
    console.log(ProfileServ.getProfiles().subscribe(res=>this.profiles=res)
    )
  }
}
