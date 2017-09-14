import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('About Hirely.me');

    meta.addTags([
      { name: 'author', content: 'About Hirely.me!'},
      { name: 'keywords', content: 'curated freelance marketplace, freelancers, hire freelancers'},
      { name: 'description', content: 'About me page of Hirely.me is an freelance market place!'}
    ]);
  }

  ngOnInit() {
  }

}
