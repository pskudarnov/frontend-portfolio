"use client";

import { useEffect } from "react";
import { Container } from "@/components/container";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="py-24">
      <Container className="max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Runtime error</p>
        <h1 className="mt-4 text-3xl font-semibold text-zinc-100">Что-то пошло не так</h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Произошла непредвиденная ошибка интерфейса. Можно попробовать повторить действие.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          Повторить
        </button>
      </Container>
    </main>
  );
}
