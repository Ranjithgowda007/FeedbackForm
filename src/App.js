
import React from 'react';
import FeedbackForm from './FeedbackForm';
import './App.css';
import Dashboard from './Dashboard';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {


  const [submittedData, setSubmittedData] = useState([]);
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const [formData, setFormData] = useState({
    rating1: 5, rating2: 5, rating3: 5,
    checkbox: false,
    dropdown: 'Regularly',
    yesNo: '',
    textArea: ''
  });

  return (
    <div className="App d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
      
     <Router>
      <Routes>
        <Route path='/' element={ <FeedbackForm formData={formData}
        setFormData={setFormData}
        submittedData={submittedData}
        setSubmittedData={setSubmittedData}
        setShowFeedbacks={setShowFeedbacks} />}/>

        <Route path='/feedbacks' element={ <Dashboard submittedData={submittedData} />} />
      </Routes>

      <button
        type="button"
        className="btn btn-info rounded-pill"
        onClick={() => setShowFeedbacks(true)}
        > <Link to="/feedbacks" className='text-decoration-none text-white'>Show feedbacks</Link>
      </button>
      {/* {showFeedbacks && (SS
        <div>
        
        </div>)
      } */}
      </Router>
    </div>
  );
}

export default App;

