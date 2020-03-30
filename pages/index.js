import Link from 'next/link';

const Home = ({ data }) => (
  <div className='container'>
    <style jsx>{`
      h1 {
        color: green;
      }
    `}</style>
    <h1>首页</h1>
    <Link href='/amai_mayoi.github.io/post/hello-world'><a>列表页</a></Link>
  </div>
)
export default Home;
