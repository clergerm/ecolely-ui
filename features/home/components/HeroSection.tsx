/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import HeroImage from "./HeroImage";

export default function HeroSection() {

    return (

        <section
            className="
                w-full
                bg-gradient-to-b
                from-slate-100
                to-slate-200
                py-24
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    gap-12
                    px-6
                    lg:flex-row
                "
            >

                {/* Content */}

                <div
                    className="
                        flex-1
                        text-center
                        lg:text-left
                    "
                >

                    <h1
                        className="
                            text-5xl
                            font-bold
                            tracking-tight
                            text-gray-900
                            md:text-6xl
                        "
                    >
                        Learn smarter.
                        <br />

                        Build your future.
                    </h1>


                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-lg
                            text-gray-600
                        "
                    >
                        Ecolely helps students organize learning,
                        connect knowledge, and achieve academic goals
                        with modern technology.
                    </p>


                    <div
                        className="
                            mt-8
                            flex
                            justify-center
                            gap-4
                            lg:justify-start
                        "
                    >

                        <button
                            className="
                                rounded-lg
                                bg-indigo-600
                                px-6
                                py-3
                                font-medium
                                text-white
                                transition
                                hover:bg-indigo-700
                            "
                        >
                            Get Started
                        </button>


                        <button
                            className="
                                rounded-lg
                                border
                                border-gray-300
                                bg-white
                                px-6
                                py-3
                                font-medium
                                text-gray-700
                                transition
                                hover:bg-gray-50
                            "
                        >
                            Learn More
                        </button>


                    </div>


                </div>


                {/* Image */}

                <HeroImage />


            </div>

        </section>

    );
}