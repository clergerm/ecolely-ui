/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { apiClient } from "@/shared/lib/api-client";
import { Course } from "../types/course";
import { HOST_URL, ROOT_API } from "@/shared/constants/ecolely.constants";

export function getCourses() {
    const url = `${HOST_URL}${ROOT_API}/courses`;
    return apiClient.get<Course[]>(url);
}

export function getFeaturedCourses() {
    const url = `${HOST_URL}${ROOT_API}/courses/featured`;
    return apiClient.get<Course[]>(url);
}