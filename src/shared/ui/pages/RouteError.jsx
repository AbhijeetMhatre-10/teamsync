import React from "react";
import { RefreshCw, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from '../../../../assets/logo.png'

const RouteError = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-(--background) px-4">
      <div className="w-full max-w-md flex flex-col justify-center items-center text-center">
        {/* Icon */}
        <div className="mb-4 h-14 w-14 overflow-hidden rounded-xl border border-(--border) bg-(--surface">
          <img
            src={logo}
            alt="teamsync logo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-(--foreground)">
          Unable to load this page
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
          Something went wrong while loading this page. Try refreshing or return
          to your workspace.
        </p>

        {/* Actions */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
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
            <RefreshCw size={17} strokeWidth={2} />
            Reload
          </button>

          <button
            onClick={() => navigate("/")}
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
        </div>
      </div>
    </main>
  );
};

export default RouteError;
