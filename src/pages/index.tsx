import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/home'

import ReactLogo from '../assets/logos/logo-react.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>New Next App</title>
      </Head>

      <main>
        <Container>
          <ReactLogo />
          <h1>React Next App</h1>
          <br />
          <p>My setup React with NextJS</p>
        </Container>
      </main>
    </div>
  )
}

export default Home
