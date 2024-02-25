import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/layout/header.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import assest from "@/json/assest";
import Image from "next/image";
import { Container } from "@mui/system";
import CustomButtonOutline from "@/ui/Buttons/CustomButtonOrange";
import {
  Button,
  ClickAwayListener,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Callback } from "yup/lib/types";
import { parseCookies } from "nookies";

const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const HeaderWrap = styled(Box)`
  .headerLogo {
    line-height: 0;
    display: inline-block;
    @media (max-width: 1199px) {
      max-width: 180px;
    }
    @media (max-width: 899px) {
      margin: 0 auto;
    }
    @media (max-width: 399px) {
      max-width: 130px;
    }
    @media (max-width: 479px) {
      max-width: 110px;
    }
  }

  .headerContainer {
    background-color: var(--colorF7F9FB) !important;
    padding: 25px 0;
    transition: 0.4s all ease;
    @media (max-width: 899px) {
      padding: 15px 0;
    }

    &.fixed {
      position: fixed !important;
      left: 0;
      top: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 1) !important;
      z-index: 100;
    }
  }
  .hdr_rgt {
    display: flex;
    align-items: center;
    .MuiPopper-root {
      z-index: 11;
      .MuiMenuItem-root{
        
        min-height: auto;
        span{
          
          
        }
      }
    }
    @media (max-width: 899px) {
      width: 100%;
    }

    @media (max-width: 899px) {
      margin-left: auto;
    }
    button {
      &:hover {
        background: transparent;
      }
    }
  }
  .navbar {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
    @media (max-width: 899px) {
      transition: all 0.4s;
      margin: 0;
      /* position: fixed;
      right: -100%;
      width: 100%;
      background: #ffffff;
      padding: 20px;
      height: 100%;
      top: 0;
      z-index: 99;
      flex-direction: column !important; */
      a {
        padding: 12px;
        text-align: start;
        margin: 0 !important;
        display: block;
        width: 100%;
        @media (max-width: 899px) {
          display: none;
        }
      }
      .form_control {
        margin: 0;
        padding: 12px;
        text-align: start;
        display: block;
        width: 100%;
        @media (max-width: 1199px) {
          margin-right: 30px;
        }
        @media (max-width: 899px) {
          display: none;
        }
        .MuiSvgIcon-root {
          right: -17px;
        }
      }
      &.nav_open {
        right: 0;
      }
    }

    a {
      margin-right: 27px;
      font-weight: 400;
      font-size: 16px;
      color: var(--color3A3A3A);
      position: relative;
      &:after {
        content: "";
        width: 30px;
        height: 1px;
        position: absolute;
        background-color: var(--colorF68939);
        left: 0;
        bottom: -4px;
        z-index: 9;
        transition: all 0.5s ease;
        display: none;
      }
      @media (max-width: 1199px) {
        margin-right: 14px;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: var(--colorF68939);
        &::after {
          display: block;
        }
      }
      &.active {
        color: var(--colorF68939);
        &::after {
          display: block;
        }
      }
      button {
        padding: 0;
        border-radius: 0;
        min-width: auto;
        &:hover {
          background-color: transparent;
        }
        span {
          font-weight: 400;
          font-size: 15px;
          color: var(--color3A4950);
          text-transform: capitalize;
        }
      }
    }
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .MuiPaper-root {
    transition: none !important;
  }
  .MuiSelect-select {
    padding: 0 15px 0 0 !important;
    &:hover {
      span {
        color: var(--colorF68939);
      }
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: var(--color3A3A3A);
      text-transform: capitalize;
      display: inline-block;
      &:hover {
        color: var(--colorF68939);
      }
    }
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  .MuiSvgIcon-root {
    background-image: url("/assets/images/menu_icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    right: 0;
    font-size: 10px;
    top: 8px;
    path {
      display: none;
    }
  }
  .form_control {
    min-width: 78px;
    margin: 0;
    margin-right: 40px;
    @media (max-width: 1199px) {
      margin-right: 30px;
    }
    .MuiSelect-select {
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
      }
      i {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      &:hover {
        color: var(--colorF68939);
      }
    }
  }
  .cross {
    min-height: auto;
    padding: 0;
    margin-left: auto;
    min-width: auto;
    line-height: 0;
    &:hover {
      background-color: transparent;
    }
  }
  .menu {
    margin-left: auto;
    min-height: auto;
    padding: 0;
    min-width: auto;
    line-height: 0;
    &:hover {
      background-color: transparent;
    }
  }
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    opacity: 0;
    z-index: -11;
    -webkit-transition: 0.3s all ease-in-out 0s;
    transition: 0.3s all ease-in-out 0s;
    &.hide {
      opacity: 1;
      z-index: 90;
    }
  }
  .accor_hdr {
    box-shadow: none;
    min-height: auto !important;
    .MuiAccordionSummary-content {
      margin: 0 !important;
    }
    .accor_hdr {
      padding: 0;
    }
    .accr_body {
      padding: 0;
      a {
        background-image: url("/assets/images/rgt.svg");
        background-position: center right 0px;
        background-repeat: no-repeat;
        background-size: 7px;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  .MuiMenu-list {
    padding: 30px 20px;
    border-radius: 20px;
    li {
      align-items: center;
      padding: 12px 0;
      i {
        display: inline-flex;
        align-items: center;
      }
    }
    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  }
`;

