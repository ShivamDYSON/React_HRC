
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Ensure you're using React Router
import './bookingPage.css';

export default function BookingPage() { // Updated component name
  const [isLightMode, setIsLightMode] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const horse = event.target.horse.value;
    const date = event.target.date.value;
    const time = event.target.time.value;
    const name = event.target.name.value;

    // Redirect to confirmation page
    history.push({
      pathname: '/confirmation',
      state: { horse, date, time, name }
    });
  };

  return (
    <div className="bookingPage-section">
      <div className="toggle-container">
        <input
          type="checkbox"
          id="mode-toggle"
          className="mode-toggle"
          checked={isLightMode}
          onChange={handleToggle}
        />
        <label htmlFor="mode-toggle" className="toggle-label"></label>
      </div>
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="booking-form">
                  <form id="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <span className="form-label">Select Horse</span>
                      <select className="form-control" id="horse" required>
                        <option>SILENCEER</option>
                        <option>RAJU RASTOGI</option>
                        <option>RANCHOO</option>
                        <option>FARHAN-NITRATE</option>
                        <option>MILLIMETER</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <span className="form-label">Select Date</span>
                      <input className="form-control" type="date" id="date" required />
                    </div>
                    <div className="form-group">
                      <span className="form-label">Select Time Slot</span>
                      <select className="form-control" id="time" required>
                        <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                        <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                        <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                        <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                        <option value="7:00 AM - 8:00 AM">7:00 AM - 8:00 AM</option>
                        <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                        <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                        <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <span className="form-label">Your Name</span>
                      <input className="form-control" type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                      <span className="form-label">Email</span>
                      <input className="form-control" type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                      <span className="form-label">Phone Number</span>
                      <input className="form-control" type="tel" id="phone" placeholder="Enter your phone number" required />
                    </div>

                    <div className="form-btn">
                      <button className="button-86" role="button" type="submit">Submit</button>
                    </div>

                  </form>
                  <div id="form-result"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi. Perspiciatis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
