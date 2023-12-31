import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react';
import store from "../store/store"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
