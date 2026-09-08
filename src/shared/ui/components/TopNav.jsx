import {
  Search,
  Bell,
  Grid3X3,
  Menu,
  X,
  SunMoon,
} from "lucide-react";

import { useNavbar } from "../../hooks/topNavHook";
import { toggleTheme } from "../../../shared/state/themeSlice";

const TopNav = () => {
  const {
    search,
    setSearch,
    isMenuOpen,
    setIsMenuOpen,
    dispatch,
  } = useNavbar();

  return (
    <header className="relative h-18 w-full border-b border-(--border) bg-(--background) px-4 lg:px-8">
      <div className="flex h-full items-center">
        {/* Search */}
        <div
          className="
            relative w-full
            lg:absolute lg:left-1/2 lg:w-100 lg:-translate-x-1/2
          "
        >
          <Search
            size={22}
            strokeWidth={2}
            className="
              absolute left-4 top-1/2
              -translate-y-1/2
              text-(--foreground)
            "
          />

          <input
            type="text"
            value={search}
            placeholder="Search workspace..."
            onChange={(e) => setSearch(e.target.value)}
            className="
              h-11 w-full
              rounded-xl
              border border-(--border)
              bg-(--surface)
              pl-12 pr-4
              text-base
              text-(--foreground)
              outline-none
              placeholder:text-(--subtle-foreground)
              focus:border-(--ring)
            "
          />
        </div>

        {/* Desktop Actions */}
        <div className="ml-auto hidden h-full items-center lg:flex">
          {/* Notification */}
          <button
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-lg
              text-(--foreground)
              hover:bg-(--surface)
              hover:text-(--primary-soft)
              cursor-pointer
            "
          >
            <Bell size={22} strokeWidth={1.8} />
          </button>

          {/* Appearance */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-lg
              text-(--foreground)
              hover:bg-(--surface)
              hover:text-(--primary-soft)
              cursor-pointer
            "
            aria-label="Toggle theme"
          >
            <SunMoon size={22} strokeWidth={1.8} />
          </button>

          {/* Apps */}
          <button
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-lg
              text-(--foreground)
              hover:bg-(--surface)
              hover:text-(--primary-soft)
              cursor-pointer
            "
          >
            <Grid3X3 size={22} strokeWidth={1.8} />
          </button>

          {/* Divider */}
          <div className="mx-3 h-9 w-px bg-(--border)" />

          {/* Avatar */}
          <button
            className="
              flex h-10 w-10
              items-center justify-center
              overflow-hidden
              rounded-full
              border border-(--border)
              bg-(--elevated)
              text-sm font-semibold
              text-(--primary-soft)
              cursor-pointer
            "
          >
            A
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            ml-3 flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-lg
            text-(--foreground)
            hover:bg-(--surface)
            cursor-pointer
            lg:hidden
          "
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={23} strokeWidth={1.8} />
          ) : (
            <Menu size={23} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            absolute right-4 top-16 z-50
            w-55
            overflow-hidden
            rounded-xl
            border border-(--border)
            bg-(--surface)
            shadow-2xl
            lg:hidden
          "
        >
          {/* Notification */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              flex w-full items-center gap-3
              px-4 py-3
              text-sm
              text-(--foreground)
              hover:bg-(--elevated)
              cursor-pointer
            "
          >
            <Bell size={20} strokeWidth={1.8} />
            <span>Notifications</span>
          </button>

          {/* Appearance */}
          <button
            onClick={() => {
              dispatch(toggleTheme());
              setIsMenuOpen(false);
            }}
            className="
              flex w-full items-center gap-3
              px-4 py-3
              text-sm
              text-(--foreground)
              hover:bg-(--elevated)
              cursor-pointer
            "
          >
            <SunMoon size={20} strokeWidth={1.8} />
            <span>Appearance</span>
          </button>

          {/* Apps */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              flex w-full items-center gap-3
              px-4 py-3
              text-sm
              text-(--foreground)
              hover:bg-(--elevated)
              cursor-pointer
            "
          >
            <Grid3X3 size={20} strokeWidth={1.8} />
            <span>Apps</span>
          </button>

          {/* Divider */}
          <div className="mx-3 border-t border-(--border)" />

          {/* Profile */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              flex w-full items-center gap-3
              px-4 py-3
              text-sm
              text-(--foreground)
              hover:bg-(--elevated)
              cursor-pointer
            "
          >
            <div
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                bg-(--elevated)
                text-xs font-semibold
                text-(--primary-soft)
              "
            >
              A
            </div>

            <span>Profile</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default TopNav;