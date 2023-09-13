import React from "react";
import Button from "../common/Button";

export default function LatestArticles() {
  return (
    <div className="container max-w-[1200px] mx-auto flex flex-col items-center space-y-8 lg:space-y-16 py-8 lg:py-16 p-4 lg:p-0 ">
      <h1 className="text-3xl font-bold">آخرین مقالات</h1>

      <div className="flex flex-col lg:flex-row items-center rtl:space-x-reverse space-y-10 lg:space-y-0 lg:space-x-4">
        <div className="border w-full lg:w-64 flex flex-col items-center justify-between bg-white">
          <img className="w-full" src="articles/1.webp" alt="articles/1.webp" />
          <p className="p-4 text-sm">
            دپیکسل کردن تصاویر توسط دو ابزار کاربردی
          </p>
        </div>
        <div className="border w-full lg:w-64 flex flex-col items-center justify-between bg-white">
          <img className="w-full" src="articles/2.webp" alt="articles/2.webp" />
          <p className="p-4 text-sm">بهترین جایگزین‌ها برای Selfie2Anime</p>
        </div>
        <div className="border w-full lg:w-64 flex flex-col items-center justify-between bg-white">
          <img className="w-full" src="articles/3.webp" alt="articles/3.webp" />
          <p className="p-4 text-sm">تبدیل تصویر به نقاشی</p>
        </div>
        <div className="border w-full lg:w-64 flex flex-col items-center justify-between bg-white">
          <img className="w-full" src="articles/4.webp" alt="articles/4.webp" />
          <p className="p-4 text-sm">چرا تصاویر من کدر هستند؟</p>
        </div>
      </div>
      <Button label={"مقالات بیشتر"} secondary />
    </div>
  );
}
