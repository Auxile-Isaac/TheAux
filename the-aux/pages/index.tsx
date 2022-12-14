import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header" ;
import {sanityClient, urlFor} from "../backend";

interface Props{
  posts: [Post];
}
export default function Home(props: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>TheAux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
          TheAux
          </span>{" "}
             
          </h1>
          <h2>
            is Telehealth system which use communications technologies to provide health care from a distance.
            These technologies may include computers, cameras, videoconferencing, the Internet and wireless communications.
          </h2>
        </div>
        <img 
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://cdn.iconscout.com/icon/free/png-256/medium-47-433328.png"
        alt=""/> 
      </div>  
      Posts  
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const query = `*[_type=="post"]{
//     _id,
//     title,
//     author -> {
//     name,
//     image
//   },
//   description,
//   mainImage,
//   slug
//   }`;

//   const posts = await sanityClient.fetch(query);
//   return {
//     props:{
//       posts,
//     }
//   }
// };
