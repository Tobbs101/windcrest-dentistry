import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./container";
import Each from "../helpers/each";
import { Button } from "../ui/button";
import Link from "next/link";
import logo from "../../assets/Logo.png";
import LogoMinimal from "../../assets/Logo.png";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LinkProp } from "@/types";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

const NAVIGATION_LINKS: LinkProp[] = [
  { id: 1, route: "/", label: "Home" },
  {
    id: 2,
    route: "/",
    label: "Meet The Pack",
    routes: [
      {
        id: 1,
        route: "/meet-dr-sylvester-awagu",
        label: "Meet Dr. Sylvester Awagu",
        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"healthicons:doctor-male-outline"}
            />
          ),
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 2,
        route: "/meet-dr-patrick-moore",
        label: "Meet Dr. Patrick Moore",
        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"healthicons:doctor-male-outline"}
            />
          ),
          iconClass: "bg-[#FFF7F1] text-[#FFBA00]",
        },
      },
      {
        id: 3,
        route: "/meet-dr-donald-mills",
        label: "Meet Dr. Donald Mills",

        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"healthicons:doctor-male-outline"}
            />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
      {
        id: 4,
        route: "/meet-the-team",
        label: "Meet The Team",
        icon: {
          element: (
            <Icon className="text-[24px]" icon={"pepicons-pencil:people"} />
          ),
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 5,
        route: "/what-sets-us-apart",
        label: "What Sets Us Apart",
        icon: {
          element: (
            <Icon className="text-[20px]" icon={"fluent-mdl2:add-group"} />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
    ],
  },
  {
    id: 3,
    route: "/",
    label: "Visiting The Jungle",
    className: "lg:w-[500px]",
    routes: [
      {
        id: 1,
        route: "/office-visits",
        label: "Office Visits",
        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"mdi:office-building-marker-outline"}
            />
          ),
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 2,
        route: "/financial-information",
        label: "Financial Information",
        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"arcticons:home-finance"}
            />
          ),
          iconClass: "bg-[#FFF7F1] text-[#FFBA00]",
        },
      },
      {
        id: 3,
        route: "/patient-forms",
        label: "Patient Forms",

        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[24px]"
              icon={"clarity:form-line"}
            />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
      {
        id: 4,
        route: "/testimonials",
        label: "Testimonials",
        icon: {
          element: (
            <Icon className="text-[24px]" icon={"dashicons:testimonial"} />
          ),
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
    ],
  },
  {
    id: 4,
    route: "/",
    label: "Pediatrics",
    className:
      "w-[300px] p-2 md:grid-cols-1 xl:grid-cols-2 md:w-[300px] lg:w-[300px] xl:w-[500px]",
    routes: [
      {
        id: 1,
        route: "/pediatric-dentistry",
        label: "Pediatric Dentistry",
        icon: {
          element: <Icon className="text-[30px]" icon={"bx:child"} />,
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 2,
        route: "/pediatric-dental-faqs",
        label: "Pediatric Dental FAQs",
        icon: {
          element: <Icon className="text-[24px]" icon={"mdi:faq"} />,
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 3,
        route: "/dental-care-for-your-baby",
        label: "Dental Care For Your Baby",
        icon: {
          element: <Icon className="text-[20px]" icon={"mynaui:baby"} />,
          iconClass: "bg-[#FFF7F1] text-[#FFBA00]",
        },
      },
      {
        id: 4,
        route: "/thumb-sucking",
        label: "Thumb Sucking",

        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[22px]"
              icon={"mdi-light:thumb-up"}
            />
          ),
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 5,
        route: "/sedation-dentistry",
        label: "Sedation Dentistry",
        icon: {
          element: (
            <Icon className="text-[20px]" icon={"icon-park-outline:teeth"} />
          ),
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 6,
        route: "/iv-sedation-dentistry",
        label: "IV Sedation Dentistry",
        icon: {
          element: (
            <Icon className="text-[20px]" icon={"icon-park-outline:teeth"} />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
      {
        id: 7,
        route: "/pediatric-hospital-dentistry",
        label: "Pediatric Hospital Dentistry",
        icon: {
          element: <Icon className="text-[30px]" icon={"bx:child"} />,
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 8,
        route: "/sports-dentistry",
        label: "Sports Dentistry",
        icon: {
          element: (
            <Icon className="text-[24px]" icon={"ic:outline-sports-handball"} />
          ),
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 9,
        route: "/pediatric-dental-emergencies",
        label: "Pediatric Dental Emergencies",
        icon: {
          element: (
            <Icon
              className="text-[20px]"
              icon={"guidance:ambulance-entrance"}
            />
          ),
          iconClass: "bg-[#FFF7F1] text-[#FFBA00]",
        },
      },
    ],
  },
  {
    id: 5,
    route: "/",
    label: "Orthodontics",
    className:
      "w-[230px] p-2 md:grid-cols-1 xl:grid-cols-2 md:w-[230px] lg:w-[230px] xl:w-[500px]",
    routes: [
      {
        id: 1,
        route: "/about-orthodontics",
        label: "About Orthodontics",
        icon: {
          element: (
            <Icon className="text-[30px]" icon={"icon-park-outline:teeth"} />
          ),
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 2,
        route: "/orthodontics-faqs",
        label: "Orthodontics FAQs",
        icon: {
          element: (
            <Icon
              strokeWidth={3}
              className="text-[20px]"
              icon={"qlementine-icons:faq-16"}
            />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
      {
        id: 3,
        route: "/for-children",
        label: "For Children",
        icon: {
          element: <Icon className="text-[24px]" icon={"bx:child"} />,
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 4,
        route: "/for-teens",
        label: "For Teens",
        icon: {
          element: <Icon className="text-[20px]" icon={"fa6-solid:child"} />,
          iconClass: "bg-[#FFF7F1] text-[#FFBA00]",
        },
      },
      {
        id: 5,
        route: "/for-adults",
        label: "For Adults",

        icon: {
          element: <Icon className="text-[22px]" icon={"el:adult"} />,
          iconClass: "bg-[#F7F3FF] text-[#5852E2]",
        },
      },
      {
        id: 6,
        route: "/life-with-braces",
        label: "Life With Braces",
        icon: {
          element: <Icon className="text-[20px]" icon={"hugeicons:books-02"} />,
          iconClass: "bg-[#FFEBF7] text-[#90095A]",
        },
      },
      {
        id: 7,
        route: "/types-of-braces",
        label: "Types of Braces",
        icon: {
          element: (
            <Icon className="text-[20px]" icon={"icon-park-outline:teeth"} />
          ),
          iconClass: "bg-[#F9FFEC] text-[#81B807]",
        },
      },
    ],
  },
  {
    id: 6,
    route: "/contact-us",
    label: "Contact Us",
    className: "w-[300px] p-2 md:w-[300px] lg:w-[300px]",
  },
];

const HeaderLink = ({
  item,
  className,
}: {
  item: LinkProp;
  className?: string;
}) => {
  const pathname = usePathname();

  const [isActiveRoute, setIsActiveRoute] = useState(false);

  useEffect(() => {
    if (item?.routes)
      setIsActiveRoute(
        item?.routes.some((current) => current.route === pathname),
      );
  }, [pathname]);

  if (item?.routes)
    return (
      <NavigationMenu className="relative">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("", { "text-primary": isActiveRoute })}
            >
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className={cn(
                  "grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                  className,
                )}
              >
                {item?.routes.map((link) => (
                  <li
                    key={link.id}
                    title={link.label}
                    className="py-3 px-4 hover:bg-gray-50 duration-200 rounded-md"
                  >
                    <Link
                      onClick={() =>
                        sessionStorage.removeItem("selected_county")
                      }
                      key={link.id}
                      href={link?.route || ""}
                      className="text-sm flex gap-2 items-center justify-start w-full font-medium"
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-md flex items-center justify-center",
                          link?.icon?.iconClass,
                        )}
                      >
                        {link?.icon?.element}
                      </div>{" "}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  return (
    <Link
      key={item.id}
      href={item?.route || ""}
      className="text-sm font-medium relative group"
    >
      <motion.span
        className={cn(
          "text-black group-hover:text-primary transition-colors duration-300",
          { "text-primary": pathname === item.route },
        )}
      >
        {item.label}
      </motion.span>
      <motion.span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

const Header = ({
  toggleSidebar,
  className,
}: {
  className?: string;
  toggleSidebar?: () => void;
}) => {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <Container className="px-5 fixed z-[100] w-full bg-white border-b border-gray-100 shadow-sm">
      <motion.div
        className={cn("flex items-center justify-between py-5", className)}
        transition={{ duration: 1 }}
        // initial={{ opacity: 0, y: -50 }}
        // animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-start gap-1">
          {toggleSidebar && (
            <Button
              className="lg:hidden block border dark:border-white text-black dark:bg-white py-0 px-3 mr-4"
              onClick={toggleSidebar}
              variant={"ghost"}
            >
              <AlignJustify className="w-4" />
            </Button>
          )}
          <Image
            src={logo}
            onClick={onClickLogo}
            alt=""
            className="w-[150px] cursor-pointer lg:block hidden"
          />
          <Image
            onClick={onClickLogo}
            src={LogoMinimal}
            width={100}
            alt=""
            className="w-[100px] lg:hidden cursor-pointer block"
          />
        </div>
        {/* Nav section */}
        <div className="items-center hidden lg:flex justify-center space-x-5">
          <Each
            of={NAVIGATION_LINKS}
            render={(item: LinkProp) => (
              <HeaderLink
                key={item.id}
                item={item}
                className={item?.className}
              />
            )}
          />
        </div>

        <div className="lg:flex hidden flex-col items-end justify-center text-right">
          {/* <button>
            <ShoppingCart />
          </button> */}
          <div className="flex items-start justify-end gap-2">
            <p className="text-[16px] xl:block hidden text-customPurple">
              San Antonio Office{" "}
            </p>
            <a
              href="https://www.facebook.com/windcrestpediatricdentistry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Icon
                className="text-[20px] text-primary"
                icon={"ic:baseline-facebook"}
              />
            </a>
            <a
              href="https://www.youtube.com/user/windcrestpedo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Icon
                className="text-[20px] text-primary"
                icon={"vaadin:youtube"}
              />
            </a>
            <a
              href="https://x.com/WindcrestDental"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Icon className="text-[20px] text-primary" icon={"mdi:twitter"} />
            </a>
          </div>
          <a href="tel:2106574641">
            <p className="text-primary text-sm font-medium">(210) 657-4641</p>
          </a>
          <a
            href="https://www.google.com/maps/place/Windcrest+Pediatric+Dentistry/@29.510027,-98.3841347,17z/data=!3m1!4b1!4m5!3m4!1s0x865cf345b3b6061f:0x2c9ab1345e34f502!8m2!3d29.510027!4d-98.381946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hidden xl:block hover:text-black/90 transition-colors"
          >
            5500 Walzem Rd. San Antonio, TX 78218
          </a>
          {/* <Button
            onClick={() =>
              router.push(`https://courses.limitbreakers.co.uk/users/sign_in`)
            }
            className="bg-primary border border-primary hover:bg-transparent duration-200 hover:text-primary rounded-sm px-10 py-5"
          >
            Login
          </Button> */}
        </div>
      </motion.div>
    </Container>
  );
};

export default Header;
