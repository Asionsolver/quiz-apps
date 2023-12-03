
import LayoutStyle from '../styles/Layout.module.css'
// import Videos from './Videos';
import Nav from './Nav';


export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={LayoutStyle.main}>
        <div className={LayoutStyle.container}>{children}</div>
      </main>
    </>
  );
}
