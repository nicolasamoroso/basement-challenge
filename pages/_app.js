import "@/styles/globals.css";
import CartProvider from "@/state/CartProvider";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
