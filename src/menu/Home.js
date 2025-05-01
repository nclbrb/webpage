import React from 'react';

const Home = () => (
  <section id="home" className="py-5 text-center">
    <div className="container d-flex justify-content-center align-items-center">
      <div className="text-container">
        <h1 className="display-4">Hi, I'm Nicole S. Borabo</h1>
        <p className="lead">
          Hello, I'm Nicole Borabo, a 3rd-year college student at the University of Cabuyao, pursuing a Bachelor's degree in Information Technology. 
          I'm passionate about designing websites and putting a strong emphasis on user experience.
        </p>
        <p>
          My favorite color is green, and I believe modern problems require modern solutions.
        </p>
      </div>
      <div className="image-container">
        <img 
          src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/429681830_7569758999752206_3267471120401683563_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=endSchVP2mwQ7kNvwGWSWoY&_nc_oc=AdntmcSgt6VWL1YaJK__FEz7A79YoifiMyKSvWxdzrNHAbNAQaMhObUOQv6K3fAl8bc&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=U-MEff3RYHkWQO8QIhNqFQ&oh=00_AfHnH35EsV3VHC8CpGcKevH0q3--Af3gnLLyva_2OYqt4A&oe=6818B0CA"
          alt="Nicole Borabo"
          className="profile-image"
        />
      </div>
    </div>
  </section>
);

export default Home;
