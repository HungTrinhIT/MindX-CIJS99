import React from 'react';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='website-logo'>
        <img src='/images/logo.png' alt='website-logo' />
      </div>
      <nav className='nav-list'>
        <ul>
          <li>
            <a className='nav-link active' href='# '>
              Trang chủ
            </a>
          </li>
          <li>
            <a className='nav-link' href='#'>
              Sản phẩm
            </a>
          </li>
          <li>
            <a className='nav-link' href=''>
              Deal hot
            </a>
          </li>
          <li>
            <a className='nav-link' href=''>
              Liên hệ
            </a>
          </li>
          <li>
            <a className='nav-link' href=''>
              Hỗ trợ
            </a>
          </li>
        </ul>
      </nav>
      <div className='header-cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>(0)</span>
      </div>
    </header>
  );
};

export default Header;
