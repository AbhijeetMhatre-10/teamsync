import React from "react";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <LoaderCircle
        size={24}
        strokeWidth={2}
        className="animate-spin text-(--primary)"
      />
    </div>
  );
};

export default Loading;