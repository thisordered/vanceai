import React from "react";
import FiveStar from "./FiveStar";

export default function CustomerFeedbacks() {
  return (
    <div className="container max-w-[1200px] mx-auto flex flex-col space-y-10 py-10 items-center">
      <h1 className="text-3xl font-bold">بازخورد مشتریان</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-4 h-48">
            <FiveStar />
            <p className="leading-7 text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 h-48">
            <img
              className="rounded-full"
              src="avatars/christian.png"
              alt="avatar_image_of"
            />
            <span className="text-foreground text-sm">کریستین کالی</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-4 h-48">
            <FiveStar />
            <p className="leading-7 text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 h-48">
            <img
              className="rounded-full"
              src="avatars/neil.webp"
              alt="avatar_image_of"
            />
            <span className="text-foreground text-sm">نیل پاتل</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-4 h-48">
            <FiveStar />
            <p className="leading-7 text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 h-48">
            <img
              className="rounded-full"
              src="avatars/editorialge.webp"
              alt="avatar_image_of"
            />
            <span className="text-foreground text-sm">سردبیر ادیتوریال</span>
          </div>
        </div>
      </div>
      <a
        href="#s"
        className="underline text-sm text-center cursor-pointer py-4"
      >
        نقد‌های بیشتر در تراست پایلوت
      </a>
    </div>
  );
}
