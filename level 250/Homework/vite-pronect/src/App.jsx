import InputList from "./components/inputList";
import Counter from "./components/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ProductList from "./components/productList";
import Cart from "./components/Cart";
import Notes from "./components/Notes";

export default function App() {
  return (
    <>
      <InputList />
      <Counter />
      <ThemeSwitcher />
      <ProductList />
      <Cart />
      <Notes />
    </>
  );
}
