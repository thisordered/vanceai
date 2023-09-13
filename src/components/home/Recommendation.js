import React from "react";
import Button from "../common/Button";
import CompareImages from "../common/CompareImages";

const reqs = [
  {
    id: 0,
    image: <CompareImages images={["rec1_before.webp", "rec1_after.webp"]} />,
    title: "تقویت وضوح تصویر",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
  {
    id: 1,
    image: <CompareImages images={["rec2_before.webp", "rec2_after.webp"]} />,
    title: "حذف پس زمینه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
  {
    id: 2,
    image: (
      <img className="w-full" src={"rec_3_scale.webp"} alt="rec_3_scale" />
    ),
    title: "بزرگنمایی تصویر",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
  {
    id: 3,
    image: <CompareImages images={["rec4_before.webp", "rec4_after.webp"]} />,
    title: "ترمیم تصاویر",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
  },
];

export default function Recommendation() {
  return (
    <div className="recommendation">
      <h1 className="text-3xl font-bold">پیشنهاد ما</h1>

      <div className="grid p-2 lg:p-0 grid-cols-1 lg:grid-cols-4 my-10 mx-auto items-center justify-center place-content-center place-items-center gap-4">
        {reqs.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="w-full text-right shadow-lg overflow-hidden flex flex-col border rounded items-stretch justify-around space-y-4 bg-background"
          >
            <div className="w-full">{image}</div>
            <div className="flex flex-col items-center justify-around space-y-4 p-4">
              <h2 className="text-base font-semibold">{title}</h2>
              <p className="text-sm text-foreground/80">{description}</p>
              <Button label={"شروع کن"} small />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
