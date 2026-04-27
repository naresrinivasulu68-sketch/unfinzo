
import Card from "../components/Card";

export default function Industry() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Industry</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <Card title="Banking" desc="Modern" />
        <Card title="Finance" desc="Advanced" />
        <Card title="Retail" desc="Smart" />
        <Card title="Enterprise" desc="Control" />
      </div>
    </section>
  );
}
