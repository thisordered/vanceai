import React from "react";
import CompareImages from "../common/CompareImages";
import Button from "../common/Button";

export default function HotAIFeatures() {
  return (
    <div className="relative w-full bg-background p-2 lg:p-0">
      <div className="w-full overflow-hidden lg:h-[55rem] absolute top-0 left-0 right-0 bottom-0">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center blur-md scale-110"
          style={{
            backgroundImage: 'url("hot_ai_after.webp")',
          }}
        ></div>
      </div>
      <div className="relative container lg:max-w-[1200px] mx-auto z-10 py-4 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative lg:col-span-3 w-full lg:h-[650px] -mt-2.5 overflow-hidden flex flex-col lg:flex-row items-end rounded-lg">
            <CompareImages
              images={["hot_ai_before.webp", "hot_ai_after.webp"]}
            />
            <div className="lg:absolute lg:w-1/3 lg:h-full lg:right-24 z-10 lg:col-span-3 flex items-center text-background pointer-events-none">
              <div className="flex flex-col items-start justify-around space-y-8">
                <h2 className="text-xl font-semibold my-4">
                  ارتقا کیفیت تصویر توسط هوش مصنوعی
                </h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز.
                </p>
                <Button label={"شروع کن"} />
              </div>
            </div>
          </div>
          <div className="shadow-xl overflow-hidden rounded-lg">
            <div className="h-[14rem] overflow-hidden">
              <CompareImages
                images={["features/1_before.webp", "features/1_after.webp"]}
              />
            </div>
            <div className="flex flex-col items-center justify-between h-[14rem] bg-white p-4 space-y-4 ">
              <h1 className="text-xl font-semibold mb-2">Ai Image Enhancer</h1>
              <p>One-click solution to enhance image details by using AI.</p>
              <Button label={"شروع کن"} small />
            </div>
          </div>
          <div className="shadow-xl overflow-hidden rounded-lg">
            <div className="h-[14rem] overflow-hidden">
              <CompareImages
                images={["features/2_before.webp", "features/2_after.webp"]}
              />
            </div>
            <div className="flex flex-col items-center justify-between h-[14rem] bg-white p-4 space-y-4 ">
              <h1 className="text-xl font-semibold mb-2">Ai Image Enhancer</h1>
              <p>One-click solution to enhance image details by using AI.</p>
              <Button label={"شروع کن"} small />
            </div>
          </div>
          <div className="shadow-xl overflow-hidden rounded-lg">
            <div className="h-[14rem] overflow-hidden">
              <CompareImages
                images={["features/3_before.webp", "features/3_after.webp"]}
              />
            </div>
            <div className="flex flex-col items-center justify-between h-[14rem] bg-white p-4 space-y-4 ">
              <h1 className="text-xl font-semibold mb-2">Ai Image Enhancer</h1>
              <p>One-click solution to enhance image details by using AI.</p>
              <Button label={"شروع کن"} small />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
