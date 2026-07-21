/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { Course } from '../types/course';

import CourseCard from './CourseCard';

interface Props {
  courses: Course[];
}

export default function CourseList({ courses }: Props) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
