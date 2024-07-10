import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prod-dialog',
  templateUrl: './prod-dialog.component.html',
  styleUrls: ['./prod-dialog.component.scss']
})
export class ProdDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<ProdDialogComponent>
  ) { }

  ngOnInit(): void {
  }

}
