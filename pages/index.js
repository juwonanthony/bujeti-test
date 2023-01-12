import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from "@next/font/google";
import styles from '../styles/Home.module.css'
import LayoutWarpper from '../components/layoutWarapper'
import {
  CtaBanner,
  Features,
  Hero,
  Industry,
  Integration,
  Partners,
  Solution,
  Testimonials,
  WhyUs,
} from '../containers'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutWarpper>
      <Hero />
      <Features />
      <Partners />
      <Industry />
      <WhyUs />
      <Integration />
      <Testimonials />
      <Solution />
      <CtaBanner />
    </LayoutWarpper>
  )
}
