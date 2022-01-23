import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../core/services/layout.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isScreenSmall!: boolean;
  private unsub$ = new Subject<void>();

  constructor(private layoutService: LayoutService, private breakPoinbObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPoinbObserver
      // .observe([Breakpoints.XSmall])
      .observe([` (max-width: ${720}px)`])
      .subscribe((state: BreakpointState) => (this.isScreenSmall = state.matches));
  }

  ngAfterViewInit(): void {
    this.layoutService.toggleSidenav$.pipe(takeUntil(this.unsub$)).subscribe(() => this.sidenav.toggle());
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  handleSelection() {
    if (this.isScreenSmall) {
      this.sidenav.close();
    }
  }
}
