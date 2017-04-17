import React from 'react';
import NavLink from './NavLink';

class Navbar extends React.Component {
  render() {
    return (
      <section id="one">
        <ul className="actions" role="nav">
          <li><NavLink to="/found" className='button'> I Found a Kitten</NavLink></li>
          <li><NavLink to="/about" className='button'> Learn more about OKP</NavLink></li>
          <li><NavLink to="/help" className='button'> I want to help</NavLink></li>
        </ul>
      </section>
    )
  }
}

export default Navbar;
