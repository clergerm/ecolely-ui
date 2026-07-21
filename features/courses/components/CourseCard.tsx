/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { Course } from '../types/course';

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <article className="rounded-xl border bg-white p-6 transition hover:shadow-md">
      <h3 className="mt-2 text-xl font-semibold text-gray-900">
        {course.title}
      </h3>

      <p className="mt-3 text-gray-600">{course.description}</p>
    </article>
  );
}
