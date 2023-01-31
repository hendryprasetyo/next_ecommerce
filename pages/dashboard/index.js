import React from "react";
import { Product, FooterBanner, HeroBanner, Layout } from "../../components";
import { client } from "../../lib/client";
import { authPage } from "../../middlewares/authorizationPage";
import { StateContext, useStateContext } from "../../context/StateContext";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = ({ products, bannerData }) => {
  const { currentColor } = useStateContext();
  const style = {
    color: currentColor,
  };
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2 style={style}>Best Selling Products</h2>
        <p style={style}>Speaker of my variants</p>
      </div>
      <div className="relative  flex flex-col items-center gap-24 w-full p-4 sm:w-6/12 sm:flex-row justify-center">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { token } = await authPage(ctx);

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Dashboard;

Dashboard.getLayout = function (page) {
  return (
    <>
      <AuthContext>
        <StateContext>
          <Layout>{page}</Layout>
        </StateContext>
      </AuthContext>
    </>
  );
};
