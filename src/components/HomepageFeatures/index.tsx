import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Complete helpdesk ticketing system',
    Svg: require('@site/static/img/undraw_maintenance_4unj.svg').default,
    description: (
      <>
        helpdesk-go is a complete helpdesk ticketing system built with Go. Featuring a
        React-based agent/admin UI, basic requester UI, and highly configurable backend.
      </>
    ),
  },
  {
    title: 'Chatbot Integration',
    Svg: require('@site/static/img/undraw_chat-bot_c8iw.svg').default,
    description: (
      <>
        Basic Discord integration with more integrations planned in the future.
      </>
    ),
  },
  {
    title: 'Powerful features',
    Svg: require('@site/static/img/undraw_faq_pgxi.svg').default,
    description: (
      <>
        OIDC authentication with support for Keycloak, Authentik, Auth0, and Azure AD.
        S3 compatible object storage for attachments. IMAP polling support. Full REST API.
        Built in queue system for sending email.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
