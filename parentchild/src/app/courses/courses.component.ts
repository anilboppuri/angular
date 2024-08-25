import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses = [
    {
      id: 101,
      name: 'Thinking in Java',
      author: 'Bruce Eckel',
      duration: '40',
      type: 'Free',
      price: 0,
      ratings: 4.9,
      image: '',
      decription: 'For beginners to Java OO programming',
    },
    {
      id: 102,
      name: 'Java 8',
      author: 'Josh Lang',
      duration: '30',
      type: 'Premium',
      price: 120,
      ratings: 5.0,
      image: '',
      decription: 'Lambdas, Streams, Metho Refs and Otionals',
    },
    {
      id: 103,
      name: 'Spring 6.0',
      author: 'Rod Johnson',
      duration: '60',
      type: 'Premium',
      price: 200,
      ratings: 5.0,
      image: '',
      decription: 'Spring React and Web Flux ',
    },
    {
      id: 104,
      name: 'Hibernate ORM 5.0',
      author: 'Gavin King',
      duration: '30',
      type: 'Premium',
      price: 250,
      ratings: 4.8,
      image: '',
      decription: 'Complete ORM for Professionals',
    },
    {
      id: 105,
      name: 'Jenkins CI/CD',
      author: 'Dan Vega',
      duration: '120',
      type: 'Premium',
      price: 0,
      ratings: 4.0,
      image: '',
      decription: 'CI/CD Fundamentals for all Developers',
    },
    {
      id: 106,
      name: 'Docker Containerization',
      author: 'Barbara',
      duration: '45',
      type: 'Premium',
      price: 150,
      ratings: 5.0,
      image: '',
      decription: 'Docker for moder development and delivery',
    },
    {
      id: 107,
      name: 'Kubernetes',
      author: 'Larry Page',
      duration: '50',
      type: 'Premium',
      price: 300,
      ratings: 5.0,
      image: '',
      decription: 'Container Orchestration for Professionals',
    },
    {
      id: 108,
      name: 'Cloud Computing with AWS',
      author: 'Jeff Bezoz',
      duration: '200',
      type: 'Free',
      price: 0,
      ratings: 5.0,
      image: '',
      decription: 'All you need to know about AWS Cloud',
    },
    {
      id: 109,
      name: 'Angular 15',
      author: 'Json Larson',
      duration: '200',
      type: 'Premium',
      price: 400,
      ratings: 5.0,
      image: '',
      decription: 'Angular Framework for profesionals',
    },
  ];
  premCourses: any[] = [];

  getCoursesCount() {
    return this.courses.length;
  }

  getFreeCoursesCount() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }

  getPremiumCoursesCount() {
    this.premCourses = this.courses.filter((course) => {
      return course.type === 'Premium';
    });
    return this.premCourses.length;
  }

  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
    console.log(this, this.courseCountRadioButton);
  }
 searchText: string ="";
  onSearchTextEntered(searchText:string){

     this.searchText= searchText;
  }
}

// {
//   id: 0,
//   name: '',
//   author: '',
//   duration: '',
//   type: '',
//   price: 0,
//   ratings: 0.0,
//   image: '',
//   decription: '',
// },
