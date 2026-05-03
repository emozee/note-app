import { useParams, useNavigate } from 'react-router-dom';

export default function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    
    // Logic for delete (fetch) goes here...
    navigate("/notes");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-500 hover:text-white mb-6 flex items-center gap-2 transition"
        >
          ← Back to Workspace
        </button>
        
        <h1 className="text-5xl font-bold text-white">Note Detail #{id}</h1>
        <div className="h-1 w-20 bg-blue-600 my-6 rounded-full" />
        
        <p className="text-xl text-gray-300 leading-relaxed">
          This is where your content would flow. Imagine a clean, readable layout 
          designed for focus and clarity.
        </p>

        <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
          <span className="text-gray-500 italic text-sm font-mono">ID: {id}X-8802</span>
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  );
}