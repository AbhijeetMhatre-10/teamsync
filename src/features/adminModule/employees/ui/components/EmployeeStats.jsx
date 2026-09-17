import React from "react";
import { Building2, ShieldCheck, UserCheck, Users } from "lucide-react";

const EmployeeStats = ({ employees }) => {
  const activeCount = employees.filter(
    (employee) => employee.status === "active"
  ).length;

  const adminCount = employees.filter(
    (employee) => employee.role === "admin"
  ).length;

  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const stats = [
    {
      label: "Showing",
      value: employees.length,
      icon: Users,
    },
    {
      label: "Active",
      value: activeCount,
      icon: UserCheck,
    },
    {
      label: "Admins",
      value: adminCount,
      icon: ShieldCheck,
    },
    {
      label: "Departments",
      value: departmentCount,
      icon: Building2,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="rounded-xl border border-(--border) bg-(--card) p-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-(--muted-foreground)">{label}</p>

            <Icon
              size={18}
              strokeWidth={1.8}
              className="text-(--subtle-foreground)"
            />
          </div>

          <p className="mt-3 text-2xl font-semibold text-(--foreground)">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStats;