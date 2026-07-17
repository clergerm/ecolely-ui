/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

"use client";

import { Menu } from "lucide-react";


export default function HamburgerButton() {

    return (

        <button
            className="
                rounded-md
                p-2

                md:hidden
            "
            aria-label="Open menu"
        >

            <Menu size={28}/>

        </button>

    );
}