import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  private extractTag = (x: any): string => {
    const { tag_name } = x;
    return tag_name;
  };

  public githubRelease$: Observable<string> = this.http
    .get('https://api.github.com/repos/projectaki/portfolio/releases/latest')
    .pipe(map(this.extractTag), shareReplay(1));
}
