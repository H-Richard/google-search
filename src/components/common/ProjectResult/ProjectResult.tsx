/* eslint-disable no-restricted-syntax */
import React, { ReactElement } from 'react';

import styles from './ProjectResult.module.scss';

interface Props {
  title: string;
  source: string;
  live?: string;
  description: string;
  img: string;
  technologies: string[];
}

const Breadcrumbs: React.FC<{ url: URL }> = ({
  url,
}: {
  url: URL;
}): ReactElement => {
  let base = url.hostname;
  const paths = url.pathname.split('/');
  const res: ReactElement[] = [
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      github.com
    </a>,
  ];
  for (const path of paths) {
    if (path !== '') {
      base += `/${path}`;
      res.push(
        <>
          <span> › </span>
          <a href={`https://${base}`} target="_blank" rel="noopener noreferrer">
            {path}
          </a>
        </>
      );
    }
  }
  return <span className={styles.breadcrumbs}>{res}</span>;
};

const ProjectResult: React.FC<Props> = ({
  title,
  source,
  live,
  description,
  img,
  technologies,
}: Props) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row}>
          <img src={img} alt={title} className={styles.thumbnail} />
          <div className={styles.content}>
            <div className={styles.linkContainer}>
              <Breadcrumbs url={new URL(source)} />
              <div className={styles.titleContainer}>
                <a
                  href={live ?? source}
                  className={styles.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </div>
            </div>
            <div className={styles.technologyList}>
              {technologies.map((text: string) => (
                <>
                  <span className={styles.technology}>{text}</span>
                  &nbsp;
                </>
              ))}
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectResult;
