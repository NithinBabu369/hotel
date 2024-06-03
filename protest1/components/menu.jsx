import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Menu() {
  const menus = [
    { name: "Home", href: "/ecosystem" },
    { name: "About", href: "/community" },
    { name: "Services", href: "/governance" },
    { name: "Packages", href: "/developers" },
    { name: "Blogs", href: "/faq" },
    { name: "Pages", href: "/blogs" },
    { name: "Contacts", href: "/blogs" },
  ];

  return (
    <>
      <div className="mx-auto fixed lg:px-20 pt-28 w-full h-full bg-[#191b1f] z-40">
        <div className="grid lg:grid-cols-3">
          <div className="flex flex-col lg:border-r lg:border-gray-800">
            {menus.map((menu, index) => (
              <Link key={index} href={menu.href}>
                <div className="py-4 lg:pe-4 px-3 lg:px-0 cursor-pointer flex justify-between">
                  <h2 className="text-white font-medium text-2xl font-poppins">
                    {menu.name}
                  </h2>
                  <span className="cursor-pointer">
                    <RightOutlined
                      style={{ color: "#0096FF", fontSize: "larger" }}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </>
  );
}