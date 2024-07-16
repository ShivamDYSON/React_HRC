// import React from 'react';
// import './Confirmation.css';

// const Confirmation = ({ horse, date, time, name }) => {
//   return (
//     <div className="confirmation-section">
//       <div className="container">
//         <div className="card">
//           <h2>Booking Confirmation</h2>
//           <p>Thank you, {name}!</p>
//           <p>Your booking for {horse} on {date} at {time} has been confirmed.</p>
//           <p>A calendar invite has been sent to your email.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirmation;

import React from 'react';
import './Confirmation.css';

const Confirmation = (props) => {
  const { horse, date, time, name } = props.location.state;

  return (
    <div className="confirmation-section">
      <div className="container">
        <div className="card">
          <h2>Booking Confirmation</h2>
          <p>Thank you, {name}!</p>
          <p>Your booking for {horse} on {date} at {time} has been confirmed.</p>
          <p>A calendar invite has been sent to your email.</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
