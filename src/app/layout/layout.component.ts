import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../core/services/layout.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isScreenSmall!: boolean;

  constructor(private layoutService: LayoutService, private breakPoinbObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPoinbObserver
      // .observe([Breakpoints.XSmall])
      .observe([` (max-width: ${720}px)`])
      .subscribe((state: BreakpointState) => (this.isScreenSmall = state.matches));
  }

  ngAfterViewInit(): void {
    this.layoutService.toggleSidenav$.subscribe(() => this.sidenav.toggle());
  }
}
