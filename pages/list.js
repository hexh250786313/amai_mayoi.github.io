import Link from 'next/link';

const List = () => (
  <div className='container'>
    <style jsx>{`
      h1 {
        color: orange;
      }
    `}</style>
    <h1>列表页</h1>
    <Link href='/amai_mayoi.github.io'><a>返回首页</a></Link>
  </div>
)
export default List;
