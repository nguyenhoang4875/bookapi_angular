import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BookComponent } from "./book/book.component";
import { BookService } from "./book/book.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
