/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _assets_screenshots_etchasketch_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/screenshots/etchasketch.png */ "./src/assets/screenshots/etchasketch.png");
/* harmony import */ var _assets_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/screenshots/calculator.png */ "./src/assets/screenshots/calculator.png");
/* harmony import */ var _assets_screenshots_repme_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/screenshots/repme.png */ "./src/assets/screenshots/repme.png");
/* harmony import */ var _assets_screenshots_tictactoe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/screenshots/tictactoe.png */ "./src/assets/screenshots/tictactoe.png");
/* harmony import */ var _assets_screenshots_thingstodo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/screenshots/thingstodo.png */ "./src/assets/screenshots/thingstodo.png");
/* harmony import */ var _assets_screenshots_myobservatory_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/screenshots/myobservatory.png */ "./src/assets/screenshots/myobservatory.png");
/* harmony import */ var _assets_screenshots_battleship_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/screenshots/battleship.png */ "./src/assets/screenshots/battleship.png");








const Interface = (() => {
  function init() {
    const storage = setStorage();
    displayProjects(storage);
    toggleTheme();
    scrollNavLinkActive();
  }
  function setStorage() {
    // Manual storage selection
    const storage = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]();
    storage.addProject(_assets_screenshots_etchasketch_png__WEBPACK_IMPORTED_MODULE_1__, "Etch-A-Sketch", "A simple sketchbook app supporting dynamic grid-sizes. This was one of my first projects implementing JS on a webpage.", ["HTML", "CSS", "JS"], {
      repo: "https://github.com/HarryAhnHS/etch-a-sketch",
      live: "https://harryahnhs.github.io/etch-a-sketch/"
    });
    storage.addProject(_assets_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_2__, "Calculator", "A recreation of Apple IOS calculator app with keyboard support.", ["HTML", "CSS", "JS"], {
      repo: "https://github.com/HarryAhnHS/calculator",
      live: "https://harryahnhs.github.io/calculator/"
    });
    storage.addProject(_assets_screenshots_repme_png__WEBPACK_IMPORTED_MODULE_3__, "RepMe", "A dashboard front-end only design for a workout social platform. Utilized randomized dummy content to simulate back-end.", ["HTML", "CSS"], {
      repo: "https://github.com/HarryAhnHS/repme-dashboard",
      live: "https://harryahnhs.github.io/repme-dashboard/"
    });
    storage.addProject(_assets_screenshots_tictactoe_png__WEBPACK_IMPORTED_MODULE_4__, "TicTacToe", "Interactive Tic-Tac-Toe game supporting PvP and PvC with ranging difficulty. Implemented minimax algorithm for computer decision-making.", ["HTML", "CSS", "JS"], {
      repo: "https://github.com/HarryAhnHS/tictactoe",
      live: "https://harryahnhs.github.io/tictactoe/"
    });
    storage.addProject(_assets_screenshots_thingstodo_png__WEBPACK_IMPORTED_MODULE_5__, "ThingsToDo", "Todo list with fully customizable projects & todos. Automatically save content using localStorage API.", ["HTML", "CSS", "JS", "npm"], {
      repo: "https://github.com/HarryAhnHS/thingsToDo",
      live: "https://harryahnhs.github.io/thingsToDo/"
    });
    storage.addProject(_assets_screenshots_myobservatory_png__WEBPACK_IMPORTED_MODULE_6__, "My Observatory", "Simple weather app to query any location for real time data using WeatherAPI.", ["HTML", "CSS", "JS", "npm"], {
      repo: "https://github.com/HarryAhnHS/my-observatory",
      live: "https://harryahnhs.github.io/my-observatory/"
    });
    storage.addProject(_assets_screenshots_battleship_png__WEBPACK_IMPORTED_MODULE_7__, "Battleship", "PvC battleship game. Interactively drag, drop, and rotate ships, and battle an intelligent agent making computer decisions.", ["HTML", "CSS", "JS", "npm"], {
      repo: "https://github.com/HarryAhnHS/battleship",
      live: "https://harryahnhs.github.io/battleship/"
    });
    return storage.projectList;
  }
  function displayProjects(projectList) {
    const projectsWrapper = document.querySelector(".projects-wrapper");
    for (const project of projectList) {
      const projectCard = document.createElement('div');
      projectCard.classList.add("project");
      const projectMain = document.createElement('div');
      projectMain.classList.add("project-main");
      const projectAside = document.createElement('div');
      projectAside.classList.add("project-aside");
      const img = document.createElement('div');
      img.classList.add("project-img");
      img.style['background-image'] = `url(${project.screenshot})`;
      projectAside.appendChild(img);
      const projectRight = document.createElement('div');
      projectRight.classList.add("project-right");
      const projectText = document.createElement('div');
      projectText.classList.add("project-text");
      // Icon to demonstrate live  
      const live = document.createElement('div');
      live.classList.add("live-icon");
      const name = document.createElement('div');
      name.classList.add("project-name");
      name.textContent = project.name;
      const desc = document.createElement('p');
      desc.classList.add("project-desc");
      desc.textContent = project.desc;
      projectText.appendChild(live);
      projectText.appendChild(name);
      projectText.appendChild(desc);
      const projectFoot = document.createElement('div');
      projectFoot.classList.add("project-foot");
      const tools = document.createElement('div');
      tools.classList.add('project-tools');
      project.tools.forEach(tool => {
        const icon = document.createElement('div');
        icon.classList.add("tool");
        icon.classList.add(tool.toString().toUpperCase());
        tools.appendChild(icon);
      });
      const repo = document.createElement('div');
      repo.classList.add("project-repo");
      const hyperlink = document.createElement('a');
      hyperlink.setAttribute('href', `${project.links.repo}`);
      hyperlink.setAttribute('target', `_blank`);
      const repoIcon = document.createElement('div');
      repoIcon.classList.add('repo-icon');
      hyperlink.appendChild(repoIcon);
      repo.appendChild(hyperlink);
      projectFoot.appendChild(tools);
      projectFoot.appendChild(repo);
      projectRight.appendChild(projectText);
      projectRight.appendChild(projectFoot);
      projectMain.appendChild(projectAside);
      projectMain.appendChild(projectRight);
      projectCard.appendChild(projectMain);
      projectCard.onclick = e => {
        e.preventDefault();
        window.open(project.links.live, '_blank').focus();
      };
      projectsWrapper.appendChild(projectCard);
    }
  }
  function scrollNavLinkActive() {
    window.onscroll = () => {
      var current = "";
      const sections = document.querySelectorAll("section");

      // Get each section offsetTop property, compare with scroll Y
      // If scrollY is within section, then add it as a class to nav element
      // Need to subtract arbitrary value - 
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
      const navLinks = document.querySelectorAll("nav > a");
      navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
    };
  }
  function toggleTheme() {
    const btn = document.querySelector(".toggle");
    btn.onclick = e => {
      document.body.classList.toggle("dark");
    };
  }
  return {
    init
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(screenshot, name, desc, tools, links) {
    this.screenshot = screenshot;
    this.name = name;
    this.desc = desc;
    this.tools = tools;
    this.links = links;
  }
}
class ProjectList {
  constructor() {
    this.projectList = [];
  }
  getProject(name) {
    return this.projectList.find(project => {
      project.name == name;
    });
  }
  addProject(screenshot, name, desc, tools, links) {
    const newProj = new Project(screenshot, name, desc, tools, links);
    this.projectList.unshift(newProj);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/socials/github.svg */ "./src/assets/icons/socials/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/socials/linkedin.svg */ "./src/assets/icons/socials/linkedin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/socials/email.svg */ "./src/assets/icons/socials/email.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/local/sun.svg */ "./src/assets/icons/local/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/local/moon.svg */ "./src/assets/icons/local/moon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/local/arrow.svg */ "./src/assets/icons/local/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/html.svg */ "./src/assets/icons/tools/html.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/css.svg */ "./src/assets/icons/tools/css.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/js.svg */ "./src/assets/icons/tools/js.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/react.svg */ "./src/assets/icons/tools/react.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/nodejs.svg */ "./src/assets/icons/tools/nodejs.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/npm.svg */ "./src/assets/icons/tools/npm.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gruppo&family=Mukta:wght@200;300;400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Font */

html {
    scroll-behavior: smooth ;
}

img {
    max-width: 100%;
}

body {
    background-color: var(--main-background-color);

    /* Custom properties for theme */
    --header-color: #f5f3f4;
    --header-text-color: black;
    --header-subtext-color: rgb(93, 93, 93);

    --main-background-color: #f5f3f4;
    --main-text-color: black;
    --main-subtext-color: rgb(93, 93, 93);

    --card-background-color: #fbf9fa;

    --accent-color: #ff715b;

    font-family: 'Mukta', sans-serif;
    font-weight: 300;

    margin: 0px;

    display: flex;
    justify-content: flex-end;
}

body.dark {
    /* Custom properties for theme */
    --header-color: #0d1b2a;
    --header-text-color: #f0f1ee;
    --header-subtext-color: #d4d5d3;

    --main-background-color: #0d1b2a;
    --main-text-color: white;
    --main-subtext-color: #d4d5d3;

    --card-background-color: #1b263b;

    --accent-color: #ff715b;
}

/* Header content */

header {
    height: 100vh;
    width: 40%;
    background-color: var(--header-color);
    color: var(--header-text-color);
    
    position: fixed;
    top:0;
    left: 0;

    padding-left: 50px;
    padding-right: 50px;
    padding-top: 130px;
    padding-bottom: 130px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
}

header > h1 {
    font-size: 48px;
    font-weight: 600;
    margin: 0px;
    margin-left: -5px;

    padding-bottom: 15px;
}

header > h4 {
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
}

header > p {
    font-weight: 200;
    margin: 0px;

    color: var(--header-subtext-color);
}

/* Navbar */

nav {
    display: flex;
    flex-direction: column;

    justify-content: center;

    flex: 1;
}

nav > a {
    text-decoration: none;
    color: (--header-text-color);

    display: flex;
    align-items: center;

    width: 150px;

    margin: 5px;
}

nav > a:visited {
    color: inherit;
}

/* Nav active states */
nav > a.active > .nav-indicator {
    width: 50px;
    border-color: var(--accent-color);
}

nav > a.active {
    color: var(--accent-color);
}

/* Nav hover */
nav > a:hover > .nav-indicator,
nav > a:focus > .nav-indicator {
    width: 50px;
    border-color: var(--accent-color);
}

nav > a:hover,
nav > a:focus {
    color: var(--accent-color);
}

.nav-indicator {
    margin-left: 10px;
    margin-right: 10px;

    height: 0px;
    width: 30px;

    border-top: 1px solid var(--header-text-color);

    transition: width 0.5s;

    pointer-events: none;
}

nav > a > p {
    text-transform: uppercase;
    margin: 0px;

    text-transform: uppercase;

    font-size: 18px;
    font-weight: 600;
    
    pointer-events: none;
}

/* Links styling */

ul {
    list-style-type: none;
    display: flex;

    justify-content: center;

    padding: 0px;
    margin-bottom: 50px;;
}

li > a {
    text-decoration: none;
    color: inherit;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 5px;
    padding-right: 5px;
}

.socials-icon {
    background-color: var(--header-subtext-color);
    background-position: center center;
    mask-repeat: no-repeat;

    width: 28px;
    height: 28px;

    margin: 5px;

    display: inline-block;
}

.socials-icon.github {
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.socials-icon.linkedin {
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.socials-icon.email {
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});

    width: 32px;
    height: 32px;
    margin: 3px;
}

li > a:hover > .socials-icon,
li > a:focus > .socials-icon {
    background-color: var(--header-text-color);
}

/* Main content */

main {
    background-color: var(--main-background-color);
    color: var(--main-text-color);

    width: 60%;

    box-sizing: border-box;

    padding-left: 50px;
    padding-right: 50px;

    padding-bottom: 50px;
}

/* Page 1 - About section */

#about {
    padding-top: 25px;
    padding-bottom: 50px;
}

/* Theme toggle */
.toggle-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

/* Default theme */
.toggle {
    background-color: var(--main-subtext-color);
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    mask-repeat: no-repeat;

    display: inline-block;
    width: 30px;
    height: 30px;

    cursor: pointer;

    transition: background-color 0.15s;
}

.toggle:hover,
.toggle:focus {
    background-color: var(--main-text-color);
}

/* Dark mode */
body.dark > main > #about > .toggle-wrapper > .toggle{
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.about-content {
    padding-top: 50px;
}

.about-content > h1 {
    font-size: 84px;
    font-weight: 100;

    margin: 0px;
}

.about-content > p {
    font-size: 20px;
    color: var(--main-subtext-color);
}

/* Page 2 - Projects  */

.project-content {
    padding-top: 50px;
}

.project-content > h1 {
    font-size: 32px;
    font-weight: 100;

    margin: 0px;
}

/* Project Cards */
.project {
    background-color: var(--card-background-color);

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    border-radius: 5px;

    margin-top: 25px;

    cursor: pointer;

    transition: transform 0.3s;
}

.project-main {
    display: flex;
}

.project-aside {
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.project-right {
    flex: 1;

    padding: 15px;
}

.project-img {
    /* Temp */
    width: 100px;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    border-radius: 5px;
}

.project-text{
    position: relative;

    display: flex;
    flex-direction: column;
}

.project-name  {
    display: flex;
    align-items: center;

    font-size: 32px;

    margin: 0px;
}

.project-desc {
    font-size: 16px;
    color: var(--main-subtext-color);
    margin: 0px;
}

.project-foot {
    display: flex;

    padding-top: 15px;
}

/* Github repo + live icon */

.project-repo {
    transition: all 0.3s;
}

.project-repo > a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 15px;
}

.repo-icon {
    width: 22px;
    height: 22px;

    background-color: var(--main-subtext-color);
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    mask-repeat: no-repeat;

    display: inline-block;

    transition: all 0.3s;
}

.live-icon {
    width: 20px;
    height: 20px;

    position: absolute;
    top: 25px;
    right: 25px;

    background-color: transparent;
    -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    mask-repeat: no-repeat;

    display: inline-block;

    transition: all 0.15s;
}

/* Tool Icon Styling */
.project-tools {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-content: center;

    gap: 15px;
}

.tool {
    width: 20px;
    height: 20px;

    background-position: center center;
    background-size: contain;
}

.HTML {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.CSS {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

.JS {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}

.REACT {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}

.NODEJS {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
}

.NPM {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
}

/* Project hover */
.project:hover, .project:focus {
    transform: scale(1.03);
}

.project:hover > .project-main > .project-right > .project-text > .live-icon {
    top: 15px;
    right: 15px;

    background-color: var(--accent-color);
}

.repo-icon:hover {
    background-color: var(--accent-color);
    transform: rotate(360deg);
}

.project:hover > .project-main > .project-right > .project-text > .project-name {
    color: var(--accent-color);
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Mukta:wght@200;300;400;500;600;700;800&display=swap');\n\nhtml {\n    scroll-behavior: smooth ;\n}\n\nimg {\n    max-width: 100%;\n}\n\nbody {\n    background-color: var(--main-background-color);\n\n    /* Custom properties for theme */\n    --header-color: #f5f3f4;\n    --header-text-color: black;\n    --header-subtext-color: rgb(93, 93, 93);\n\n    --main-background-color: #f5f3f4;\n    --main-text-color: black;\n    --main-subtext-color: rgb(93, 93, 93);\n\n    --card-background-color: #fbf9fa;\n\n    --accent-color: #ff715b;\n\n    font-family: 'Mukta', sans-serif;\n    font-weight: 300;\n\n    margin: 0px;\n\n    display: flex;\n    justify-content: flex-end;\n}\n\nbody.dark {\n    /* Custom properties for theme */\n    --header-color: #0d1b2a;\n    --header-text-color: #f0f1ee;\n    --header-subtext-color: #d4d5d3;\n\n    --main-background-color: #0d1b2a;\n    --main-text-color: white;\n    --main-subtext-color: #d4d5d3;\n\n    --card-background-color: #1b263b;\n\n    --accent-color: #ff715b;\n}\n\n/* Header content */\n\nheader {\n    height: 100vh;\n    width: 40%;\n    background-color: var(--header-color);\n    color: var(--header-text-color);\n    \n    position: fixed;\n    top:0;\n    left: 0;\n\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 130px;\n    padding-bottom: 130px;\n\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader > h1 {\n    font-size: 48px;\n    font-weight: 600;\n    margin: 0px;\n    margin-left: -5px;\n\n    padding-bottom: 15px;\n}\n\nheader > h4 {\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0px;\n}\n\nheader > p {\n    font-weight: 200;\n    margin: 0px;\n\n    color: var(--header-subtext-color);\n}\n\n/* Navbar */\n\nnav {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n\n    flex: 1;\n}\n\nnav > a {\n    text-decoration: none;\n    color: (--header-text-color);\n\n    display: flex;\n    align-items: center;\n\n    width: 150px;\n\n    margin: 5px;\n}\n\nnav > a:visited {\n    color: inherit;\n}\n\n/* Nav active states */\nnav > a.active > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a.active {\n    color: var(--accent-color);\n}\n\n/* Nav hover */\nnav > a:hover > .nav-indicator,\nnav > a:focus > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a:hover,\nnav > a:focus {\n    color: var(--accent-color);\n}\n\n.nav-indicator {\n    margin-left: 10px;\n    margin-right: 10px;\n\n    height: 0px;\n    width: 30px;\n\n    border-top: 1px solid var(--header-text-color);\n\n    transition: width 0.5s;\n\n    pointer-events: none;\n}\n\nnav > a > p {\n    text-transform: uppercase;\n    margin: 0px;\n\n    text-transform: uppercase;\n\n    font-size: 18px;\n    font-weight: 600;\n    \n    pointer-events: none;\n}\n\n/* Links styling */\n\nul {\n    list-style-type: none;\n    display: flex;\n\n    justify-content: center;\n\n    padding: 0px;\n    margin-bottom: 50px;;\n}\n\nli > a {\n    text-decoration: none;\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.socials-icon {\n    background-color: var(--header-subtext-color);\n    background-position: center center;\n    mask-repeat: no-repeat;\n\n    width: 28px;\n    height: 28px;\n\n    margin: 5px;\n\n    display: inline-block;\n}\n\n.socials-icon.github {\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n}\n\n.socials-icon.linkedin {\n    -webkit-mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n    mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n}\n\n.socials-icon.email {\n    -webkit-mask-image: url(\"../assets/icons/socials/email.svg\");\n    mask-image: url(\"../assets/icons/socials/email.svg\");\n\n    width: 32px;\n    height: 32px;\n    margin: 3px;\n}\n\nli > a:hover > .socials-icon,\nli > a:focus > .socials-icon {\n    background-color: var(--header-text-color);\n}\n\n/* Main content */\n\nmain {\n    background-color: var(--main-background-color);\n    color: var(--main-text-color);\n\n    width: 60%;\n\n    box-sizing: border-box;\n\n    padding-left: 50px;\n    padding-right: 50px;\n\n    padding-bottom: 50px;\n}\n\n/* Page 1 - About section */\n\n#about {\n    padding-top: 25px;\n    padding-bottom: 50px;\n}\n\n/* Theme toggle */\n.toggle-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n/* Default theme */\n.toggle {\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n\n    cursor: pointer;\n\n    transition: background-color 0.15s;\n}\n\n.toggle:hover,\n.toggle:focus {\n    background-color: var(--main-text-color);\n}\n\n/* Dark mode */\nbody.dark > main > #about > .toggle-wrapper > .toggle{\n    -webkit-mask-image: url(\"../assets/icons/local/moon.svg\");\n    mask-image: url(\"../assets/icons/local/moon.svg\");\n}\n\n.about-content {\n    padding-top: 50px;\n}\n\n.about-content > h1 {\n    font-size: 84px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n.about-content > p {\n    font-size: 20px;\n    color: var(--main-subtext-color);\n}\n\n/* Page 2 - Projects  */\n\n.project-content {\n    padding-top: 50px;\n}\n\n.project-content > h1 {\n    font-size: 32px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n/* Project Cards */\n.project {\n    background-color: var(--card-background-color);\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    border-radius: 5px;\n\n    margin-top: 25px;\n\n    cursor: pointer;\n\n    transition: transform 0.3s;\n}\n\n.project-main {\n    display: flex;\n}\n\n.project-aside {\n    padding: 15px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-right {\n    flex: 1;\n\n    padding: 15px;\n}\n\n.project-img {\n    /* Temp */\n    width: 100px;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n\n    border-radius: 5px;\n}\n\n.project-text{\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.project-name  {\n    display: flex;\n    align-items: center;\n\n    font-size: 32px;\n\n    margin: 0px;\n}\n\n.project-desc {\n    font-size: 16px;\n    color: var(--main-subtext-color);\n    margin: 0px;\n}\n\n.project-foot {\n    display: flex;\n\n    padding-top: 15px;\n}\n\n/* Github repo + live icon */\n\n.project-repo {\n    transition: all 0.3s;\n}\n\n.project-repo > a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-right: 15px;\n}\n\n.repo-icon {\n    width: 22px;\n    height: 22px;\n\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.3s;\n}\n\n.live-icon {\n    width: 20px;\n    height: 20px;\n\n    position: absolute;\n    top: 25px;\n    right: 25px;\n\n    background-color: transparent;\n    -webkit-mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.15s;\n}\n\n/* Tool Icon Styling */\n.project-tools {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-content: center;\n\n    gap: 15px;\n}\n\n.tool {\n    width: 20px;\n    height: 20px;\n\n    background-position: center center;\n    background-size: contain;\n}\n\n.HTML {\n    background-image: url(\"../assets/icons/tools/html.svg\");\n}\n\n.CSS {\n    background-image: url(\"../assets/icons/tools/css.svg\");\n}\n\n.JS {\n    background-image: url(\"../assets/icons/tools/js.svg\");\n}\n\n.REACT {\n    background-image: url(\"../assets/icons/tools/react.svg\");\n}\n\n.NODEJS {\n    background-image: url(\"../assets/icons/tools/nodejs.svg\");\n}\n\n.NPM {\n    background-image: url(\"../assets/icons/tools/npm.svg\");\n}\n\n/* Project hover */\n.project:hover, .project:focus {\n    transform: scale(1.03);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .live-icon {\n    top: 15px;\n    right: 15px;\n\n    background-color: var(--accent-color);\n}\n\n.repo-icon:hover {\n    background-color: var(--accent-color);\n    transform: rotate(360deg);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .project-name {\n    color: var(--accent-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons/local/arrow.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/local/arrow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50aa593ed5b74c2c3894.svg";

/***/ }),

/***/ "./src/assets/icons/local/moon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/local/moon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2afd3e7710652f944bcf.svg";

/***/ }),

/***/ "./src/assets/icons/local/sun.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/local/sun.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d8e77d0f79f95ade8c.svg";

/***/ }),

