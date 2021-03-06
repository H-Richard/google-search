/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import SocialTab from '../common/SocialTab/SocialTab';
import PeopleTab from '../common/PeopleTab/PeopleTab';

import styles from './KnowledgePane.module.scss';

const socials = [
  {
    link: 'https://www.linkedin.com/in/h-richard/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  {
    link: 'https://github.com/H-Richard',
    icon: 'github',
    title: 'GitHub',
  },
  {
    link: 'https://www.youtube.com/channel/UCm4XG_OySAfgleLCZ1dh97g',
    icon: 'youtube',
    title: 'YouTube',
  },
  {
    link: 'https://www.instagram.com/_richard.hong/',
    icon: 'instagram',
    title: 'Instagram',
  },
  {
    link: 'https://www.twitch.tv/euclidslemma/',
    icon: 'twitch',
    title: 'Twitch',
  },
];

const people = [
  {
    link: 'https://www.google.com/search?q=Dwayne%20Johnson',
    icon: 'dwayne',
    title: 'Dwayne Johnson',
    description: 'Twin Brother',
  },
  {
    link: 'http://liubryan.com/',
    icon: 'bryan',
    title: 'Bryan Liu',
    description: 'Former Daughter',
  },
  {
    link: 'https://kamiyaa.github.io/',
    icon: 'jeff',
    title: 'Jeff Zhao',
    description: 'Eldest Student',
  },
  {
    link: 'https://ozcer.github.io/',
    icon: 'oscar',
    title: 'Oscar Lin',
    description: 'Favorite Spotter',
  },
  {
    link: 'https://fpunny.xyz/',
    icon: 'fred',
    title: 'Frederic Pun',
    description: 'Owo',
  },
];

const InfoPanel: React.FC = () => {
  const age = useMemo(
    () =>
      Math.floor(
        (new Date().getTime() - new Date('2000/12/25').getTime()) / 31536000000 // number of ms in a year
      ),
    []
  );

  return (
    <div className={styles.Container}>
      <p className={styles.SocialText} />
      <p>
        XiangQian &quot;Richard&quot; Hong is a third-year Computer Science and
        Statistics student, specializing in <b>Software Engineering</b> and{' '}
        <b>Statistical Machine Learning</b>. He currently works as a Software
        Developer Intern at <b>Shopify</b>...
      </p>
      <p>
        <b>Born: </b> Februrary, 2000 (age {age} years),{' '}
        <a
          href="https://en.wikipedia.org/wiki/Shenyang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shenyang, Liaoning
        </a>
      </p>
      <p>
        <b>Height: </b> 1.73 m (5 feet 8 and 7/64 inches)*
      </p>
      <p>
        <b>Net Worth: </b> CAD $76.9 Dollars (November 2020)
      </p>
      <p>
        <b>Education: </b>{' '}
        <a
          href="https://www.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Toronto
        </a>{' '}
        (2018 - Present)
      </p>
      <p className={styles.Header}>Profiles</p>
      <div className={styles.SocialContainer}>
        {socials.map((obj) => {
          return <SocialTab {...obj} key={obj.icon} />;
        })}
      </div>
      <p className={styles.Header}>People Also Search For</p>
      <div className={styles.SocialContainer}>
        {people.map((obj) => {
          return <PeopleTab {...obj} key={obj.icon} />;
        })}
      </div>
    </div>
  );
};

export default InfoPanel;
