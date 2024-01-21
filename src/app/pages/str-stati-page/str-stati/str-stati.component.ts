import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-str-stati',
  templateUrl: './str-stati.component.html',
  styleUrl: './str-stati.component.scss'
})
export class StrStatiComponent {
  constructor(private router: Router) {

  }

  goto_onlayn_kurs() {
    this.router.navigate(['/onlayn-kurs'])
  }
  goto_ochniy_kurs(){
    this.router.navigate(['/ochniy-kurs'])
  }
  goto_obuch_roliki(){
    this.router.navigate(['/free-learns'])
  }
  goto_vse_kursi(){
    this.router.navigate(['/vse-kursi'])
  }
  goto_paid_roliks(){
    this.router.navigate(['/paid-roliks'])
  }

  goto_O_Nas(){
    this.router.navigate(['/o-nas'])
  }
  goto_Otzivi(){
    this.router.navigate(['/otzivi'])
  }
  goto_str_stati(){
    this.router.navigate(['/str-stati'])
  }
}
