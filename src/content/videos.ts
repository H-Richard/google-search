import { ComponentProps } from 'react'
import { VideoResult } from 'src/components'

type Video = ComponentProps<typeof VideoResult>

export const videos: Video[] = [
  {
    title: 'How I Build Backend Services in 2022',
    id: 'twi33GVRazE',
    description: `Building a simple GraphQL API with me using TypeScript, NestJS, and Prisma. 

    Source code: https://github.com/H-Richard/backend-2022
    
    Learn more about NestJS: https://nestjs.com/
    Learn more about Prisma: https://www.prisma.io/
    Learn more about GraphQL: https://graphql.org/
    
    For the background music, check out: https://www.youtube.com/channel/UCaH9AQy86DBIg-BpWzj-csQ`,
    uploadDate: 'July 11, 2022',
  },
  {
    title: 'My Experience Getting Laid Off',
    id: 'mnNJDU66haI',
    description: `Coinbase recently laid off 18% (N = 1,100) employees, and I was a part of it. I talk about my experience at the company, as well as what it was like during, before, and after the layoffs. I hope that everybody affected by the layoffs can quickly recover.`,
    uploadDate: 'June 20, 2022',
  },
  {
    title: 'Analyzing NBA Championships with Graph Theory',
    id: 'bO_VlATlQDU',
    description: `Last month 2020 NBA season ended with the LA Lakers winning their 17th franchise championship, at the same time, my Graph Theory course has been teaching the PageRank Algorithm. Today I'm going to see if I can apply what I've learned to analyze some of the more recent NBA Championship runs.`,
    uploadDate: 'Nov 3, 2020',
  },
  {
    title: 'Building Recursive Components in React',
    id: 'a5aumoJWbKk',
    description: `I took a nap earlier yesterday and had a dream about recursive components in React. So I decided to make a quick video on building these types of recursive components. Also, if I hit 2 likes on this video I'll make another React video sometime soon.`,
    uploadDate: 'Oct 17, 2020',
  },
  {
    title: 'Building a GraphQL Server with Golang and MongoDB',
    id: 'FkpCeXbXVhU',
    description: `Building a GraphQL Server with Golang, MongoDB and live commentary. Learn to setup a simple GraphQL Server from scratch. 

    Links referenced throughout the video: 
    
    Source code: https://github.com/H-Richard/go-graphql
    howtographql: https://www.howtographql.com/graphql-...
    mongodb driver: https://github.com/mongodb/mongo-go-d...
    gqlgen: https://github.com/99designs/gqlgen
    `,
    uploadDate: 'Aug 3, 2020',
  },
  {
    title: 'JavaScript Essentials: Array Destructuring',
    id: 'Cns4k9S_jvk',
    description: `Destructuring is a powerful syntax feature that came with the release of ES6. It lets us unpack data structures like arrays and objects into variables in a clean and elegant way. 

    Today we explore some of the ways we can use array destructuring to our benefit. 
    
    
    To learn more about object destructuring check out: https://youtu.be/2jbuJpiUSbo
    `,
    uploadDate: 'June 19, 2020',
  },
  {
    title: 'JavaScript Essentials: Object Destructuring',
    id: '2jbuJpiUSbo',
    description: `Destructuring is a powerful syntax feature that came with the release of ES6. It lets us unpack data structures like arrays and objects into variables in a clean and elegant way. 

    Today we explore some of the ways we can use object destructuring to our benefit.`,
    uploadDate: 'June 10, 2020',
  },
  {
    title: 'Build a GraphQL Server with Deno and MongoDB',
    id: 'CNz7G6mF9o0',
    description: `Deno is a modern JavaScript/TypeScript runtime built by the author of NodeJS. Today we'll take a look at how you can build a GraphQL Server with Deno and MongoDB.

    Source code: https://github.com/H-Richard/deno-gra...
    Learn more about Deno: https://deno.land/
    Learn more about GraphQL: https://graphql.org/`,
    uploadDate: 'June 6, 2020',
  },
]
