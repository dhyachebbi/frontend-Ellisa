import './App.css'
import { useState } from 'react'
import Header from './components/communauté_(feed)/Header'
import CommunityFeed from './components/communauté_(feed)/CommunityFeed'
import { RankingPage, UserProfilePage } from './components/profile-and-classement/classement_(ranking)'
import DetailsLieu from './components/detail_lieu/detail_lieu'



function App() {
  const [activePage, setActivePage] = useState('community');

  const renderPage = () => {
    switch (activePage) {
      case 'community':
        return <CommunityFeed />;
      case 'ranking':
        return <RankingPage />;
      case 'profile':
        return <UserProfilePage />;
      case 'details':
        return <DetailsLieu />;
      default:
        return <CommunityFeed />;

    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <Header activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
}

export default App
