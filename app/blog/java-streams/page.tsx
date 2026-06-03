import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Java Streams Tutorial for Beginners",
  description:
    "Learn Java Streams from scratch with examples and interview questions.",
  openGraph: {
    title: "Java Streams Tutorial",
    description: "Learn Java Streams from scratch",
    images: ["/java-streams.png"],
  },
};

export default function JavaStreamsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
          Java Streams
        </p>
        <h1 className="text-blue-700">Java Streams Tutorial</h1>
        <p className="lead">
          Java Streams help you process collections in a clean, readable, and
          expressive way. Instead of writing loops for every filtering,
          transformation, grouping, or aggregation task, you can describe the
          steps of a data pipeline and let the Stream API handle the iteration.
        </p>

        <Image
          className="my-8 rounded-md border border-slate-200"
          src="/java-streams.png"
          width={800}
          height={400}
          alt="Java Streams Architecture"
          priority
        />

        <h2>What are Streams?</h2>
        <p>
          A Stream is a sequence of elements that can be processed through a
          pipeline of operations. The elements usually come from a source such as
          a List, Set, array, file, or generated range. A stream does not store
          data by itself. It reads data from the source and applies operations
          such as filtering, mapping, sorting, and reducing.
        </p>
        <p>
          Streams were introduced in Java 8 and are commonly used with lambda
          expressions. They make code more declarative. That means your code says
          what result you want instead of focusing on every step of how to loop
          through the data.
        </p>
        <p>
          Think of a stream as a temporary view over data. You create it, define
          the operations, get a result, and then the stream is consumed. You
          should not reuse the same stream instance after a terminal operation.
          If you need another result, create a new stream from the original data
          source.
        </p>

        <h2>How Streams Work</h2>
        <p>
          A stream pipeline has three parts: a source, zero or more intermediate
          operations, and one terminal operation. The source provides the data.
          Intermediate operations transform the stream and return another stream.
          Terminal operations produce the final result or side effect.
        </p>
        <p>
          Intermediate operations are lazy. Java does not run them immediately
          when you write them. They execute only when a terminal operation is
          called. This laziness allows Java to optimize the pipeline and avoid
          doing unnecessary work.
        </p>
        <p>
          For example, if a pipeline filters a list and then calls findFirst,
          Java can stop as soon as it finds the first matching element. It does
          not need to process the entire collection. This is one reason stream
          pipelines can be both readable and efficient.
        </p>

        <h2>Filter Example</h2>
        <p>
          The filter operation keeps only the elements that match a condition. If
          you have a list of numbers and want only even numbers, filter is a
          natural fit.
        </p>
        <pre>
          <code>{`List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);

List<Integer> evenNumbers = numbers.stream()
    .filter(number -> number % 2 == 0)
    .toList();

System.out.println(evenNumbers); // [2, 4, 6]`}</code>
        </pre>
        <p>
          The lambda expression returns true for values that should stay in the
          stream. Values that return false are skipped.
        </p>

        <h2>Map Example</h2>
        <p>
          The map operation transforms each element into another value. For
          example, you can convert names to uppercase or convert entity objects
          into response DTOs.
        </p>
        <pre>
          <code>{`List<String> names = List.of("alice", "bob", "charlie");

List<String> upperCaseNames = names.stream()
    .map(String::toUpperCase)
    .toList();

System.out.println(upperCaseNames); // [ALICE, BOB, CHARLIE]`}</code>
        </pre>
        <p>
          Use map when the number of elements usually stays the same, but each
          element needs to be converted into another shape.
        </p>
        <p>
          If each element returns another collection, use flatMap instead. For
          example, a list of orders may contain a list of items inside each
          order. flatMap can turn all of those nested item lists into one stream
          of items.
        </p>

        <h2>Reduce Example</h2>
        <p>
          The reduce operation combines stream elements into one result. It is
          useful for totals, products, minimum values, maximum values, and custom
          aggregations.
        </p>
        <pre>
          <code>{`List<Integer> prices = List.of(100, 250, 300);

int total = prices.stream()
    .reduce(0, Integer::sum);

System.out.println(total); // 650`}</code>
        </pre>
        <p>
          The first argument is the identity value. The second argument describes
          how two values should be combined. For simple numeric totals, methods
          such as mapToInt and sum are often easier to read.
        </p>

        <h2>Real World Use Cases</h2>
        <p>
          Java Streams are useful in service layers, reporting code, API
          transformations, validation flows, and data cleanup tasks. A common
          example is filtering active users, extracting their email addresses,
          sorting them, and returning the final list.
        </p>
        <pre>
          <code>{`List<String> activeEmails = users.stream()
    .filter(User::isActive)
    .map(User::getEmail)
    .sorted()
    .toList();`}</code>
        </pre>
        <p>
          Streams also work well for grouping data. For example, you can group
          orders by status, count employees by department, or summarize sales by
          region using collectors.
        </p>
        <pre>
          <code>{`Map<String, Long> employeesByDepartment = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));`}</code>
        </pre>
        <p>
          Collectors are especially useful when your output is not a simple list.
          They can build maps, join strings, partition data into true and false
          groups, calculate averages, and create summary statistics.
        </p>

        <h2>Interview Questions</h2>
        <p>
          Interviewers often ask about the difference between intermediate and
          terminal operations. Intermediate operations, such as filter, map, and
          sorted, return a stream and are lazy. Terminal operations, such as
          collect, count, forEach, and reduce, trigger execution and return a
          final result.
        </p>
        <p>
          Another common question is the difference between map and flatMap. Use
          map when each input becomes one output. Use flatMap when each input can
          produce multiple values and you want to flatten them into a single
          stream.
        </p>
        <p>
          You may also be asked about parallel streams. Parallel streams split
          work across multiple threads, but they are not always faster. They are
          best for CPU-heavy work on large data sets where operations are
          independent and thread-safe.
        </p>
        <p>
          A practical answer in interviews is that streams improve readability
          when used for data transformation, but they should not hide complex
          business rules. Clear code matters more than using streams everywhere.
        </p>

        <h2>Best Practices</h2>
        <p>
          Keep stream pipelines readable. If a pipeline becomes too long, split
          part of the logic into a named method. Avoid side effects inside map,
          filter, and reduce because they make code harder to reason about and
          can cause problems with parallel streams.
        </p>
        <p>
          Prefer method references when they improve clarity, but do not force
          them when a lambda is easier to understand. Use primitive streams such
          as IntStream, LongStream, and DoubleStream for numeric work to avoid
          unnecessary boxing.
        </p>
        <p>
          Be careful with forEach. It is fine for simple output or final side
          effects, but it should not become a replacement for every loop. If you
          are changing external state inside forEach, a normal loop may be more
          honest and easier to debug.
        </p>
        <p>
          Most importantly, choose streams when they make intent clearer. A
          simple for loop is still valid when the logic is stateful, requires
          early exits, or would become confusing as a stream pipeline.
        </p>
      </article>
    </main>
  );
}
