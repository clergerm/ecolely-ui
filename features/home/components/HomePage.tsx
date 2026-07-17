/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import HeroSection from "./HeroSection";
import CoursesSection from "./CoursesSection";

export default function HomePage() {

    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-1">

                <HeroSection />

                <CoursesSection />

            </main>

        </div>
    );
}