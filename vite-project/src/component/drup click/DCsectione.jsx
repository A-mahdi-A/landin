import React from "react";
import img from "../../assets/imge/Vite + React_files/cv4.svg";
function DCsectione() {
  return (
    <>
      <section id="DCsectione">
        <div id="DCsectioneText">
          <span>
        
            <h1>
              کلیک ها رو در لندینگ پیج خودت فرود بیار و به مشتری تبدیلش کن!
            </h1>
            <h1>🥳</h1>
          </span>
          <p>
            در لندین، متناسب با هویت بصری برند و سلیقه خودتون، بدون نیاز به دانش
            فنی، لندینگ پیج یا صفحه فرود خود را بسازید. بدون استفاده از قالب‌های
            آماده و تکراری، لندینگ پیج شما کاملا شخصی سازی می‌شود و به هیچ
            لندینگ پیج دیگری شباهت نخواهد داشت.
          </p>
        </div>
        {/* --------------------------------------------------------------- */}
        <div id="DCsectioneimg">
          <img src={img} alt="" />
        </div>
      </section>
    </>
  );
}

export default DCsectione;
