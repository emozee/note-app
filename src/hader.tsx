import { NavLink, Outlet } from 'react-router-dom';

export default function Hader() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
      isActive 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50" 
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="min-h-screen bg-[#141414]">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#141414]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-tighter text-blue-500">GMC_LABS</span>
          <div className="flex gap-2">
            <NavLink to="/notes" className={linkStyle}>Notes</NavLink>
            <NavLink to="/about" className={linkStyle}>About</NavLink>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 border border-white/20 shadow-inner" />
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}