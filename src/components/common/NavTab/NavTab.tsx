/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useMemo } from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './NavTab.module.scss';

interface NavTabProps extends RouteComponentProps {
  text: string;
  icon: string;
  to: string;
}

const NavTab: React.FC<NavTabProps> = ({
  to,
  icon,
  text,
  location: { pathname },
}: NavTabProps) => {
  const active = useMemo(() => to === pathname, [to, pathname]);

  return (
    <NavLink to={to} className={styles.link}>
      <div className={active ? styles.containerActive : styles.container}>
        <div className={styles.top}>
          <img
            className={styles.icon}
            src={require(`./svgs/${icon}${active ? '-active' : ''}.svg`)}
            alt={to}
          />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default withRouter(NavTab);
