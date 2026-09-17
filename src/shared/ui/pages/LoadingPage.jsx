import React from "react";
import { LoaderCircle } from "lucide-react";
import logo from "../../../../assets/logo.png";

const LoadingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-(--background) px-4">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6 h-14 w-14 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
  <img
    src={logo}
    alt="teamsync logo"
    className="h-full w-full object-cover"
  />
</div>

        {/* Spinner */}
        <LoaderCircle
          size={28}
          strokeWidth={2}
          className="animate-spin text-(--primary)"
        />

        {/* Text */}
        <h1 className="mt-5 text-lg font-semibold text-(--foreground)">
          Loading workspace
        </h1>

        <p className="mt-2 text-sm text-(--muted-foreground)">
          Please wait while we get things ready.
        </p>
      </div>
    </main>
  );
};

export default LoadingPage;
