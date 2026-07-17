/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

"use client";

import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";


export default function Header() {

    return (

        <header
            className="
                sticky
                top-0
                z-50
                border-b
                bg-white/80
                backdrop-blur
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                "
            >

                <Logo />


                <nav
                    className="
                        hidden
                        md:flex
                        gap-8
                    "
                >
                    <a>Home</a>
                    <a>Features</a>
                    <a>Solutions</a>
                    <a>About</a>
                    <a>Account</a>
                </nav>


                <HamburgerButton />

            </div>

        </header>
    );
}