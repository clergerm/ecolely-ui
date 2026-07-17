/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 */

import Link from "next/link";


export default function Logo() {

    return (

        <Link
            href="/"
            className="
                flex
                items-center
                gap-2
            "
            aria-label="Ecolely Home"
        >

            {/* Placeholder graduation cap */}
            <div
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-md
                    bg-indigo-600
                    text-white
                    font-bold
                "
            >
                E
            </div>


            <span
                className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-gray-900
                "
            >
                Ecolely
            </span>

        </Link>

    );
}