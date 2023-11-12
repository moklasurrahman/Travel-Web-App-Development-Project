import { Link } from "react-router-dom";
const CartEmpty = () => {
  return (
    <section className="text-center w-full h-screen flex m-auto justify-center">
      <div className="w-[500px] border rounded-md text-md p-5 flex gap-3 flex-col items-center justify-center m-auto text-black dark:text-white">
              
        <i className="bi bi-cart-x"
          style={{ fontSize: "80px", color: "green" }}
        />
        <p>
          Oops!Your cart looks empty! <br />
        </p>
        <Link
          to="/All-Products"
          className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue Shopping{" "}
          <i className="bi bi-cart-x" style={{ fontSize: "15px" }} />
        </Link>
      </div>
    </section>
  );
};

export default CartEmpty;
