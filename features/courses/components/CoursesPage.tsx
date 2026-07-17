/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import {
    getCourses,
} from "../services/course.service";


import CourseList
    from "./CourseList";


export default async function CoursesPage() {


    const courses =
        await getCourses();


    return (

        <main
            className="
                mx-auto
                max-w-7xl
                px-6
                py-16
            "
        >

            <h1
                className="
                    text-4xl
                    font-bold
                "
            >
                All Courses
            </h1>


            <p
                className="
                    mt-4
                    text-gray-600
                "
            >
                Explore all available courses.
            </p>


            <div className="mt-10">

                <CourseList
                    courses={courses}
                />

            </div>

        </main>

    );

}