/** @format */

export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4 py-10">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        <span className="loading loading-spinner loading-lg text-emerald-700" />
        <p className="text-sm font-medium text-slate-600">
          Loading friends data...
        </p>
      </div>
    </main>
  );
}
