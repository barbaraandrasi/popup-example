import { Component } from '@angular/core'
import { DialogService } from './dialog/dialog.service'
import { ExampleComponent } from './example/example.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: DialogService) {
    const ref = this.dialog.open(ExampleComponent, {
      data: { title: 'Title', content: "Content"},
    })

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result)
    })
  }
}
