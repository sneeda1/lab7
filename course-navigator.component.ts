import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/CourseService';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses:[];
  selectedCourse = {
    modules: []
  }
  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course: never) {
    this.selectedCourse = course;

  }
  selectModule(module: any){
    this.selectModule = module;
  }

selectLesson(lesson: any ){
  this.selectLesson = lesson;
}
}
