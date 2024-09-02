import React from "react";
import rodimage from "../../assets/imge/rod.svg";
function PCDSection() {
  return (
    <>
      <section id="PCDSectionSide">
        <div id="PCDSectionimage">
          <img src={rodimage} alt="" />
        </div>
        <div id="PCDSectionText">
          <span id="imo-titel">
            <h1>
              پشت پرده لندینگ پیج شما در یک <br /> کمپین دیجیتال
            </h1>
            <h1 id="imoji">&#x1F628;</h1>
          </span>
          <p>
            هزینه و زمان زیادی برای ساخت لندینگ پیج توسط تیم خود صرف می‌کنید. در
            آخر هم ممکن است لندینگ پیج یا صفحه فرود شما بدلیل استاندارد نبودن
            نرخ تبدیل مناسبی نداشته و مشتریان خود را از دست می‌دهید. یا تمایلی
            به انتظار زیاد با توجه به حجم کاری تیم فنی ندارید و می‌خواهید بدون
            مانع کمپین خود را سریع‌تر راه اندازی کنید. تا در زمان و هزینه صرفه
            جویی کنید.
          </p>
        </div>
      </section>
    </>
  );
}

export default PCDSection;
