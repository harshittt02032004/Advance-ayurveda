import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl">This page could not be found</h1>
      <p className="mt-4 max-w-md text-ink-2">The link may be old or mistyped. You can head back home or browse our treatments.</p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/treatments" variant="outline">Treatments</Button>
      </div>
    </section>
  );
}
