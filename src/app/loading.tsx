import { Container } from "@/components/container";

export default function Loading() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl animate-pulse space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <div className="h-4 w-24 rounded bg-zinc-800" />
          <div className="h-8 w-2/3 rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-5/6 rounded bg-zinc-800" />
        </div>
      </Container>
    </main>
  );
}
