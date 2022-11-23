import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/russ.jpg'
import image2 from '@/images/photos/mountains.jpeg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/chamonix.jpg'
import image5 from '@/images/photos/boulder.jpeg'
import logoChorus from '@/images/logos/chorus.png'
import logoCapgemini from '@/images/logos/capgemini.jpg'
import logoHealthHero from '@/images/logos/healthhero.png'
import logoEy from '@/images/logos/ey.svg'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'HealthHero',
      title: 'Developer',
      logo: logoHealthHero,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Chorus',
      title: 'Senior Technical Consultant',
      logo: logoChorus,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Capgemini',
      title: 'Software Engineer Lead',
      logo: logoCapgemini,
      start: '2018',
      end: '2019',
    },
    {
      company: 'Chorus',
      title: 'CRM Consultant',
      logo: logoChorus,
      start: '2016',
      end: '2018',
    },
    {
      company: 'EY Pythagoras',
      title: 'CRM Consultant',
      logo: logoEy,
      start: '2013',
      end: '2016',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Dave Clark IO
        </title>
        <meta
          name="description"
          content="Personal site for Dave Clark - software engineer ex. MSFT consultant."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Welcome to daveclark.io ✌️
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Dave, a software engineer based in Bristol, UK and this is my site! Here you'll find:
            <br />
            * Articles for professionals on Microsoft Power Platform
            <br />
            * Projects that I'm working on
            <br />
            * Photos from my adventures that aim to inspire
          </p>
          <br />
          <p className="text-bold italic text-zinc-600 dark:text-zinc-400">
            "My code doesn't always run, but I do."
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/DaveClarkIO"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
              target="_blank"
            />
            <SocialLink
              href="https://github.com/camelCaseDave"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/davidjbclark/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
