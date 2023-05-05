import React from 'react';
import Link from 'next/link';

const Header = ({ name }) => {
  return (
    <header className="...">
      {/* Add the sidebar */}
      <nav className="...">
        <ul className="...">
          <li>
            <Link href="/eula">
              <a className="...">EULA</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <a className="...">Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </nav>      
    </header>
  );
};

export default Header;
