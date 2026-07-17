/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import Header from "@/shared/navigation/Header";
import HeroSection from "./HeroSection";

export default function HomePage() {

    return (
        <div className="min-h-screen flex flex-col">

            <Header />


            <main className="flex-1">

                <HeroSection />

            </main>


            <footer
                className="
                    border-t
                    py-8
                    text-center
                    text-sm
                    text-gray-500
                "
            >
                © {new Date().getFullYear()} Ecolely.
                All rights reserved.
            </footer>

        </div>
    );
}