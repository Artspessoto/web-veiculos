import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web-angular';

  controller = false;
  urls = ['/veiculo-index', '/veiculo-create', '/home', '/veiculo-edit'];

  constructor(private router: Router) {
    router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (this.urls.includes(value.url)) this.controller = true;
      }
    });
  }
  ngOnInit(): void {}
}
