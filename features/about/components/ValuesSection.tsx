/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

const values = [
    {
        title: "Innovation",
        description:
            "We continuously improve learning experiences through technology.",
    },
    {
        title: "Student First",
        description:
            "Every decision starts with understanding student needs.",
    },
    {
        title: "Simplicity",
        description:
            "We build intuitive tools that remove complexity.",
    },
];


export default function ValuesSection() {

    return (

        <section
            className="
                mx-auto
                max-w-7xl
                px-6
                py-20
            "
        >

            <h2
                className="
                    text-center
                    text-3xl
                    font-bold
                "
            >
                Our Values
            </h2>


            <div
                className="
                    mt-12
                    grid
                    gap-8
                    md:grid-cols-3
                "
            >

                {
                    values.map((value) => (

                        <div
                            key={value.title}
                            className="
                                rounded-xl
                                border
                                p-8
                                shadow-sm
                            "
                        >

                            <h3
                                className="
                                    text-xl
                                    font-semibold
                                "
                            >
                                {value.title}
                            </h3>


                            <p
                                className="
                                    mt-4
                                    text-gray-600
                                "
                            >
                                {value.description}
                            </p>

                        </div>

                    ))
                }

            </div>

        </section>

    );
}