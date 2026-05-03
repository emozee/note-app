import { Link } from 'react-router-dom';

export default function NotesList() {
  const notes = [
    { id: 1, title: "Quarterly Goals", emoji: "🎯", tags: ["Management", "Growth"] },
    { id: 2, title: "React Hooks Deep Dive", emoji: "⚛️", tags: ["Coding", "WebDev"] },
    { id: 3, title: "GMC Project Ideas", emoji: "🏙️", tags: ["Logistics", "Future"] },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-white/90">My Workspace</h1>
        <p className="text-gray-400 mt-2">Manage your thoughts and projects.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Link 
            key={note.id} 
            to={`/notes/${note.id}`}
            className="group relative bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
          >
            <div className="text-3xl mb-4">{note.emoji}</div>
            <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
              {note.title}
            </h2>
            <div className="flex gap-2 mt-4">
              {note.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            {/* The "Netflix" glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
}