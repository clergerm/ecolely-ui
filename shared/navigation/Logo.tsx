/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

export default function Logo() {

    return (

        <div
            className="
                flex
                items-center
                gap-2
            "
        >

            <div
                className="
                    h-9
                    w-9
                    rounded-lg
                    bg-indigo-600
                    flex
                    items-center
                    justify-center
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
                "
            >
                Ecolely
            </span>

        </div>
    );
}