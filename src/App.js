// App.js
import React from 'react';
import FeedbackForm from './FeedbackForm';
import './App.css';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
      <div className="m-4 bg-success w-50">
        <h1 className="text-center color-white">Feedback Form</h1>
      </div>
      <FeedbackForm />
    </div>
  );
}

export default App;

