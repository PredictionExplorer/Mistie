export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
        <p className="mt-6 text-sm uppercase tracking-widest text-muted">
          Loading...
        </p>
      </div>
    </div>
  );
}

