import { Component, OnInit } from '@angular/core';
import { GeneralapiService } from '../../services/generalapi.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [NgClass],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.scss'
})
export class DetailspageComponent implements OnInit {
  constructor(private service: GeneralapiService, private http: ActivatedRoute) { }

  userData: any = {
    userId: '',
    id: '',
    title: '',
    body: ''
  };
  ngOnInit(): void {
    this.mysingledata();
  }

  mysingledata() {
    const id = this.http.snapshot.paramMap.get('id');
    this.service.getsingledata(id).subscribe((data) => {
      console.log(data);
      this.userData = data;
    })
  }


}
