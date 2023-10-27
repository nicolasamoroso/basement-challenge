import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Footer from "../components/Footer";

export const getStaticProps = async () => {
  const products = await import("../product/mock.json").then((m) => m.default);

  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>basement challenge</title>
      </Head>
      <main>
        <Header />
        <Banner />
        <Carousel />
        <Products products={products} />
        <Footer />
      </main>
    </>
  );
}
