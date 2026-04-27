
export default function Card({ title, desc }) {
  return (
    <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
      <div className="p-6 bg-black rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
      </div>
    </div>
  );
}
