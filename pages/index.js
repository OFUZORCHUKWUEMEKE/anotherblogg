import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function Home() {
  return (
    <div className="bg-black min-h-[100vh] w-full">
      <Head>
        <title>Emeke's Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[55%] mx-auto">
        <nav className="py-3 flex justify-between items-center">
          <h2 className="cursor-pointer text-white">CHUKWUEMEKE</h2>
          <div className="space-x-5 flex items-center">
            <p className="text-white cursor-pointer">Bio</p>
            <p className="text-white cursor-pointer">About</p>
            <IconButton>
               <GitHubIcon className="text-white"/>
            </IconButton>
          </div>
        </nav>
        <div className="min-h-[45vh] py-2 flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-full">
            <div className="space-y-3">
              <h1 className='text-2xl font-mono font-bold text-white'>OFUZOR CHUKWUEMEKE</h1>
              <p className="text-gray-400">Full Stack Web Developer | BlockChain Web3 enthusiast</p>
              <p className="text-gray-400">Welcome to my Space</p>
            </div>
            <div>
              <img src="/img/emekev2.jpeg" className="object-fit w-32 h-32 rounded-full"/>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-mono font-bold text-white">Featured Posts</h2>
        </div>
      </div>
    </div>
  )
}
