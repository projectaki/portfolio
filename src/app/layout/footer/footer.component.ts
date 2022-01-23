import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version!: string;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.githubRelease$.subscribe(v => (this.version = v));
  }
}
