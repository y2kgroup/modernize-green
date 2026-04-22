export default function IntroBand({ data }) {
  if (!data?.enabled) return null;
  return (
    <section className="bg-brand-accent text-white">
      <div className="container-narrow py-6 md:py-8 text-center md:text-lg font-medium">
        {data.text}
      </div>
    </section>
  );
}