/***/ "./src/assets/icons/socials/email.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/socials/email.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

/***/ }),

/***/ "./src/assets/icons/socials/github.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/socials/github.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c903c66b2c5334c8c0b.svg";

/***/ }),

/***/ "./src/assets/icons/socials/linkedin.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/socials/linkedin.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4e41ebf9944039eda77.svg";

/***/ }),

/***/ "./src/assets/icons/tools/css.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/tools/css.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f50b33af1d2115e9ee7.svg";

/***/ }),

/***/ "./src/assets/icons/tools/html.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/tools/html.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69274ea277b1ee86ba50.svg";

/***/ }),

/***/ "./src/assets/icons/tools/js.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/tools/js.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bacc3387f463f5b56f43.svg";

/***/ }),

/***/ "./src/assets/icons/tools/nodejs.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/nodejs.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "246a2977ff091000c624.svg";

/***/ }),

/***/ "./src/assets/icons/tools/npm.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/tools/npm.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87689eab730642c86d2b.svg";

/***/ }),

/***/ "./src/assets/icons/tools/react.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/tools/react.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0c97009b885bfa75c5.svg";

/***/ }),

/***/ "./src/assets/screenshots/battleship.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/battleship.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a03b9995e3ac8c734ed.png";

/***/ }),

/***/ "./src/assets/screenshots/calculator.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/calculator.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85f7d14351befb1b3a62.png";

