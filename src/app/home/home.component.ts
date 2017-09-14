import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
  title.setTitle('hirely.me! freelance market place');

  meta.addTags([
    { name: 'author', content: 'Hirely.me!'},
    { name: 'keywords', content: 'curated freelance marketplace, freelancers, hire freelancers'},
    { name: 'description', content: 'Hirely.me is an freelance market place!'}
  ]);
}

  ngOnInit() {
  }

}
