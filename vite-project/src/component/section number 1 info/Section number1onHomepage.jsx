import React from "react";
import leftImg from "../../assets/imge/illutration-left.svg";
import back from "../../assets/imge/back.svg";
function SectionNumber1OnHomePage() {
  return (
    <>
      <section id="num1Home">
        {/* Left side img */}
        <div id="Left-side-imga">
          <img src={leftImg} alt="" />
        </div>
        {/* R side textsa and BTN */}
        <div>
          {/* texts  */}
          <div id="R-side">
            <h1>لندینگ پیج حرفه ای بساز</h1>
            <h5>و کلیک‌های بیشتری رو به مشتری تبدیل کن!</h5>
            <p>
              ابزار سـاده ساخت لندینگ پیج، صفحه فرود حرفه‌ای بدون دانش فنی و هدررفت زمان 
              &#128526;
            </p>
          </div>
          {/* Buttons */}
          <div>
            <div>چطوری بسازم؟</div>
            <div>
              چطوری استقاده کنیم <img src={back} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionNumber1OnHomePage;
