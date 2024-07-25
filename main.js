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
/* harmony import */ var _assets_screenshots_resumegenerator_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/screenshots/resumegenerator.png */ "./src/assets/screenshots/resumegenerator.png");









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
    storage.addProject(_assets_screenshots_resumegenerator_png__WEBPACK_IMPORTED_MODULE_8__, "Resume Generator", "A fully adaptive resume generator developed using ReactJS and Bootstrap. Customize fields, categories, and styling. Completely responsive sized output with all spacing and fonts automatically scaled with A4 aspect ratio", ["react", "reactbootstrap", "CSS", "npm"], {
      repo: "https://github.com/HarryAhnHS/cv-builder",
      live: "https://superb-duckanoo-a223b4.netlify.app/"
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
      // hyperlink.setAttribute('href', `${project.links.repo}`);
      hyperlink.setAttribute('target', `_blank`);
      hyperlink.onclick = e => {
        e.stopPropagation();
        window.open(project.links.repo, '_blank').focus();
      };
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
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/reactbootstrap.svg */ "./src/assets/icons/tools/reactbootstrap.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
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
    --header-color-2: #e5e5e5;
    --header-text-color: black;
    --header-subtext-color: rgb(127, 125, 125);

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
    --header-color-2: #081420;
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

    color: (--header-text-color);
}

nav > a {
    text-decoration: none;

    color: inherit;

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
    margin-bottom: 50px;
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
    background-color: var(--accent-color);
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

.toggle:hover {
    background-color: var(--accent-color);
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
    font-weight: 500;

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
    align-items: center;

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

.REACTBOOTSTRAP {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
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
}

/* Media queries */

@media only screen and (max-width: 820px) {
    body {
        justify-content: center;

        position: relative;
    }

    header {
        height: 100px;
        width: 100%;
        padding: 0;
        top: 0;

        background-color: var(--header-color-2);

        z-index: 1;
    }

    header > h1, header > h4, header > p {
        display: none;
    }

    nav {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }

    nav > a{
        height: 40px;
        margin: 0;
    }

    ul {
        margin: 0;
        margin-bottom: 5px;
    }

    .toggle-wrapper {
        position: fixed;
        z-index: 1;

        top: 60px;
        right: 25px;
    }

    main {
        width: 100%;

        position: absolute;
        top: 100px;

        padding-left: 30px;
        padding-right: 30px;
    }

    #projects {
        padding-top: 50px;
    }
}

@media only screen and (max-width: 500px) {
    .project-tools {
        gap: 5px;
    }

    .tool {
        width: 16px;
        height: 16px;
    }

    .project-name {
        font-size: 20px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Mukta:wght@200;300;400;500;600;700;800&display=swap');\n\nhtml {\n    scroll-behavior: smooth ;\n}\n\nimg {\n    max-width: 100%;\n}\n\nbody {\n    background-color: var(--main-background-color);\n\n    /* Custom properties for theme */\n    --header-color: #f5f3f4;\n    --header-color-2: #e5e5e5;\n    --header-text-color: black;\n    --header-subtext-color: rgb(127, 125, 125);\n\n    --main-background-color: #f5f3f4;\n    --main-text-color: black;\n    --main-subtext-color: rgb(93, 93, 93);\n\n    --card-background-color: #fbf9fa;\n\n    --accent-color: #ff715b;\n\n    font-family: 'Mukta', sans-serif;\n    font-weight: 300;\n\n    margin: 0px;\n\n    display: flex;\n    justify-content: flex-end;\n}\n\nbody.dark {\n    /* Custom properties for theme */\n    --header-color: #0d1b2a;\n    --header-color-2: #081420;\n    --header-text-color: #f0f1ee;\n    --header-subtext-color: #d4d5d3;\n\n    --main-background-color: #0d1b2a;\n    --main-text-color: white;\n    --main-subtext-color: #d4d5d3;\n\n    --card-background-color: #1b263b;\n\n    --accent-color: #ff715b;\n}\n\n/* Header content */\n\nheader {\n    height: 100vh;\n    width: 40%;\n    background-color: var(--header-color);\n    color: var(--header-text-color);\n    \n    position: fixed;\n    top:0;\n    left: 0;\n\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 130px;\n    padding-bottom: 130px;\n\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader > h1 {\n    font-size: 48px;\n    font-weight: 600;\n    margin: 0px;\n    margin-left: -5px;\n\n    padding-bottom: 15px;\n}\n\nheader > h4 {\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0px;\n}\n\nheader > p {\n    font-weight: 200;\n    margin: 0px;\n\n    color: var(--header-subtext-color);\n}\n\n/* Navbar */\n\nnav {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n\n    flex: 1;\n\n    color: (--header-text-color);\n}\n\nnav > a {\n    text-decoration: none;\n\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n\n    width: 150px;\n\n    margin: 5px;\n}\n\nnav > a:visited {\n    color: inherit;\n}\n\n/* Nav active states */\nnav > a.active > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a.active {\n    color: var(--accent-color);\n}\n\n/* Nav hover */\nnav > a:hover > .nav-indicator,\nnav > a:focus > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a:hover,\nnav > a:focus {\n    color: var(--accent-color);\n}\n\n.nav-indicator {\n    margin-left: 10px;\n    margin-right: 10px;\n\n    height: 0px;\n    width: 30px;\n\n    border-top: 1px solid var(--header-text-color);\n\n    transition: width 0.5s;\n\n    pointer-events: none;\n}\n\nnav > a > p {\n    text-transform: uppercase;\n    margin: 0px;\n\n    text-transform: uppercase;\n\n    font-size: 18px;\n    font-weight: 600;\n    \n    pointer-events: none;\n}\n\n/* Links styling */\n\nul {\n    list-style-type: none;\n    \n    display: flex;\n    justify-content: center;\n\n    padding: 0px;\n    margin-bottom: 50px;\n}\n\nli > a {\n    text-decoration: none;\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.socials-icon {\n    background-color: var(--header-subtext-color);\n    background-position: center center;\n    mask-repeat: no-repeat;\n\n    width: 28px;\n    height: 28px;\n\n    margin: 5px;\n\n    display: inline-block;\n}\n\n.socials-icon.github {\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n}\n\n.socials-icon.linkedin {\n    -webkit-mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n    mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n}\n\n.socials-icon.email {\n    -webkit-mask-image: url(\"../assets/icons/socials/email.svg\");\n    mask-image: url(\"../assets/icons/socials/email.svg\");\n\n    width: 32px;\n    height: 32px;\n    margin: 3px;\n}\n\nli > a:hover > .socials-icon,\nli > a:focus > .socials-icon {\n    background-color: var(--accent-color);\n}\n\n/* Main content */\n\nmain {\n    background-color: var(--main-background-color);\n    color: var(--main-text-color);\n\n    width: 60%;\n\n    box-sizing: border-box;\n\n    padding-left: 50px;\n    padding-right: 50px;\n\n    padding-bottom: 50px;\n}\n\n/* Page 1 - About section */\n\n#about {\n    padding-top: 25px;\n    padding-bottom: 50px;\n}\n\n/* Theme toggle */\n.toggle-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n/* Default theme */\n.toggle {\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n\n    cursor: pointer;\n\n    transition: background-color 0.15s;\n}\n\n.toggle:hover {\n    background-color: var(--accent-color);\n}\n\n/* Dark mode */\nbody.dark > main > #about > .toggle-wrapper > .toggle{\n    -webkit-mask-image: url(\"../assets/icons/local/moon.svg\");\n    mask-image: url(\"../assets/icons/local/moon.svg\");\n}\n\n.about-content {\n    padding-top: 50px;\n}\n\n.about-content > h1 {\n    font-size: 84px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n.about-content > p {\n    font-size: 20px;\n    color: var(--main-subtext-color);\n}\n\n/* Page 2 - Projects  */\n\n.project-content {\n    padding-top: 50px;\n}\n\n.project-content > h1 {\n    font-size: 32px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n/* Project Cards */\n.project {\n    background-color: var(--card-background-color);\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    border-radius: 5px;\n\n    margin-top: 25px;\n\n    cursor: pointer;\n\n    transition: transform 0.3s;\n}\n\n.project-main {\n    display: flex;\n}\n\n.project-aside {\n    padding: 15px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-right {\n    flex: 1;\n\n    padding: 15px;\n}\n\n.project-img {\n    /* Temp */\n    width: 100px;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n\n    border-radius: 5px;\n}\n\n.project-text{\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.project-name  {\n    display: flex;\n    align-items: center;\n\n    font-size: 32px;\n    font-weight: 500;\n\n    margin: 0px;\n}\n\n.project-desc {\n    font-size: 16px;\n    color: var(--main-subtext-color);\n    margin: 0px;\n}\n\n.project-foot {\n    display: flex;\n\n    padding-top: 15px;\n}\n\n/* Github repo + live icon */\n\n.project-repo {\n    transition: all 0.3s;\n}\n\n.project-repo > a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-right: 15px;\n}\n\n.repo-icon {\n    width: 22px;\n    height: 22px;\n\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.3s;\n}\n\n.live-icon {\n    width: 20px;\n    height: 20px;\n\n    position: absolute;\n    top: 25px;\n    right: 25px;\n\n    background-color: transparent;\n    -webkit-mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.15s;\n}\n\n/* Tool Icon Styling */\n.project-tools {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    gap: 15px;\n}\n\n.tool {\n    width: 20px;\n    height: 20px;\n\n    background-position: center center;\n    background-size: contain;\n}\n\n.HTML {\n    background-image: url(\"../assets/icons/tools/html.svg\");\n}\n\n.CSS {\n    background-image: url(\"../assets/icons/tools/css.svg\");\n}\n\n.JS {\n    background-image: url(\"../assets/icons/tools/js.svg\");\n}\n\n.REACT {\n    background-image: url(\"../assets/icons/tools/react.svg\");\n}\n\n.NODEJS {\n    background-image: url(\"../assets/icons/tools/nodejs.svg\");\n}\n\n.NPM {\n    background-image: url(\"../assets/icons/tools/npm.svg\");\n}\n\n.REACTBOOTSTRAP {\n    background-image: url(\"../assets/icons/tools/reactbootstrap.svg\");\n}\n\n/* Project hover */\n.project:hover, .project:focus {\n    transform: scale(1.03);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .live-icon {\n    top: 15px;\n    right: 15px;\n\n    background-color: var(--accent-color);\n}\n\n.repo-icon:hover {\n    background-color: var(--accent-color);\n    transform: rotate(360deg);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .project-name {\n    color: var(--accent-color);\n}\n\n/* Media queries */\n\n@media only screen and (max-width: 820px) {\n    body {\n        justify-content: center;\n\n        position: relative;\n    }\n\n    header {\n        height: 100px;\n        width: 100%;\n        padding: 0;\n        top: 0;\n\n        background-color: var(--header-color-2);\n\n        z-index: 1;\n    }\n\n    header > h1, header > h4, header > p {\n        display: none;\n    }\n\n    nav {\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        margin-top: 15px;\n    }\n\n    nav > a{\n        height: 40px;\n        margin: 0;\n    }\n\n    ul {\n        margin: 0;\n        margin-bottom: 5px;\n    }\n\n    .toggle-wrapper {\n        position: fixed;\n        z-index: 1;\n\n        top: 60px;\n        right: 25px;\n    }\n\n    main {\n        width: 100%;\n\n        position: absolute;\n        top: 100px;\n\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n\n    #projects {\n        padding-top: 50px;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .project-tools {\n        gap: 5px;\n    }\n\n    .tool {\n        width: 16px;\n        height: 16px;\n    }\n\n    .project-name {\n        font-size: 20px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/icons/tools/reactbootstrap.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/tools/reactbootstrap.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "992c79297e93229b21c5.svg";

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

/***/ "./src/assets/screenshots/resumegenerator.png":
/*!****************************************************!*\
  !*** ./src/assets/screenshots/resumegenerator.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b440bbcb8be2e4c4d7fc.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUU0QjtBQUNGO0FBQ1Y7QUFDUTtBQUNFO0FBQ007QUFDTjtBQUNTO0FBR3ZFLE1BQU1TLFNBQVMsR0FBRyxDQUFDLE1BQU07RUFDckIsU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0lBQ1osTUFBTUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsQ0FBQztJQUM1QkMsZUFBZSxDQUFDRixPQUFPLENBQUM7SUFDeEJHLFdBQVcsQ0FBQyxDQUFDO0lBQ2JDLG1CQUFtQixDQUFDLENBQUM7RUFDekI7RUFFQSxTQUFTSCxVQUFVQSxDQUFBLEVBQUc7SUFDbEI7SUFDQSxNQUFNRCxPQUFPLEdBQUcsSUFBSVgsZ0RBQVcsQ0FBQyxDQUFDO0lBRWpDVyxPQUFPLENBQUNLLFVBQVUsQ0FBQ2YsZ0VBQVcsRUFBQyxlQUFlLEVBQzFDLHdIQUF3SCxFQUN4SCxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ3JCO01BQUNnQixJQUFJLEVBQUUsNkNBQTZDO01BQ3BEQyxJQUFJLEVBQUU7SUFBNkMsQ0FDdkQsQ0FBQztJQUVEUCxPQUFPLENBQUNLLFVBQVUsQ0FBQ2QsK0RBQVUsRUFBQyxZQUFZLEVBQ3RDLGlFQUFpRSxFQUNqRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ3JCO01BQUNlLElBQUksRUFBRSwwQ0FBMEM7TUFDakRDLElBQUksRUFBRTtJQUEwQyxDQUNwRCxDQUFDO0lBRURQLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDYiwwREFBSyxFQUFFLE9BQU8sRUFDN0IsMEhBQTBILEVBQzFILENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUNmO01BQUNjLElBQUksRUFBRSwrQ0FBK0M7TUFDdERDLElBQUksRUFBRTtJQUErQyxDQUN6RCxDQUFDO0lBRURQLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDWiw4REFBUyxFQUFFLFdBQVcsRUFDckMsMElBQTBJLEVBQzFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDckI7TUFBQ2EsSUFBSSxFQUFFLHlDQUF5QztNQUNoREMsSUFBSSxFQUFFO0lBQXlDLENBQ25ELENBQUM7SUFFRFAsT0FBTyxDQUFDSyxVQUFVLENBQUNYLCtEQUFVLEVBQUUsWUFBWSxFQUN2Qyx3R0FBd0csRUFDeEcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFDNUI7TUFBQ1ksSUFBSSxFQUFFLDBDQUEwQztNQUNqREMsSUFBSSxFQUFFO0lBQTBDLENBQ3BELENBQUM7SUFFRFAsT0FBTyxDQUFDSyxVQUFVLENBQUNWLGtFQUFhLEVBQUUsZ0JBQWdCLEVBQzlDLCtFQUErRSxFQUMvRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUM1QjtNQUFDVyxJQUFJLEVBQUUsOENBQThDO01BQ3JEQyxJQUFJLEVBQUU7SUFBOEMsQ0FDeEQsQ0FBQztJQUVEUCxPQUFPLENBQUNLLFVBQVUsQ0FBQ1QsK0RBQVUsRUFBRSxZQUFZLEVBQ3ZDLDZIQUE2SCxFQUM3SCxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUM1QjtNQUFDVSxJQUFJLEVBQUUsMENBQTBDO01BQ2pEQyxJQUFJLEVBQUU7SUFBMEMsQ0FDcEQsQ0FBQztJQUVEUCxPQUFPLENBQUNLLFVBQVUsQ0FBQ1Isb0VBQWUsRUFBRSxrQkFBa0IsRUFDbEQsNk5BQTZOLEVBQzdOLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFDekM7TUFBQ1MsSUFBSSxFQUFFLDBDQUEwQztNQUNqREMsSUFBSSxFQUFFO0lBQTZDLENBQ3ZELENBQUM7SUFFRCxPQUFPUCxPQUFPLENBQUNRLFdBQVc7RUFDOUI7RUFFQSxTQUFTTixlQUFlQSxDQUFDTSxXQUFXLEVBQUU7SUFDbEMsTUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNuRSxLQUFLLE1BQU1DLE9BQU8sSUFBSUosV0FBVyxFQUFFO01BQy9CLE1BQU1LLFdBQVcsR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ2pERCxXQUFXLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUVoQyxNQUFNQyxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNqREcsV0FBVyxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFckMsTUFBTUUsWUFBWSxHQUFHUixRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDbERJLFlBQVksQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BRXZDLE1BQU1HLEdBQUcsR0FBR1QsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3pDSyxHQUFHLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNoQ0csR0FBRyxDQUFDQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBSSxPQUFNUixPQUFPLENBQUNTLFVBQVcsR0FBRTtNQUVoRUgsWUFBWSxDQUFDSSxXQUFXLENBQUNILEdBQUcsQ0FBQztNQUU3QixNQUFNSSxZQUFZLEdBQUdiLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNsRFMsWUFBWSxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFFdkMsTUFBTVEsV0FBVyxHQUFHZCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDakRVLFdBQVcsQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ3JDO01BQ0EsTUFBTVQsSUFBSSxHQUFHRyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNQLElBQUksQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BRS9CLE1BQU1TLElBQUksR0FBR2YsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDVyxJQUFJLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUNsQ1MsSUFBSSxDQUFDQyxXQUFXLEdBQUdkLE9BQU8sQ0FBQ2EsSUFBSTtNQUUvQixNQUFNRSxJQUFJLEdBQUdqQixRQUFRLENBQUNJLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDeENhLElBQUksQ0FBQ1osU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ2xDVyxJQUFJLENBQUNELFdBQVcsR0FBR2QsT0FBTyxDQUFDZSxJQUFJO01BRW5DSCxXQUFXLENBQUNGLFdBQVcsQ0FBQ2YsSUFBSSxDQUFDO01BQzdCaUIsV0FBVyxDQUFDRixXQUFXLENBQUNHLElBQUksQ0FBQztNQUM3QkQsV0FBVyxDQUFDRixXQUFXLENBQUNLLElBQUksQ0FBQztNQUU3QixNQUFNQyxXQUFXLEdBQUdsQixRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDakRjLFdBQVcsQ0FBQ2IsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BRXpDLE1BQU1hLEtBQUssR0FBR25CLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMzQ2UsS0FBSyxDQUFDZCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFFcENKLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQ0MsT0FBTyxDQUFFQyxJQUFJLElBQUs7UUFDNUIsTUFBTUMsSUFBSSxHQUFHdEIsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDa0IsSUFBSSxDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCZ0IsSUFBSSxDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUNlLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVqREwsS0FBSyxDQUFDUCxXQUFXLENBQUNVLElBQUksQ0FBQztNQUMzQixDQUFDLENBQUM7TUFFRixNQUFNMUIsSUFBSSxHQUFHSSxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNSLElBQUksQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BRTlCLE1BQU1tQixTQUFTLEdBQUd6QixRQUFRLENBQUNJLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDN0M7TUFDQXFCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsRUFBRyxRQUFPLENBQUM7TUFDMUNELFNBQVMsQ0FBQ0UsT0FBTyxHQUFJQyxDQUFDLElBQUs7UUFDdkJBLENBQUMsQ0FBQ0MsZUFBZSxDQUFDLENBQUM7UUFDbkJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDN0IsT0FBTyxDQUFDOEIsS0FBSyxDQUFDcEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDcUMsS0FBSyxDQUFDLENBQUM7TUFDckQsQ0FBQztNQUVHLE1BQU1DLFFBQVEsR0FBR2xDLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM5QzhCLFFBQVEsQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUV2Q21CLFNBQVMsQ0FBQ2IsV0FBVyxDQUFDc0IsUUFBUSxDQUFDO01BRW5DdEMsSUFBSSxDQUFDZ0IsV0FBVyxDQUFDYSxTQUFTLENBQUM7TUFFM0JQLFdBQVcsQ0FBQ04sV0FBVyxDQUFDTyxLQUFLLENBQUM7TUFDOUJELFdBQVcsQ0FBQ04sV0FBVyxDQUFDaEIsSUFBSSxDQUFDO01BRWpDaUIsWUFBWSxDQUFDRCxXQUFXLENBQUNFLFdBQVcsQ0FBQztNQUNyQ0QsWUFBWSxDQUFDRCxXQUFXLENBQUNNLFdBQVcsQ0FBQztNQUV6Q1gsV0FBVyxDQUFDSyxXQUFXLENBQUNKLFlBQVksQ0FBQztNQUNyQ0QsV0FBVyxDQUFDSyxXQUFXLENBQUNDLFlBQVksQ0FBQztNQUV6Q1YsV0FBVyxDQUFDUyxXQUFXLENBQUNMLFdBQVcsQ0FBQztNQUVwQ0osV0FBVyxDQUFDd0IsT0FBTyxHQUFJQyxDQUFDLElBQUk7UUFDeEJBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7UUFDbEJMLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDN0IsT0FBTyxDQUFDOEIsS0FBSyxDQUFDbkMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDb0MsS0FBSyxDQUFDLENBQUM7TUFDckQsQ0FBQztNQUVMbEMsZUFBZSxDQUFDYSxXQUFXLENBQUNULFdBQVcsQ0FBQztJQUN4QztFQUNKO0VBRUEsU0FBU1QsbUJBQW1CQSxDQUFBLEVBQUc7SUFDM0JvQyxNQUFNLENBQUNNLFFBQVEsR0FBRyxNQUFNO01BQ3BCLElBQUlDLE9BQU8sR0FBRyxFQUFFO01BQ2hCLE1BQU1DLFFBQVEsR0FBR3RDLFFBQVEsQ0FBQ3VDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7TUFFckQ7TUFDQTtNQUNBO01BQ0FELFFBQVEsQ0FBQ2xCLE9BQU8sQ0FBRW9CLE9BQU8sSUFBSztRQUM1QixNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsU0FBUztRQUNwQyxJQUFJWixNQUFNLENBQUNhLE9BQU8sSUFBSUYsVUFBVSxHQUFHLEVBQUUsRUFBRTtVQUNyQ0osT0FBTyxHQUFHRyxPQUFPLENBQUNJLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFBRTtNQUMxQyxDQUFDLENBQUM7TUFFRixNQUFNQyxRQUFRLEdBQUc3QyxRQUFRLENBQUN1QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7TUFDckRNLFFBQVEsQ0FBQ3pCLE9BQU8sQ0FBRTBCLENBQUMsSUFBSztRQUN0QkEsQ0FBQyxDQUFDekMsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJRCxDQUFDLENBQUN6QyxTQUFTLENBQUMyQyxRQUFRLENBQUNYLE9BQU8sQ0FBQyxFQUFFO1VBQ2pDUyxDQUFDLENBQUN6QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDM0I7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDO0VBQ1A7RUFFQSxTQUFTYixXQUFXQSxDQUFBLEVBQUc7SUFDbkIsTUFBTXdELEdBQUcsR0FBR2pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUM3Q2dELEdBQUcsQ0FBQ3RCLE9BQU8sR0FBSUMsQ0FBQyxJQUFLO01BQ2pCNUIsUUFBUSxDQUFDa0QsSUFBSSxDQUFDN0MsU0FBUyxDQUFDOEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0VBQ0w7RUFFQSxPQUFPO0lBQ0g5RDtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUUsQ0FBQztBQUVKLGlFQUFlRCxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ2xOeEIsTUFBTWdFLE9BQU8sQ0FBQztFQUNWQyxXQUFXQSxDQUFDMUMsVUFBVSxFQUFFSSxJQUFJLEVBQUVFLElBQUksRUFBRUUsS0FBSyxFQUFFYSxLQUFLLEVBQUU7SUFDOUMsSUFBSSxDQUFDckIsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0ksSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0UsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2EsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0FBQ0o7QUFFQSxNQUFNckQsV0FBVyxDQUFDO0VBQ2QwRSxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUN2RCxXQUFXLEdBQUcsRUFBRTtFQUN6QjtFQUVBd0QsVUFBVUEsQ0FBQ3ZDLElBQUksRUFBRTtJQUNiLE9BQU8sSUFBSSxDQUFDakIsV0FBVyxDQUFDeUQsSUFBSSxDQUFFckQsT0FBTyxJQUFLO01BQ3RDQSxPQUFPLENBQUNhLElBQUksSUFBSUEsSUFBSTtJQUN4QixDQUFDLENBQUM7RUFDTjtFQUVBcEIsVUFBVUEsQ0FBQ2dCLFVBQVUsRUFBRUksSUFBSSxFQUFFRSxJQUFJLEVBQUVFLEtBQUssRUFBRWEsS0FBSyxFQUFFO0lBQzdDLE1BQU13QixPQUFPLEdBQUcsSUFBSUosT0FBTyxDQUFDekMsVUFBVSxFQUFFSSxJQUFJLEVBQUVFLElBQUksRUFBRUUsS0FBSyxFQUFFYSxLQUFLLENBQUM7SUFDakUsSUFBSSxDQUFDbEMsV0FBVyxDQUFDMkQsT0FBTyxDQUFDRCxPQUFPLENBQUM7RUFDckM7QUFDSjtBQUVBLGlFQUFlN0UsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjFCO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdKQUFxRDtBQUNqRyw0Q0FBNEMsb0pBQXVEO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHNJQUFnRDtBQUM1Riw0Q0FBNEMsd0lBQWlEO0FBQzdGLDRDQUE0QywwSUFBa0Q7QUFDOUYsNENBQTRDLHdJQUFpRDtBQUM3Riw0Q0FBNEMsc0lBQWdEO0FBQzVGLDRDQUE0QyxvSUFBK0M7QUFDM0YsNENBQTRDLDBJQUFrRDtBQUM5Riw2Q0FBNkMsNElBQW1EO0FBQ2hHLDZDQUE2QyxzSUFBZ0Q7QUFDN0YsNkNBQTZDLDRKQUEyRDtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRIQUE0SCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2xLLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLGFBQWEsWUFBWSxVQUFVLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFdBQVcsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sYUFBYSxjQUFjLGNBQWMsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVks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OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNpQjtBQUNBOztBQUU1Qzs7QUFFQVMsMERBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5pbXBvcnQgRXRjaEFTa2V0Y2ggZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9ldGNoYXNrZXRjaC5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdcIjtcbmltcG9ydCBSZXBNZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3JlcG1lLnBuZ1wiO1xuaW1wb3J0IFRpY1RhY1RvZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3RpY3RhY3RvZS5wbmdcIjtcbmltcG9ydCBUaGluZ3NUb0RvIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGhpbmdzdG9kby5wbmdcIjtcbmltcG9ydCBNeU9ic2VydmF0b3J5IGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvbXlvYnNlcnZhdG9yeS5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvYmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBSZXN1bWVHZW5lcmF0b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9yZXN1bWVnZW5lcmF0b3IucG5nXCJcblxuXG5jb25zdCBJbnRlcmZhY2UgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBzZXRTdG9yYWdlKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyhzdG9yYWdlKTtcbiAgICAgICAgdG9nZ2xlVGhlbWUoKTtcbiAgICAgICAgc2Nyb2xsTmF2TGlua0FjdGl2ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoKSB7XG4gICAgICAgIC8vIE1hbnVhbCBzdG9yYWdlIHNlbGVjdGlvblxuICAgICAgICBjb25zdCBzdG9yYWdlID0gbmV3IFByb2plY3RMaXN0KCk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KEV0Y2hBU2tldGNoLFwiRXRjaC1BLVNrZXRjaFwiLCBcbiAgICAgICAgICAgIFwiQSBzaW1wbGUgc2tldGNoYm9vayBhcHAgc3VwcG9ydGluZyBkeW5hbWljIGdyaWQtc2l6ZXMuIFRoaXMgd2FzIG9uZSBvZiBteSBmaXJzdCBwcm9qZWN0cyBpbXBsZW1lbnRpbmcgSlMgb24gYSB3ZWJwYWdlLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL2V0Y2gtYS1za2V0Y2hcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vZXRjaC1hLXNrZXRjaC9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoQ2FsY3VsYXRvcixcIkNhbGN1bGF0b3JcIiwgXG4gICAgICAgICAgICBcIkEgcmVjcmVhdGlvbiBvZiBBcHBsZSBJT1MgY2FsY3VsYXRvciBhcHAgd2l0aCBrZXlib2FyZCBzdXBwb3J0LlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL2NhbGN1bGF0b3JcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vY2FsY3VsYXRvci9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoUmVwTWUsIFwiUmVwTWVcIiwgXG4gICAgICAgICAgICBcIkEgZGFzaGJvYXJkIGZyb250LWVuZCBvbmx5IGRlc2lnbiBmb3IgYSB3b3Jrb3V0IHNvY2lhbCBwbGF0Zm9ybS4gVXRpbGl6ZWQgcmFuZG9taXplZCBkdW1teSBjb250ZW50IHRvIHNpbXVsYXRlIGJhY2stZW5kLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9yZXBtZS1kYXNoYm9hcmRcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vcmVwbWUtZGFzaGJvYXJkL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChUaWNUYWNUb2UsIFwiVGljVGFjVG9lXCIsIFxuICAgICAgICAgICAgXCJJbnRlcmFjdGl2ZSBUaWMtVGFjLVRvZSBnYW1lIHN1cHBvcnRpbmcgUHZQIGFuZCBQdkMgd2l0aCByYW5naW5nIGRpZmZpY3VsdHkuIEltcGxlbWVudGVkIG1pbmltYXggYWxnb3JpdGhtIGZvciBjb21wdXRlciBkZWNpc2lvbi1tYWtpbmcuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvdGljdGFjdG9lXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL3RpY3RhY3RvZS9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoVGhpbmdzVG9EbywgXCJUaGluZ3NUb0RvXCIsIFxuICAgICAgICAgICAgXCJUb2RvIGxpc3Qgd2l0aCBmdWxseSBjdXN0b21pemFibGUgcHJvamVjdHMgJiB0b2Rvcy4gQXV0b21hdGljYWxseSBzYXZlIGNvbnRlbnQgdXNpbmcgbG9jYWxTdG9yYWdlIEFQSS5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiLCBcIm5wbVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy90aGluZ3NUb0RvXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL3RoaW5nc1RvRG8vXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KE15T2JzZXJ2YXRvcnksIFwiTXkgT2JzZXJ2YXRvcnlcIiwgXG4gICAgICAgICAgICBcIlNpbXBsZSB3ZWF0aGVyIGFwcCB0byBxdWVyeSBhbnkgbG9jYXRpb24gZm9yIHJlYWwgdGltZSBkYXRhIHVzaW5nIFdlYXRoZXJBUEkuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIiwgXCJucG1cIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvbXktb2JzZXJ2YXRvcnlcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vbXktb2JzZXJ2YXRvcnkvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KEJhdHRsZXNoaXAsIFwiQmF0dGxlc2hpcFwiLCBcbiAgICAgICAgICAgIFwiUHZDIGJhdHRsZXNoaXAgZ2FtZS4gSW50ZXJhY3RpdmVseSBkcmFnLCBkcm9wLCBhbmQgcm90YXRlIHNoaXBzLCBhbmQgYmF0dGxlIGFuIGludGVsbGlnZW50IGFnZW50IG1ha2luZyBjb21wdXRlciBkZWNpc2lvbnMuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIiwgXCJucG1cIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvYmF0dGxlc2hpcFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9iYXR0bGVzaGlwL1wifVxuICAgICAgICApOyAgIFxuICAgICAgICBcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFJlc3VtZUdlbmVyYXRvciwgXCJSZXN1bWUgR2VuZXJhdG9yXCIsIFxuICAgICAgICAgICAgXCJBIGZ1bGx5IGFkYXB0aXZlIHJlc3VtZSBnZW5lcmF0b3IgZGV2ZWxvcGVkIHVzaW5nIFJlYWN0SlMgYW5kIEJvb3RzdHJhcC4gQ3VzdG9taXplIGZpZWxkcywgY2F0ZWdvcmllcywgYW5kIHN0eWxpbmcuIENvbXBsZXRlbHkgcmVzcG9uc2l2ZSBzaXplZCBvdXRwdXQgd2l0aCBhbGwgc3BhY2luZyBhbmQgZm9udHMgYXV0b21hdGljYWxseSBzY2FsZWQgd2l0aCBBNCBhc3BlY3QgcmF0aW9cIixcbiAgICAgICAgICAgIFtcInJlYWN0XCIsIFwicmVhY3Rib290c3RyYXBcIiwgXCJDU1NcIiwgXCJucG1cIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvY3YtYnVpbGRlclwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9zdXBlcmItZHVja2Fub28tYTIyM2I0Lm5ldGxpZnkuYXBwL1wifVxuICAgICAgICApOyAgIFxuXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnByb2plY3RMaXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0TGlzdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXdyYXBwZXJcIilcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNYWluLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW1haW5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBc2lkZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hc2lkZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdXJsKCR7cHJvamVjdC5zY3JlZW5zaG90fSlgO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFzaWRlLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RSaWdodC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yaWdodFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWNvbiB0byBkZW1vbnN0cmF0ZSBsaXZlICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGl2ZS5jbGFzc0xpc3QuYWRkKFwibGl2ZS1pY29uXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQobGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvb3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9vdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9vbHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b29scy5mb3JFYWNoKCh0b29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKHRvb2wudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZXBvXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHlwZXJsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh5cGVybGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtwcm9qZWN0LmxpbmtzLnJlcG99YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgYF9ibGFua2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cGVybGluay5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocHJvamVjdC5saW5rcy5yZXBvLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0ljb24uY2xhc3NMaXN0LmFkZCgncmVwby1pY29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBlcmxpbmsuYXBwZW5kQ2hpbGQocmVwb0ljb24pOyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvLmFwcGVuZENoaWxkKGh5cGVybGluayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmFwcGVuZENoaWxkKHRvb2xzKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmFwcGVuZENoaWxkKHJlcG8pOyAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdEZvb3QpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEFzaWRlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0UmlnaHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE1haW4pO1xuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5vbmNsaWNrID0gKGUpID0+e1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihwcm9qZWN0LmxpbmtzLmxpdmUsICdfYmxhbmsnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxOYXZMaW5rQWN0aXZlKCkge1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCBlYWNoIHNlY3Rpb24gb2Zmc2V0VG9wIHByb3BlcnR5LCBjb21wYXJlIHdpdGggc2Nyb2xsIFlcbiAgICAgICAgICAgIC8vIElmIHNjcm9sbFkgaXMgd2l0aGluIHNlY3Rpb24sIHRoZW4gYWRkIGl0IGFzIGEgY2xhc3MgdG8gbmF2IGVsZW1lbnRcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gc3VidHJhY3QgYXJiaXRyYXJ5IHZhbHVlIC0gXG4gICAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IHNlY3Rpb25Ub3AgLSA2MCkgeyBcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiBhXCIpO1xuICAgICAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgIGlmIChhLmNsYXNzTGlzdC5jb250YWlucyhjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlOyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcykge1xuICAgICAgICB0aGlzLnNjcmVlbnNob3QgPSBzY3JlZW5zaG90O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnRvb2xzID0gdG9vbHM7XG4gICAgICAgIHRoaXMubGlua3MgPSBsaW5rcztcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGdldFByb2plY3QobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT0gbmFtZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcykge1xuICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IFByb2plY3Qoc2NyZWVuc2hvdCwgbmFtZSwgZGVzYywgdG9vbHMsIGxpbmtzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC51bnNoaWZ0KG5ld1Byb2opO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9saW5rZWRpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9lbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvc3VuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvaHRtbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvY3NzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9qcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ub2RlanMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ucG0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdGJvb3RzdHJhcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdydXBwbyZmYW1pbHk9TXVrdGE6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRm9udCAqL1xuXG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aCA7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXG4gICAgLS1oZWFkZXItY29sb3I6ICNmNWYzZjQ7XG4gICAgLS1oZWFkZXItY29sb3ItMjogI2U1ZTVlNTtcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiByZ2IoMTI3LCAxMjUsIDEyNSk7XG5cbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcblxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOWZhO1xuXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XG5cbiAgICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmJvZHkuZGFyayB7XG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXG4gICAgLS1oZWFkZXItY29sb3I6ICMwZDFiMmE7XG4gICAgLS1oZWFkZXItY29sb3ItMjogIzA4MTQyMDtcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiAjZjBmMWVlO1xuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XG5cbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogIzBkMWIyYTtcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XG5cbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogIzFiMjYzYjtcblxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xufVxuXG4vKiBIZWFkZXIgY29udGVudCAqL1xuXG5oZWFkZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG4gICAgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVyID4gaDEge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmhlYWRlciA+IGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaGVhZGVyID4gcCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XG59XG5cbi8qIE5hdmJhciAqL1xuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZmxleDogMTtcblxuICAgIGNvbG9yOiAoLS1oZWFkZXItdGV4dC1jb2xvcik7XG59XG5cbm5hdiA+IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbm5hdiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIE5hdiBhY3RpdmUgc3RhdGVzICovXG5uYXYgPiBhLmFjdGl2ZSA+IC5uYXYtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdiA+IGEuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTmF2IGhvdmVyICovXG5uYXYgPiBhOmhvdmVyID4gLm5hdi1pbmRpY2F0b3IsXG5uYXYgPiBhOmZvY3VzID4gLm5hdi1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxubmF2ID4gYTpob3Zlcixcbm5hdiA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubmF2LWluZGljYXRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG5cbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xuXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcblxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5uYXYgPiBhID4gcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTGlua3Mgc3R5bGluZyAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubGkgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5zb2NpYWxzLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG5cbiAgICBtYXJnaW46IDVweDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvY2lhbHMtaWNvbi5naXRodWIge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnNvY2lhbHMtaWNvbi5saW5rZWRpbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uc29jaWFscy1pY29uLmVtYWlsIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbmxpID4gYTpob3ZlciA+IC5zb2NpYWxzLWljb24sXG5saSA+IGE6Zm9jdXMgPiAuc29jaWFscy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBNYWluIGNvbnRlbnQgKi9cblxubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcblxuICAgIHdpZHRoOiA2MCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLyogUGFnZSAxIC0gQWJvdXQgc2VjdGlvbiAqL1xuXG4jYWJvdXQge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4vKiBUaGVtZSB0b2dnbGUgKi9cbi50b2dnbGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIERlZmF1bHQgdGhlbWUgKi9cbi50b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cztcbn1cblxuLnRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogRGFyayBtb2RlICovXG5ib2R5LmRhcmsgPiBtYWluID4gI2Fib3V0ID4gLnRvZ2dsZS13cmFwcGVyID4gLnRvZ2dsZXtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBoMSB7XG4gICAgZm9udC1zaXplOiA4NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG59XG5cbi8qIFBhZ2UgMiAtIFByb2plY3RzICAqL1xuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnByb2plY3QtY29udGVudCA+IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgIG1hcmdpbjogMHB4O1xufVxuXG4vKiBQcm9qZWN0IENhcmRzICovXG4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ucHJvamVjdC1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdC1hc2lkZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtcmlnaHQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJvamVjdC1pbWcge1xuICAgIC8qIFRlbXAgKi9cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRleHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1uYW1lICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnByb2plY3QtZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ucHJvamVjdC1mb290IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi8qIEdpdGh1YiByZXBvICsgbGl2ZSBpY29uICovXG5cbi5wcm9qZWN0LXJlcG8ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJvamVjdC1yZXBvID4gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmVwby1pY29uIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5saXZlLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLyogVG9vbCBJY29uIFN0eWxpbmcgKi9cbi5wcm9qZWN0LXRvb2xzIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBnYXA6IDE1cHg7XG59XG5cbi50b29sIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLkhUTUwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cblxuLkNTUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xufVxuXG4uSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbn1cblxuLlJFQUNUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG59XG5cbi5OT0RFSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7XG59XG5cbi5OUE0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XG59XG5cbi5SRUFDVEJPT1RTVFJBUCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcbn1cblxuLyogUHJvamVjdCBob3ZlciAqL1xuLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0OmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAubGl2ZS1pY29uIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ucmVwby1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5wcm9qZWN0LW5hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBNZWRpYSBxdWVyaWVzICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLTIpO1xuXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgaGVhZGVyID4gaDEsIGhlYWRlciA+IGg0LCBoZWFkZXIgPiBwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBuYXYgPiBhe1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC50b2dnbGUtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwcHg7XG5cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgICNwcm9qZWN0cyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5wcm9qZWN0LXRvb2xzIHtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLnRvb2wge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUdUO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhDQUE4Qzs7SUFFOUMsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDBDQUEwQzs7SUFFMUMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQ0FBcUM7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LHVDQUF1Qzs7UUFFdkMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7O1FBRVYsU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7O1FBRVgsa0JBQWtCO1FBQ2xCLFVBQVU7O1FBRVYsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3J1cHBvJmZhbWlseT1NdWt0YTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGggO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cXG4gICAgLS1oZWFkZXItY29sb3I6ICNmNWYzZjQ7XFxuICAgIC0taGVhZGVyLWNvbG9yLTI6ICNlNWU1ZTU7XFxuICAgIC0taGVhZGVyLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiByZ2IoMTI3LCAxMjUsIDEyNSk7XFxuXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmM2Y0O1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XFxuXFxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOWZhO1xcblxcbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1YjtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5ib2R5LmRhcmsge1xcbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cXG4gICAgLS1oZWFkZXItY29sb3I6ICMwZDFiMmE7XFxuICAgIC0taGVhZGVyLWNvbG9yLTI6ICMwODE0MjA7XFxuICAgIC0taGVhZGVyLXRleHQtY29sb3I6ICNmMGYxZWU7XFxuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XFxuXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGQxYjJhO1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xcblxcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogIzFiMjYzYjtcXG5cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XFxufVxcblxcbi8qIEhlYWRlciBjb250ZW50ICovXFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmhlYWRlciA+IHAge1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogTmF2YmFyICovXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGNvbG9yOiAoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxufVxcblxcbm5hdiA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTUwcHg7XFxuXFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5uYXYgPiBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogTmF2IGFjdGl2ZSBzdGF0ZXMgKi9cXG5uYXYgPiBhLmFjdGl2ZSA+IC5uYXYtaW5kaWNhdG9yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2ID4gYS5hY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLyogTmF2IGhvdmVyICovXFxubmF2ID4gYTpob3ZlciA+IC5uYXYtaW5kaWNhdG9yLFxcbm5hdiA+IGE6Zm9jdXMgPiAubmF2LWluZGljYXRvciB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbm5hdiA+IGE6aG92ZXIsXFxubmF2ID4gYTpmb2N1cyB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubmF2LWluZGljYXRvciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG5cXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG5cXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcXG5cXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbm5hdiA+IGEgPiBwIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBMaW5rcyBzdHlsaW5nICovXFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5saSA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNvY2lhbHMtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG5cXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnNvY2lhbHMtaWNvbi5naXRodWIge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG59XFxuXFxuLnNvY2lhbHMtaWNvbi5saW5rZWRpbiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9saW5rZWRpbi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9saW5rZWRpbi5zdmdcXFwiKTtcXG59XFxuXFxuLnNvY2lhbHMtaWNvbi5lbWFpbCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9lbWFpbC5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9lbWFpbC5zdmdcXFwiKTtcXG5cXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbmxpID4gYTpob3ZlciA+IC5zb2NpYWxzLWljb24sXFxubGkgPiBhOmZvY3VzID4gLnNvY2lhbHMtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIE1haW4gY29udGVudCAqL1xcblxcbm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG5cXG4gICAgd2lkdGg6IDYwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLyogUGFnZSAxIC0gQWJvdXQgc2VjdGlvbiAqL1xcblxcbiNhYm91dCB7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLyogVGhlbWUgdG9nZ2xlICovXFxuLnRvZ2dsZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLyogRGVmYXVsdCB0aGVtZSAqL1xcbi50b2dnbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvc3VuLnN2Z1xcXCIpO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cztcXG59XFxuXFxuLnRvZ2dsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIERhcmsgbW9kZSAqL1xcbmJvZHkuZGFyayA+IG1haW4gPiAjYWJvdXQgPiAudG9nZ2xlLXdyYXBwZXIgPiAudG9nZ2xle1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL21vb24uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL21vb24uc3ZnXFxcIik7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5hYm91dC1jb250ZW50ID4gaDEge1xcbiAgICBmb250LXNpemU6IDg0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCA+IHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBQYWdlIDIgLSBQcm9qZWN0cyAgKi9cXG5cXG4ucHJvamVjdC1jb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qIFByb2plY3QgQ2FyZHMgKi9cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1hc2lkZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWltZyB7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlc2Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnByb2plY3QtZm9vdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4vKiBHaXRodWIgcmVwbyArIGxpdmUgaWNvbiAqL1xcblxcbi5wcm9qZWN0LXJlcG8ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtcmVwbyA+IGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucmVwby1pY29uIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5saXZlLWljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjVweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL2Fycm93LnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi8qIFRvb2wgSWNvbiBTdHlsaW5nICovXFxuLnByb2plY3QtdG9vbHMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRvb2wge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5IVE1MIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvaHRtbC5zdmdcXFwiKTtcXG59XFxuXFxuLkNTUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2Nzcy5zdmdcXFwiKTtcXG59XFxuXFxuLkpTIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvanMuc3ZnXFxcIik7XFxufVxcblxcbi5SRUFDVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0LnN2Z1xcXCIpO1xcbn1cXG5cXG4uTk9ERUpTIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbm9kZWpzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uTlBNIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbnBtLnN2Z1xcXCIpO1xcbn1cXG5cXG4uUkVBQ1RCT09UU1RSQVAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdGJvb3RzdHJhcC5zdmdcXFwiKTtcXG59XFxuXFxuLyogUHJvamVjdCBob3ZlciAqL1xcbi5wcm9qZWN0OmhvdmVyLCAucHJvamVjdDpmb2N1cyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5saXZlLWljb24ge1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucmVwby1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLnByb2plY3QtbmFtZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgdG9wOiAwO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLTIpO1xcblxcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgPiBoMSwgaGVhZGVyID4gaDQsIGhlYWRlciA+IHAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgbmF2ID4gYXtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZ2dsZS13cmFwcGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuXFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICByaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG5cXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnByb2plY3QtdG9vbHMge1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvb2wge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL21vZHVsZXMvaW50ZXJmYWNlJztcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXRodWJcIikuc3JjID0gR2l0OyAvLyBGaWxsIGdpdGh1YiBsb2dvXG5cbkludGVyZmFjZS5pbml0KCk7Il0sIm5hbWVzIjpbIlByb2plY3RMaXN0IiwiRXRjaEFTa2V0Y2giLCJDYWxjdWxhdG9yIiwiUmVwTWUiLCJUaWNUYWNUb2UiLCJUaGluZ3NUb0RvIiwiTXlPYnNlcnZhdG9yeSIsIkJhdHRsZXNoaXAiLCJSZXN1bWVHZW5lcmF0b3IiLCJJbnRlcmZhY2UiLCJpbml0Iiwic3RvcmFnZSIsInNldFN0b3JhZ2UiLCJkaXNwbGF5UHJvamVjdHMiLCJ0b2dnbGVUaGVtZSIsInNjcm9sbE5hdkxpbmtBY3RpdmUiLCJhZGRQcm9qZWN0IiwicmVwbyIsImxpdmUiLCJwcm9qZWN0TGlzdCIsInByb2plY3RzV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3QiLCJwcm9qZWN0Q2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcm9qZWN0TWFpbiIsInByb2plY3RBc2lkZSIsImltZyIsInN0eWxlIiwic2NyZWVuc2hvdCIsImFwcGVuZENoaWxkIiwicHJvamVjdFJpZ2h0IiwicHJvamVjdFRleHQiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJkZXNjIiwicHJvamVjdEZvb3QiLCJ0b29scyIsImZvckVhY2giLCJ0b29sIiwiaWNvbiIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoeXBlcmxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJvbmNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIndpbmRvdyIsIm9wZW4iLCJsaW5rcyIsImZvY3VzIiwicmVwb0ljb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uc2Nyb2xsIiwiY3VycmVudCIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2Nyb2xsWSIsImdldEF0dHJpYnV0ZSIsIm5hdkxpbmtzIiwiYSIsInJlbW92ZSIsImNvbnRhaW5zIiwiYnRuIiwiYm9keSIsInRvZ2dsZSIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsImdldFByb2plY3QiLCJmaW5kIiwibmV3UHJvaiIsInVuc2hpZnQiXSwic291cmNlUm9vdCI6IiJ9