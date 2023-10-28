import Link from "next/link";
import NewsLetter from "./NewsLetter";

const footerConstant = [
  {
    title: "Community",
    links: [
      {
        name: "For Talents",
        link: "/",
      },
      {
        name: "For Companies",
        link: "/",
      },
      {
        name: "Facebook Group",
        link: "/",
      },
      {
        name: "FAQ",
        link: "/",
      },
    ],
  },
  {
    title: "About us",
    links: [
      {
        name: "Meet the Team",
        link: "/",
      },
      {
        name: "Our Story",
        link: "/",
      },
      {
        name: "Career",
        link: "/",
      },
    ],
  },
  {
    title: "Useful",
    links: [
      {
        name: "Free Resume Builder",
        link: "/",
      },
      {
        name: "Free Graphics",
        link: "/",
      },
      {
        name: "Career Blog",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="section_padding py-[10rem] w-full max-w-[1110px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-2 grid grid-cols-2 md:grid-cols-3 gap-10">
          {footerConstant.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <h6 className="font-medium text-[18px]">{item.title}</h6>
              <div>
                <ul>
                  {item.links.map((linkItem) => (
                    <li key={linkItem.name} className="text-brandMuted">
                      <Link href={linkItem.link}>{linkItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h6 className="font-medium text-[18px]">
            Subscribe to Our Newsletter
          </h6>
          <div>
            <p className="text-brandMuted">
              Time is the most precious thing you have when bootstrapping. You
              can&apos;t take time.
            </p>
          </div>

          <NewsLetter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
