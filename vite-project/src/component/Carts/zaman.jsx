import React from "react";
import clock from '../../assets/imge/clock.svg'
function Zaman() {
  return (
    <>
      <div id="Zaman">
        <img src={clock} alt="" />
        <h1>بدون هدر رفت زمان</h1>
        <p>
          در تیم خود مدت زمان زیادی باید توسط
          <br /> بخش فنی صرف شود، تا لندینگ پیج یا
          <br /> صفحه فرود مورد نظرساخته شود و گاه
          <br /> کمپین‌ها مدت زمان محدودی دارند. شما
          <br /> مستقل از تیم فنی می‌توانید از بستر لندین <br />
          استفاده کنید تا با خیال آسوده به اجزای دیگر
          <br /> کمپین خود متمرکز شوید.
        </p>
      </div>
    </>
  );
}

export default Zaman;
