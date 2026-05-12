import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        title="Customer Registration"
        subtitle="Create your EverPunch account for faster checkout and exclusive trade pricing"
        crumbs={[{ label: "Account", href: "/account" }, { label: "Customer Registration" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Tabs */}
        <div className="flex gap-6 mb-8 text-sm font-medium">
          <Link href="/account" className="text-gray-500 hover:text-gray-800 pb-1 transition-colors">
            Login
          </Link>
          <span className="text-emerald-600 border-b-2 border-emerald-500 pb-1">Register</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Register or Log In</h2>
          <p className="text-sm text-gray-500 mb-8">My account details</p>

          <form className="space-y-5">
            {/* Account credentials */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">E-Mail</label>
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm email</label>
              <input
                type="email"
                placeholder="Confirm email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Create password</label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            {/* Billing details */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-base font-bold text-gray-900 mb-4">Billing details</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buying for</label>
              <div className="flex gap-6">
                {["Business", "Home Use"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="buying_for"
                      value={opt}
                      defaultChecked={opt === "Home Use"}
                      className="accent-emerald-500 w-4 h-4"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Address 1</label>
              <input
                type="text"
                placeholder="Address 1"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Address 2</label>
              <input
                type="text"
                placeholder="Address 2"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Postcode</label>
                <input
                  type="text"
                  placeholder="Postcode"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors bg-white">
                <option value="uk-mainland">UK Mainland</option>
                <option value="northern-ireland">Northern Ireland</option>
                <option value="scotland-highlands">Scotland Highlands</option>
                <option value="channel-islands">Channel Islands</option>
                <option value="isle-of-man">Isle of Man</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile phone</label>
              <input
                type="tel"
                placeholder="Mobile phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="accent-emerald-500 w-5 h-5 rounded"
              />
              <span className="text-sm text-gray-700">Email me with news and offers</span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#1A0536] hover:bg-[#2D1B4E] text-white font-bold py-3.5 rounded-lg transition-colors text-sm mt-2"
            >
              Create Account
            </button>

            <p className="text-xs text-gray-500 text-center">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="text-emerald-600 hover:underline">Terms & Conditions</Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
