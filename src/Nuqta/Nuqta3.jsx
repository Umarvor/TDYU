import React, { useState } from 'react';
import './Nuqta3.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <button className="open-btn" onClick={openPopup}>Open Popup</button>

      {isPopupOpen && (
        <div className="popup">
          <div className="close-btn" onClick={closePopup}>X</div>
          <div className="popup-content">
            <p>This is a popup window.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
