export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-widest uppercase">
          Loading Fourkan.dev...
        </p>
      </div>
    </div>
  );
}
