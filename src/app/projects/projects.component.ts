import { Component } from '@angular/core';
import { Project } from './project-card/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      title: 'Movie app',
      description: 'This is an app using an external movie api to display movies and series.',
      link: 'https://projectaki.github.io/movie-react/#/',
    },
    {
      title: 'Pathfinder',
      description: 'This is a visualisation app for pathfinder algorithms using variations of BFS/DFS.',
      link: 'https://projectaki.github.io/pathfinder/',
    },
    {
      title: 'Towers of Hanoi',
      description: 'This is a visualisation app for solving the towers of hanoi using recursion.',
      link: 'https://projectaki.github.io/hanoi_vis/',
    },
    {
      title: 'Sorting visualiser',
      description: 'This is a visualisation app for two different sorting algorithms.',
      link: 'https://projectaki.github.io/sorting_vis/',
    },
    {
      title: 'Sudoku solver',
      description: 'This is an app which will solve a sudoku provided as a txt file.',
      link: 'https://projectaki.github.io/sudoku_vis/',
    },
    {
      title: 'Todo app',
      description: 'This is a fullstack todo app. With database, backend, frontend and authentication.',
      link: 'https://spring-mongo-react.herokuapp.com/#/',
    },
    {
      title: 'Password hasher (no ui)',
      description: 'This project is a Java implementation of PBKDF2 algorithm using SHA-512 hashing to hash passwords.',
      link: 'https://github.com/projectaki/Hashing',
    },
  ];
  constructor() {}
}
