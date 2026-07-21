/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { getCourses } from '../services/course.service';

import CourseList from './CourseList';

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="w-full py-20">
      <section>
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            All Courses
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Explore all available courses designed to help students learn, grow,
            and achieve their goals.
          </p>

          <div className="mt-10">
            <CourseList courses={courses} />
          </div>
        </div>
      </section>
    </main>
  );
}
