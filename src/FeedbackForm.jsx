// FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating1: 5, rating2:5, rating3:5,
    checkbox: false,
    dropdown: 'Regularly',
    yesNo: '',
    textArea: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

   async function handleSubmit (e)  {
    e.preventDefault();
    // Submit form data to backend
    console.log(formData); 
    setFormData({
        rating1: 5, rating2:5, rating3: 5,
    checkbox: false,
    dropdown: 'Regularly',
    yesNo: '',
    textArea: ''
    });
    

    // For testing, you can replace this with your backend API call
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">

<div className="form-group rr p-4">
        <label htmlFor="dropdown"><h5>How often do you visit?</h5></label>
        <select id="dropdown" name="dropdown" value={formData.dropdown} onChange={handleChange} className='my-4'>
          <option value='Regularly'>Regularly</option>
          {/* <option value="option1">Regularly</option> */}
          <option value='Occasionally'>Occasionally</option>
          {/* <option value="option3">Option 3</option> */}
        </select>
      </div>
      <div className="form-group">
        <div className='d-flex justify-content-center align-item-center flex-column'>

        <label htmlFor="rating1"><h4>Quality of the food </h4></label>
        <input type="number" id="rating1" name="rating1" min="0" max="5" value={formData.rating1} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="rating2"><h4> Service rating</h4></label>
        <input type="number" id="rating2" name="rating2" min="0" max="5" value={formData.rating2} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="rating3" className=''><h4>OverAll Ratings</h4></label>
        <input type="number" id="rating3" name="rating3" min="0" max="5"  value={formData.rating3}  onChange={handleChange} className='mb-4' />
        </div>
      </div>
      
      <div className="form-group p-4">
        <h4>Would you recommend our restaurant to others?</h4>
        <div className='d-flex align-items-center  justify-content-center gap-3'>

        <label>
          <input className='border' type="radio" name="yesNo" value="yes" checked={formData.yesNo === 'yes'} onChange={handleChange} />
          Yes
        </label>
        <label>
          <input type="radio" name="yesNo" value="no" checked={formData.yesNo === 'no'} onChange={handleChange} />
          No
        </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="textArea"><h4>Your suggestion to improve:</h4></label>
        <textarea id="textArea" name="textArea" value={formData.textArea} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>
          <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />
         <h4 className='d-inline-block p-2'>Receive Personal follow up to your feedback</h4>
        </label>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
