// import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';

// function Cards() {
//   return (
//     <div className='cards'>
//       <h1>Check out our Magnificient Horses!</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/blaze.jpg'
//               text= 'Chature Ramm lingammmm anknasfnskdfnkdsjn'
//               label='SILENCEER'
//               path='/sign-up'
//             />
//             <CardItem
//               src='images/storm.jpg'
//               text='Khujli wali rottiiiii kajbfbsjbfjsbj'
//               label='RAJU RASTOGI'
//               path='/sign-up'
//             />
//           </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/thunder.jpg'
//               text='Master genious idiot fbshfudsifuesfbiu'
//               label='RANCHOO'
//               path='/sign-up'
//             />
//             <CardItem
//               src='images/lightning.jpg'
//               text='ABBA Nahi Manenge'
//               label='FARHAN-NITRATE'
//               path='/sign-up'
//             />
//             <CardItem
//               src='images/img-8.jpg'
//               text='HELmet chorrr abb centimeter ban gaya hai'
//               label='MILLIMETER'
//               path='/sign-up'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const handleButtonClick = () => {
    window.location.href = '/bookingPage'; // Replace with your desired URL
  };

  return (
    <div className='cards'>
      <h1>Check out our Magnificent Horses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/blaze.jpg`}
              text='Chature Ramm lingammmm anknasfnskdfnkdsjn'
              label='SILENCEER'
              path='/sign-up'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/storm.jpg`}
              text='Khujli wali rottiiiii kajbfbsjbfjsbj'
              label='RAJU RASTOGI'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/thunder.jpg`}
              text='Master genious idiot fbshfudsifuesfbiu'
              label='RANCHOO'
              path='/sign-up'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/lightning.jpg`}
              text='ABBA Nahi Manenge'
              label='FARHAN-NITRATE'
              path='/sign-up'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-8.jpg`}
              text='HELmet chorrr abb centimeter ban gaya hai'
              label='MILLIMETER'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <div className='book-btn-container'>
        <button className='book-btn' onClick={handleButtonClick}>Book Ride</button>
      </div>
    </div>
  );
}

export default Cards;
