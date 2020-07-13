import React from 'react';

import styles from './ProjectResult.module.scss';

interface Props {
  title: string;
  source?: string;
  live?: string;
  description: string;
  img: string;
  technologies: string[];
}

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
            <a href={live ?? source} className={styles.linkContainer}>
              <p className={styles.link}>{source ?? live}</p>
              <div className={styles.titleContainer}>
                <a href={live ?? source} className={styles.title}>
                  {title}
                </a>
              </div>
            </a>
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
