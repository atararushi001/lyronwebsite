import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "@/styles/bootstrap.min.css";
import "animate.css";
import "@/styles/boxicons.min.css";
import "@/styles/flaticon.css";
import "@/styles/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "@/styles/style.css";
// Global Responsive Style
import "@/styles/responsive.css";

// Multicolor if you want this just one color comment out
// import '@/styles/colors/brink-pink-style.css'
// import '@/styles/colors/pink-style.css'
// import '@/styles/colors/purple-style.css'

import { Poppins } from 'next/font/google'
import Layout from "@/components/_App/Layout";
import { Provider } from "react-redux";
import { useStore } from "../store";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Provider store={store}>
        <main className={poppins.className}>
          <Layout />

          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}
