import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.href = '/portfolio/Home.html';
  }, []);
  
  return null;
};

export default Home;