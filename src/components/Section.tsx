export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}
