import useAuth from "../hooks/useAuth";
import {
  Cloud,
  TerminalSquare,
  LogIn,
  Network,
  Eye,
  EyeOff,
} from "lucide-react";

const LoginPage = () => {

  const {
    Link,
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    validation,
    onSubmit,
  } = useAuth("login");

  return (
    <main className="min-h-screen bg-[#0e0d11] flex items-center justify-center">
      {/* Outer Container */}
      <div
        className="
          relative
          flex
          min-h-[calc(100vh-24px)]
          w-full
          overflow-hidden
          bg-[#111015]
          justify-center
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_80%_65%,rgba(112,77,171,0.08),transparent_28%)]
          "
        />

        {/* Decorative bottom-right shape */}
        <div
          className="
            pointer-events-none
            absolute
            right-5
            bottom-8
            hidden
            h-40
            w-40
            rounded-full
            bg-[#65499b]/5
            blur-3xl
            sm:block
          "
        />

        {/* =====================================================
            LOGIN CARD
        ====================================================== */}
        <section
          className="
            relative
            z-10
            flex
            w-full
            max-w-92.5
            flex-col
            justify-center
            px-5
            py-8
            sm:px-0
          "
        >
          <div
            className="
              rounded-xl
              border
              border-[#2d2a32]
              bg-[#1b191e]
              px-6
              py-7
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              sm:px-7
              sm:py-7
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}
            <div className="flex flex-col items-center">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#7655b8]
                  text-[#ddd0f6]
                "
              >
                <Network size={22} strokeWidth={1.8} />
              </div>

              <h1
                className="
                  mt-4
                  text-[21px]
                  font-bold
                  tracking-tight
                  text-[#eeeaf1]
                "
              >
                teamsync
              </h1>

              <p className="mt-1 text-xs text-[#b0adb6]">
                Sign in to your workspace
              </p>
            </div>

            {/* =================================================
                SOCIAL LOGIN
            ================================================== */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-[#393640]
                  bg-[#27242b]
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#ddd9e1]
                  transition
                  hover:bg-[#302d35]
                  active:scale-[0.98]
                "
              >
                <Cloud size={17} strokeWidth={1.8} />
                GOOGLE
              </button>

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-[#393640]
                  bg-[#27242b]
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#ddd9e1]
                  transition
                  hover:bg-[#302d35]
                  active:scale-[0.98]
                "
              >
                <TerminalSquare size={16} strokeWidth={1.8} />
                GITHUB
              </button>
            </div>

            {/* =================================================
                DIVIDER
            ================================================== */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#28252c]" />

              <span className="whitespace-nowrap text-[10px] text-[#aaa6af]">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-[#28252c]" />
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    tracking-wide
                    text-[#d8d4dc]
                  "
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email", validation.email)}
                  className="
                    h-9
                    w-full
                    rounded-md
                    border
                    border-[#3b3840]
                    bg-[#0d0c10]
                    px-3
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-[#57535d]
                    transition
                    focus:border-[#8463c4]
                    focus:ring-1
                    focus:ring-[#8463c4]/30
                  "
                />

                {errors.email && (
                  <p className="mt-1.5 text-[10px] text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="
                      text-[10px]
                      font-bold
                      tracking-wide
                      text-[#d8d4dc]
                    "
                  >
                    PASSWORD
                  </label>

                  <button
                    type="button"
                    className="
                      text-[10px]
                      font-medium
                      text-[#c6a5f5]
                      transition
                      hover:text-[#d8c1ff]
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="•••••••••"
                    {...register("password", validation.password)}
                    className="
                      h-9
                      w-full
                      rounded-md
                      border
                      border-[#3b3840]
                      bg-[#0d0c10]
                      px-3
                      pr-10
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-[#57535d]
                      transition
                      focus:border-[#8463c4]
                      focus:ring-1
                      focus:ring-[#8463c4]/30
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                      absolute
                      right-2.5
                      top-1/2
                      -translate-y-1/2
                      text-[#66616d]
                      hover:text-[#aaa5b0]
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-[10px] text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* REMEMBER ME */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="
                    h-3.5
                    w-3.5
                    cursor-pointer
                    appearance-none
                    rounded-[3px]
                    border
                    border-[#47434d]
                    bg-[#0e0d11]
                    checked:border-[#8060be]
                    checked:bg-[#8060be]
                  "
                />

                <label
                  htmlFor="remember"
                  className="
                    cursor-pointer
                    text-[10px]
                    text-[#c0bcc5]
                  "
                >
                  Stay signed in
                </label>
              </div>

              {/* =================================================
                  SIGN IN BUTTON
              ================================================== */}
              <button
                type="submit"
                className="
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#7251b4]
                  text-xs
                  font-medium
                  text-white
                  transition
                  hover:bg-[#805fc3]
                  active:scale-[0.99]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#9a79d9]/40
                "
              >
                Sign In
                <LogIn size={15} />
              </button>
            </form>

            {/* =================================================
                SIGN UP
            ================================================== */}
            <div className="mt-6 border-t border-[#28252c] pt-5">
              <p className="text-center text-[10px] text-[#b2afb8]">
                Don't have an account?
                <Link
                  className="
                    ml-1
                    font-semibold
                    text-[#c5a5f5]
                    hover:text-[#d7c1ff]
                  "
                  to={"/user/register"}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================== */}
          <div className="mt-5 text-center">
            <p className="text-[10px] text-[#66626c]">
              © 2026 teamsync. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-2 flex justify-center gap-3">
              <button
                type="button"
                className="text-[10px] text-[#59555f] hover:text-[#85808b]"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                className="text-[10px] text-[#59555f] hover:text-[#85808b]"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;