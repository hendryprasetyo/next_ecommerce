import React from "react";

import {
  FooterBanner,
  Contact,
  HeroBanner,
  NavbarHome,
  Footer,
} from "../components";
import { client } from "../lib/client";
import { unauthPage } from "../middlewares/authorizationPage";

const Home = ({ bannerData }) => {
  return (
    <>
      <NavbarHome />
      <div className="layout">
        <main className="main-container">
          <div className="fixed right-4 bottom-4 z-50"></div>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
          <Contact />
          <FooterBanner footerBanner={bannerData && bannerData[0]} />
        </main>
        <Footer />
      </div>
    </>
  );
};
export const getServerSideProps = async (ctx) => {
  await unauthPage(ctx);

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
