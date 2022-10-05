import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../Redux/DarkMode";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import Logo from "../../public/Assets/Logos/Header2.png";
import Avatar from "@mui/material/Avatar";
import { DELETE_USER } from "../../Redux/User";
import { toast } from "react-toastify";
import styles from "../../styles/Home.module.css";

const Header = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.mode.value);
  const user = useSelector((state) => state.auth.user);
  const userStatus = useSelector((state) => state.auth.loginStatus);
  const SSR = useSelector((state) => state.ssr.ssrData);

  const { cat, subWithCat, company } = SSR;

  const [isOpen, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [focusedItem, setFocusedItem] = useState(null);
  const [focus, setFocus] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHovered, setHovered] = useState(false);
  const [subject, setSubjects] = useState(null);
  const [showSubjects, setShowSubjects] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (dark) {
      dispatch(setDarkMode(true));
    } else {
      dispatch(setDarkMode(false));
    }
  }, [dark, user]);

  // <---- Light / Dark mode Switch ---->
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div
      id="Navbar"
      className={`overflow-hidden h-20 ${dark ? "dark" : "light"}`}
    >
      <div
        id="wrapper"
        className="transition-all duration-500 w-full h-full dark:bg-primary-dark bg-primary flex flex-row justify-between lg:justify-evenly items-center px-8 border-b-0"
        onMouseEnter={() => {
          setHoveredItem("");
          setHovered(false);
        }}
      >
        {/*  <---- Drawer ----> */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-[100rem]"
          } transition-all duration-700 fixed w-screen h-screen top-20 left-0 z-50 overflow-x-hidden lg:hidden xl:hidden`}
        >
          <div
            className={`w-full h-full transition-all duration-300 ${
              isOpen && "bg-primary-dark dark:bg-gray-700"
            } z-0`}
          >
            <ul className="flex flex-col justify-start items-center px-4 py-2 gap-4 z-10">
              <li className="w-full group rounded-lg overflow-hidden">
                {/* Sevices > */}
                <div
                  className={`${
                    focusedItem == "services" && focus
                      ? "bg-primary"
                      : "bg-inherit"
                  } flex flex-row justify-between items-center px-2 py-2`}
                  onClick={() => {
                    setFocusedItem("services");
                    setFocus(!focus);
                  }}
                >
                  <span className="text-white tracking-wide text-lg">
                    Services
                  </span>
                  <div
                    id="dropdownIndicator"
                    className={`mx-2 ${
                      focusedItem == "services" && focus
                        ? "rotate-90"
                        : "rotate-0"
                    } justify-center items-end transition-all duration-300 text-white dark:text-white`}
                  >
                    <span>&#10095;</span>
                  </div>
                </div>
                {/* / Sevices > */}

                {/* List */}
                <div
                  className={`w-full ${
                    focusedItem == "services" && focus ? "h-fit" : "h-0"
                  } transition-all duration-300 bg-primary/20`}
                  onClick={() => {
                    setSubOpen(!subOpen);
                  }}
                >
                  <ul className="flex flex-col justify-evenly items-center">
                    {cat?.data.map((item, key) => (
                      <li key={key} className="py-2 px-4  w-full">
                        <div
                          className="flex justify-between"
                          onClick={() => {
                            setSubOpen(!subOpen);
                            setSubjects(item.id);
                          }}
                        >
                          <div className="text-gray-200 text-lg  tracking-wider text-center">
                            {item.name}
                          </div>
                          <div
                            id="dropdownIndicator"
                            className={`mx-2 ${
                              subOpen && subject == item.id
                                ? "rotate-90"
                                : "opacity-0"
                            } justify-center items-end transition-all duration-300 text-white dark:text-white`}
                          >
                            <span>&#10095;</span>
                          </div>
                        </div>

                        {subOpen && subject == item.id && (
                          <div>
                            {subWithCat?.data.map(
                              (item, key) =>
                                subject == item.category_id && (
                                  <li
                                    key={key}
                                    className="py-2 px-3 transition-all ease-linear bg-primary-dark mt-2 hover:shadow-xl rounded hover:scale-105  w-full hover:cursor-pointer"
                                    onClick={() => {
                                      router.push(
                                        {
                                          pathname: `/services/${item.slug}/${item.id}`,
                                        },
                                        `/services/${item.slug}/${item.id}`
                                      );
                                      setFocus(false);
                                      setOpen(false);
                                      setSubOpen(false);
                                    }}
                                  >
                                    <span className="text-gray-300 text-sm text-center whitespace-nowrap">
                                      {item.name}
                                    </span>
                                  </li>
                                )
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className="w-full group rounded-lg overflow-hidden"
                onClick={() => {
                  setFocusedItem("company");
                  setFocus(!focus);
                }}
              >
                <div
                  className={`${
                    focusedItem == "company" && focus
                      ? "bg-primary"
                      : "bg-inherit"
                  } flex flex-row justify-between items-center px-2 py-2`}
                >
                  <span className="text-white tracking-wide text-lg">
                    Company
                  </span>
                  <div
                    id="dropdownIndicator"
                    className={`mx-2 ${
                      focusedItem == "company" && focus
                        ? "rotate-90"
                        : "rotate-0"
                    } justify-center items-end transition-all duration-300 text-white dark:text-white`}
                  >
                    <span>&#10095;</span>
                  </div>
                </div>
                <div
                  className={`w-full transition-all duration-300 ${
                    focusedItem == "company" && focus ? "h-fit" : "h-0"
                  }  overflow-hidden bg-primary/20`}
                >
                  <ul className="flex flex-col justify-evenly items-center">
                    {company?.data.children.map((item, key) => (
                      <li
                        key={key}
                        className="py-2 px-4 hover:bg-sky-200 w-full"
                        onClick={() =>
                          router.push(`/${`company`}/${item.title}`)
                        }
                      >
                        <span className="text-gray-600 text-sm text-center">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className="w-full group rounded-lg"
                onClick={() => {
                  setFocusedItem("writers");
                  router.push("/writers");
                  setOpen(!isOpen);
                }}
              >
                <div
                  className={`${
                    focusedItem == "writers" ? "bg-primary" : "bg-inherit"
                  } flex flex-row justify-between items-center px-2 py-2`}
                >
                  <span className="text-white tracking-wide text-lg">
                    Our Writers
                  </span>
                </div>
              </li>
              <li
                className="w-full group rounded-lg"
                onClick={() => {
                  setFocusedItem("order");
                  router.push("/order");
                  setOpen(!isOpen);
                }}
              >
                <div
                  className={`${
                    focusedItem == "order" ? "bg-primary" : "bg-inherit"
                  } flex flex-row justify-between items-center px-2 py-2`}
                >
                  <span className="text-white tracking-wide text-lg">
                    Order
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*  <---- / of Drawer ----> */}

        <div id="logo" className="rounded-md overflow-hidden hidden md:block">
          <Link href={"/"}>
            <Image
              src={Logo}
              priority
              alt="Assignment Help"
              className="scale-y-125 scale-x-125"
              width="300"
              height="460"
              onClick={() => router.push("/")}
            />
          </Link>
        </div>
        <div id="logo" className="rounded-md overflow-hidden md:hidden block">
          <Link href={"/"}>
            <Image
              src={Logo}
              priority
              alt="Assignment Help"
              className="scale-y-125 scale-x-125"
              width="200"
              height="360"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end gap-2 ">
          <div id="switch" className="lg:hidden">
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={dark}
              onChange={() => setDark(!dark)}
            />
          </div>
          <div
            id="ham"
            className="lg:hidden z-50"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32px"
                height="32px"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
              </svg>
            ) : (
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32px"
                height="32px"
              >
                <path
                  fill="none"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M50 25L0 25M50 10L0 10M0 40L50 40"
                />
              </svg>
            )}
          </div>
        </div>
        <nav
          className="w-full hidden lg:block"
          onMouseLeave={() => {
            setHoveredItem("");
            setHovered(false);
          }}
        >
          <ul className="flex flex-row justify-end items-center">
            <li>
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={dark}
                onChange={() => setDark(!dark)}
              />
            </li>
            <li
              className="group w-[8vw] md:w-[12vw] lg:w-[10vw] mx-2 hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredItem("services");
                setHovered(true);
              }}
            >
              <div className="sticky mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div
                  id="dropdown"
                  className="flex flex-row justify-center items-center"
                >
                  <span className="text-white font-medium  dark:text-white transition-all duration-300">
                    Services
                  </span>
                </div>
              </div>
            </li>
            <li
              className="group md:w-[15.5vw] lg:w-[10vw] md:mx-2 lg:mx-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredItem("");
                setHovered(false);
              }}
            >
              <div className="mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div
                  id="dropdown"
                  className="flex flex-row justify-center items-center"
                >
                  <span className="text-white font-medium dark:text-white  transition-all duration-300">
                    Company
                  </span>
                </div>
              </div>
              <div
                id="dropdownComponent"
                className="absolute transition-all h-0 group-hover:h-fit w-fit dark:bg-slate-200 bg-slate-50 shadow-xl shadow-gray-300 overflow-hidden z-10 rounded-b"
              >
                <ul className="flex flex-col justify-evenly  items-center">
                  {company?.data.children.map((item, key) => (
                    <li
                      key={key}
                      className="py-2 px-4 hover:bg-sky-200 w-52"
                      onClick={() => router.push(`/${`company`}/${item.title}`)}
                    >
                      <span className="text-gray-600 text-sm text-center capitalize">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <Link href={"/writers"}>
              <li className="group w-[8vw] md:w-[15vw] lg:w-[10vw]">
                <div className="mx-2 my-1 py-2 px-2 transition-all duration-500 hover:scale-110 hover:shadow-lg rounded  dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40  hover:cursor-pointer text-center">
                  <span className="text-white font-medium dark:text-white transition-all duration-300">
                    Our Writers
                  </span>
                </div>
              </li>
            </Link>
            <Link href={"/samples"}>
              <li className="group w-[8vw] md:w-[15vw] lg:w-[10vw]">
                <div className="mx-2 my-1 py-2 px-2 transition-all duration-500 hover:scale-110 hover:shadow-lg rounded  dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40  hover:cursor-pointer text-center">
                  <span className="text-white font-medium dark:text-white transition-all duration-300">
                    Samples
                  </span>
                </div>
              </li>
            </Link>
            <Link href={"/order"}>
              <li className="w-[8vw] md:w-[10vw] group hover:cursor-pointer">
                <div className="mx-2 my-1 py-2 px-2 bg-white group-hover:bg-cyan-200 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded-md text-center scale-105  group-hover:shadow-white dark:group-hover:shadow-lg dark:group-hover:shadow-sky-500">
                  <span className="text-black  group-hover:text-black/60 font-medium w-full h-full transition-all duration-300 ">
                    Orders
                  </span>
                </div>
              </li>
            </Link>
            <li className="group md:mx-2 lg:mx-0 hover:cursor-pointer">
              <div className="mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div
                  id="dropdown"
                  className="flex flex-row justify-center items-center"
                >
                  <div className="scale-90">
                    {userStatus ? (
                      <Avatar>
                        <span className="text-sm font-bold tracking-widest ">
                          {user.user.name.match(/\b(\w)/g).join("")}
                        </span>
                      </Avatar>
                    ) : (
                      <Link href={"/auth/login"}>
                        <div className="flex flex-row justify-start items-center gap-2 border-2 border-white p-1  ">
                          <span className="text-md font-medium tracking-widest text-center text-white">
                            Login
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {userStatus && (
                <div
                  id="dropdownComponent"
                  className="absolute right-5 transition-all h-0 group-hover:h-fit w-fit dark:bg-slate-200 bg-slate-50 shadow-xl shadow-gray-300  overflow-hidden z-10 rounded"
                >
                  <ul className="flex flex-col justify-evenly items-center">
                    <li className="py-2 px-4 hover:bg-sky-200 w-full">
                      {userStatus && (
                        <div className="flex flex-row justify-start items-center gap-2">
                          <div className="scale-90">
                            <Avatar>
                              <span className="text-sm font-bold tracking-widest ">
                                {user.user.name.match(/\b(\w)/g).join("")}
                              </span>
                            </Avatar>
                          </div>
                          <span className="text-gray-600 text-sm text-center tracking-tighter">
                            {user.user.name}
                          </span>
                        </div>
                      )}
                    </li>
                    <li className="py-2 px-4 hover:bg-sky-200 w-full">
                      {/* <span className="text-gray-600 text-sm text-center">{item}</span> */}
                      {userStatus && (
                        <div
                          onClick={() => {
                            dispatch(DELETE_USER());
                            toast.success("Logged Out Succesfully!!");
                          }}
                          className="flex flex-row justify-start items-center gap-2"
                        >
                          <span className="text-gray-600 text-sm text-center">
                            Logout
                          </span>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          <div
            id="modal"
            className={`absolute left-0 h-[70vh] w-[100vw] flex justify-center  transition-all origin-center duration-300 overflow-hidden ${
              hoveredItem == "services" && isHovered
                ? "scale-100 z-10"
                : "scale-0 -z-10"
            }`}
          >
            <div
              className="h-full bg-gray-50 rounded-md overflow-hidden shadow-xl flex flex-row divide-x-2 w-[80vw] divide-gray-300"
              onMouseLeave={() => {
                setHoveredItem("");
                setHovered(false);
                setShowSubjects(false);
              }}
            >
              <div
                className={`w-[20%] h-full flex justify-center items-start bg-primary/10 overflow-y-scroll ${styles.noScroll} scroll-smooth`}
              >
                {hoveredItem == "services" && (
                  <div className="text-center w-full overflow-hidden">
                    <ul className="flex flex-col justify-center items-center w-full">
                      {cat?.data.map((item, key) => (
                        <li
                          key={key}
                          className="py-2 px-4 hover:bg-sky-200 w-full text-start mt-2 hover:cursor-pointer"
                          onMouseEnter={() => {
                            setShowSubjects(true);
                            setSubjects(item.id);
                          }}
                        >
                          <span className="text-gray-600 text-sm">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="w-[80%] h-full p-5">
                {showSubjects && (
                  <div className="w-full">
                    <ul className="grid grid-cols-3 gap-x-4 gap-y-1 justify-center items-center w-full ">
                      {subWithCat?.data.map(
                        (item, key) =>
                          subject == item.category_id && (
                            // <Link href={path}></Link>
                            <li
                              key={key}
                              className="py-2 px-3 transition-all ease-linear hover:shadow-xl rounded hover:scale-105 hover:bg-sky-200 w-full hover:cursor-pointer"
                              onClick={() => {
                                router.push(
                                  {
                                    pathname: `/services/${item.slug}/${item.id}`,
                                  },
                                  `/services/${item.slug}/${item.id}`
                                );
                                setHoveredItem("");
                                setHovered(false);
                              }}
                            >
                              <span className="text-gray-600 text-sm text-center whitespace-nowrap">
                                {item.name}
                              </span>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
