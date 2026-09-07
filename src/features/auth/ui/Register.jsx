import { User, Mail, Lock, Eye, EyeOff, Network, Sparkles } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    Link,
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    password,
    strength,
    getStrengthText,
    validation,
    onSubmit,
  } = useAuth("register");

  return (
    <div className="min-h-screen bg-[#111014] text-white">
      <div className="flex min-h-screen flex-col">
        {/* Main Content */}
        <main className="flex flex-1">
          {/* ========================================
              LEFT BRAND PANEL
          ======================================== */}
          <section className="relative hidden h-[calc(100vh-86px)] w-125 shrink-0 self-start overflow-hidden border-r border-white/8 lg:block xl:w-130">
            {/* Background */}
            <div className="absolute inset-0 bg-[#071329]" />

            {/* Abstract AI Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[-15%] top-[12%] h-[75%] w-[130%] opacity-70">
                <div className="absolute left-[5%] top-[25%] h-[45%] w-[90%] rotate-[-15deg] rounded-[50%] bg-linear-to-r from-blue-500/10 via-purple-500/30 to-cyan-400/10 blur-3xl" />

                {Array.from({ length: 18 }).map((_, index) => (
                  <div
                    key={index}
                    className="absolute h-px origin-left bg-linear-to-r from-cyan-300/30 via-purple-400/20 to-transparent"
                    style={{
                      width: `${350 + (index % 5) * 90}px`,
                      left: `${(index * 13) % 80}%`,
                      top: `${20 + ((index * 17) % 60)}%`,
                      transform: `rotate(${-50 + ((index * 19) % 100)}deg)`,
                    }}
                  />
                ))}

                {Array.from({ length: 30 }).map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className="absolute h-1 w-1 rounded-full bg-purple-300/30"
                    style={{
                      left: `${(index * 31) % 100}%`,
                      top: `${(index * 47) % 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Bottom dark gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-[#111014] via-[#071329]/80 to-transparent" />
            </div>

            {/* Logo */}
            <div className="relative z-10 px-7 pt-6 xl:px-9">
              <h1 className="text-xl font-bold tracking-tight">teamsync</h1>
            </div>

            {/* Marketing Content */}
            <div className="absolute bottom-8 left-7 right-7 z-10 xl:bottom-10 xl:left-9 xl:right-9">
              <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-200">
                <Sparkles className="h-4 w-4" />
                <span>Next-Gen Intelligence</span>
              </div>

              <h2 className="max-w-lg text-3xl font-bold leading-[1.1] tracking-tight xl:text-[40px]">
                Accelerate your team's intelligence.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-300 xl:text-base">
                Connect your enterprise data to our specialized AI models and
                unlock unparalleled strategic insights in seconds.
              </p>

              <div className="mt-9 flex gap-10">
                <div>
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="mt-1 text-xs text-gray-400">Uptime SLA</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">ISO</p>
                  <p className="mt-1 text-xs text-gray-400">27001 Certified</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================
              RIGHT REGISTER PANEL
          ======================================== */}
          <section className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8 lg:px-10 xl:px-14">
            <div className="w-full max-w-125">
              {/* Mobile Logo */}
              <div className="mb-12 lg:hidden">
                <h1 className="text-xl font-bold">teamsync</h1>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <h2 className="text-2xl font-bold tracking-tight text-[#f5f3f7] sm:text-3xl lg:text-[34px]">
                  Create your account
                </h2>

                <p className="mt-3 text-sm text-[#c5c0c9] sm:text-base">
                  Experience the future of collaborative data intelligence.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 lg:space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-semibold text-[#d3ced7]"
                  >
                    Full Name
                  </label>

                  <div
                    className={`relative rounded-lg border transition ${
                      errors.fullName
                        ? "border-red-500/70"
                        : "border-[#4b4750] focus-within:border-purple-400"
                    }`}
                  >
                    <User className="absolute left-5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#625d68]" />

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", validation.fullName)}
                      className="h-16 w-full rounded-lg bg-[#1c1a1f] pl-14 pr-5 text-sm text-white outline-none placeholder:text-[#625e67] sm:text-base"
                    />
                  </div>

                  {errors.fullName && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[#d3ced7]"
                  >
                    Email Address
                  </label>

                  <div
                    className={`relative rounded-lg border transition ${
                      errors.email
                        ? "border-red-500/70"
                        : "border-[#4b4750] focus-within:border-purple-400"
                    }`}
                  >
                    <Mail className="absolute left-5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#625d68]" />

                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      {...register("email", validation.email)}
                      className="h-18 w-full rounded-lg bg-[#1c1a1f] pl-16 pr-5 text-base text-white outline-none placeholder:text-[#625e67]"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-semibold text-[#d3ced7]"
                  >
                    Password
                  </label>

                  <div
                    className={`relative rounded-lg border transition ${
                      errors.password
                        ? "border-red-500/70"
                        : "border-[#4b4750] focus-within:border-purple-400"
                    }`}
                  >
                    <Lock className="absolute left-5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#625d68]" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", validation.password)}
                      className="h-16 w-full rounded-lg bg-[#1c1a1f] pl-14 pr-14 text-sm text-white outline-none placeholder:text-[#625e67] sm:text-base"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-[#625d68] transition hover:text-white"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4.5 w-4.5" />
                      ) : (
                        <Eye className="h-4.5 w-4.5" />
                      )}
                    </button>
                  </div>

                  {/* Password Strength */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[0, 1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`h-1 flex-1 rounded-full transition ${
                              item < strength ? "bg-purple-300" : "bg-[#29262d]"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="mt-2 text-xs text-purple-200">
                        {getStrengthText()}
                      </p>
                    </div>
                  )}

                  {errors.password && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div>
                  <label className="flex cursor-pointer items-start gap-4">
                    <input
                      type="checkbox"
                      {...register("terms", {
                        required:
                          "You must agree to the Terms of Service and Privacy Policy",
                      })}
                      className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-[#55515b] bg-[#1c1a1f] checked:border-purple-400 checked:bg-purple-400"
                    />

                    <span className="text-xs leading-5 text-[#c7c2ca] sm:text-sm">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-purple-300 hover:text-purple-200"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-purple-300 hover:text-purple-200"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {errors.terms && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                {/* Create Account */}
                <button
                  type="submit"
                  className="h-15 w-full rounded-lg bg-linear-to-r from-[#7656bd] to-[#c1a8f5] text-sm font-semibold text-[#171021] shadow-lg shadow-purple-500/10 transition hover:brightness-110 active:scale-[0.99] sm:text-base"
                >
                  Create Account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 py-1">
                  <div className="h-px flex-1 bg-[#29262d]" />

                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#5d5963]">
                    Or continue with
                  </span>

                  <div className="h-px flex-1 bg-[#29262d]" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    className="flex h-14 items-center justify-center gap-3 rounded-lg border border-[#4b4750] bg-transparent text-sm text-[#e5e1e7] transition hover:bg-white/4 sm:text-base"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#211d1b] text-sm">
                      G
                    </span>
                    Google
                  </button>

                  <button
                    type="button"
                    className="flex h-14 items-center justify-center gap-3 rounded-lg border border-[#4b4750] bg-transparent text-base text-[#e5e1e7] transition hover:bg-white/4"
                  >
                    <Network className="h-5 w-5" />
                    SSO
                  </button>
                </div>

                {/* Login */}
                <p className="pt-7 text-center text-sm text-[#c7c2ca]">
                  Already have an account?{" "}
                  <Link
                    className="font-semibold text-purple-300 hover:text-purple-200"
                    to={"/user"}
                  >
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </section>
        </main>

        {/* ========================================
            FOOTER
        ======================================== */}
        <footer className="border-t border-white/6 px-6 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-lg font-bold">teamsync</h3>

            <nav className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#c2bdc5]">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms of Service
              </a>

              <a href="#" className="hover:text-white">
                Security
              </a>

              <a href="#" className="hover:text-white">
                System Status
              </a>
            </nav>

            <p className="text-xs text-[#c2bdc5]">
              © 2026 teamsync. Enterprise Intelligence Platforms.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
