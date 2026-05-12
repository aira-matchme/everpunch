import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function AccountPage() {
  return (
    <>
      <PageHeader
        title="My Account"
        subtitle="Sign in to your EverPunch account or create a new one"
        crumbs={[{ label: "Account" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-6 mb-8 text-sm font-medium">
          <span className="text-emerald-600 border-b-2 border-emerald-500 pb-1">Login</span>
          <Link href="/account/register" className="text-gray-500 hover:text-gray-800 pb-1 transition-colors">
            Register
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
          {/* Sign in */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-1">Register or Log In</h2>
            <p className="text-sm text-gray-500 mb-6">My account details</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A0536] hover:bg-[#2D1B4E] text-white font-bold py-3 rounded-lg transition-colors"
              >
                Login
              </button>
              <div className="flex justify-between text-sm">
                <Link href="/account/reset-password" className="text-emerald-600 hover:underline">
                  Reset password
                </Link>
                <Link href="/account/register" className="text-emerald-600 hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>

          {/* New customer callout */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Customer?</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Create an account to enjoy faster checkout, order tracking, exclusive trade pricing, and personalised offers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {[
                  "Fast, tracked checkout",
                  "Order history & re-order",
                  "Trade & wholesale pricing",
                  "Exclusive member offers",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/account/register"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
