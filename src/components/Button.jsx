
export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition shadow-lg">
      {children}
    </button>
  );
}
