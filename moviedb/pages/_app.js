import { Provider } from "react-redux";
import '../styles/main.scss';
import store from '../store/store';
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
const makeStore = () => store

export default withRedux(makeStore)(MyApp)
