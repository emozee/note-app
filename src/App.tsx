import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hader from './hader'; 
import About from './about';
import NoteDetail from './note-details';
// Import whatever component shows your list of notes (e.g., NotesList)
import NotesList from './note-list'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout/Hader wrapper */}
        <Route path="/" element={<Hader />}>
          {/* This makes http://localhost:5173/ automatically go to /notes */}
          <Route index element={<Navigate to="/notes" replace />} />
          
          {/* This is the page that should show at /notes */}
          <Route path="notes" element={<NotesList />} />
          
          <Route path="notes/:id" element={<NoteDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}