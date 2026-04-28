
export default function Card({ title, desc }) {
  return (
    <div className="w-full max-w-sm p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
      <div className="rounded-xl bg-black p-6 text-left text-white transition-transform duration-200 hover:scale-[1.03] origin-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
