import { Link, Outlet} from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={`/shop`}>Shop</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
