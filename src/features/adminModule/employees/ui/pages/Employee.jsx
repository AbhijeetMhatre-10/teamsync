import React from "react";
import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeStats from "../components/EmployeeStats";
import EmployeeGrid from "../components/EmployeeGrid";
import Loading from "../../../../../shared/ui/components/Loading";
import { useEmployees } from "../../hooks/useEmployeesHook";

const Employee = () => {
  const { data, isLoading, isError } = useEmployees();

  if (isLoading) {
    return <Loading />;
  }

  const employees = data?.employees ?? [];

  return (
    <main className="min-h-full bg-(--background) p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <EmployeeHeader />

        <EmployeeStats employees={employees} />

        <EmployeeGrid employees={employees} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Employee;