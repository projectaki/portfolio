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
      title: 'Portfolio (repo)',
      description: 'Repo of this portfolio website. Using Angular, and hosted as static pages with Scully.',
      link: 'https://github.com/projectaki/portfolio',
      technologies: [
        {
          name: 'Angular',
          url: 'https://img.shields.io/badge/-Angular-dd1b16?logo=angular&logoColor=black&style=flat',
        },
        {
          name: 'JavaScript',
          url: 'https://img.shields.io/badge/-JavaScript-f7df1e?logo=javascript&logoColor=black&style=flat',
        },
        {
          name: 'Jest',
          url: 'https://img.shields.io/badge/Jest-white?logo=jest&logoColor=E60E88',
        },
        {
          name: 'MarkDown',
          url: 'https://img.shields.io/badge/Markdown-black?logo=markdown&logoColor=blue',
        },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Sales application backend (repo)',
      description:
        'NestJs backend built for fullstack sales application. GraphQL API, with mongodb atlas as cloud hosted data storage. Integrated authentiation with Auth0. Web scraping to get discount products, compare prices and send out emails to subscriptions.',
      link: 'https://github.com/projectaki/salesapp-nestjs',
      technologies: [
        {
          name: 'Angular',
          url: 'https://img.shields.io/badge/-Angular-dd1b16?logo=angular&logoColor=black&style=flat',
        },
        { name: 'Auth0', url: 'https://img.shields.io/badge/-Auth0-FF6700?logo=auth0&logoColor=black&style=flat' },
        { name: 'Rxjs', url: 'https://img.shields.io/badge/RxJs-E60E88?logo=reactivex&logoColor=white' },
        { name: 'GraphQL', url: 'https://img.shields.io/badge/GraphQL-161e26?logo=graphql&logoColor=e535ab' },
        { name: 'NestJs', url: 'https://img.shields.io/badge/NestJs-470610?logo=nestjs&logoColor=ea2845' },
        { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-4ea94b.svg?logo=mongodb&logoColor=white' },
      ],
    },
    {
      title: 'Sales application frontend (repo)',
      description:
        'Angular frontend for a fullstack sales application. Integration with Auth0, and state management with Ngrx.',
      link: 'https://github.com/projectaki/salesapp-angular',
      technologies: [
        {
          name: 'Angular',
          url: 'https://img.shields.io/badge/-Angular-dd1b16?logo=angular&logoColor=black&style=flat',
        },
        { name: 'Auth0', url: 'https://img.shields.io/badge/-Auth0-FF6700?logo=auth0&logoColor=black&style=flat' },
        { name: 'Rxjs', url: 'https://img.shields.io/badge/RxJs-E60E88?logo=reactivex&logoColor=white' },
      ],
    },
    {
      title: 'Auth0 user import (repo)',
      description:
        'This is a small code example of exporting users created with Microsoft Identity v2, into Auth0 user store.',
      link: 'https://github.com/projectaki/user-exports',
      technologies: [
        { name: 'C#', url: 'https://img.shields.io/badge/-C%23-9B4993?logo=C-sharp&logoColor=black&style=flat' },
        { name: 'Auth0', url: 'https://img.shields.io/badge/-Auth0-FF6700?logo=auth0&logoColor=black&style=flat' },
      ],
    },
    {
      title: 'Angular oidc (repo)',
      description:
        'Demo application connecting Angular with IDP using openId Connect, with angular-auth-oidc-client security library.',
      link: 'https://github.com/projectaki/oauth2-oidc',
      technologies: [
        {
          name: 'Angular',
          url: 'https://img.shields.io/badge/-Angular-dd1b16?logo=angular&logoColor=black&style=flat',
        },
        { name: 'Auth0', url: 'https://img.shields.io/badge/-Auth0-FF6700?logo=auth0&logoColor=black&style=flat' },
      ],
    },
    {
      title: 'Angular basics (repo)',
      description: 'Repo of basic angular concepts. Used when I was learning Angular.',
      link: 'https://github.com/projectaki/angular-base',
      technologies: [
        {
          name: 'Angular',
          url: 'https://img.shields.io/badge/-Angular-dd1b16?logo=angular&logoColor=black&style=flat',
        },
        { name: 'Rxjs', url: 'https://img.shields.io/badge/RxJs-E60E88?logo=reactivex&logoColor=white' },
      ],
    },
    {
      title: 'Old portfolio',
      description: 'This is the first implementation of my portfolio.',
      link: 'https://projectaki.github.io/portfolio_akos_madarasz/#/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
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
      title: 'Cosine similarity Python script (repo)',
      description: 'Python script for finding cosine similarity between movie descriptions.',
      link: 'https://github.com/projectaki/movie-REST-python',
      technologies: [
        { name: 'Python', url: 'https://img.shields.io/badge/Python-306998?logo=python&logoColor=FFD43B' },
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
      title: 'Sudoku solver UI',
      description: 'This is an app which will solve a sudoku provided as a txt file.',
      link: 'https://projectaki.github.io/sudoku_vis/',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        { name: 'Html', url: 'https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=e34c26' },
        { name: 'Css', url: 'https://img.shields.io/badge/CSS-white?logo=css3&logoColor=264de4' },
      ],
    },
    {
      title: 'Dancing link algorithm (Sudoku)',
      description:
        'The dancing links solution uses the Exact cover problem to solve the puzzle. It makes a cover matrix of 0s and 1s, with options, and constraint sets. Then an exact cover is found from the rows of options. The algorithm to find the exact cover is Donald Knuths Algorithm X, and the Data Structure for representing the cover matrix is a quadruply linked and circular list, which is also Donald Knuths technique.',
      link: 'https://github.com/projectaki/SudokuSolver',
      technologies: [{ name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' }],
    },
    {
      title: 'Javascript algorithms (repo)',
      description:
        'Some algorithms implemented in Javascript for react projects. For example: Min/Max Heap, Prefix Tree.',
      link: 'https://github.com/projectaki/javascript-react-methods',
      technologies: [
        { name: 'React', url: 'https://img.shields.io/badge/-React-1cb2f5?logo=react&logoColor=black&style=flat' },
        {
          name: 'JavaScript',
          url: 'https://img.shields.io/badge/-JavaScript-f7df1e?logo=javascript&logoColor=black&style=flat',
        },
      ],
    },
    {
      title: 'Password hasher (repo)',
      description: 'This project is a Java implementation of PBKDF2 algorithm using SHA-512 hashing to hash passwords.',
      link: 'https://github.com/projectaki/Hashing',
      technologies: [{ name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' }],
    },
    {
      title: 'Algorithms (repo)',
      description: 'Algorithm exsersize implemented in Java.',
      link: 'https://github.com/projectaki/Algorithms',
      technologies: [{ name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' }],
    },
    {
      title: 'Data Structures (repo)',
      description: 'Data structures implemented in Java.',
      link: 'https://github.com/projectaki/DataStructures',
      technologies: [{ name: 'Java', url: 'https://img.shields.io/badge/Java-white?logo=java&logoColor=e34c26' }],
    },
    {
      title: 'GTL_Project (repo)',
      description:
        'Library management system prototype using MVC in .NET Framework. SOLID Principles, Database security, DB Normalization.',
      link: 'https://github.com/projectaki/GTL_Project',
      technologies: [
        { name: 'C#', url: 'https://img.shields.io/badge/-C%23-9B4993?logo=C-sharp&logoColor=black&style=flat' },
        { name: 'SQL', url: 'https://img.shields.io/badge/MSSQL-gray?logo=microsoft-sql-server&logoColor=white' },
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
