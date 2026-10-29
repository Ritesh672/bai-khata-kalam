import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../../ui/Button';
import useScrolled from '../../../hooks/useScrolled';
import { navLinks } from './navLinks';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(20);
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled || isOpen ? styles.solid : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} aria-label="Bai Khata Kalam, home">
          <img src={`${process.env.PUBLIC_URL}/favicon-96.png`} alt="" width="44" height="44" className={styles.logo} />
          <span>Bai Khata Kalam</span>
        </Link>

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `${styles.link} ${link.highlight ? styles.highlight : ''} ${isActive ? styles.active : ''}`}
                >
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

        <div className={styles.actions}>
          <Button to="/donate" size="sm" className={styles.donate}>Donate Now</Button>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <motion.ul
              className="container"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.li key={link.path} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className={styles.mobileDonate}>
                <Button to="/donate" block size="lg">Donate Now</Button>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
