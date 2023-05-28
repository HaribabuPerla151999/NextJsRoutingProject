import '@/styles/globals.css';
import LayOut from '@/components/layout/layOut';

export default function App({ Component, pageProps }) {
  return(
  <LayOut>
   <Component {...pageProps} />
   </LayOut>
  )
}