/***/ }),

/***/ "./src/assets/screenshots/etchasketch.png":
/*!************************************************!*\
  !*** ./src/assets/screenshots/etchasketch.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbf301fa240d23525470.png";

/***/ }),

/***/ "./src/assets/screenshots/myobservatory.png":
/*!**************************************************!*\
  !*** ./src/assets/screenshots/myobservatory.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "069215b40feaff323cf3.png";

/***/ }),

/***/ "./src/assets/screenshots/repme.png":
/*!******************************************!*\
  !*** ./src/assets/screenshots/repme.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c18cd1de281a178901e6.png";

/***/ }),

/***/ "./src/assets/screenshots/thingstodo.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/thingstodo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc97e979b964bde1958d.png";

/***/ }),

/***/ "./src/assets/screenshots/tictactoe.png":
/*!**********************************************!*\
  !*** ./src/assets/screenshots/tictactoe.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be100107c2d65ca4d809.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ "./src/modules/interface.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");




// document.getElementById("github").src = Git; // Fill github logo

_modules_interface__WEBPACK_IMPORTED_MODULE_1__["default"].init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxhQUFhLGNBQWMsY0FBYyxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSx5SEFBeUgsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJ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QTJCO0FBQ2lCO0FBQ0E7O0FBRTVDOztBQUVBUSwwREFBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JsYW5rLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmltcG9ydCBFdGNoQVNrZXRjaCBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL2V0Y2hhc2tldGNoLnBuZ1wiO1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFJlcE1lIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvcmVwbWUucG5nXCI7XG5pbXBvcnQgVGljVGFjVG9lIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGljdGFjdG9lLnBuZ1wiO1xuaW1wb3J0IFRoaW5nc1RvRG8gZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy90aGluZ3N0b2RvLnBuZ1wiO1xuaW1wb3J0IE15T2JzZXJ2YXRvcnkgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9teW9ic2VydmF0b3J5LnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5cbmNvbnN0IEludGVyZmFjZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHNldFN0b3JhZ2UoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHN0b3JhZ2UpO1xuICAgICAgICB0b2dnbGVUaGVtZSgpO1xuICAgICAgICBzY3JvbGxOYXZMaW5rQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcbiAgICAgICAgLy8gTWFudWFsIHN0b3JhZ2Ugc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgUHJvamVjdExpc3QoKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoRXRjaEFTa2V0Y2gsXCJFdGNoLUEtU2tldGNoXCIsIFxuICAgICAgICAgICAgXCJBIHNpbXBsZSBza2V0Y2hib29rIGFwcCBzdXBwb3J0aW5nIGR5bmFtaWMgZ3JpZC1zaXplcy4gVGhpcyB3YXMgb25lIG9mIG15IGZpcnN0IHByb2plY3RzIGltcGxlbWVudGluZyBKUyBvbiBhIHdlYnBhZ2UuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvZXRjaC1hLXNrZXRjaFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9ldGNoLWEtc2tldGNoL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChDYWxjdWxhdG9yLFwiQ2FsY3VsYXRvclwiLCBcbiAgICAgICAgICAgIFwiQSByZWNyZWF0aW9uIG9mIEFwcGxlIElPUyBjYWxjdWxhdG9yIGFwcCB3aXRoIGtleWJvYXJkIHN1cHBvcnQuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvY2FsY3VsYXRvclwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9jYWxjdWxhdG9yL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChSZXBNZSwgXCJSZXBNZVwiLCBcbiAgICAgICAgICAgIFwiQSBkYXNoYm9hcmQgZnJvbnQtZW5kIG9ubHkgZGVzaWduIGZvciBhIHdvcmtvdXQgc29jaWFsIHBsYXRmb3JtLiBVdGlsaXplZCByYW5kb21pemVkIGR1bW15IGNvbnRlbnQgdG8gc2ltdWxhdGUgYmFjay1lbmQuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3JlcG1lLWRhc2hib2FyZFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9yZXBtZS1kYXNoYm9hcmQvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFRpY1RhY1RvZSwgXCJUaWNUYWNUb2VcIiwgXG4gICAgICAgICAgICBcIkludGVyYWN0aXZlIFRpYy1UYWMtVG9lIGdhbWUgc3VwcG9ydGluZyBQdlAgYW5kIFB2QyB3aXRoIHJhbmdpbmcgZGlmZmljdWx0eS4gSW1wbGVtZW50ZWQgbWluaW1heCBhbGdvcml0aG0gZm9yIGNvbXB1dGVyIGRlY2lzaW9uLW1ha2luZy5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy90aWN0YWN0b2VcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vdGljdGFjdG9lL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChUaGluZ3NUb0RvLCBcIlRoaW5nc1RvRG9cIiwgXG4gICAgICAgICAgICBcIlRvZG8gbGlzdCB3aXRoIGZ1bGx5IGN1c3RvbWl6YWJsZSBwcm9qZWN0cyAmIHRvZG9zLiBBdXRvbWF0aWNhbGx5IHNhdmUgY29udGVudCB1c2luZyBsb2NhbFN0b3JhZ2UgQVBJLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3RoaW5nc1RvRG9cIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vdGhpbmdzVG9Eby9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoTXlPYnNlcnZhdG9yeSwgXCJNeSBPYnNlcnZhdG9yeVwiLCBcbiAgICAgICAgICAgIFwiU2ltcGxlIHdlYXRoZXIgYXBwIHRvIHF1ZXJ5IGFueSBsb2NhdGlvbiBmb3IgcmVhbCB0aW1lIGRhdGEgdXNpbmcgV2VhdGhlckFQSS5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiLCBcIm5wbVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9teS1vYnNlcnZhdG9yeVwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9teS1vYnNlcnZhdG9yeS9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoQmF0dGxlc2hpcCwgXCJCYXR0bGVzaGlwXCIsIFxuICAgICAgICAgICAgXCJQdkMgYmF0dGxlc2hpcCBnYW1lLiBJbnRlcmFjdGl2ZWx5IGRyYWcsIGRyb3AsIGFuZCByb3RhdGUgc2hpcHMsIGFuZCBiYXR0bGUgYW4gaW50ZWxsaWdlbnQgYWdlbnQgbWFraW5nIGNvbXB1dGVyIGRlY2lzaW9ucy5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiLCBcIm5wbVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9iYXR0bGVzaGlwXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2JhdHRsZXNoaXAvXCJ9XG4gICAgICAgICk7ICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnByb2plY3RMaXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0TGlzdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXdyYXBwZXJcIilcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNYWluLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW1haW5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBc2lkZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hc2lkZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdXJsKCR7cHJvamVjdC5zY3JlZW5zaG90fSlgO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFzaWRlLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RSaWdodC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yaWdodFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWNvbiB0byBkZW1vbnN0cmF0ZSBsaXZlICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGl2ZS5jbGFzc0xpc3QuYWRkKFwibGl2ZS1pY29uXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQobGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvb3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9vdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9vbHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b29scy5mb3JFYWNoKCh0b29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKHRvb2wudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZXBvXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHlwZXJsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cGVybGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtwcm9qZWN0LmxpbmtzLnJlcG99YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgYF9ibGFua2ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9JY29uLmNsYXNzTGlzdC5hZGQoJ3JlcG8taWNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLmFwcGVuZENoaWxkKHJlcG9JY29uKTsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5hcHBlbmRDaGlsZChoeXBlcmxpbmspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZCh0b29scyk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZChyZXBvKTsgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RGb290KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RNYWluLmFwcGVuZENoaWxkKHByb2plY3RBc2lkZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFJpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RNYWluKTtcblxuICAgICAgICAgICAgcHJvamVjdENhcmQub25jbGljayA9IChlKSA9PntcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocHJvamVjdC5saW5rcy5saXZlLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsTmF2TGlua0FjdGl2ZSgpIHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgZWFjaCBzZWN0aW9uIG9mZnNldFRvcCBwcm9wZXJ0eSwgY29tcGFyZSB3aXRoIHNjcm9sbCBZXG4gICAgICAgICAgICAvLyBJZiBzY3JvbGxZIGlzIHdpdGhpbiBzZWN0aW9uLCB0aGVuIGFkZCBpdCBhcyBhIGNsYXNzIHRvIG5hdiBlbGVtZW50XG4gICAgICAgICAgICAvLyBOZWVkIHRvIHN1YnRyYWN0IGFyYml0cmFyeSB2YWx1ZSAtIFxuICAgICAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBzZWN0aW9uVG9wIC0gNjApIHsgXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIik7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2ID4gYVwiKTtcbiAgICAgICAgICAgIG5hdkxpbmtzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICBpZiAoYS5jbGFzc0xpc3QuY29udGFpbnMoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xuICAgICAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90ID0gc2NyZWVuc2hvdDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy50b29scyA9IHRvb2xzO1xuICAgICAgICB0aGlzLmxpbmtzID0gbGlua3M7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID09IG5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qZWN0KHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcyk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QudW5zaGlmdChuZXdQcm9qKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvbW9vbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2h0bWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2Nzcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvanMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbm9kZWpzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbnBtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3J1cHBvJmZhbWlseT1NdWt0YTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGb250ICovXG5cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoIDtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cbiAgICAtLWhlYWRlci1jb2xvcjogI2Y1ZjNmNDtcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XG5cbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcblxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOWZhO1xuXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XG5cbiAgICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmJvZHkuZGFyayB7XG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXG4gICAgLS1oZWFkZXItY29sb3I6ICMwZDFiMmE7XG4gICAgLS1oZWFkZXItdGV4dC1jb2xvcjogI2YwZjFlZTtcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xuXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICMwZDFiMmE7XG4gICAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xuXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICMxYjI2M2I7XG5cbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1Yjtcbn1cblxuLyogSGVhZGVyIGNvbnRlbnQgKi9cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xuICAgIFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciA+IGgxIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5oZWFkZXIgPiBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmhlYWRlciA+IHAge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xufVxuXG4vKiBOYXZiYXIgKi9cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZsZXg6IDE7XG59XG5cbm5hdiA+IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogKC0taGVhZGVyLXRleHQtY29sb3IpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbm5hdiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIE5hdiBhY3RpdmUgc3RhdGVzICovXG5uYXYgPiBhLmFjdGl2ZSA+IC5uYXYtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdiA+IGEuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTmF2IGhvdmVyICovXG5uYXYgPiBhOmhvdmVyID4gLm5hdi1pbmRpY2F0b3IsXG5uYXYgPiBhOmZvY3VzID4gLm5hdi1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxubmF2ID4gYTpob3Zlcixcbm5hdiA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubmF2LWluZGljYXRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG5cbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xuXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcblxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5uYXYgPiBhID4gcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTGlua3Mgc3R5bGluZyAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4Oztcbn1cblxubGkgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5zb2NpYWxzLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG5cbiAgICBtYXJnaW46IDVweDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvY2lhbHMtaWNvbi5naXRodWIge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnNvY2lhbHMtaWNvbi5saW5rZWRpbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uc29jaWFscy1pY29uLmVtYWlsIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbmxpID4gYTpob3ZlciA+IC5zb2NpYWxzLWljb24sXG5saSA+IGE6Zm9jdXMgPiAuc29jaWFscy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG59XG5cbi8qIE1haW4gY29udGVudCAqL1xuXG5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xuXG4gICAgd2lkdGg6IDYwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4vKiBQYWdlIDEgLSBBYm91dCBzZWN0aW9uICovXG5cbiNhYm91dCB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi8qIFRoZW1lIHRvZ2dsZSAqL1xuLnRvZ2dsZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogRGVmYXVsdCB0aGVtZSAqL1xuLnRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xufVxuXG4udG9nZ2xlOmhvdmVyLFxuLnRvZ2dsZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbn1cblxuLyogRGFyayBtb2RlICovXG5ib2R5LmRhcmsgPiBtYWluID4gI2Fib3V0ID4gLnRvZ2dsZS13cmFwcGVyID4gLnRvZ2dsZXtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBoMSB7XG4gICAgZm9udC1zaXplOiA4NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG59XG5cbi8qIFBhZ2UgMiAtIFByb2plY3RzICAqL1xuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnByb2plY3QtY29udGVudCA+IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgIG1hcmdpbjogMHB4O1xufVxuXG4vKiBQcm9qZWN0IENhcmRzICovXG4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ucHJvamVjdC1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdC1hc2lkZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtcmlnaHQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJvamVjdC1pbWcge1xuICAgIC8qIFRlbXAgKi9cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRleHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1uYW1lICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzMnB4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9qZWN0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnByb2plY3QtZm9vdCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4vKiBHaXRodWIgcmVwbyArIGxpdmUgaWNvbiAqL1xuXG4ucHJvamVjdC1yZXBvIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnByb2plY3QtcmVwbyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJlcG8taWNvbiB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubGl2ZS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi8qIFRvb2wgSWNvbiBTdHlsaW5nICovXG4ucHJvamVjdC10b29scyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBnYXA6IDE1cHg7XG59XG5cbi50b29sIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLkhUTUwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cblxuLkNTUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xufVxuXG4uSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbn1cblxuLlJFQUNUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG59XG5cbi5OT0RFSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7XG59XG5cbi5OUE0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XG59XG5cbi8qIFByb2plY3QgaG92ZXIgKi9cbi5wcm9qZWN0OmhvdmVyLCAucHJvamVjdDpmb2N1cyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLmxpdmUtaWNvbiB7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnJlcG8taWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAucHJvamVjdC1uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUzs7QUFHVDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7O0lBRTlDLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHVDQUF1Qzs7SUFFdkMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQ0FBcUM7O0lBRXJDLGdDQUFnQzs7SUFFaEMsdUJBQXVCOztJQUV2QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCOztJQUVoQixXQUFXOztJQUVYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQkFBK0I7O0lBRS9CLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsNkJBQTZCOztJQUU3QixnQ0FBZ0M7O0lBRWhDLHVCQUF1QjtBQUMzQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsK0JBQStCOztJQUUvQixlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLG1CQUFt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LDJCQUEyQjtJQUMzQixxQkFBcUI7O0lBRXJCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSx5REFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx5REFBcUQ7QUFDekQ7O0FBRUE7SUFDSSx5REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSwwREFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSwwREFBc0Q7QUFDMUQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7O0lBRVgscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3J1cHBvJmZhbWlseT1NdWt0YTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGggO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cXG4gICAgLS1oZWFkZXItY29sb3I6ICNmNWYzZjQ7XFxuICAgIC0taGVhZGVyLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XFxuXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmM2Y0O1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XFxuXFxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOWZhO1xcblxcbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1YjtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5ib2R5LmRhcmsge1xcbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cXG4gICAgLS1oZWFkZXItY29sb3I6ICMwZDFiMmE7XFxuICAgIC0taGVhZGVyLXRleHQtY29sb3I6ICNmMGYxZWU7XFxuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XFxuXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGQxYjJhO1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xcblxcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogIzFiMjYzYjtcXG5cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XFxufVxcblxcbi8qIEhlYWRlciBjb250ZW50ICovXFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmhlYWRlciA+IHAge1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogTmF2YmFyICovXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZsZXg6IDE7XFxufVxcblxcbm5hdiA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxNTBweDtcXG5cXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbm5hdiA+IGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBOYXYgYWN0aXZlIHN0YXRlcyAqL1xcbm5hdiA+IGEuYWN0aXZlID4gLm5hdi1pbmRpY2F0b3Ige1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBOYXYgaG92ZXIgKi9cXG5uYXYgPiBhOmhvdmVyID4gLm5hdi1pbmRpY2F0b3IsXFxubmF2ID4gYTpmb2N1cyA+IC5uYXYtaW5kaWNhdG9yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2ID4gYTpob3ZlcixcXG5uYXYgPiBhOmZvY3VzIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5uYXYtaW5kaWNhdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG5cXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcblxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xcblxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xcblxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxubmF2ID4gYSA+IHAge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzIHN0eWxpbmcgKi9cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDs7XFxufVxcblxcbmxpID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uc29jaWFscy1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmdpdGh1YiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmxpbmtlZGluIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2xpbmtlZGluLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2xpbmtlZGluLnN2Z1xcXCIpO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmVtYWlsIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2VtYWlsLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2VtYWlsLnN2Z1xcXCIpO1xcblxcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxubGkgPiBhOmhvdmVyID4gLnNvY2lhbHMtaWNvbixcXG5saSA+IGE6Zm9jdXMgPiAuc29jaWFscy1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuXFxuICAgIHdpZHRoOiA2MCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFBhZ2UgMSAtIEFib3V0IHNlY3Rpb24gKi9cXG5cXG4jYWJvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFRoZW1lIHRvZ2dsZSAqL1xcbi50b2dnbGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIERlZmF1bHQgdGhlbWUgKi9cXG4udG9nZ2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9zdW4uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxufVxcblxcbi50b2dnbGU6aG92ZXIsXFxuLnRvZ2dsZTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxufVxcblxcbi8qIERhcmsgbW9kZSAqL1xcbmJvZHkuZGFyayA+IG1haW4gPiAjYWJvdXQgPiAudG9nZ2xlLXdyYXBwZXIgPiAudG9nZ2xle1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL21vb24uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL21vb24uc3ZnXFxcIik7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5hYm91dC1jb250ZW50ID4gaDEge1xcbiAgICBmb250LXNpemU6IDg0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCA+IHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBQYWdlIDIgLSBQcm9qZWN0cyAgKi9cXG5cXG4ucHJvamVjdC1jb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qIFByb2plY3QgQ2FyZHMgKi9cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1hc2lkZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWltZyB7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlc2Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnByb2plY3QtZm9vdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4vKiBHaXRodWIgcmVwbyArIGxpdmUgaWNvbiAqL1xcblxcbi5wcm9qZWN0LXJlcG8ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtcmVwbyA+IGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucmVwby1pY29uIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5saXZlLWljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjVweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL2Fycm93LnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi8qIFRvb2wgSWNvbiBTdHlsaW5nICovXFxuLnByb2plY3QtdG9vbHMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udG9vbCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLkhUTUwge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9odG1sLnN2Z1xcXCIpO1xcbn1cXG5cXG4uQ1NTIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvY3NzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uSlMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9qcy5zdmdcXFwiKTtcXG59XFxuXFxuLlJFQUNUIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Quc3ZnXFxcIik7XFxufVxcblxcbi5OT0RFSlMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ub2RlanMuc3ZnXFxcIik7XFxufVxcblxcbi5OUE0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ucG0uc3ZnXFxcIik7XFxufVxcblxcbi8qIFByb2plY3QgaG92ZXIgKi9cXG4ucHJvamVjdDpob3ZlciwgLnByb2plY3Q6Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAubGl2ZS1pY29uIHtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMTVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLnJlcG8taWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5wcm9qZWN0LW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL21vZHVsZXMvaW50ZXJmYWNlJztcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXRodWJcIikuc3JjID0gR2l0OyAvLyBGaWxsIGdpdGh1YiBsb2dvXG5cbkludGVyZmFjZS5pbml0KCk7Il0sIm5hbWVzIjpbIlByb2plY3RMaXN0IiwiRXRjaEFTa2V0Y2giLCJDYWxjdWxhdG9yIiwiUmVwTWUiLCJUaWNUYWNUb2UiLCJUaGluZ3NUb0RvIiwiTXlPYnNlcnZhdG9yeSIsIkJhdHRsZXNoaXAiLCJJbnRlcmZhY2UiLCJpbml0Iiwic3RvcmFnZSIsInNldFN0b3JhZ2UiLCJkaXNwbGF5UHJvamVjdHMiLCJ0b2dnbGVUaGVtZSIsInNjcm9sbE5hdkxpbmtBY3RpdmUiLCJhZGRQcm9qZWN0IiwicmVwbyIsImxpdmUiLCJwcm9qZWN0TGlzdCIsInByb2plY3RzV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3QiLCJwcm9qZWN0Q2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcm9qZWN0TWFpbiIsInByb2plY3RBc2lkZSIsImltZyIsInN0eWxlIiwic2NyZWVuc2hvdCIsImFwcGVuZENoaWxkIiwicHJvamVjdFJpZ2h0IiwicHJvamVjdFRleHQiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJkZXNjIiwicHJvamVjdEZvb3QiLCJ0b29scyIsImZvckVhY2giLCJ0b29sIiwiaWNvbiIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoeXBlcmxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rcyIsInJlcG9JY29uIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsIm9wZW4iLCJmb2N1cyIsIm9uc2Nyb2xsIiwiY3VycmVudCIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2Nyb2xsWSIsImdldEF0dHJpYnV0ZSIsIm5hdkxpbmtzIiwiYSIsInJlbW92ZSIsImNvbnRhaW5zIiwiYnRuIiwiYm9keSIsInRvZ2dsZSIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsImdldFByb2plY3QiLCJmaW5kIiwibmV3UHJvaiIsInVuc2hpZnQiXSwic291cmNlUm9vdCI6IiJ9