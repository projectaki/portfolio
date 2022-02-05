import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PrimeIcons } from 'primeng/api';
import { TimeLineItem } from '../shared/timeline/timeline-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile');
    this.meta.addTags([
      { name: 'description', content: "Profile page for Akos's portfolio!" },
      { name: 'keywords', content: 'Profile, Akos, Madarasz' },
    ]);
  }

  workItems: TimeLineItem[] = [
    {
      date: 'January 2021 - March 2021',
      icon: PrimeIcons.BRIEFCASE,
      description:
        'Analyse, clean and transform big data. Energy consumption data for different households. The project is to try different Machine learning algorithms for similarity search in consumptions patterns. Algorithms: KNN with inverted index using cosine similarity, using kd-tree with different distance metrics.',
      title: 'Data Scienctist internship - DTU Coppenhagen',
    },
    {
      date: 'September 2020 - November 2020',
      icon: PrimeIcons.BRIEFCASE,
      description:
        'Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.',
      title: 'Part-time student programmer - University College of Northern Denmark',
    },
    {
      date: 'August 2019 - December 2019',
      icon: PrimeIcons.BRIEFCASE,
      description:
        'Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.',
      title: 'Part-time Data analyst - Dolle A/S',
    },
    {
      date: 'April 2021 - Today',
      icon: PrimeIcons.BRIEFCASE,
      description:
        'Develop a security risk assesment platform. Full-stack responsibilities, including Frontend, Backend, Database and Cloud. Technologies used: Angular, .NET Core, MSSQL and Azure.',
      title: 'Full-time developer - Human Risks',
    },
  ];

  educationItems: TimeLineItem[] = [
    {
      date: 'February 2020 - June 2021, Aalborg',
      icon: PrimeIcons.BOOK,
      description: '',
      title: 'Bachelor`s degree in Software Development - University College of Northern Denmark',
    },
    {
      date: 'August 2017 – February 2020, Aalborg',
      icon: PrimeIcons.BOOK,
      description: '',
      title: 'Academy Profession Degree in Computer Science - University College of Northern Denmark',
    },
  ];
}
