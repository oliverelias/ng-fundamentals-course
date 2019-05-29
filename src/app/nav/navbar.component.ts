import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 25px;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
