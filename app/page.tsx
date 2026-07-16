import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full max-w-3xl flex-col items-center gap-12 rounded-xl bg-white px-16 py-10 shadow-lg dark:bg-zinc-900">

                <Image
                    className="dark:invert"
                    src="/ecolely-1.png"
                    alt="ecolely logo"
                    width={300}
                    height={150}
                    priority
                />

                <div className="text-center">
                    <h1 className="text-4xl font-bold text-black dark:text-white">
                        Welcome to Ecolely
                    </h1>

                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        A modern school management platform built with
                        Spring Boot, Next.js and AWS.
                    </p>
                </div>

                <div className="grid w-full gap-4 sm:grid-cols-2">

                    <Link
                        href="/students"
                        className="rounded-lg border p-6 transition hover:border-blue-500 hover:shadow-md"
                    >
                        <h2 className="text-xl font-semibold">
                            Students
                        </h2>

                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Browse and manage user students.
                        </p>
                    </Link>

                    <div className="rounded-lg border p-6 opacity-50">
                        <h2 className="text-xl font-semibold">
                            Accounts
                        </h2>

                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Coming soon...
                        </p>
                    </div>

                    <div className="rounded-lg border p-6 opacity-50">
                        <h2 className="text-xl font-semibold">
                            Courses
                        </h2>

                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Coming soon...
                        </p>
                    </div>

                    <div className="rounded-lg border p-6 opacity-50">
                        <h2 className="text-xl font-semibold">
                            Dashboard
                        </h2>

                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Coming soon...
                        </p>
                    </div>

                </div>

            </main>
        </div>
    );
}