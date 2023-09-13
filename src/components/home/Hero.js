import React from "react";
import ReactCompareImage from "react-compare-image";
import Button from "../common/Button";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-stone-600 via-stone-800 to-stone-700 text-white">
      <div className="relative container mx-auto max-w-[1200px] lg:h-[35rem] pt-10">
        <div className="w-full relative flex-col-reverse flex lg:flex-row items-center justify-end h-full">
          <div className="lg:absolute lg:w-1/2 right-10 p-10 flex flex-col space-y-8 z-10 pointer-events-none">
            <div className="relative flex flex-col space-y-8">
              <h1 className="text-xl lg:text-3xl font-semibold whitespace-nowrap leading-relaxed">
                تامین کننده ابزارهای هوش مصنوعی،
                <br />
                مخصوص ویرایش و ارتقای کیفیت عکس
              </h1>
              <p className="leading-7">
                VanceAI تقویت هوش مصنوعی، ارتقاء مقیاس، شارپ کردن، حذف نویز، حذف
                پس‌زمینه و موارد دیگر را تنها با یک کلیک فراهم می‌کند تا دستان
                شما را از پردازش عکس پیچیده رها کند. همه ابزارهای هوش مصنوعی به
                صورت آنلاین یا در نرم افزار «دانلود رایگان» در دسترس هستند.
              </p>
              <p className="leading-7">
                بیایید سفر خود را در VanceAI با ارتقاء مقیاس هوش مصنوعی آغاز
                کنیم!
              </p>
            </div>
            <footer className="flex items-start space-x-4 rtl:space-x-reverse pointer-events-auto">
              <Button label={"شروع کن"} />
              <Button label={"دانلود رایگان"} secondary />
            </footer>
          </div>
          <div className="relative left-0 w-2/3 h-full flex justify-start items-end">
            <ReactCompareImage
              leftImage={"hero_before.webp"}
              rightImage={"hero_after.webp"}
              hover
              aspectRatio="wider"
              handleSize={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
