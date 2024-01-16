import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} All Rights Reserved. Created by Ashfaq</p>
    </footer>
  );
};

export default Footer;
