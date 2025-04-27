import { useState, useEffect } from 'react';
import './Splash.css';

const SplashScreen = ({ onFinish }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTypingComplete(true); 
      onFinish(); 
    }, 6000); // The entire animation (typing + hold) will take 6 seconds

    return () => {
      clearTimeout(typingTimer);
    };
  }, [onFinish]);

  return (
    <div id='splash' className="splash-container">
      <div className="text-white text-4xl font-semibold typing-animation">
        &lt;EswarKartheek /&gt;
      </div>
    </div>
  );
};

export default SplashScreen;
