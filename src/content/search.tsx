import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'Meta | Software Engineer',
    descripiption: <></>,
    link: 'https://engineering.fb.com/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/69631?s=200&v=4"
        alt="meta logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Coinbase | Software Engineer',
    descripiption: <></>,
    link: 'https://www.coinbase.com/card/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/1885080?s=200&v=4"
        alt="amazon logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'University of Toronto | Researcher',
    descripiption: <></>,
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
    descripiption: <></>,
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
    descripiption: <></>,
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
    descripiption: <></>,
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
    descripiption: <></>,
    link: 'https://northboysusa.com/',
  },
  {
    title: 'IBM | Software Engineer Intern',
    descripiption: <></>,
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
    descripiption: <></>,
    link: 'https://developers.google.com/community/gdsc',
  },
  {
    title: 'AMACSS | Director of IT',
    descripiption: <></>,
    link: 'https://amacss.org/',
  },
  {
    title: 'Network Re-Engineered Inc | Software Engineer',
    descripiption: <></>,
    link: 'https://www.campusconnect.ca/',
  },
  {
    title: 'Highland Fish and Chips | Fry Cook',
    descripiption: <></>,
    link: 'https://goo.gl/maps/hy1oUTesedd9c61d8/',
  },
  {
    title: 'Via Cibo | Line Cook',
    descripiption: <></>,
    link: 'https://www.viacibo.com/',
  },
  {
    title: 'Roux | Sous Chef',
    descripiption: <></>,
    link: 'https://goo.gl/maps/GYX2fT4o2yf2DkDr8',
  },
]
