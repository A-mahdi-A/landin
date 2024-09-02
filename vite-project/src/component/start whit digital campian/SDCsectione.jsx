import React from "react";
import img from "../../assets/imge/Vite + React_files/download.png";
function SDCsectione() {
  return (
    <>
      <section id="SDCsectione">
        <div id="SDCsectioneTect">
          <span>
            <h1>همه چی از یک کمپین دیجیتال شروع میشه</h1> <h1>&#x1F628;</h1>
          </span>
          <p>
            داستان از آنجایی شروع می‌شود که برای رسیدن به برخی از اهداف کسب و
            کار خود نیاز به راه‌اندازی یک کمپین دیجیتال دارید و می‌خواهید
            بتوانید با ابزارها و کانال‌های تبلیغاتی که در اختیارتان قرار دارد با
            کمترین هزینه بیشترین نرخ تبدیل را داشته باشید؛ اینجاست که پای لندینگ
            پیج به ماجرا باز می‌شود
          </p>
        </div>
        <div id="SDCsectioneIMG">
          <img src={img} alt="" />
        </div>
      </section>
    </>
  );
}

export default SDCsectione;
