import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/*
 * One button for the whole site.
 * variant: primary (green, donate) | outline (blue) | orange | light (on dark backgrounds) | ghost
 * Renders <Link> for internal `to`, <a> for external `href`, otherwise <button>.
 */
const Button = ({ variant = 'primary', size = 'md', to, href, icon, block, className = '', children, ...rest }) => {
  const classes = [styles.btn, styles[variant], styles[size], block ? styles.block : '', className].join(' ');
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return <button type="button" className={classes} {...rest}>{content}</button>;
};

export default Button;
