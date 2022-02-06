import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version!: string;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.githubRelease$.subscribe(v => (this.version = v));
  }
}
