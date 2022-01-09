import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notification-dialog';
  dialogData = [
    { messageType: 'Success', message: 'Your record saved successfully.', icon: 'check_circle_outline', class: 'success-primary' },
    { messageType: 'Warning', message: 'Your record will be conflicted.', icon: 'warning', class: 'warning-primary' },
    { messageType: 'Error', message: 'Your record saved failed.', icon: 'error_outline', class: 'error-primary' }
  ]

  constructor(public dialog: MatDialog) { }

  openDialog(index: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.dialogData[index]
    });
    // dialogRef.afterOpened().subscribe(_ => {
    //   setTimeout(() => {
    //      dialogRef.close();
    //   }, 2000)
    // })

  }

}
