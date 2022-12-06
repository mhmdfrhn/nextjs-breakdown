import { Suspense } from "react";
import TodoList from "./TodoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Suspense fallback={<p className="flex text-red">Get the data...</p>}>
        <div>
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="flex text-blue">Get the data...</p>}>
        <div className="flex-1">{children}</div>
      </Suspense>
    </main>
  );
}
