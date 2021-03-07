import Link from "next/link";
import Head from "next/head";


export const MainLayout = ({children, title = 'Next App'}) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name={'keywords'} content={'next, javaScript'}/>
        <meta name={'description'} content={'next, javaScript'}/>
        <meta charSet={'utf-8'}/>
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          nav{
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 1rem;
          }
          nav a{
          color: #fff;
          text-decoration: none;
          }
          main{
          margin-top: 60px;
          }
`}
      </style>
    </>
  )
}