export default function Header(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [age, setAge] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const cookies = parseCookies();

  const token = cookies?.career_token;

  const handleChange2 =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [menuOpen, setMenuOpen] = React.useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("hidden");
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/#about-sec",
    },
    {
      name: "Features",
      route: "/#homeFeature-sec",
    },
    {
      name: "Pricing",
      route: "/pricing",
    },

    {
      name: "Sample reports",
      route: "/sample-reports",
    },
    {
      name: "Resources",
      route: "/resources",
    },
  ];

  const drawer = (
    <Box className="mobile-menu" sx={{ textAlign: "center" }}>
      <Box className="menulogoclose-icn">
        <Link href="/" className="mobile-logo">
          <Image src={assest.logo_img} alt="" width={165} height={60} />
        </Link>
        <Button className="btnclose-menubar" onClick={handleDrawerToggle}>
          <Image
            src={assest.closeiconmnmenu}
            width={20}
            height={20}
            alt="icon"
          />
        </Button>
      </Box>
      <Divider />
      <List>
        {navItems.map((item: any, index: number) => (
          <>
            {index === navItems.length - 1 ? (
              <ListItem>
                <Box sx={{ display: { md: "none", xs: "block" } }}>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange2("panel5")}
                    className="accor_hdr"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                      className="accor_hdr"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Resources
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accr_body">
                      <ListItem>
                        <Link href="/product-brochure">
                          <Image
                            src={assest.dropdnmenuicn1}
                            width={20}
                            height={20}
                            alt="icon"
                          />
                          Product Brochures
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/blog">
                          <i className="menuicn">
                            <Image
                              src={assest.dropdnmenuicn2}
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          </i>
                          Blog
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="javascript:void(0)">
                          <i className="menuicn">
                            <Image
                              src={assest.dropdnmenuicn3}
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          </i>
                          Videos
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/contact-us">
                          <i className="menuicn">
                            <Image
                              src={assest.dropdnmenuicn4}
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          </i>
                          Contact Us
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/help-center">
                          <i className="menuicn">
                            <Image
                              src={assest.dropdnmenuicn5}
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          </i>
                          Help Center
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="javascript:void(0)">
                          <i className="menuicn">
                            <Image
                              src={assest.dropdnmenuicn6}
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          </i>
                          Download App
                        </Link>
                      </ListItem>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </ListItem>
            ) : (
              <ListItem>
                <Link
                  href={item?.route}
                  key={item.name}
                  className={router.pathname === item.route ? "active" : ""}
                >
                  {/* <CustomButton type="button" variant="text">
                            
                          </CustomButton> */}
                  {item?.name}
                </Link>
              </ListItem>
            )}
          </>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  const [scroll, setScroll] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 50);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  const MenuProps = {
    PaperProps: {
      // hello:{}
      sx: {
        boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px",
        left: "0px",
        // transform: "translateY(42px) translateX(20px) !important",
        overflow: "hidden",
        // '&:after': {
        //   content: '""',
        //   position: "absolute",
        //   left: "31px",
        //   top: "-10px",
        //   width: "0px",
        //   height: "0px",
        //   borderLeft: "10px solid transparent",
        //   borderRight: "10px solid transparent",
        //   borderBottom: "10px solid white",
        // },
        "& .MuiMenuItem-root": {
          padding: "12px 15px",
          alignIitem: "center",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1",
          borderBottom: "1px dashed var(--colorD6D6D6)",
          backgroud: "transparent",
          a: {
            display: "flex",
            alignItem: "center",
            color: "var(--color3A3A3A)",
            "&:hover": {
              color: "var(--colorF68939)",
            },
          },
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "var(--colorF68939)",
          },
          "&:last-child": {
            border: "0",
          },
          "& .menuicn": {
            display: "flex",
            alignItem: "center",
            width: "30px",
            flexBsis: "30px",
            height: "20px",
            paddingRight: "10px",
          },
        },
        "& .Mui-selected": {
          background: "#fff !important",
        },

        "& .MuiList-root": {
          padding: "0px",
          width: "222px",
          maxHeight: "300px",
          overflowY: "auto",
        },
      },
    },
  };

  return (
    <HeaderWrap>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        // className={"headerContainer"}
        className={`headerContainer ${scroll ? "fixed" : ""}`}
      >
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
              className="menu_toggle_btn"
            >
              {/* <MenuIcon /> */}
              <Image src={assest.hamMenuIcon} alt="" width={30} height={20} />
            </IconButton>
            <Link href="/" className="headerLogo">
              <Image src={assest.logo_img} width={165} height={60} alt="Logo" />
            </Link>
            {!!token ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                {/* <CustomButton
                  onClick={() => handleLogout()}
                  type="button"
                  variant="text"
                >
                  <span>Logout</span>
                </CustomButton>

                <CustomButton type="button" variant="text">
                  <span>{userData?.email}</span>
                </CustomButton> */}
              </Box>
            ) : (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className={!menuOpen ? "navbar" : "navbar nav_open"}
              >
                <Button
                  onClick={openMenu}
                  className="cross"
                  sx={{ display: { md: "none", xs: "block" } }}
                >
                  {/* <Image
                    src={assest.cross_icon}
                    alt=""
                    width={20}
                    height={20}
                  />{" "} */}
                </Button>
                {navItems.map((item: any, index: number) => (
                  <>
                    {index === navItems.length - 1 ? (
                      <FormControl className="form_control dropdownMenu-list">
                        <Box sx={{ display: { md: "flex", xs: "none" } }}>
                          <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            MenuProps={MenuProps}
                          >
                            <MenuItem
                              value=""
                              disabled
                              sx={{ display: "none" }}
                            >
                              <Typography variant="caption">
                                Resources
                              </Typography>
                            </MenuItem>
                            <MenuItem value={10}>
                              <Link href="/product-brochure">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn1}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Product Brochures
                              </Link>
                            </MenuItem>
                            <MenuItem value={20}>
                              <Link href="/blog">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn2}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Blog
                              </Link>
                            </MenuItem>
                            <MenuItem value={30}>
                              <Link href="javascrip:void(0)">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn3}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Videos
                              </Link>
                            </MenuItem>
                            <MenuItem value={40}>
                              <Link href="/contact-us">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn4}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Contact Us
                              </Link>
                            </MenuItem>
                            <MenuItem value={50}>
                              <Link href="/help-center">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn5}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Help Center
                              </Link>
                            </MenuItem>
                            <MenuItem value={60}>
                              <Link href="javascrip:void(0)">
                                <i className="menuicn">
                                  <Image
                                    src={assest.dropdnmenuicn6}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                  />
                                </i>
                                Download App
                              </Link>
                            </MenuItem>
                          </Select>
                        </Box>
                        <Box sx={{ display: { md: "none", xs: "block" } }}>
                          <Accordion
                            expanded={expanded === "panel4"}
                            onChange={handleChange2("panel4")}
                            className="accor_hdr"
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel4bh-content"
                              id="panel4bh-header"
                              className="accor_hdr"
                            >
                              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                Products
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accr_body">
                              <Link href="javascript:void(0)">Option</Link>
                              <Link href="javascript:void(0)">Option</Link>
                              <Link href="javascript:void(0)">Option</Link>
                            </AccordionDetails>
                          </Accordion>
                        </Box>
                      </FormControl>
                    ) : (
                      <Link
                        href={item?.route}
                        scroll={false}
                        key={item.name}
                        className={
                          router.pathname === item.route ? "active" : ""
                        }
                      >
                        {/* <CustomButton type="button" variant="text">
                          
                        </CustomButton> */}
                        {item?.name}
                      </Link>
                    )}
                  </>
                ))}
                <Box className="hdr_rgt">
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    focusRipple={false}
                    sx={{ padding: "0", minWidth: "auto" }}
                  >
                    <Image
                      src={assest.userIcon}
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                My account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </Box>
              </Box>
            )}

            {/* <Button
              onClick={openMenu}
              className="menu"
              sx={{ display: { md: "none", xs: "block" } }}
            >
              <Image src={assest.menu_icon} alt="" width={20} height={20} />{" "}
            </Button> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: "none", xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      {!menuOpen ? (
        <Box className="overlay"></Box>
      ) : (
        <Box className="overlay hide"></Box>
      )}
    </HeaderWrap>
  );
}
