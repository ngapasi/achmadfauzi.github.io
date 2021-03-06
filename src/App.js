import React from "react";
import "./style.scss";
import Scrollspy from "react-scrollspy";
// import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Container,
  Avatar,
  List,
  TextField,
  ListSubheader,
  Paper,
  Link,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PaletteIcon from "@material-ui/icons/Palette";
import MovieIcon from "@material-ui/icons/Movie";
// import CreateIcon from "@material-ui/icons/Create";
import HeadsetIcon from "@material-ui/icons/Headset";
import CodeIcon from "@material-ui/icons/Code";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faFigma,
  faWordpressSimple,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import profile from "./assests/images/logo1.jpg";
import logistic from "./assests/images/item10.jpg";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

function App() {
  // const classes = useStyles();

  return (
    <div className="root">
      <Grid container direction="row">
        <AppBar className="nav" position="fixed">
          <Toolbar className="nav-left">
            <Scrollspy
              items={["home", "about", "skills", "portfolio", "contact"]}
              currentClassName="is-current"
            >
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#contact">Contact</Link>
            </Scrollspy>
            <div className="toggle">
              <span className="dark">Dark</span>
              <span className="light">Light</span>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
      <Container maxWidth="lg">
        <div className="home" id="home">
          <Grid container>
            <Grid
              spacing={3}
              className="corresponding"
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "65vh" }}
            >
              <Grid item xs={12}>
                <Avatar alt="Achmad Fauzi" className="ava">
                  <img src={profile} alt="Achmad Fauzi" />
                </Avatar>
              </Grid>
              <Grid item xs={12}>
                <div className="title">
                  <h2>Hello, I'm Achmad Fauzi</h2>
                  <h5>Frontend Developer</h5>
                  <Button className="btnHome hm" variant="contained">
                    Hire Me
                  </Button>
                  <Button
                    href="#portfolio"
                    className="btnHome mp"
                    variant="contained"
                    endIcon={<ArrowDownwardIcon />}
                  >
                    My Portfolio
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <Tooltip TransitionComponent={Zoom} title="Github" arrow>
                  <Button className="sosmed">
                    <Link
                      href="https://github.com/ngapasi/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHubIcon className="icon" />
                    </Link>
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="LinkedIn" arrow>
                  <Button className="sosmed">
                    <Link
                      href="https://www.linkedin.com/in/achmad-fauzi-492607140/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcon className="icon" />
                    </Link>
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Instagram" arrow>
                  <Button className="sosmed">
                    <Link
                      href="https://www.instagram.com/ngapasingapasi/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <InstagramIcon className="icon" />
                    </Link>
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Telegram" arrow>
                  <Button className="sosmed">
                    <Link
                      href="https://t.me.ngapasii/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <TelegramIcon className="icon" />
                    </Link>
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs={12} sm={6} md={6} justify="flex-end">
                <Typography className="right">
                  +62 896 3982 3858 <WhatsAppIcon className="iconrg" />
                </Typography>
                <Typography className="right">
                  ahmadfauzi2526@gmail.com
                  <MailOutlineIcon className="iconrg" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="about" id="about">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="title">
                <h2>Hi, Nice to meet you!</h2>
                <p>
                  I am a Frontend Developer but I also understand a little bit
                  about the Backend, Interested in programming since I was 14
                  years old, especially Frontend Development, because by
                  becoming a front end developer I can combine my coding and
                  design skills, i often work on web projects and applications
                  for various companies. Ability to learn quickly and love
                  learning new things about design and programming.
                </p>
                <Tooltip TransitionComponent={Zoom} title="Reading" arrow>
                  <Button className="btnAbout">
                    <MenuBookIcon className="icon" />
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Design" arrow>
                  <Button className="btnAbout">
                    <PaletteIcon className="icon" />
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Movie" arrow>
                  <Button className="btnAbout">
                    <MovieIcon className="icon" />
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Music" arrow>
                  <Button className="btnAbout">
                    <HeadsetIcon className="icon" />
                  </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Coding" arrow>
                  <Button className="btnAbout">
                    <CodeIcon className="icon" />
                  </Button>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="skills" id="skills">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>My Skills</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="card" variant="outlined">
                <List
                  className="front"
                  component="nav"
                  aria-label="main mailbox folders"
                  subheader={
                    <ListSubheader
                      className="card-sub"
                      component="div"
                      id="nested-list-subheader"
                    >
                      Frontend
                    </ListSubheader>
                  }
                >
                  <Grid item md={6} className="half">
                    <ListItem>
                      <FontAwesomeIcon icon={faHtml5} />
                      <ListItemText primary="HTML" />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faCss3} />
                      <ListItemText primary="CSS" />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faSass} />
                      <ListItemText primary="SASS" />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faJs} />
                      <ListItemText primary="Javascript" />
                    </ListItem>
                    <ListItem>
                      <svg
                        baseProfile="tiny"
                        height="15"
                        width="15"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.317 126.054c-44.877 64.496-39.286 148.409-5.01 216.945.816 1.644 1.67 3.259 2.513 4.88.537 1.02 1.044 2.072 1.603 3.08.314.607.669 1.199.998 1.779.586 1.095 1.182 2.131 1.79 3.199a293.431 293.431 0 003.272 5.606c.618 1.025 1.228 2.05 1.865 3.074a247.475 247.475 0 003.799 5.943c.54.841 1.065 1.682 1.619 2.494a280.153 280.153 0 005.498 7.944c.049.065.103.136.158.201.298.423.629.835.93 1.253a276.773 276.773 0 005.01 6.669c.626.798 1.261 1.6 1.89 2.402a337.143 337.143 0 004.631 5.693c.588.705 1.177 1.415 1.771 2.109a299.43 299.43 0 006.456 7.375c.038.044.089.093.13.136.089.103.168.168.247.266a318.784 318.784 0 006.562 6.925 232.15 232.15 0 002.101 2.12 385.72 385.72 0 005.238 5.135c.718.678 1.429 1.377 2.142 2.033a260.929 260.929 0 007.177 6.529c.043.043.073.076.114.092.412.369.84.722 1.247 1.063a353.295 353.295 0 006.521 5.515c.895.721 1.8 1.437 2.701 2.152a284.346 284.346 0 005.436 4.246c.965.737 1.933 1.475 2.906 2.213a306.807 306.807 0 006.098 4.37c.749.542 1.472 1.062 2.224 1.578.206.146.396.298.607.438a266.916 266.916 0 005.921 3.916c.854.568 1.703 1.154 2.565 1.707a373.512 373.512 0 009.272 5.684c.852.482 1.708.96 2.562 1.442a298.706 298.706 0 006.96 3.904c1.266.683 2.57 1.328 3.847 1.979 1.659.873 3.302 1.751 4.983 2.586.382.195.778.38 1.155.559.672.325 1.355.646 2.036.987a345.542 345.542 0 007.89 3.654c.567.249 1.112.499 1.673.743a270.489 270.489 0 009.208 3.834c.743.298 1.494.585 2.243.884a328.57 328.57 0 008.684 3.216c.371.13.727.249 1.092.373 3.202 1.123 6.434 2.158 9.69 3.173.775.228 1.556.478 2.337.705 3.313.997 6.583 2.185 10.005 2.819 217.021 39.574 280.061-130.418 280.061-130.418-52.942 68.976-146.924 87.174-235.967 66.914-3.376-.759-6.646-1.811-9.938-2.787a235.25 235.25 0 01-2.48-.753 302.496 302.496 0 01-9.568-3.112c-.434-.152-.873-.314-1.315-.473a292.113 292.113 0 01-8.438-3.129c-.789-.314-1.578-.612-2.364-.927a263.548 263.548 0 01-9.11-3.79c-.621-.261-1.212-.537-1.819-.809a352.768 352.768 0 01-7.689-3.568c-.732-.357-1.47-.704-2.218-1.067-1.996-.971-3.975-2.007-5.943-3.021-1.32-.694-2.662-1.355-3.966-2.077a236.132 236.132 0 01-7.123-3.996c-.8-.45-1.605-.879-2.408-1.34a339.195 339.195 0 01-9.278-5.688c-.843-.536-1.67-1.111-2.502-1.664a236.092 236.092 0 01-6.6-4.393c-.721-.477-1.42-1.008-2.128-1.491a341.353 341.353 0 01-6.242-4.511c-.933-.689-1.857-1.405-2.765-2.094-1.89-1.447-3.771-2.9-5.631-4.403a356.346 356.346 0 01-2.511-2.012 336.11 336.11 0 01-7.014-5.905c-.241-.217-.504-.423-.767-.645a338.34 338.34 0 01-7.372-6.708c-.705-.672-1.388-1.323-2.077-2.001a212.52 212.52 0 01-5.297-5.189c-.694-.694-1.394-1.383-2.077-2.071a294.084 294.084 0 01-6.501-6.881c-.106-.114-.217-.217-.32-.342a261.809 261.809 0 01-6.594-7.505 914.494 914.494 0 00-1.727-2.05 274.104 274.104 0 01-4.742-5.867 122.826 122.826 0 01-1.744-2.164 333.097 333.097 0 01-5.482-7.299c-49.439-67.423-67.2-160.431-27.689-236.813" />
                        <path d="M173.617 71.714c-32.454 46.705-30.691 109.215-5.376 158.61 4.246 8.28 9.018 16.311 14.356 23.962 4.861 6.968 10.249 15.259 16.701 20.854a197.69 197.69 0 007.283 7.56c.632.651 1.277 1.264 1.922 1.903 2.421 2.343 4.888 4.658 7.437 6.903.105.087.198.189.304.26.027.032.054.044.07.076 2.82 2.468 5.731 4.848 8.689 7.185.656.499 1.307 1.025 1.971 1.54 2.963 2.272 5.987 4.512 9.088 6.638.092.064.171.13.263.206 1.367.938 2.763 1.821 4.146 2.728.667.434 1.299.895 1.969 1.301a188.127 188.127 0 006.735 4.127c.322.201.64.363.952.548a243.601 243.601 0 005.957 3.329c.697.396 1.407.737 2.118 1.106 1.38.722 2.76 1.453 4.167 2.158.203.098.423.195.626.282a199.878 199.878 0 008.692 4.045c.627.276 1.277.525 1.92.791a220.67 220.67 0 007.117 2.891c1.014.385 2.039.748 3.053 1.123 2.166.803 4.347 1.539 6.54 2.277.992.314 1.965.64 2.958.943 3.12.965 6.203 2.19 9.456 2.732 167.56 27.764 206.247-101.25 206.247-101.25-34.875 50.212-102.405 74.186-174.468 55.478a203.755 203.755 0 01-9.486-2.744c-.96-.292-1.903-.607-2.853-.922a199.038 199.038 0 01-6.64-2.287c-1.006-.364-2.01-.732-2.996-1.112a222.847 222.847 0 01-7.145-2.885c-.643-.276-1.296-.521-1.925-.813a208.238 208.238 0 01-8.744-4.056c-1.478-.728-2.928-1.491-4.381-2.234-.841-.439-1.687-.873-2.53-1.307a208.727 208.727 0 01-5.55-3.129c-.431-.249-.884-.482-1.323-.749a215.246 215.246 0 01-6.719-4.099c-.683-.439-1.339-.911-2.022-1.356a257.978 257.978 0 01-4.352-2.879c-3.088-2.125-6.095-4.359-9.056-6.626-.683-.537-1.369-1.063-2.039-1.6-31.546-24.906-56.543-58.943-68.43-97.53-12.458-40.029-9.776-84.95 11.808-121.411" />
                        <path d="M290.774 31.116c-19.131 28.154-21.01 63.119-7.735 94.217 13.998 33.007 42.684 58.9 76.168 71.171 1.38.515 2.757.976 4.159 1.448.609.19 1.214.396 1.832.575 1.972.623 3.932 1.345 5.971 1.729 92.52 17.878 117.615-47.48 124.296-57.1-21.986 31.651-58.925 39.249-104.254 28.252-3.582-.879-7.519-2.169-10.968-3.395a133.788 133.788 0 01-13.024-5.406 135.34 135.34 0 01-22.835-13.931c-40.558-30.778-65.759-89.488-39.291-137.305" />
                      </svg>
                      <ListItemText primary="JQuery" />
                    </ListItem>
                  </Grid>
                  <Grid item md={6} className="half">
                    <ListItem>
                      <FontAwesomeIcon icon={faReact} />
                      <ListItemText primary="ReactJS" />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faBootstrap} />
                      <ListItemText primary="Bootstrap" />
                    </ListItem>
                    <ListItem>
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 500 500"
                        width="15"
                        height="15"
                      >
                        <g id="XMLID_1_">
                          <path
                            id="XMLID_3_"
                            className="st0"
                            d="M89 151.7v125.2l21.6-12.1v-101z"
                          />
                          <path
                            id="XMLID_4_"
                            className="st1"
                            d="M67.5 264.8V114l128 72.7v25.6L89 151.7v125.2z"
                          />
                          <path
                            id="XMLID_5_"
                            className="st0"
                            d="M326.1 114v150.8l-86.2 48.5-21.6-13.5 86.2-48.5v-101l-109 62v-25.6z"
                          />
                          <path
                            id="XMLID_6_"
                            className="st2"
                            d="M304.5 101.8l-107.7 60.7L89 101.8 67.5 114l128 72.7L326.1 114z"
                          />
                          <path
                            id="XMLID_7_"
                            className="st1"
                            d="M283 162.5v76.7l21.5 12.1v-101z"
                          />
                          <path
                            id="XMLID_8_"
                            className="st2"
                            d="M175.2 299.8L283 239.2l21.5 12.1-86.2 48.5 84.9 48.5 86.2-48.5L411 312l-107.8 60.6z"
                          />
                          <path
                            id="XMLID_9_"
                            className="st1"
                            d="M175.2 299.8v25.6l128 72.8v-25.6z"
                          />
                          <path
                            id="XMLID_10_"
                            className="st1"
                            d="M411 312v-75.5l-21.6-12.1v75.4z"
                          />
                          <path
                            id="XMLID_11_"
                            className="st0"
                            d="M303.2 372.6L411 312v-75.5l21.5-12.1v101l-129.3 72.8z"
                          />
                          <path
                            id="XMLID_12_"
                            className="st2"
                            d="M432.5 224.4L411 236.5l-21.6-12.1 21.6-12.1z"
                          />
                          <path
                            id="XMLID_13_"
                            className="st0"
                            d="M411 212.3v-25.6l21.5-12.1v25.6z"
                          />
                          <path
                            id="XMLID_14_"
                            className="st1"
                            d="M411 186.7v25.6l-21.6-12.1v-25.6z"
                          />
                          <path
                            id="XMLID_15_"
                            className="st2"
                            d="M432.5 174.6L411 186.7l-21.6-12.1 21.6-12.1z"
                          />
                        </g>
                      </svg>
                      <ListItemText primary="Material UI" />
                    </ListItem>
                    <ListItem>
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 500 500"
                        width="15"
                        height="15"
                      >
                        <g id="XMLID_1_">
                          <path
                            id="XMLID_2_"
                            className="st0"
                            d="M157.6 162.4c1.3-2.2 3-4.4 5.5-5.5 1-.2 2-.1 3-.1H216c-1.5 1.2-2.9 2.5-3.8 4.2-2.6 4.2-4.3 8.9-5.9 13.5-4.5 14.1-7.6 28.6-10.7 43.1-1.4 6.6-2.7 13.2-3.9 19.7-3.8 21.5-7.7 42.9-12.6 64.2-2.3 9.8-4.7 19.6-8.3 29.1-1.7 3.9-3.3 8.1-6.5 11-.7.7-1.5 1.5-2.6 1.4h-44c-3-.1-5.9.2-8.9-.1 2-1.5 3.7-3.4 4.9-5.6 3.3-6.3 5.4-13.1 7.4-19.9 3.1-10.9 5.5-22 7.9-33 1.5-7.3 3.2-14.5 4.2-21.8 1.2-8.1 3-16.2 4.4-24.3 2.3-11.9 4.7-23.9 7.4-35.7 2.2-9.2 4.4-18.5 7.3-27.5 1.4-4.3 3-8.7 5.3-12.7z"
                          />
                          <path
                            id="XMLID_3_"
                            className="st0"
                            d="M157.6 162.4c1.4-2.2 3.1-4.4 5.5-5.4v-.1.1c.5-.1 1-.1 1.5-.1H216v-.2c-1.5 1.2-2.9 2.5-3.8 4.2h.1-.1c-2.6 4.2-4.3 8.9-5.9 13.5-4.5 14.1-7.6 28.6-10.7 43.1-1.4 6.6-2.7 13.2-3.9 19.7-3.8 21.5-7.7 42.9-12.6 64.2-2.3 9.8-4.7 19.6-8.3 29.1h.1-.1c-1.7 3.9-3.3 8.1-6.5 11-.7.6-1.4 1.4-2.3 1.4h-44.2v.1-.1h-5.4c-1.2 0-2.4 0-3.5-.2v.2c2-1.5 3.8-3.4 4.9-5.6 3.3-6.3 5.4-13.1 7.4-19.9 3.1-10.9 5.6-22 7.9-33 1.5-7.3 3.2-14.5 4.2-21.8 1.2-8.1 3-16.2 4.4-24.3 2.3-11.9 4.7-23.9 7.4-35.7 2.2-9.2 4.4-18.5 7.3-27.5 1.4-4.3 3-8.6 5.2-12.7-2.4 4-3.9 8.3-5.4 12.7-3 9-5.2 18.2-7.3 27.5-2.7 11.8-5.1 23.8-7.4 35.7-1.5 8.1-3.3 16.2-4.4 24.3-1.1 7.3-2.8 14.5-4.2 21.8-2.3 11.1-4.8 22.1-7.9 33-2 6.8-4.1 13.6-7.4 19.9-1.1 2.2-2.9 4-4.9 5.6l-.1.1h.2c1.2.1 2.4.2 3.5.2h49.4v-.1.1h.2c1 0 1.7-.8 2.4-1.4 3.2-2.9 4.9-7.1 6.5-11 3.6-9.5 6-19.3 8.3-29.1 4.9-21.3 8.8-42.7 12.6-64.2 1.2-6.6 2.6-13.2 3.9-19.7 3-14.5 6.2-29 10.7-43.1h-.1.1c1.6-4.7 3.3-9.3 5.9-13.5 1-1.7 2.4-2.9 3.8-4.2l.1-.1h-51.5c-.5 0-1 0-1.5.1-2.5 1-4.2 3.2-5.5 5.4z"
                          />
                          <path
                            id="XMLID_4_"
                            className="st1"
                            d="M216 156.9h3.8c2.8 1.5 5.2 3.9 6.5 6.8 1.8 3.3 3.2 6.9 4.5 10.5 4.4 13.6 7.4 27.6 10.4 41.6 2.6 12.5 5 25.1 7.3 37.7.2.7 0 1.6.8 1.8-3.2 16.6-6.3 33.2-10.3 49.6-2.2 8.9-4.4 17.7-7.7 26.2-1.8 4.3-3.6 8.9-7.3 12-2.4.5-4.1-1.3-5.5-2.9-2.5-3.2-4.1-7-5.5-10.8-5-13.6-8-27.7-11.1-41.8-2.3-11-4.4-22-6.6-33-1-5.6-2.3-11.1-3-16.7-.1-.1-.4-.3-.6-.4 1.2-6.6 2.6-13.2 3.9-19.7 3-14.5 6.2-29 10.7-43.1 1.6-4.7 3.3-9.3 5.9-13.5.9-1.8 2.3-3.1 3.8-4.3z"
                          />
                          <path
                            id="XMLID_5_"
                            className="st1"
                            d="M216 156.9c.9.1 1.7 0 2.6 0h1.3v-.1.1c2.8 1.5 5.2 3.9 6.5 6.8 1.8 3.3 3.2 6.9 4.5 10.5h.1-.1c4.4 13.6 7.4 27.6 10.4 41.6 2.6 12.5 5 25.1 7.3 37.7.1.3.1.7.2 1.1.1.3.3.7.7.7v-.1h-.1c-3.2 16.6-6.3 33.2-10.3 49.6-2.2 8.9-4.4 17.7-7.7 26.2-1.8 4.3-3.6 8.9-7.3 12v.1-.1c-.3.1-.6.1-.8.1-1.9 0-3.4-1.5-4.7-3h.1c-2.5-3.2-4-7-5.5-10.8-5-13.6-8-27.7-11.1-41.8-2.3-11-4.4-22-6.6-33h-.1.1c-1-5.6-2.3-11.1-3-16.7-.1-.1-.4-.3-.6-.4v.1h.1c1.2-6.6 2.6-13.2 3.9-19.7 3-14.5 6.2-29 10.7-43.1h-.1.1c1.6-4.7 3.3-9.3 5.9-13.5.7-1.8 2.1-3 3.5-4.3-1.5 1.2-2.9 2.5-3.9 4.2h.1-.1c-2.6 4.2-4.3 8.9-5.9 13.5-4.5 14.1-7.6 28.6-10.7 43.1-1.4 6.6-2.7 13.2-3.9 19.7.1.1.4.3.6.4v-.1h-.1c.7 5.6 2.1 11.1 3 16.7 2.2 11 4.2 22.1 6.6 33 3.1 14.1 6.1 28.2 11.1 41.8 1.5 3.8 3 7.6 5.6 10.8 1.3 1.4 2.8 3 4.8 3 .3 0 .6 0 .9-.1 3.8-3.1 5.6-7.7 7.3-12 3.3-8.6 5.6-17.4 7.7-26.2 4-16.4 7.1-33 10.3-49.6v-.1h-.1c-.4-.1-.6-.3-.6-.6-.1-.3-.1-.7-.2-1.1h-.1.1c-2.3-12.6-4.7-25.2-7.3-37.7-3-14-6-28-10.4-41.6-1.3-3.6-2.8-7.1-4.5-10.5h-.1.1c-1.3-3-3.7-5.4-6.5-6.9h-1.3c-.8.2-1.7.2-2.5.3z"
                          />
                          <path
                            id="XMLID_6_"
                            className="st0"
                            d="M271.1 164.5c1.6-3 3.5-6.4 7-7.6 17.5-.1 35 0 52.5 0-1.6 1.6-3.3 3.3-4.4 5.3-3.4 6.1-5.4 12.8-7.4 19.5-5.2 18.3-8.9 37-12.3 55.8-3.2 18.5-6.7 36.9-10.6 55.3-2 9.2-4.1 18.5-6.8 27.6-1.7 5.6-3.5 11.3-6.3 16.6-1.4 2.4-3 5-5.5 6.2-16.7.1-33.4 0-50.1 0-.9 0-1.9 0-2.8-.1 3.7-3 5.5-7.7 7.3-12 3.3-8.5 5.5-17.4 7.7-26.2 4-16.4 7.1-33 10.3-49.6 3.8-21.4 7.8-42.7 12.9-63.8 2.1-9.2 4.4-18.5 8.5-27z"
                          />
                          <path
                            id="XMLID_7_"
                            className="st0"
                            d="M271.1 164.5c1.6-3 3.6-6.4 7-7.5v-.1.1c8.7 0 17.5-.1 26.2-.1h26.2v-.1c-1.6 1.6-3.4 3.3-4.5 5.3h.1-.1c-3.4 6.1-5.4 12.8-7.4 19.5-5.2 18.3-8.9 37-12.3 55.8-3.2 18.5-6.7 36.9-10.6 55.3-2 9.2-4.1 18.5-6.8 27.6-1.7 5.6-3.5 11.3-6.3 16.5-1.4 2.4-2.9 5-5.5 6.2v.1-.1c-5.9 0-11.9.1-17.8.1h-32.4c-.9 0-1.9 0-2.8-.1v.2c3.8-3.1 5.6-7.7 7.3-12 3.3-8.6 5.6-17.4 7.7-26.2 4-16.4 7.1-33 10.3-49.6 3.8-21.4 7.8-42.7 12.9-63.8 2.5-9.3 4.8-18.6 8.8-27.1-4.2 8.5-6.5 17.7-8.8 26.9-5.1 21.1-9.1 42.5-13 63.8-3.2 16.6-6.3 33.2-10.3 49.6-2.2 8.9-4.4 17.7-7.7 26.2-1.8 4.3-3.6 8.9-7.3 12l-.1.1h.2c.9.1 1.9.1 2.8.1h32.4c5.9 0 11.9 0 17.8-.1 2.6-1.2 4.2-3.9 5.6-6.2 2.8-5.3 4.6-10.9 6.3-16.6 2.7-9.1 4.8-18.3 6.8-27.6 3.9-18.4 7.4-36.8 10.6-55.3 3.5-18.7 7.1-37.4 12.3-55.8h-.1.1c2-6.7 4-13.4 7.4-19.5 1.1-2.1 2.8-3.7 4.4-5.3l.1-.1h-26.4c-8.7 0-17.5 0-26.2.1-3.4 1.2-5.4 4.6-6.9 7.7z"
                          />
                          <path
                            id="XMLID_8_"
                            className="st1"
                            d="M330.5 156.9h4.3c2.3 1.2 3.9 3.2 5.4 5.3 2.4 3.8 3.9 8.1 5.4 12.2 3.7 11.2 6.4 22.8 8.9 34.3 3.3 15.5 6.3 31.2 9.1 46.8.7 3.7 1.4 7.5 1.8 11.3l.7.7c-1.6 2.2-2.2 4.8-3.1 7.4-2.8 8.9-4.6 18.2-6.1 27.4-1.2 7.2-2.8 14.4-5.1 21.4-1.7 5.2-3.7 10.3-7 14.6-1.6 2.1-3.7 3.7-6.1 4.7-3.7.4-5.8-3.1-7.6-5.7-3.7-6.4-5.6-13.5-7.8-20.5-7-25.8-11.5-52.1-16.4-78.4 0-.4-.3-.7-.6-.9 3.5-18.7 7.1-37.4 12.3-55.8 2-6.7 4-13.4 7.4-19.5 1.2-2.1 2.9-3.7 4.5-5.3z"
                          />
                          <path
                            id="XMLID_9_"
                            className="st1"
                            d="M330.5 156.9c.9.1 1.9 0 2.9 0h1.4v-.1.1c2.3 1.2 3.9 3.2 5.3 5.3h.1-.1c2.4 3.8 3.9 8 5.4 12.2h.1-.1c3.7 11.2 6.4 22.8 8.9 34.3 3.3 15.5 6.3 31.2 9.1 46.8.7 3.7 1.4 7.5 1.8 11.3l.7.7h-.1c-1.6 2.2-2.2 4.9-3.1 7.4-2.8 8.9-4.6 18.2-6.1 27.4-1.2 7.2-2.8 14.4-5.1 21.4-1.7 5.2-3.7 10.3-7 14.6-1.6 2.1-3.7 3.6-6.1 4.7v.1-.1h-.6c-3.3 0-5.3-3.3-7-5.7h-.1.1c-3.7-6.4-5.6-13.5-7.7-20.5h-.1.1c-7-25.8-11.5-52.1-16.4-78.4h-.1.1c0-.4-.3-.8-.7-1v.1h.1c3.5-18.7 7.1-37.4 12.3-55.8h-.1.1c2-6.7 4-13.4 7.4-19.5 1.3-2 3-3.6 4.6-5.3-1.7 1.6-3.4 3.2-4.5 5.3h.1-.1c-3.4 6.1-5.4 12.8-7.4 19.5-5.2 18.3-8.9 37-12.3 55.8.3.2.5.5.6.9 4.9 26.2 9.4 52.6 16.4 78.4 2.1 7 4.1 14.1 7.8 20.5 1.7 2.5 3.7 5.8 7.1 5.8h.6c2.4-1.1 4.6-2.7 6.1-4.7 3.4-4.3 5.4-9.4 7.1-14.6 2.2-7 3.9-14.1 5.1-21.4 1.5-9.2 3.3-18.5 6.1-27.4h-.1.1c.9-2.5 1.5-5.2 3.1-7.3l-.7-.7h.1c-.4-3.8-1.1-7.6-1.9-11.3-2.9-15.6-5.8-31.3-9.1-46.8-2.5-11.5-5.2-23.1-8.9-34.3-1.5-4.2-3-8.5-5.4-12.3-1.5-2.1-3.1-4.1-5.4-5.3h-1.4c-1.2-.2-2.2-.2-3.1-.1z"
                          />
                          <path
                            id="XMLID_10_"
                            className="st1"
                            d="M67.5 257.1c1.1-.1 2.3-.3 3.5-.3h48c2 .3 4.1.1 6.1 1 2.8 1.1 5.3 3.1 7.2 5.5.2-.1.6-.5.8-.7-1.1 7.3-2.8 14.5-4.2 21.8-2.3 11.1-4.8 22.1-7.9 33-2 6.8-4.1 13.6-7.4 19.9-1.1 2.2-2.9 4.1-4.9 5.6-.7.1-1.3-.4-1.9-.8-2.1-1.3-3.3-3.6-4.5-5.7-6-13.7-6.7-28.9-10.4-43.3-1.9-7.2-4.2-14.3-7.7-20.9-2.1-4-4.7-7.8-8.1-10.8-2.6-1.9-5.5-3.6-8.6-4.3z"
                          />
                          <path
                            id="XMLID_11_"
                            className="st1"
                            d="M67.5 257.1c1.2 0 2.3-.2 3.5-.2h48v-.1.1c2 .3 4.1.1 6.1 1 2.8 1.1 5.3 3.1 7.2 5.5h.1c.2-.1.6-.5.8-.7v-.1h-.1c-1.1 7.3-2.8 14.5-4.2 21.8-2.3 11.1-4.8 22.1-7.9 33-2 6.8-4.1 13.6-7.4 19.9-1.1 2.2-2.9 4-4.9 5.6v.1-.1h-.2c-.6 0-1.1-.4-1.7-.8-2.1-1.3-3.2-3.6-4.5-5.7h-.1.1c-6-13.7-6.7-28.9-10.4-43.3-1.9-7.2-4.2-14.3-7.7-20.9-2.1-4-4.7-7.8-8.1-10.8-2.5-2-5.4-3.6-8.6-4.3 3.1.8 6 2.4 8.5 4.5v-.1c3.4 3 6 6.8 8.1 10.8 3.4 6.6 5.8 13.7 7.7 20.9 3.7 14.3 4.4 29.5 10.4 43.3 1.3 2.1 2.5 4.4 4.6 5.7.5.3 1.1.8 1.7.8h.2c2-1.5 3.8-3.4 4.9-5.6 3.3-6.3 5.4-13.1 7.4-19.9 3.1-10.9 5.6-22 7.9-33 1.5-7.3 3.2-14.5 4.2-21.8v-.2l-.1.1c-.2.2-.6.5-.8.7v.1h.1c-1.9-2.4-4.4-4.4-7.2-5.5v.1-.1c-2-.9-4.1-.7-6.1-1H71c-1.2-.1-2.3 0-3.5.2z"
                          />
                          <path
                            id="XMLID_12_"
                            className="st0"
                            d="M370 261.7c2.8-3.1 6.9-5.1 11.1-4.9h36.1c5 .1 10.1-.2 15.1.1-1.5 1-3.3 1.4-4.9 2.2-5.5 2.5-10.2 6.7-13.2 11.9-4.8 8.4-6.5 18-7.9 27.4-1.4 9.2-1.4 18.8-4.4 27.8-2 6.3-5.1 12.6-10.4 16.8-16.6.2-33.1 0-49.6.1-1.1 0-2.2 0-3.2-.2 2.4-1.1 4.5-2.6 6.1-4.7 3.3-4.3 5.4-9.4 7-14.6 2.2-7 3.9-14.1 5.1-21.4 1.5-9.2 3.3-18.5 6.1-27.4.9-2.5 1.5-5.2 3.1-7.4 1.3-1.8 2.2-4.1 3.9-5.7z"
                          />
                          <path
                            id="XMLID_13_"
                            className="st0"
                            d="M370 261.7c2.7-2.9 6.6-4.9 10.6-4.9h45.8c2 0 4 0 6 .2v-.2c-1.5 1-3.3 1.4-4.9 2.2v.1-.1c-5.5 2.5-10.2 6.7-13.2 12-4.8 8.4-6.5 18-7.9 27.4-1.4 9.3-1.4 18.8-4.4 27.8-2 6.3-5.1 12.6-10.4 16.7v.1-.1c-7.2.1-14.3.1-21.5.1h-29c-.8 0-1.5 0-2.3-.2v.2c2.4-1.1 4.6-2.7 6.1-4.7 3.4-4.3 5.4-9.4 7.1-14.6 2.2-7 3.9-14.1 5.1-21.4 1.5-9.2 3.3-18.5 6.1-27.4h-.1.1c.9-2.5 1.5-5.2 3.1-7.3 1.2-2 2.1-4.2 3.7-5.9-1.7 1.6-2.6 3.9-3.9 5.8-1.6 2.2-2.2 4.9-3.1 7.4-2.8 8.9-4.6 18.2-6.1 27.4-1.2 7.2-2.8 14.4-5.1 21.4-1.7 5.2-3.7 10.3-7 14.6-1.6 2.1-3.7 3.6-6.1 4.7l-.2.1h.2c.8.2 1.5.2 2.3.2h29c7.2 0 14.3 0 21.5-.1 5.3-4.2 8.4-10.5 10.5-16.8 3-9 3-18.6 4.4-27.8 1.4-9.4 3.1-19 7.9-27.4 3-5.2 7.7-9.4 13.2-11.9 1.6-.8 3.4-1.2 4.9-2.3l.2-.1h-.2c-2-.1-4-.2-6-.2h-45.3v.1-.1h-.5c-4.1 0-8 1.9-10.6 5z"
                          />
                        </g>
                      </svg>
                      <ListItemText primary="Materialize CSS" />
                    </ListItem>
                    <ListItem>
                      <svg
                        width="15"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-50 -50 300 200"
                      >
                        <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" />
                      </svg>
                      <ListItemText primary="Tailwind CSS" />
                    </ListItem>
                  </Grid>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="card" variant="outlined">
                <List
                  className="design"
                  component="nav"
                  aria-label="main mailbox folders"
                  subheader={
                    <ListSubheader
                      className="card-sub"
                      component="div"
                      id="nested-list-subheader"
                    >
                      Design
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 130.746 595.279 580.398"
                    >
                      <path
                        fill="#131419"
                        d="M24.803 155.549h545.674v530.792H24.803V155.549z"
                      />
                      <path
                        d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm401.318-342.287c-19.595 0-26.291 9.921-26.291 18.106 0 8.929 4.464 15.13 30.756 28.772 38.941 18.851 51.095 36.957 51.095 63.497 0 39.685-30.26 61.016-71.186 61.016-21.579 0-40.182-4.465-50.847-10.665-1.736-.744-1.984-1.984-1.984-3.969v-36.461c0-2.48 1.24-3.225 2.977-1.984 15.626 10.17 33.484 14.634 49.854 14.634 19.595 0 27.78-8.185 27.78-19.347 0-8.929-5.705-16.866-30.757-29.764-35.221-16.866-49.854-33.98-49.854-62.504 0-31.997 25.052-58.536 68.457-58.536 21.331 0 36.213 3.225 44.398 6.945 1.984 1.24 2.48 3.224 2.48 4.96v33.98c0 1.984-1.24 3.225-3.721 2.48-10.913-6.943-27.035-11.16-43.157-11.16zm-213.309 29.516c5.705.496 10.17.496 20.091.496 29.021 0 56.304-10.169 56.304-49.606 0-31.5-19.595-47.375-52.583-47.375-9.921 0-19.347.496-23.812.744v95.741zM143.86 266.668c0-1.736 3.473-2.977 5.456-2.977 15.875-.744 39.438-1.24 63.993-1.24 68.705 0 95.492 37.701 95.492 85.82 0 63-45.638 90.036-101.693 90.036-9.425 0-12.649-.496-19.347-.496v95.245c0 1.984-.744 2.976-2.976 2.976h-37.949c-1.984 0-2.977-.744-2.977-2.976V266.668z"
                        fill="#f2f3f7"
                      />
                    </svg>
                    <ListItemText primary="Adobe Photoshop" />
                  </ListItem>
                  <ListItem>
                    <svg
                      id="ps_x5F_cc_x5F_app_x5F_RGB.svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 240 234"
                      width="15"
                      height="15"
                    >
                      <path d="M10 10h220v214H10z" fill="#131419" />
                      <path
                        style={{ fill: "#131419" }}
                        className="st1"
                        d="M0 0v234h240V0H0zm10 10h220v214H10V10z"
                      />
                      <path
                        style={{ fill: "#f2f3f7" }}
                        className="st1"
                        d="M174.3 98.3c-1.5-.7-3.4-1-5.8-1-12.6 0-21 9.7-21 25.8 0 18.4 8.6 25.8 19.8 25.8 2.4 0 5-.3 6.9-1.1V98.3h.1zm-44.8 25.6c0-23.3 15-41.5 39.6-41.5 2.1 0 3.2 0 5.2.2v-26c0-.6.5-1 1-1h16.1c.8 0 1 .3 1 .8v91.4c0 2.7 0 6.1.5 9.8 0 .7 0 .8-.6 1.1-8.4 4-17.2 5.8-25.6 5.8-21.7 0-37.2-13.4-37.2-40.6zm-34.1-16.2l28 54.3c.5.8.2 1.6-.6 1.6h-17.4c-1.1 0-1.6-.3-2.1-1.3-6.4-13.2-12.9-26.9-19.6-41.1h-.2c-6 13.4-12.6 28-19 41.2-.5.8-1 1.1-1.8 1.1H46.1c-1 0-1.1-.8-.6-1.4l27.4-52.7L46.4 57c-.6-.8 0-1.5.7-1.5h17.2c1 0 1.5.2 1.8 1.1C72.4 69.9 78.8 83 84.8 96.4h.2c5.8-13.2 12.2-26.5 18.3-39.6.5-.8.8-1.3 1.8-1.3h16.1c.8 0 1.1.6.6 1.5l-26.4 50.7z"
                      />
                    </svg>
                    <ListItemText primary="Adobe XD" />
                  </ListItem>
                  <ListItem>
                    <FontAwesomeIcon icon={faFigma} />
                    <ListItemText primary="Figma" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="card" variant="outlined">
                <List
                  className="other"
                  component="nav"
                  aria-label="main mailbox folders"
                  subheader={
                    <ListSubheader
                      className="card-sub"
                      component="div"
                      id="nested-list-subheader"
                    >
                      Other
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <FontAwesomeIcon icon={faWordpressSimple} />
                    <ListItemText primary="Wordpress" />
                  </ListItem>
                  <ListItem>
                    <FontAwesomeIcon icon={faGit} />
                    <ListItemText primary="Git" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="portfolio" id="portfolio">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>My Portfolio</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className="card" variant="outlined">
                <div className="item">
                  <img src={logistic} alt="Logistic" />
                  <div className="overlay">
                    <div className="content">
                      <h3>Logistic</h3>
                      <br />
                      <Link href="#" target="_blank" rel="noreferrer">
                        Visist Website
                      </Link>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="contact" id="contact">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>Contact me</h2>
              <p>
                if you have a project and want to work with me or want to give
                me a software development job, please contact me below, thank
                you!
              </p>
            </Grid>
            <Grid item xs={12}>
              <form noValidate autoComplete="off" className="form">
                <TextField
                  className="form-contact"
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  placeholder="John Doe"
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <form noValidate autoComplete="off" className="form">
                <TextField
                  className="form-contact"
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  placeholder="john@gmail.com"
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <form noValidate autoComplete="off" className="form">
                <TextField
                  className="form-contact"
                  id="outlined-textarea"
                  label="Message"
                  placeholder="Enter your message here"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <div className="center">
                <Button className="btnMessage" variant="contained">
                  Send Message
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <WhatsAppIcon className="iconrg" /> +62 896 3982 3858, &nbsp;
                <MailOutlineIcon className="iconrg" />
                ahmadfauzi2526@gmail.com
              </Typography>
              <Typography>
                Jalan SMA 63, Pesanggrahan, Petukangan Utara
              </Typography>
              <Typography>Jakarta Selatan, Indonesia</Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
