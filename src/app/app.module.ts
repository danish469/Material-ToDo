import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MatButtonModule } from "@angular/material/button";
import { TodosComponent } from "./todos/todos.component";
import { MaterialModule } from "./material/material.module";
@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MaterialModule],
  declarations: [AppComponent, HelloComponent, TodosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
