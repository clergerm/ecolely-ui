/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

const courses = [
    {
        title: "Mathematics",
        description:
            "Build strong foundations in algebra, geometry, and problem solving.",
    },
    {
        title: "Science",
        description:
            "Explore physics, chemistry, and biology through interactive learning.",
    },
    {
        title: "Computer Science",
        description:
            "Learn programming, algorithms, and software development concepts.",
    },
    {
        title: "English Language",
        description:
            "Improve communication, writing, and reading skills.",
    },
    {
        title: "History",
        description:
            "Understand important events, cultures, and civilizations.",
    },
    {
        title: "Artificial Intelligence",
        description:
            "Discover AI concepts and modern technology applications.",
    },
    {
        title: "Personal Development",
        description:
            "Develop study habits, organization, and goal-setting skills.",
    },
];


export default function CoursesSection() {

    return (

        <section
            className="
                mx-auto
                max-w-7xl
                px-6
                py-20
            "
        >

            <div className="text-center">

                <h2
                    className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-gray-900
                        md:text-4xl
                    "
                >
                    Explore Our Courses
                </h2>


                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-2xl
                        text-gray-600
                    "
                >
                    Discover courses designed to help students learn,
                    grow, and achieve their academic goals.
                </p>

            </div>


            {/* Course rows */}
            <div
                className="
                    mx-auto
                    mt-12
                    max-w-4xl
                    space-y-4
                "
            >

                {
                    courses.map((course, index) => (

                        <article
                            key={course.title}
                            className="
                                flex
                                items-center
                                gap-6
                                rounded-xl
                                border
                                bg-white
                                p-6
                                transition
                                hover:border-indigo-500
                                hover:shadow-md
                            "
                        >

                            {/* Number */}
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-indigo-600
                                    font-semibold
                                    text-white
                                "
                            >
                                {index + 1}
                            </div>


                            {/* Content */}
                            <div>

                                <h3
                                    className="
                                        text-xl
                                        font-semibold
                                        text-gray-900
                                    "
                                >
                                    {course.title}
                                </h3>


                                <p
                                    className="
                                        mt-1
                                        text-gray-600
                                    "
                                >
                                    {course.description}
                                </p>

                            </div>

                        </article>

                    ))
                }

            </div>

        </section>

    );
}