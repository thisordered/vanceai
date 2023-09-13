import React from "react";

export default function LoyalCustomers() {
  return (
    <div className="bg-white p-4 lg:p-0">
      <div className="container max-w-[1200px] mx-auto flex flex-col items-center space-y-16 py-16">
        <h1 className="text-3xl font-bold">ونس ای‌آی، مورد اعتماد از طرف</h1>
        <p>
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
          نیاز
        </p>
        <div className="flex flex-col lg:flex-row items-center rtl:space-x-reverse space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="border w-48 h-24 flex items-center justify-center p-2">
            <img src="brands/1.webp" alt="brands/1.webp" />
          </div>
          <div className="border w-48 h-24 flex items-center justify-center p-2">
            <img src="brands/2.webp" alt="brands/2.webp" />
          </div>
          <div className="border w-48 h-24 flex items-center justify-center p-2">
            <img src="brands/3.webp" alt="brands/3.webp" />
          </div>
          <div className="border w-48 h-24 flex items-center justify-center p-2">
            <img src="brands/4.webp" alt="brands/4.webp" />
          </div>
          <div className="border w-48 h-24 flex items-center justify-center p-2">
            <img src="brands/5.webp" alt="brands/5.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
