/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import Link from "next/link";
import { NavigationItem as NavigationItemType } from "../types/navigation";


interface Props {
    item: NavigationItemType;
    onClick?: () => void;
}


export default function NavigationItem({
                                           item,
                                           onClick,
                                       }: Props) {

    return (
        <Link
            href={item.href}
            onClick={onClick}
            className="
                text-gray-700
                transition
                hover:text-indigo-600
            "
        >
            {item.label}
        </Link>
    );
}