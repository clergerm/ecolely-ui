/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { getStudents } from "./service/studentService";
import StudentList from "./component/StudentList";

// Make this page always fetch fresh data
// Do not statically generate this page. Execute it on every request.
//export const dynamic = "force-dynamic";

export default async function StudentPage() {

    const students = await getStudents();

    return (
        <main className="min-h-screen bg-zinc-50 p-10">

            <h1 className="mb-8 text-4xl font-bold">
                Student
            </h1>

            <StudentList students={students} />

        </main>
    );
}