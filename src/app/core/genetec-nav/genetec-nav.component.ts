import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Logos, Nav } from '../util';

@Component({
  selector: 'app-genetec-nav',
  templateUrl: './genetec-nav.component.html',
  styleUrls: ['./genetec-nav.component.scss'],
})
export class GenetecNavComponent {
  Navigation = Nav;
  Logos = Logos;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
