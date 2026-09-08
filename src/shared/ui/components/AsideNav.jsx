import { Plus } from "lucide-react";
import { useAsideNav } from "../../hooks/asideNavHook";

const AsideNav = () => {
  const { navItems, activePath, handleNavClick, navigate } = useAsideNav();

  return (
    <aside className="hidden lg:flex h-screen w-50.5 shrink-0 flex-col border-r border-(--border) bg-(--background)">
      {/* Brand */}
      <div
        className="px-4 pb-3.5 pt-6 cursor-pointer"
        onClick={()=>navigate("/")}
      >
        <h1 className="text-[20px] font-bold leading-5 text-(--primary-soft)">
          teamsync
        </h1>

        <p className="mt-1 text-[12px] font-medium text-(--muted-foreground)">
          Enterprise Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = activePath === item.path;

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className={`
                relative flex h-12 w-full items-center gap-4 px-5
                text-left text-sm font-semibold cursor-pointer
                transition-colors
                ${
                  isActive
                    ? "bg-(--surface) text-(--primary-soft)"
                    : "text-(--muted-foreground) hover:bg-(--surface) hover:text-(--foreground)"
                }
              `}
            >
              <Icon size={19} strokeWidth={1.8} className="shrink-0" />

              <span>{item.name}</span>

              {/* Active indicator */}
              {isActive && (
                <span className="absolute right-0 top-0 h-full w-0.5 bg-(--primary)" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom button */}
      <div className="mt-auto px-4.5 pb-6">
        <button
          className="
            flex h-8.75 w-full items-center justify-center gap-2
            rounded-[7px]
            bg-(--primary)
            text-sm font-bold
            text-(--primary-foreground)
            transition-opacity
            hover:opacity-90
            cursor-pointer
          "
        >
          <Plus size={18} strokeWidth={2} />
          <span>New Task</span>
        </button>
      </div>
    </aside>
  );
};

export default AsideNav;
