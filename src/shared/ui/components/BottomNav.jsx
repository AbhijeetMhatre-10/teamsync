import React from "react";
import { useAsideNav } from "../../hooks/asideNavHook";

const BottomNav = () => {
  const { navItems, activePath, handleNavClick } = useAsideNav();

  return (
    <nav
      className="
        fixed bottom-0 left-0 z-50
        flex w-full
        overflow-x-auto
        border-t border-(--border)
        bg-(--background)
        lg:hidden
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePath === item.path;

        return (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.path)}
            className={`
              relative flex min-w-20 flex-1 shrink-0
              flex-col items-center justify-center
              gap-1 px-3 py-3
              cursor-pointer
              transition-colors
              ${
                isActive
                  ? "bg-(--surface) text-(--primary-soft)"
                  : "text-(--muted-foreground) hover:bg-(--surface) hover:text-(--foreground)"
              }
            `}
          >
            <Icon size={20} strokeWidth={1.8} />

            <span className="whitespace-nowrap text-[11px] font-medium">
              {item.name}
            </span>

            {isActive && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-(--primary)" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;