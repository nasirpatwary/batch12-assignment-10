import { Link, NavLink, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";
import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import Container from "../shared/Container";
import { ButtonComponent } from "../shared/ButtonComponent";
import SocialLogin from "../shared/SocialLogin";
import logo from "../assets/icons8-redux-48-removebg-preview.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();
  const { user, logOutUser } = useAuth();
  const navLinks = (
    <>
      <NavLink to="/" className="group relative">Home
      <span className="nav"></span>
      </NavLink>
      <NavLink to="/addTransaction" className="group relative">AddTransaction
      <span className="nav"></span>
      </NavLink>
      <NavLink to="/myTransactions" className="group relative">MyTransactions
      <span className="nav"></span>
      </NavLink>
      <NavLink to="/reports" className="group relative">Reports
      <span className="nav"></span>
      </NavLink>
      <NavLink to="/profile" className="group relative">MyProfile
      <span className="nav"></span>
      </NavLink>
    </>
  );

  useEffect(() => {
    if (open) setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="backdrop-blur-sm shadow fixed w-full z-50">
      <Container>
        <div className="navbar p-0">
          <div data-aos="fade-right" className="navbar-start">
            <Link to="/" className="text-2xl flex gap-2 items-center">
             <img className="size-10" src={logo} alt="logo" /> Financial
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-base menu-horizontal gap-4">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="lg:hidden">
              <div className="text-2xl relative z-50">
                {open ? (
                  <MdClose
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  />
                ) : (
                  <IoIosMenu
                    onClick={() => setOpen(true)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div
                className={`fixed z-10 overflow-y-auto space-y-6 p-4 top-16 right-0 w-full md:w-1/2 h-screen bg-base-100 backdrop-blur-sm shadow-lg transition-transform duration-500 ease-in-out transform ${
                  open ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <ul className="flex flex-col text-base space-y-3">
                  {navLinks}
                </ul>
                <div onClick={() => setDrop(!drop)}>
                  <GrSettingsOption size={24} />
                  {drop && (
                    <div
                      className={`fixed z-50 translate-y-1/8 bg-white/30 backdrop-blur-sm p-4 w-72 shadow`}
                    >
                      {user ? (
                        <div className="space-y-4 text-center">
                          <img
                            className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                            referrerPolicy="no-referrer"
                            src={
                              user?.photoURL ||
                              "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                            }
                            alt={user?.displayName || "user"}
                          />
                          <div>
                            <p>{user?.displayName}</p>
                            <small>{user?.email}</small>
                          </div>
                          <button
                            onClick={logOutUser}
                            className="cursor-pointer flex items-center gap-2 mx-auto"
                          >
                            <MdLogout size={18} /> LogOut
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-2">
                          <img
                            className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                            referrerPolicy="no-referrer"
                            src={
                              user?.photoURL ||
                              "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                            }
                            alt={user?.displayName || "user"}
                          />
                          <ButtonComponent
                            to="/login"
                            className="btn-sm border-primary"
                          >
                            Login
                          </ButtonComponent>
                          <ButtonComponent
                            to="/register"
                            className="btn-sm border-primary"
                          >
                            Regiter
                          </ButtonComponent>
                          <SocialLogin />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div onClick={() => setMenu(!menu)} className="hidden lg:block">
              <img
                className="size-10 rounded-full object-cover cursor-pointer"
                referrerPolicy="no-referrer"
                src={
                  user?.photoURL ||
                  "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                }
                alt={user?.displayName || "user"}
              />
              {menu && (
                <div
                  className={`fixed z-50 -translate-x-4/5 bg-base-100 top-16 p-4 w-52 shadow`}
                >
                  {user ? (
                    <div className="space-y-4 text-center">
                      <img
                        className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                        referrerPolicy="no-referrer"
                        src={
                          user?.photoURL ||
                          "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                        }
                        alt={user?.displayName || "user"}
                      />
                      <div>
                        <p className="">{user?.displayName}</p>
                        <small>{user?.email}</small>
                      </div>
                      <button
                        onClick={logOutUser}
                        className="cursor-pointer flex items-center gap-2 mx-auto"
                      >
                        <MdLogout size={18} /> LogOut
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4">
                      <img
                        className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                        referrerPolicy="no-referrer"
                        src={
                          user?.photoURL ||
                          "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                        }
                        alt={user?.displayName || "user"}
                      />
                      <ButtonComponent
                        to="/login"
                        className="btn-sm border-primary"
                      >
                        Login
                      </ButtonComponent>
                      <ButtonComponent
                        to="/register"
                        className="btn-sm border-primary"
                      >
                        Regiter
                      </ButtonComponent>
                      <SocialLogin />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
