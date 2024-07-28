import React from "react";
import { Link } from "react-router-dom";
function List() {
  return (
    <>
      <ul id="meno">
        <li>
          <Link>اتصال آدرس دلخواه </Link>
        </li>
        <li>
          <Link> مرکزآموزش</Link>
        </li>
        <li>
          <Link>قیمت گذاری</Link>
        </li>
        <li>
          <Link>چرا لندینگ پیج؟</Link>
        </li>
      </ul>
    </>
  );
}

export default List;
