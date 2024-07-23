// import React from 'react';
// import '../../App.css';

// export default function bookingPage() {
//   return <h1 className='bookingPage'>SIGN UP</h1>;
// }

import React from 'react';
import '../../App.css';

export default function SignUp() {
  return (
    <div className='sign-up'>
      <img src={`${process.env.PUBLIC_URL}/GIFs/thanos-gangnam-style.gif`} alt='Thanos dancing' />
      <h1>THANOS AFTER HE SNAPS</h1>
    </div>
  );
}
