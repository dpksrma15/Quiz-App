import React, { useState, useEffect } from 'react';

const TabViolationTracker = () => {
  const [violationCount, setViolationCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched to another tab, update violation count
        setViolationCount(count => count + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <h3>Tab Violation Tracker</h3>
      <p>Violation Count: {violationCount}</p>
    </div>
  );
};

export default TabViolationTracker;
