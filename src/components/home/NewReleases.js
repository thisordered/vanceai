import React from "react";
import CompareImages from "../common/CompareImages";
import Button from "../common/Button";
const reqs = [
  {
    id: 0,
    image: <CompareImages images={["new/1_before.webp", "new/1_after.webp"]} />,
    title: "ریتاچ تصاویر پرتره",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
  {
    id: 1,
    image: <CompareImages images={["new/2_before.webp", "new/2_after.webp"]} />,
    title: "حذف نویز تصاویر",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
];
export default function NewReleases() {
  return (
    <div className="bg-background p-2 lg:p-0">
      <div className="relative container lg:max-w-[1200px] mx-auto flex flex-col space-y-4 items-center justify-center py-10">
        <h1 className="text-3xl font-semibold mb-4">اخیرا منتشر شده</h1>
        <div className="w-full mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start justify-between space-x-4 rtl:space-x-reverse">
          {reqs.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="lg:w-1/2 text-right overflow-hidden flex flex-col border rounded items-stretch justify-around space-y-4 bg-white shadow-xl"
            >
              <div className="w-full lg:h-[18em] overflow-hidden flex items-center">
                {image}
              </div>
              <div className="recommendation-products-single-content">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{description}</p>
                <Button small label={"شروع کن"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
