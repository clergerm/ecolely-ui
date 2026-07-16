/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { Student } from "../type/student";

interface Props {
    student: Student;
}

export default function StudentCard({
                                        student,
                                    }: Props) {
    return (

        <div className="rounded-xl border bg-white p-6 shadow-sm">

            <div className="mb-4 flex justify-center">

                <div
                    className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-blue-100
            text-xl
            font-bold
            text-blue-700
          "
                >
                    {student.firstName.charAt(0)}
                    {student.lastName.charAt(0)}
                </div>

            </div>

            <h2 className="text-center text-xl font-semibold">
                {student.firstName} {student.lastName}
            </h2>

            <div className="mt-4 space-y-2">

                <p>
                    <strong>Student ID:</strong> {student.studentId}
                </p>

                <p>
                    <strong>Email:</strong> {student.email}
                </p>

            </div>

        </div>

    );
}