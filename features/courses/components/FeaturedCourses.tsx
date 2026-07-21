/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import Link from 'next/link';

import { getFeaturedCourses } from '../services/course.service';

import CourseList from './CourseList';

export default async function FeaturedCourses() {
  const courses = await getFeaturedCourses();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore Our Courses
        </h2>

        <p className="mt-4 text-gray-600">
          Discover courses designed to help students build knowledge and achieve
          their learning goals.
        </p>
      </div>

      <div className="mt-10">
        <CourseList courses={courses} />
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/courses"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          All Courses
        </Link>
      </div>
    </section>
  );
}
