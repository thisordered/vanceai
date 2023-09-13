import React from "react";

export default function JobDescription() {
  return (
    <div className="bg-white">
      <div className="w-full container max-w-[1200px] mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between lg:space-x-4 rtl:space-x-reverse">
          <div className="lg:w-5/12 flex flex-col space-y-10 py-10 px-4">
            <h1 className="text-3xl font-bold leading-relaxed">
              پردازش تصاویر به صورت اتوماتیک،
              <br />
              سریع و هوشمند
            </h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <p>
              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز
            </p>
          </div>
          <div className="w-full mx-auto lg:w-7/12">
            <img src="jd_01.webp" className="w-full" alt="jd_02" />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center lg:items-stretch justify-between lg:space-x-4 rtl:space-x-reverse">
          <div className="lg:w-5/12 flex flex-col space-y-10 py-10 px-4">
            <h1 className="text-3xl font-bold leading-relaxed">
              از هوش مصنوعی جهت سرعت و کیفیت بخشیدن به کارها استفاده کنید
            </h1>
            <p>
              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <img src="jd_02.webp" className="w-full" alt="jd_02" />
          </div>
        </div>
      </div>
    </div>
  );
}
