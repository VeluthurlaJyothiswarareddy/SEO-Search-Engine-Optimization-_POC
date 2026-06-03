import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Java Tutorial
      </p>
      <h1 className="max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl">
        Learn Java Streams
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
        Complete Java Streams tutorial with practical examples, real world use
        cases, best practices, and interview questions for beginners.
      </p>
      <Link
        className="mt-8 inline-flex w-fit items-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        href="/blog/java-streams"
      >
        Read Java Streams Tutorial
      </Link>
    </main>
  );
}
