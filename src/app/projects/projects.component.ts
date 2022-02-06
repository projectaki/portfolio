import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Project } from './project-card/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      title: 'Todo app',
      description: 'This is a fullstack todo app. With database, backend, frontend and authentication.',
      link: 'https://spring-mongo-react.herokuapp.com/#/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' },
        { name: 'MongoDb', url: 'https://img.shields.io/badge/MongoDB-4ea94b.svg?logo=mongodb&logoColor=white' },
        { name: 'Auth0', url: 'https://img.shields.io/badge/-Auth0-FF6700?logo=auth0&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Movie app',
      description: 'This is an app using an external movie api to display movies and series.',
      link: 'https://projectaki.github.io/movie-react/#/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Pathfinder',
      description: 'This is a visualisation app for pathfinder algorithms using variations of BFS/DFS.',
      link: 'https://projectaki.github.io/pathfinder/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Towers of Hanoi',
      description: 'This is a visualisation app for solving the towers of hanoi using recursion.',
      link: 'https://projectaki.github.io/hanoi_vis/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Sorting visualiser',
      description: 'This is a visualisation app for two different sorting algorithms.',
      link: 'https://projectaki.github.io/sorting_vis/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Sudoku solver',
      description: 'This is an app which will solve a sudoku provided as a txt file.',
      link: 'https://projectaki.github.io/sudoku_vis/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Password hasher (no ui)',
      description: 'This project is a Java implementation of PBKDF2 algorithm using SHA-512 hashing to hash passwords.',
      link: 'https://github.com/projectaki/Hashing',
      technologies: [{ name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' }],
    },
    {
      title: 'Old portfolio',
      description: 'This is the first implementation of my portfolio. It has more animations, but is not so clean.',
      link: 'https://projectaki.github.io/portfolio_akos_madarasz/#/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
  ];
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Projects');
    this.meta.addTags([
      { name: 'description', content: "Projects page for Akos's portfolio! Project descriptions!" },
      { name: 'keywords', content: 'Projects, Akos, Madarasz' },
    ]);
  }
}
