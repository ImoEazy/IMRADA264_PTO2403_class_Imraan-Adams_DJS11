import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastPreview from './components/PodcastPreview';
import ShowDetail from './pages/ShowDetail';
import usePodcasts from './hooks/usePodcasts';

const App = () => {
  const { podcasts, loading } = usePodcasts();

  if (loading) {
    return <div>Loading podcasts...</div>;
  }

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">Podcast App</h1>
        <Routes>
          <Route path="/" element={<PodcastPreview podcasts={podcasts} />} />
          <Route path="/podcast/:showId" element={<ShowDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
