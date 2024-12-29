import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM correctly
import App from './App'; // Import the App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:w-full mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <App />
    </div>
  </React.StrictMode>
);
