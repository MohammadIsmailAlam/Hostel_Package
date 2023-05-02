import React from 'react';
import myImage from '../Assets/img/hl3.jpg';

export default function Dashboard() {
  return (
    <div style={{height: '100vh', width: '100vw', backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* content here */}
    </div>
  );
}
