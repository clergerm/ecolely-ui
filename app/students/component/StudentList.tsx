/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import StudentCard from "./StudentCard";
import { Student } from "../type/student";

interface Props {
    students: Student[];
}

export default function StudentList({
                                        students,
                                    }: Props) {

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {students.map(student => (

                <StudentCard
                    key={student.studentId}
                    student={student}
                />

            ))}

        </div>
    );
}