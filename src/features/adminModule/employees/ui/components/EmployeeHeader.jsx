import React from "react";
import { Users } from "lucide-react";

const EmployeeHeader = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
            <Users size={19} />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-(--foreground)">
            Employees Directory
          </h1>
        </div>

        <p className="mt-2 text-sm text-(--muted-foreground)">
          Manage and view your team members.
        </p>
      </div>
    </div>
  );
};

export default EmployeeHeader;