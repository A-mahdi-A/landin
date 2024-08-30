import React from "react";
import leftImg from "../../assets/imge/illutration-left.svg";
import back from "../../assets/imge/back.svg";
import Faselee from "../fasele/fasele";
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
            <h5>و کلیک‌های بیشتری رو به مشتری تبدیل کن</h5>
            <p>
              ابزار سـاده ساخت لندینگ پیج، صفحه فرود حرفه‌ای <br /> بدون دانش
              فنی و هدررفت زمان &#128526;
            </p>
          </div>
          {/* Buttons */}
          <div id="Buttons">
            <div id="bg-p">
              <img src={back} alt="" />
              <p>چطوری استقاده کنیم </p>
            </div>
            <div id="border-p">چطوری بسازم؟</div>
          </div>
        </div>
      </section>
      {/* name berand ha */}
      
{/* sectione badi */}

    </>
  );
}

export default SectionNumber1OnHomePage;
