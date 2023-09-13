import React from "react";

const footerLinks = [
  {
    label: "کاربردی",
    links: [
      {
        label: "AI Photo Enhancer",
        path: "#somewhere",
      },
      {
        label: "AI Anime Upscaler",
        path: "#somewhere",
      },
      {
        label: "AI Image Denoiser",
        path: "#somewhere",
      },
      {
        label: "AI Image Sharpener",
        path: "#somewhere",
      },
      {
        label: "AI Background Remover",
        path: "#somewhere",
      },
      {
        label: "AI JPEG Artifact Remover",
        path: "#somewhere",
      },
      {
        label: "AI Portrait Retoucher",
        path: "#somewhere",
      },
      {
        label: "AI Photo Dehaze",
        path: "#somewhere",
      },
      {
        label: "Image Compressor",
        path: "#somewhere",
      },
      {
        label: "AI Passport Photo Maker",
        path: "#somewhere",
      },
    ],
  },
  {
    label: "خلاقیت",
    links: [
      {
        label: "AI Photo Restorer",
        path: "#somewhere",
      },
      {
        label: "Toongineer Cartoonizer",
        path: "#somewhere",
      },
      {
        label: "VansPortrait",
        path: "#somewhere",
      },
      {
        label: "AI Photo Colorizer",
        path: "#somewhere",
      },
      {
        label: "AI Photo Retoucher",
        path: "#somewhere",
      },
      {
        label: "AI Art Generator",
        path: "#somewhere",
      },
    ],
  },

  {
    label: "ویرایش",
    links: [
      {
        label: "Photo Editor",
        path: "#somewhere",
      },
      {
        label: "Image Cropper",
        path: "#somewhere",
      },
      {
        label: "Image Resizer",
        path: "#somewhere",
      },
      {
        label: "Image Rotator",
        path: "#somewhere",
      },
      {
        label: "Image Flipper",
        path: "#somewhere",
      },
    ],
  },
  {
    label: "پشتیبانی",
    links: [
      {
        label: "مستندات API",
        path: "#somewhere",
      },
      {
        label: "پیکربندی",
        path: "#somewhere",
      },
      {
        label: "راهنما و سوالات متداول",
        path: "#somewhere",
      },
      {
        label: "تماس با ما",
        path: "#somewhere",
      },
      {
        label: "درباره ما",
        path: "#somewhere",
      },
    ],
  },
];

const usefulLinks = [
  "تعرفه‌ها",
  "وبلاگ",
  "نویسنده‌ها",
  "حریم خصوصی",
  "قوانین استفاده",
  "توافق‌نامه کاربر",
  "سایت مپ",
];

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary p-4 lg:p-0">
      <section className="conteiner max-w-[1200px] mx-auto py-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:place-items-center items-start mb-20">
          {footerLinks.map(({ label, links }, index) => {
            return (
              <div key={label} className="flex flex-col">
                <h2 className="text-xl lg:text-2xl font-semibold mb-5">
                  {label}
                </h2>
                <ul className="flex flex-col items-start space-y-5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.path} className="text-sm lg:text-base">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="my-10 flex flex-col items-center justify-center w-10/12 mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-center divide-y lg:divide-y-0 lg:divide-x rtl:divide-x-reverse divide-foreground">
            {usefulLinks.map((link) => (
              <a key={link} className="inline-block p-4" href={`#${link}`}>
                {link}
              </a>
            ))}
          </div>
          <p>
            تمامی حقوق این وبسایت نزد{" "}
            <a href="#link" className="link">
              ونس‌ای‌آی
            </a>{" "}
            محفوظ است
          </p>
        </div>
      </section>
    </footer>
  );
}
