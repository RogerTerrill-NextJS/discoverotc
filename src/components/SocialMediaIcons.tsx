import React from "react";

type SocialName = "youtube" | "instagram" | "email";

interface Icon {
  name: SocialName;
  href: string;
  alt: string;
  src: string;
}

const ICONS: Icon[] = [
  {
    name: "youtube",
    href: "https://www.youtube.com/@outsidethecockpit",
    alt: "Youtube",
    src: "/icons/youtube.svg",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/outsidethecockpit/",
    alt: "Instagram",
    src: "/icons/instagram.svg",
  },
  {
    name: "email",
    href: "mailto:gofly@discoverotc.com",
    alt: "Email",
    src: "/icons/email.svg",
  },
];
const SocialMediaIcons = ({ social }: { social: string }) => {
  const icon = ICONS.find((icon) => icon.name === social);
  if (!icon) return null;

  return (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-slate-700 transition-colors "
    >
      <img
        src={icon.src}
        alt={icon.alt}
        title={icon.alt}
        className="w-7 h-7 inline-block rounded-md mr-2 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
      />
    </a>
  );
};
export default SocialMediaIcons;
