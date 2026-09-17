import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main className="py-28">
      <Container className="max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100">Страница не найдена</h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Возможно, ссылка устарела или страница была перемещена. Вернитесь на главную, чтобы продолжить просмотр портфолио.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            На главную
          </Link>
        </div>
      </Container>
    </main>
  );
}
