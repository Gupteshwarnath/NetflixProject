import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetflixProject';
  navbg:any;
  @HostListener('document:scroll')scrolover(){
    console.log(document.body.scrollTop,'scrollength#');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg={
        'background-color':'#000000'
      }
    }else
    {
      this.navbg={}
    }
  }
}