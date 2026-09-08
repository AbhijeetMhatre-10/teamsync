import React from "react";
import { ShieldX, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-(--background) px-4">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div
          className="
            mx-auto mb-6
            flex h-14 w-14
            items-center justify-center
            rounded-xl
            border border-(--border)
            bg-(--surface)
          "
        >
          <ShieldX
            size={28}
            strokeWidth={1.8}
            className="text-(--primary-soft)"
          />
        </div>

        {/* Brand */}
        <p className="mb-2 text-sm font-bold text-(--primary-soft)">
          teamsync
        </p>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-(--foreground)">
          Access denied
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
          You don't have permission to access this page. Please contact your
          administrator if you believe this is a mistake.
        </p>

        {/* Actions */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="
              flex h-10 items-center gap-2
              rounded-lg
              border border-(--border)
              bg-(--surface)
              px-4
              text-sm font-semibold
              text-(--foreground)
              transition-colors
              hover:bg-(--elevated)
              cursor-pointer
            "
          >
            <ArrowLeft size={17} strokeWidth={2} />
            Go back
          </button>

          <button
            onClick={() => navigate("/")}
            className="
              flex h-10 items-center gap-2
              rounded-lg
              bg-(--primary)
              px-4
              text-sm font-semibold
              text-(--primary-foreground)
              transition-opacity
              hover:opacity-90
              cursor-pointer
            "
          >
            <Home size={17} strokeWidth={2} />
            Dashboard
          </button>
        </div>
      </div>
    </main>
  );
};

export default Unauthorized;