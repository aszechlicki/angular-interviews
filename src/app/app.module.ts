import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { JsComponent } from "../js/js.component";

@NgModule({
  declarations: [
    AppComponent,
    JsComponent,
    RouterModule.forRoot([
      {
        path: "js",
        component: JsComponent
      }
    ])
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
