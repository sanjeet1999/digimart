import React from 'react';

const Footer = ()=>{
  return (
    <footer className="bg-white shadow-inner mt-1">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;