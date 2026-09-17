import React from "react";
import EmployeeCard from "./EmployeeCard";
import Loading from "../../../../../shared/ui/components/Loading";
import { Users } from "lucide-react";


const EmployeeGrid = ({ employees, isLoading }) => {

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && employees.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-(--border) bg-(--card) px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--surface) text-(--subtle-foreground)">
          <Users size={22} />
        </div>

        <h2 className="mt-4 font-semibold text-(--foreground)">
          No employees found
        </h2>

        <p className="mt-1 max-w-sm text-sm text-(--muted-foreground)">
          There are currently no employees to display.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
        />
      ))}
    </div>
  );
};

export default EmployeeGrid;