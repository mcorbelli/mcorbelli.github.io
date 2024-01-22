import Link from "next/link";

import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <main className="flex items-center justify-center h-screen flex-col">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl md:text-5xl text-center text-neutral-800m mb-4">
          Page not found
        </h1>
        <div className="text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto">
          Could not find requested resource
        </div>
        <Button className="mt-8" size="lg" asChild>
          <Link href="/">Return to HomePage</Link>
        </Button>
      </div>
    </main>
  );
}

export default NotFoundPage;
