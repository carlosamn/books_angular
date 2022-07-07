import { Component, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Logos, Nav } from '../util';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerCloser } from './../util';

@Component({
  selector: 'app-genetec-nav',
  templateUrl: './genetec-nav.component.html',
  styleUrls: ['./genetec-nav.component.scss'],
})
export class GenetecNavComponent {
  Navigation = Nav;
  Logos = Logos;

  @ViewChild('drawer')
  el!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  @HostListener('click', ['$event.target'])
  onClick(classname: Element) {
    const className = (classname as Element).className;
    if (className === DrawerCloser.ICON || className === DrawerCloser.ITEM) {
      this.el.close();
    }
  }
}
