import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-blue">
        <div className="max-w-4xl p-4 md:p-8">
          <p className="text-white">
            <span className="font-sans">©</span> {new Date().getFullYear() } Dweller
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
