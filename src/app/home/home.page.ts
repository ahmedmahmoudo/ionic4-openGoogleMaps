import { Component } from "@angular/core";
import { openMapsWithDirection } from "src/mapsHelper";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}

  mapsButtonClicked() {
    openMapsWithDirection(37.322778, -122.031944);
  }
}
