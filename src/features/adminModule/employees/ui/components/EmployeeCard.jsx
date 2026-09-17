import React from "react";
import {
  Building2,
  CalendarDays,
  Mail,
  Shield,
  UserRound,
} from "lucide-react";

const EmployeeCard = ({ employee }) => {
  const {
    name,
    email,
    avatar,
    department,
    role,
    status,
    createdAt,
  } = employee;

  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

  const isActive = status === "active";

  return (
    <article className="group rounded-xl border border-(--border) bg-(--card) p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--primary)/40 hover:bg-(--elevated)">
      {/* Top section */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {/* Avatar */}
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
            {avatar ? (
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-(--primary)/10 text-sm font-semibold text-(--primary)">
                {initials || <UserRound size={20} />}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h2 className="truncate font-semibold text-(--foreground)">
              {name || "Unnamed employee"}
            </h2>

            <p className="mt-0.5 truncate text-xs text-(--muted-foreground)">
              {role || "Employee"}
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${
            isActive
              ? "border-(--success)/30 bg-(--success)/10 text-(--success)"
              : "border-(--destructive)/30 bg-(--destructive)/10 text-(--destructive)"
          }`}
        >
          {status || "unknown"}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-(--border)" />

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail
            size={16}
            strokeWidth={1.8}
            className="shrink-0 text-(--subtle-foreground)"
          />

          <span className="truncate text-sm text-(--muted-foreground)">
            {email || "No email"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Building2
            size={16}
            strokeWidth={1.8}
            className="shrink-0 text-(--subtle-foreground)"
          />

          <span className="text-sm capitalize text-(--muted-foreground)">
            {department || "No department"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Shield
            size={16}
            strokeWidth={1.8}
            className="shrink-0 text-(--subtle-foreground)"
          />

          <span className="text-sm capitalize text-(--muted-foreground)">
            {role || "employee"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays
            size={16}
            strokeWidth={1.8}
            className="shrink-0 text-(--subtle-foreground)"
          />

          <span className="text-sm text-(--muted-foreground)">
            Joined {formattedDate}
          </span>
        </div>
      </div>
    </article>
  );
};

export default EmployeeCard;