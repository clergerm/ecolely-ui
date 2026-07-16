/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import {HOST_URL, ROOT_API} from "../constant/api";
import { Student } from "../type/student";

export async function getStudents(): Promise<Student[]> {
    const url = `${HOST_URL}${ROOT_API}/students`;

    const response = await fetch(
        url,
        /*{
            cache: "no-store",
        }*/
    );

    if (!response.ok) {
        throw new Error(
            `Failed to fetch students (${response.status})`
        );
    }

    return response.json();
}