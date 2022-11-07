import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'Meta | Software Engineer',
    description: <>Haven&apos;t done much yet, but it&apos;s honest work.</>,
    link: 'https://engineering.fb.com/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/69631?s=200&v=4"
        alt="meta logo"
        priority
        fill
      />
    ),
  },
  {
    title: 'Augmentr | Engineering Lead',
    description: (
      <>
        Working with NestJS, Prisma, Postgres, AWS S3, CDK, EKS, Kubernetes,
        GraphQL, and TypeScript.
      </>
    ),
    extras: <b>Infra, Backend, DevOps</b>,
    link: 'https://www.augmentr.io/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/107826199?s=200&v=4"
        alt="augmentr logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Coinbase | Software Engineer',
    description: (
      <>
        Worked with React Native, TypeScript, Go, gRPC, and GraphQL. Was laid
        off after the company discovered that he stole 3 cans LaCroix&trade;
        Sparkling Water during a company offsite in Zimbabwe.
      </>
    ),
    extras: (
      <>
        <b>Mobile, Frontend, Backend</b>
      </>
    ),
    link: 'https://www.coinbase.com/card/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/1885080?s=200&v=4"
        alt="coinbase logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'University of Toronto | Researcher',
    description: (
      <>
        Bridging the gap between human and AI with Maia, a human-like chess
        engine built atop AlphaZero/Leela. Leveraged advanced Reinforcement
        Learning algorithms to trade crypto and lost all of his money due to a
        rounding error.
      </>
    ),
    extras: (
      <>
        <b>Machine Learning, Frontend</b>
      </>
    ),
    link: 'http://csslab.cs.toronto.edu/research/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/33668513?s=200&v=4"
        alt="uoft logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Shopify | Software Developer Intern',
    description: (
      <>
        Worked with Ruby on Rails, React, TypeScript, MySQL, and GraphQL. Took a
        lot of snacks (n &gt;= 20) from the office once and nobody found out.
      </>
    ),
    extras: (
      <>
        <b>Frontend, Backend</b>
      </>
    ),
    link: 'https://www.shopify.com/plus/solutions/ecommerce-automation/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/8085?s=200&v=4"
        alt="shopify logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'University of Toronto | Teaching Assistant',
    description: (
      <>
        TA&apos;d Computability and Computational Complexity, Discrete Math,
        Linear Algebra II, and Calculus I.
      </>
    ),
    extras: <b>Computer Science, Math</b>,
    link: 'https://web.cs.toronto.edu/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/33668513?s=200&v=4"
        alt="uoft logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Amazon | Software Development Engineer Intern',
    description: (
      <>
        Worked with AWS CDK, SageMaker, S3, DynamoDB, PrestoDB, Glue, Redshift,
        Athena, Lambda, Express, Lambda, PySpark, React and TypeScript. Built
        scalable data pipelines that ingest terabytes of data daily from the
        Commerce supply chain.
      </>
    ),
    extras: (
      <>
        <b>Data, Infra, DevOps, Frontend, Backend</b>
      </>
    ),
    link: 'https://www.amazon.com/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/8594673?s=200&v=4"
        alt="amazon logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'NorthBoys | Software Engineer',
    description: (
      <>
        Worked with React, TypeScript, and Redux. Built a performant point of
        sale application used by the physical retailers of the business.
      </>
    ),
    extras: (
      <>
        <b>Frontend</b>
      </>
    ),
    link: 'https://northboysusa.com/',
  },
  {
    title: 'IBM | Software Engineer Intern',
    description: (
      <>
        Worked with Elixir, Ruby, Python, Go, JavaScript, Kubernetes, Helm,
        Docker, AWS S3, and GraphQL. Achieved a highscore of 200 million (4th)
        on the Deadpool pinball machine on the second floor, also clapped the
        other interns in pool and ping pong.
      </>
    ),
    extras: (
      <>
        <b>DevOps, Backend, Frontend</b>
      </>
    ),
    link: 'https://skills.network/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/48692442?s=200&v=4"
        alt="ibm logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Google DSC | Project Lead',
    description: (
      <>
        Worked with Flutter, Dart, React, JavaScript, GCP, Go, GraphQL,
        Postgres, Firebase and Kubernetes.
      </>
    ),
    extras: (
      <>
        <b>DevOps, Frontend, Frontend</b>
      </>
    ),
    link: 'https://developers.google.com/community/gdsc',
  },
  {
    title: 'AMACSS | Director of IT',
    description: (
      <>
        Oversaw the Frontend team in development of the organization&apos;s new
        website with Gatsby.
      </>
    ),
    link: 'https://amacss.org/',
  },
  {
    title: 'Network Re-Engineered Inc | Software Engineer',
    description: (
      <>
        Worked with React Native, TypeScript, Streamchat, Chatkit and Firebase.
        Led the development of the messaging and calling feature.
      </>
    ),
    extras: <b>Mobile, Backend</b>,
    link: 'https://www.campusconnect.ca/',
  },
  {
    title: 'Highland Fish and Chips | Fry Cook',
    description: <>Cooked fish, fries, and mushy peas.</>,
    extras: <b>British Food</b>,
    link: 'https://goo.gl/maps/hy1oUTesedd9c61d8/',
  },
  {
    title: 'Via Cibo | Line Cook',
    description: (
      <>
        Cooked pizzas, pastas, salads, paninos, piadinas, risottos, pancakes,
        and more.
      </>
    ),
    extras: <b>Italian Food</b>,
    link: 'https://www.viacibo.com/',
  },
  {
    title: 'Roux | Sous Chef',
    description: (
      <>
        Made croissants, beignets, scones, creme brulee, steaks, fish, shrimp,
        cornbread, fried chicken, ceviche, omelettes, and more.
      </>
    ),
    extras: <b>Creole Food, French Food</b>,
    link: 'https://goo.gl/maps/GYX2fT4o2yf2DkDr8',
  },
]
