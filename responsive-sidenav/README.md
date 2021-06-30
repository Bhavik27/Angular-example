# ResponsiveSidenav

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5. and [Angular Material](https://material.angular.io) version 12.0.5.

![](https://github.com/Bhavik27/Angular-example/blob/main/responsive-sidenav/screen-capture.gif)

### ```BreakpointObserver``` and ```ChangeDetectorRef``` used to make Angular Material sidenav responsive

*app.component.ts*
```
@ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
    private cdkRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdkRef.detectChanges()
  }
```

*app.component.html*
```
<mat-toolbar class="mat-elevation-z8">
  <button mat-icon-button *ngIf="sidenav.mode === 'over'" (click)="sidenav.toggle()">
    <mat-icon *ngIf="!sidenav.opened">
      menu
    </mat-icon>
    <mat-icon *ngIf="sidenav.opened">
      close
    </mat-icon>
  </button>
  My App
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav #sidenav="matSidenav">

    <mat-nav-list>
    ....
    </mat-nav-list>

  </mat-sidenav>
  <mat-sidenav-content>
    <div>
      <router-outlet></router-outlet>
    </div>
  </mat-sidenav-content>
</mat-sidenav-container>
```

*styles.css*
```
.mat-toolbar{
    background-coloe: blue;
    color: #FFFFFF;
}

mat-sidenav-container,mat-sidenav-content div{
    height: calc(100vh - 65px);
}
mat-sidenav{
    width: 280px;
    min-width: 250px;
    background-color: white  !important;
}
```
