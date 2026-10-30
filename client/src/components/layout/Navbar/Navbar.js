import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useScrolled from '../../../hooks/useScrolled';
import useHideOnScroll from '../../../hooks/useHideOnScroll';
import { navLinks } from './navLinks';
import styles from './Navbar.module.css';

const linkClass = (link, base, active) => ({ isActive }) =>
  `${base} ${link.highlight ? styles.highlight : ''} ${isActive ? active : ''}`;

const Navbar = () => {
  const scrolled = useScrolled(20);
  const tabsHidden = useHideOnScroll();
  const { pathname } = useLocation();
  const tabsRef = useRef(null);

  // Keep the current page's tab in view when the row is wider than the screen.
  useEffect(() => {
    const row = tabsRef.current;
    const current = row?.querySelector('[aria-current="page"]');
    if (!current) return;
    row.scrollTo({ left: current.offsetLeft - (row.clientWidth - current.offsetWidth) / 2, behavior: 'smooth' });
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ''} ${tabsHidden ? styles.tabsHidden : ''}`}>
      <div className={styles.barWrap}>
        <div className={`container ${styles.bar}`}>
          <Link to="/" className={styles.brand} aria-label="Bai Khata Kalam, home">
            <img src={`${process.env.PUBLIC_URL}/favicon-96.png`} alt="" width="44" height="44" className={styles.logo} />
            <span>Bai Khata Kalam</span>
          </Link>

          <nav aria-label="Main" className={styles.desktopNav}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} end={link.path === '/'} className={linkClass(link, styles.link, styles.active)}>
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && <motion.span layoutId="nav-underline" className={styles.underline} />}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Button to="/donate" size="sm" className={styles.donate}>Donate Now</Button>
        </div>
      </div>

      {/* Tablets and phones: every page one tap away, instead of a hamburger menu */}
      <nav aria-label="Pages" className={styles.tabs}>
        <ul ref={tabsRef} className={`container ${styles.tabList}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === '/'} className={linkClass(link, styles.tab, styles.tabActive)}>
                {({ isActive }) => (
                  <>
                    {link.short || link.name}
                    {isActive && <motion.span layoutId="tab-underline" className={styles.tabUnderline} />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
