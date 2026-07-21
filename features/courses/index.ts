/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

export { default as CoursesPage } from './components/CoursesPage';

export { default as FeaturedCourses } from './components/FeaturedCourses';

export { default as CourseList } from './components/CourseList';

export { default as CourseCard } from './components/CourseCard';

export { getCourses, getFeaturedCourses } from './services/course.service';

export type { Course } from './types/course';
