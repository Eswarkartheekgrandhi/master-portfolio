import { useState } from 'react';
import LeftStickyNav from './components/LeftStickyNav'
import RightStickyNav from './components/RightStickyNav'
import './App.css'
import Hero from './components/Hero'
import SplashScreen from './components/SplashScreen';

function App() {
  const [isSplashFinished, setSplashFinished] = useState(false);

  const handleSplashFinish = () => {
    setSplashFinished(true); 
  };
  return (
    <>
      <div className="text-light min-h-screen">
      {!isSplashFinished ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <LeftStickyNav />
          <Hero />
          <RightStickyNav />
        </>
      )}
    </div>
    </>
  )
}

export default App
