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
/* harmony import */ var _assets_screenshots_Wavelength_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/screenshots/Wavelength.png */ "./src/assets/screenshots/Wavelength.png");
/* harmony import */ var _assets_screenshots_filestorage_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/screenshots/filestorage.png */ "./src/assets/screenshots/filestorage.png");











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
    storage.addProject(_assets_screenshots_resumegenerator_png__WEBPACK_IMPORTED_MODULE_8__, "Resume Generator", "A fully adaptive resume generator developed using ReactJS and React Bootstrap. Customize fields, categories, and styling. Completely responsive output automatically scaled with A4 aspect ratio", ["react", "reactbootstrap", "CSS", "npm", "netlify"], {
      repo: "https://github.com/HarryAhnHS/cv-builder",
      live: "https://superb-duckanoo-a223b4.netlify.app/"
    });
    storage.addProject(_assets_screenshots_Wavelength_png__WEBPACK_IMPORTED_MODULE_9__, "Wavelength", "A mock e-commerce site built with ReactJS and TailwindCSS, utilizing the Platzi Fake Store API. It includes dynamic routing via React Router and testing with React Testing Library and Vitest.", ["react", "tailwind", "vitest", "reactrouter", "npm", "netlify"], {
      repo: "https://github.com/HarryAhnHS/shopping-cart",
      live: "https://main--effervescent-brigadeiros-0da795.netlify.app/"
    });
    storage.addProject(_assets_screenshots_filestorage_png__WEBPACK_IMPORTED_MODULE_10__, "File Storage", "A full-stack file storage application built with nodeJS and express. User authentication using passportJS, Prisma ORM with PostGresql for database, and cloudinary for scalable cloud storage. Deployed on Railway and Supahost.", ["nodejs", "express", "postgresql", "prisma", "tailwind", "npm", "railway"], {
      repo: "https://github.com/HarryAhnHS/shopping-cart",
      live: "https://main--effervescent-brigadeiros-0da795.netlify.app/"
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
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/tailwind.svg */ "./src/assets/icons/tools/tailwind.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/vitest.svg */ "./src/assets/icons/tools/vitest.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/reactrouter.svg */ "./src/assets/icons/tools/reactrouter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/netlify.svg */ "./src/assets/icons/tools/netlify.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/express.svg */ "./src/assets/icons/tools/express.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/postgresql.svg */ "./src/assets/icons/tools/postgresql.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/prisma.svg */ "./src/assets/icons/tools/prisma.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/railway.svg */ "./src/assets/icons/tools/railway.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
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
    background-position: top center;
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

.TAILWIND {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
}

.VITEST {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
}

.REACTROUTER {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
}

.NETLIFY {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
}

.EXPRESS {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
}

.POSTGRESQL {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
}

.PRISMA {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
}

.RAILWAY {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
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

    .project-main {
        flex-direction: column;
    }

    .project-aside {
        height: 200px;
    }

    .project-img {
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Mukta:wght@200;300;400;500;600;700;800&display=swap');\n\nhtml {\n    scroll-behavior: smooth ;\n}\n\nimg {\n    max-width: 100%;\n}\n\nbody {\n    background-color: var(--main-background-color);\n\n    /* Custom properties for theme */\n    --header-color: #f5f3f4;\n    --header-color-2: #e5e5e5;\n    --header-text-color: black;\n    --header-subtext-color: rgb(127, 125, 125);\n\n    --main-background-color: #f5f3f4;\n    --main-text-color: black;\n    --main-subtext-color: rgb(93, 93, 93);\n\n    --card-background-color: #fbf9fa;\n\n    --accent-color: #ff715b;\n\n    font-family: 'Mukta', sans-serif;\n    font-weight: 300;\n\n    margin: 0px;\n\n    display: flex;\n    justify-content: flex-end;\n}\n\nbody.dark {\n    /* Custom properties for theme */\n    --header-color: #0d1b2a;\n    --header-color-2: #081420;\n    --header-text-color: #f0f1ee;\n    --header-subtext-color: #d4d5d3;\n\n    --main-background-color: #0d1b2a;\n    --main-text-color: white;\n    --main-subtext-color: #d4d5d3;\n\n    --card-background-color: #1b263b;\n\n    --accent-color: #ff715b;\n}\n\n/* Header content */\n\nheader {\n    height: 100vh;\n    width: 40%;\n    background-color: var(--header-color);\n    color: var(--header-text-color);\n    \n    position: fixed;\n    top:0;\n    left: 0;\n\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 130px;\n    padding-bottom: 130px;\n\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader > h1 {\n    font-size: 48px;\n    font-weight: 600;\n    margin: 0px;\n    margin-left: -5px;\n\n    padding-bottom: 15px;\n}\n\nheader > h4 {\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0px;\n}\n\nheader > p {\n    font-weight: 200;\n    margin: 0px;\n\n    color: var(--header-subtext-color);\n}\n\n/* Navbar */\n\nnav {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n\n    flex: 1;\n\n    color: (--header-text-color);\n}\n\nnav > a {\n    text-decoration: none;\n\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n\n    width: 150px;\n\n    margin: 5px;\n}\n\nnav > a:visited {\n    color: inherit;\n}\n\n/* Nav active states */\nnav > a.active > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a.active {\n    color: var(--accent-color);\n}\n\n/* Nav hover */\nnav > a:hover > .nav-indicator,\nnav > a:focus > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a:hover,\nnav > a:focus {\n    color: var(--accent-color);\n}\n\n.nav-indicator {\n    margin-left: 10px;\n    margin-right: 10px;\n\n    height: 0px;\n    width: 30px;\n\n    border-top: 1px solid var(--header-text-color);\n\n    transition: width 0.5s;\n\n    pointer-events: none;\n}\n\nnav > a > p {\n    text-transform: uppercase;\n    margin: 0px;\n\n    text-transform: uppercase;\n\n    font-size: 18px;\n    font-weight: 600;\n    \n    pointer-events: none;\n}\n\n/* Links styling */\n\nul {\n    list-style-type: none;\n    \n    display: flex;\n    justify-content: center;\n\n    padding: 0px;\n    margin-bottom: 50px;\n}\n\nli > a {\n    text-decoration: none;\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.socials-icon {\n    background-color: var(--header-subtext-color);\n    background-position: center center;\n    mask-repeat: no-repeat;\n\n    width: 28px;\n    height: 28px;\n\n    margin: 5px;\n\n    display: inline-block;\n}\n\n.socials-icon.github {\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n}\n\n.socials-icon.linkedin {\n    -webkit-mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n    mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n}\n\n.socials-icon.email {\n    -webkit-mask-image: url(\"../assets/icons/socials/email.svg\");\n    mask-image: url(\"../assets/icons/socials/email.svg\");\n\n    width: 32px;\n    height: 32px;\n    margin: 3px;\n}\n\nli > a:hover > .socials-icon,\nli > a:focus > .socials-icon {\n    background-color: var(--accent-color);\n}\n\n/* Main content */\n\nmain {\n    background-color: var(--main-background-color);\n    color: var(--main-text-color);\n\n    width: 60%;\n\n    box-sizing: border-box;\n\n    padding-left: 50px;\n    padding-right: 50px;\n\n    padding-bottom: 50px;\n}\n\n/* Page 1 - About section */\n\n#about {\n    padding-top: 25px;\n    padding-bottom: 50px;\n}\n\n/* Theme toggle */\n.toggle-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n/* Default theme */\n.toggle {\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n\n    cursor: pointer;\n\n    transition: background-color 0.15s;\n}\n\n.toggle:hover {\n    background-color: var(--accent-color);\n}\n\n/* Dark mode */\nbody.dark > main > #about > .toggle-wrapper > .toggle{\n    -webkit-mask-image: url(\"../assets/icons/local/moon.svg\");\n    mask-image: url(\"../assets/icons/local/moon.svg\");\n}\n\n.about-content {\n    padding-top: 50px;\n}\n\n.about-content > h1 {\n    font-size: 84px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n.about-content > p {\n    font-size: 20px;\n    color: var(--main-subtext-color);\n}\n\n/* Page 2 - Projects  */\n\n.project-content {\n    padding-top: 50px;\n}\n\n.project-content > h1 {\n    font-size: 32px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n/* Project Cards */\n.project {\n    background-color: var(--card-background-color);\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    border-radius: 5px;\n\n    margin-top: 25px;\n\n    cursor: pointer;\n\n    transition: transform 0.3s;\n}\n\n.project-main {\n    display: flex;\n}\n\n.project-aside {\n    padding: 15px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-right {\n    flex: 1;\n\n    padding: 15px;\n}\n\n.project-img {\n    /* Temp */\n    width: 100px;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n\n    border-radius: 5px;\n}\n\n.project-text{\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.project-name  {\n    display: flex;\n    align-items: center;\n\n    font-size: 32px;\n    font-weight: 500;\n\n    margin: 0px;\n}\n\n.project-desc {\n    font-size: 16px;\n    color: var(--main-subtext-color);\n    margin: 0px;\n}\n\n.project-foot {\n    display: flex;\n\n    padding-top: 15px;\n}\n\n/* Github repo + live icon */\n\n.project-repo {\n    transition: all 0.3s;\n}\n\n.project-repo > a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-right: 15px;\n}\n\n.repo-icon {\n    width: 22px;\n    height: 22px;\n\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.3s;\n}\n\n.live-icon {\n    width: 20px;\n    height: 20px;\n\n    position: absolute;\n    top: 25px;\n    right: 25px;\n\n    background-color: transparent;\n    -webkit-mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.15s;\n}\n\n/* Tool Icon Styling */\n.project-tools {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    gap: 15px;\n}\n\n.tool {\n    width: 20px;\n    height: 20px;\n\n    background-position: center center;\n    background-size: contain;\n}\n\n.HTML {\n    background-image: url(\"../assets/icons/tools/html.svg\");\n}\n\n.CSS {\n    background-image: url(\"../assets/icons/tools/css.svg\");\n}\n\n.JS {\n    background-image: url(\"../assets/icons/tools/js.svg\");\n}\n\n.REACT {\n    background-image: url(\"../assets/icons/tools/react.svg\");\n}\n\n.NODEJS {\n    background-image: url(\"../assets/icons/tools/nodejs.svg\");\n}\n\n.NPM {\n    background-image: url(\"../assets/icons/tools/npm.svg\");\n}\n\n.REACTBOOTSTRAP {\n    background-image: url(\"../assets/icons/tools/reactbootstrap.svg\");\n}\n\n.TAILWIND {\n    background-image: url(\"../assets/icons/tools/tailwind.svg\");\n}\n\n.VITEST {\n    background-image: url(\"../assets/icons/tools/vitest.svg\");\n}\n\n.REACTROUTER {\n    background-image: url(\"../assets/icons/tools/reactrouter.svg\");\n}\n\n.NETLIFY {\n    background-image: url(\"../assets/icons/tools/netlify.svg\");\n}\n\n.EXPRESS {\n    background-image: url(\"../assets/icons/tools/express.svg\");\n}\n\n.POSTGRESQL {\n    background-image: url(\"../assets/icons/tools/postgresql.svg\");\n}\n\n.PRISMA {\n    background-image: url(\"../assets/icons/tools/prisma.svg\");\n}\n\n.RAILWAY {\n    background-image: url(\"../assets/icons/tools/railway.svg\");\n}\n\n/* Project hover */\n.project:hover, .project:focus {\n    transform: scale(1.03);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .live-icon {\n    top: 15px;\n    right: 15px;\n\n    background-color: var(--accent-color);\n}\n\n.repo-icon:hover {\n    background-color: var(--accent-color);\n    transform: rotate(360deg);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .project-name {\n    color: var(--accent-color);\n}\n\n/* Media queries */\n\n@media only screen and (max-width: 820px) {\n    body {\n        justify-content: center;\n\n        position: relative;\n    }\n\n    header {\n        height: 100px;\n        width: 100%;\n        padding: 0;\n        top: 0;\n\n        background-color: var(--header-color-2);\n\n        z-index: 1;\n    }\n\n    header > h1, header > h4, header > p {\n        display: none;\n    }\n\n    nav {\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        margin-top: 15px;\n    }\n\n    nav > a{\n        height: 40px;\n        margin: 0;\n    }\n\n    ul {\n        margin: 0;\n        margin-bottom: 5px;\n    }\n\n    .toggle-wrapper {\n        position: fixed;\n        z-index: 1;\n\n        top: 60px;\n        right: 25px;\n    }\n\n    main {\n        width: 100%;\n\n        position: absolute;\n        top: 100px;\n\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n\n    #projects {\n        padding-top: 50px;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .project-tools {\n        gap: 5px;\n    }\n\n    .tool {\n        width: 16px;\n        height: 16px;\n    }\n\n    .project-name {\n        font-size: 20px;\n    }\n\n    .project-main {\n        flex-direction: column;\n    }\n\n    .project-aside {\n        height: 200px;\n    }\n\n    .project-img {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/icons/local/favicon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/local/favicon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db419f6d630092d97dd2.png";

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

/***/ "./src/assets/icons/tools/express.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/tools/express.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4925c0127df8857c18b3.svg";

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

/***/ "./src/assets/icons/tools/netlify.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/tools/netlify.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d7b89fb182c89ddb365.svg";

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

/***/ "./src/assets/icons/tools/postgresql.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/tools/postgresql.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fb83da449765ce30a34.svg";

/***/ }),

/***/ "./src/assets/icons/tools/prisma.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/prisma.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "229e6dee9c99e90511be.svg";

/***/ }),

/***/ "./src/assets/icons/tools/railway.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/tools/railway.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47484cece49f7137294d.svg";

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

module.exports = __webpack_require__.p + "2dc6d71fbe8c6ee76097.svg";

/***/ }),

/***/ "./src/assets/icons/tools/reactrouter.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/tools/reactrouter.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d18ae6ddd5d0c041906c.svg";

/***/ }),

/***/ "./src/assets/icons/tools/tailwind.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/tools/tailwind.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b3f5baf8ad130d320c5.svg";

/***/ }),

/***/ "./src/assets/icons/tools/vitest.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/vitest.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f87d932b6998f5430a3b.svg";

/***/ }),

/***/ "./src/assets/screenshots/Wavelength.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/Wavelength.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7f1a22e5d05709d19be.png";

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

/***/ "./src/assets/screenshots/filestorage.png":
/*!************************************************!*\
  !*** ./src/assets/screenshots/filestorage.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c68a51f9768b17f7ccd.png";

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
/* harmony import */ var _assets_icons_local_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/local/favicon.png */ "./src/assets/icons/local/favicon.png");



document.getElementById("favicon").href = _assets_icons_local_favicon_png__WEBPACK_IMPORTED_MODULE_2__;
_modules_interface__WEBPACK_IMPORTED_MODULE_1__["default"].init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsYUFBYSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssYUFBYSxZQUFZLFVBQVUsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxhQUFhLGNBQWMsY0FBYyxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxV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RDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNpQjtBQUNVO0FBRXREdUIsUUFBUSxDQUFDMkQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEdBQUdGLDREQUFPO0FBRWpEdEUsMERBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5pbXBvcnQgRXRjaEFTa2V0Y2ggZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9ldGNoYXNrZXRjaC5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdcIjtcbmltcG9ydCBSZXBNZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3JlcG1lLnBuZ1wiO1xuaW1wb3J0IFRpY1RhY1RvZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3RpY3RhY3RvZS5wbmdcIjtcbmltcG9ydCBUaGluZ3NUb0RvIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGhpbmdzdG9kby5wbmdcIjtcbmltcG9ydCBNeU9ic2VydmF0b3J5IGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvbXlvYnNlcnZhdG9yeS5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvYmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBSZXN1bWVHZW5lcmF0b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9yZXN1bWVnZW5lcmF0b3IucG5nXCJcbmltcG9ydCBXYXZlbGVuZ3RoIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvV2F2ZWxlbmd0aC5wbmdcIjtcbmltcG9ydCBGaWxlU3RvcmFnZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL2ZpbGVzdG9yYWdlLnBuZ1wiXG5cblxuY29uc3QgSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gc2V0U3RvcmFnZSgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoc3RvcmFnZSk7XG4gICAgICAgIHRvZ2dsZVRoZW1lKCk7XG4gICAgICAgIHNjcm9sbE5hdkxpbmtBY3RpdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKCkge1xuICAgICAgICAvLyBNYW51YWwgc3RvcmFnZSBzZWxlY3Rpb25cbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChFdGNoQVNrZXRjaCxcIkV0Y2gtQS1Ta2V0Y2hcIiwgXG4gICAgICAgICAgICBcIkEgc2ltcGxlIHNrZXRjaGJvb2sgYXBwIHN1cHBvcnRpbmcgZHluYW1pYyBncmlkLXNpemVzLiBUaGlzIHdhcyBvbmUgb2YgbXkgZmlyc3QgcHJvamVjdHMgaW1wbGVtZW50aW5nIEpTIG9uIGEgd2VicGFnZS5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9ldGNoLWEtc2tldGNoXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2V0Y2gtYS1za2V0Y2gvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KENhbGN1bGF0b3IsXCJDYWxjdWxhdG9yXCIsIFxuICAgICAgICAgICAgXCJBIHJlY3JlYXRpb24gb2YgQXBwbGUgSU9TIGNhbGN1bGF0b3IgYXBwIHdpdGgga2V5Ym9hcmQgc3VwcG9ydC5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9jYWxjdWxhdG9yXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2NhbGN1bGF0b3IvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFJlcE1lLCBcIlJlcE1lXCIsIFxuICAgICAgICAgICAgXCJBIGRhc2hib2FyZCBmcm9udC1lbmQgb25seSBkZXNpZ24gZm9yIGEgd29ya291dCBzb2NpYWwgcGxhdGZvcm0uIFV0aWxpemVkIHJhbmRvbWl6ZWQgZHVtbXkgY29udGVudCB0byBzaW11bGF0ZSBiYWNrLWVuZC5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvcmVwbWUtZGFzaGJvYXJkXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL3JlcG1lLWRhc2hib2FyZC9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoVGljVGFjVG9lLCBcIlRpY1RhY1RvZVwiLCBcbiAgICAgICAgICAgIFwiSW50ZXJhY3RpdmUgVGljLVRhYy1Ub2UgZ2FtZSBzdXBwb3J0aW5nIFB2UCBhbmQgUHZDIHdpdGggcmFuZ2luZyBkaWZmaWN1bHR5LiBJbXBsZW1lbnRlZCBtaW5pbWF4IGFsZ29yaXRobSBmb3IgY29tcHV0ZXIgZGVjaXNpb24tbWFraW5nLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3RpY3RhY3RvZVwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby90aWN0YWN0b2UvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFRoaW5nc1RvRG8sIFwiVGhpbmdzVG9Eb1wiLCBcbiAgICAgICAgICAgIFwiVG9kbyBsaXN0IHdpdGggZnVsbHkgY3VzdG9taXphYmxlIHByb2plY3RzICYgdG9kb3MuIEF1dG9tYXRpY2FsbHkgc2F2ZSBjb250ZW50IHVzaW5nIGxvY2FsU3RvcmFnZSBBUEkuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIiwgXCJucG1cIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvdGhpbmdzVG9Eb1wiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby90aGluZ3NUb0RvL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChNeU9ic2VydmF0b3J5LCBcIk15IE9ic2VydmF0b3J5XCIsIFxuICAgICAgICAgICAgXCJTaW1wbGUgd2VhdGhlciBhcHAgdG8gcXVlcnkgYW55IGxvY2F0aW9uIGZvciByZWFsIHRpbWUgZGF0YSB1c2luZyBXZWF0aGVyQVBJLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL215LW9ic2VydmF0b3J5XCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL215LW9ic2VydmF0b3J5L1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChCYXR0bGVzaGlwLCBcIkJhdHRsZXNoaXBcIiwgXG4gICAgICAgICAgICBcIlB2QyBiYXR0bGVzaGlwIGdhbWUuIEludGVyYWN0aXZlbHkgZHJhZywgZHJvcCwgYW5kIHJvdGF0ZSBzaGlwcywgYW5kIGJhdHRsZSBhbiBpbnRlbGxpZ2VudCBhZ2VudCBtYWtpbmcgY29tcHV0ZXIgZGVjaXNpb25zLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL2JhdHRsZXNoaXBcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vYmF0dGxlc2hpcC9cIn1cbiAgICAgICAgKTsgICBcbiAgICAgICAgXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChSZXN1bWVHZW5lcmF0b3IsIFwiUmVzdW1lIEdlbmVyYXRvclwiLCBcbiAgICAgICAgICAgIFwiQSBmdWxseSBhZGFwdGl2ZSByZXN1bWUgZ2VuZXJhdG9yIGRldmVsb3BlZCB1c2luZyBSZWFjdEpTIGFuZCBSZWFjdCBCb290c3RyYXAuIEN1c3RvbWl6ZSBmaWVsZHMsIGNhdGVnb3JpZXMsIGFuZCBzdHlsaW5nLiBDb21wbGV0ZWx5IHJlc3BvbnNpdmUgb3V0cHV0IGF1dG9tYXRpY2FsbHkgc2NhbGVkIHdpdGggQTQgYXNwZWN0IHJhdGlvXCIsXG4gICAgICAgICAgICBbXCJyZWFjdFwiLCBcInJlYWN0Ym9vdHN0cmFwXCIsIFwiQ1NTXCIsIFwibnBtXCIsIFwibmV0bGlmeVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9jdi1idWlsZGVyXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL3N1cGVyYi1kdWNrYW5vby1hMjIzYjQubmV0bGlmeS5hcHAvXCJ9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoV2F2ZWxlbmd0aCwgXCJXYXZlbGVuZ3RoXCIsIFxuICAgICAgICAgICAgXCJBIG1vY2sgZS1jb21tZXJjZSBzaXRlIGJ1aWx0IHdpdGggUmVhY3RKUyBhbmQgVGFpbHdpbmRDU1MsIHV0aWxpemluZyB0aGUgUGxhdHppIEZha2UgU3RvcmUgQVBJLiBJdCBpbmNsdWRlcyBkeW5hbWljIHJvdXRpbmcgdmlhIFJlYWN0IFJvdXRlciBhbmQgdGVzdGluZyB3aXRoIFJlYWN0IFRlc3RpbmcgTGlicmFyeSBhbmQgVml0ZXN0LlwiLFxuICAgICAgICAgICAgW1wicmVhY3RcIiwgXCJ0YWlsd2luZFwiLCBcInZpdGVzdFwiLCBcInJlYWN0cm91dGVyXCIsIFwibnBtXCIsIFwibmV0bGlmeVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9zaG9wcGluZy1jYXJ0XCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL21haW4tLWVmZmVydmVzY2VudC1icmlnYWRlaXJvcy0wZGE3OTUubmV0bGlmeS5hcHAvXCJ9XG4gICAgICAgICk7IFxuICAgICAgICBcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KEZpbGVTdG9yYWdlLCBcIkZpbGUgU3RvcmFnZVwiLCBcbiAgICAgICAgICAgIFwiQSBmdWxsLXN0YWNrIGZpbGUgc3RvcmFnZSBhcHBsaWNhdGlvbiBidWlsdCB3aXRoIG5vZGVKUyBhbmQgZXhwcmVzcy4gVXNlciBhdXRoZW50aWNhdGlvbiB1c2luZyBwYXNzcG9ydEpTLCBQcmlzbWEgT1JNIHdpdGggUG9zdEdyZXNxbCBmb3IgZGF0YWJhc2UsIGFuZCBjbG91ZGluYXJ5IGZvciBzY2FsYWJsZSBjbG91ZCBzdG9yYWdlLiBEZXBsb3llZCBvbiBSYWlsd2F5IGFuZCBTdXBhaG9zdC5cIixcbiAgICAgICAgICAgIFtcIm5vZGVqc1wiLCBcImV4cHJlc3NcIiwgXCJwb3N0Z3Jlc3FsXCIsIFwicHJpc21hXCIsIFwidGFpbHdpbmRcIiwgXCJucG1cIiwgXCJyYWlsd2F5XCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3Nob3BwaW5nLWNhcnRcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vbWFpbi0tZWZmZXJ2ZXNjZW50LWJyaWdhZGVpcm9zLTBkYTc5NS5uZXRsaWZ5LmFwcC9cIn1cbiAgICAgICAgKTsgICBcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5wcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdExpc3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy13cmFwcGVyXCIpXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFpbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1tYWluXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RBc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXNpZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXNpZGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3Byb2plY3Quc2NyZWVuc2hvdH0pYDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBc2lkZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmlnaHRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljb24gdG8gZGVtb25zdHJhdGUgbGl2ZSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpdmUuY2xhc3NMaXN0LmFkZChcImxpdmUtaWNvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKGxpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvb3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29scy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvb2xzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9vbHMuZm9yRWFjaCgodG9vbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0b29sXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCh0b29sLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29scy5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVwb1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGh5cGVybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoeXBlcmxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7cHJvamVjdC5saW5rcy5yZXBvfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cGVybGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIGBfYmxhbmtgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBlcmxpbmsub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHByb2plY3QubGlua3MucmVwbywgJ19ibGFuaycpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9JY29uLmNsYXNzTGlzdC5hZGQoJ3JlcG8taWNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLmFwcGVuZENoaWxkKHJlcG9JY29uKTsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5hcHBlbmRDaGlsZChoeXBlcmxpbmspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZCh0b29scyk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZChyZXBvKTsgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RGb290KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RNYWluLmFwcGVuZENoaWxkKHByb2plY3RBc2lkZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFJpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RNYWluKTtcblxuICAgICAgICAgICAgcHJvamVjdENhcmQub25jbGljayA9IChlKSA9PntcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocHJvamVjdC5saW5rcy5saXZlLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsTmF2TGlua0FjdGl2ZSgpIHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgZWFjaCBzZWN0aW9uIG9mZnNldFRvcCBwcm9wZXJ0eSwgY29tcGFyZSB3aXRoIHNjcm9sbCBZXG4gICAgICAgICAgICAvLyBJZiBzY3JvbGxZIGlzIHdpdGhpbiBzZWN0aW9uLCB0aGVuIGFkZCBpdCBhcyBhIGNsYXNzIHRvIG5hdiBlbGVtZW50XG4gICAgICAgICAgICAvLyBOZWVkIHRvIHN1YnRyYWN0IGFyYml0cmFyeSB2YWx1ZSAtIFxuICAgICAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBzZWN0aW9uVG9wIC0gNjApIHsgXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIik7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2ID4gYVwiKTtcbiAgICAgICAgICAgIG5hdkxpbmtzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICBpZiAoYS5jbGFzc0xpc3QuY29udGFpbnMoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xuICAgICAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90ID0gc2NyZWVuc2hvdDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy50b29scyA9IHRvb2xzO1xuICAgICAgICB0aGlzLmxpbmtzID0gbGlua3M7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID09IG5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qZWN0KHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcyk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QudW5zaGlmdChuZXdQcm9qKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvbW9vbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2h0bWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2Nzcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvanMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbm9kZWpzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbnBtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Rib290c3RyYXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy90YWlsd2luZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZpdGVzdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0cm91dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbmV0bGlmeS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2V4cHJlc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9wb3N0Z3Jlc3FsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcHJpc21hLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmFpbHdheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdydXBwbyZmYW1pbHk9TXVrdGE6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRm9udCAqL1xuXG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aCA7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXG4gICAgLS1oZWFkZXItY29sb3I6ICNmNWYzZjQ7XG4gICAgLS1oZWFkZXItY29sb3ItMjogI2U1ZTVlNTtcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiByZ2IoMTI3LCAxMjUsIDEyNSk7XG5cbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcblxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOWZhO1xuXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XG5cbiAgICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmJvZHkuZGFyayB7XG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXG4gICAgLS1oZWFkZXItY29sb3I6ICMwZDFiMmE7XG4gICAgLS1oZWFkZXItY29sb3ItMjogIzA4MTQyMDtcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiAjZjBmMWVlO1xuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XG5cbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogIzBkMWIyYTtcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XG5cbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogIzFiMjYzYjtcblxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xufVxuXG4vKiBIZWFkZXIgY29udGVudCAqL1xuXG5oZWFkZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG4gICAgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVyID4gaDEge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmhlYWRlciA+IGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaGVhZGVyID4gcCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XG59XG5cbi8qIE5hdmJhciAqL1xuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZmxleDogMTtcblxuICAgIGNvbG9yOiAoLS1oZWFkZXItdGV4dC1jb2xvcik7XG59XG5cbm5hdiA+IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbm5hdiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIE5hdiBhY3RpdmUgc3RhdGVzICovXG5uYXYgPiBhLmFjdGl2ZSA+IC5uYXYtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdiA+IGEuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTmF2IGhvdmVyICovXG5uYXYgPiBhOmhvdmVyID4gLm5hdi1pbmRpY2F0b3IsXG5uYXYgPiBhOmZvY3VzID4gLm5hdi1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxubmF2ID4gYTpob3Zlcixcbm5hdiA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubmF2LWluZGljYXRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG5cbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xuXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcblxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5uYXYgPiBhID4gcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTGlua3Mgc3R5bGluZyAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubGkgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5zb2NpYWxzLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG5cbiAgICBtYXJnaW46IDVweDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvY2lhbHMtaWNvbi5naXRodWIge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnNvY2lhbHMtaWNvbi5saW5rZWRpbiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uc29jaWFscy1pY29uLmVtYWlsIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbmxpID4gYTpob3ZlciA+IC5zb2NpYWxzLWljb24sXG5saSA+IGE6Zm9jdXMgPiAuc29jaWFscy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBNYWluIGNvbnRlbnQgKi9cblxubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcblxuICAgIHdpZHRoOiA2MCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLyogUGFnZSAxIC0gQWJvdXQgc2VjdGlvbiAqL1xuXG4jYWJvdXQge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4vKiBUaGVtZSB0b2dnbGUgKi9cbi50b2dnbGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIERlZmF1bHQgdGhlbWUgKi9cbi50b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cztcbn1cblxuLnRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogRGFyayBtb2RlICovXG5ib2R5LmRhcmsgPiBtYWluID4gI2Fib3V0ID4gLnRvZ2dsZS13cmFwcGVyID4gLnRvZ2dsZXtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBoMSB7XG4gICAgZm9udC1zaXplOiA4NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQgPiBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG59XG5cbi8qIFBhZ2UgMiAtIFByb2plY3RzICAqL1xuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnByb2plY3QtY29udGVudCA+IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgIG1hcmdpbjogMHB4O1xufVxuXG4vKiBQcm9qZWN0IENhcmRzICovXG4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ucHJvamVjdC1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdC1hc2lkZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtcmlnaHQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJvamVjdC1pbWcge1xuICAgIC8qIFRlbXAgKi9cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRleHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1uYW1lICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnByb2plY3QtZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ucHJvamVjdC1mb290IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi8qIEdpdGh1YiByZXBvICsgbGl2ZSBpY29uICovXG5cbi5wcm9qZWN0LXJlcG8ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJvamVjdC1yZXBvID4gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmVwby1pY29uIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5saXZlLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLyogVG9vbCBJY29uIFN0eWxpbmcgKi9cbi5wcm9qZWN0LXRvb2xzIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBnYXA6IDE1cHg7XG59XG5cbi50b29sIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLkhUTUwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cblxuLkNTUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xufVxuXG4uSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbn1cblxuLlJFQUNUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG59XG5cbi5OT0RFSlMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7XG59XG5cbi5OUE0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XG59XG5cbi5SRUFDVEJPT1RTVFJBUCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcbn1cblxuLlRBSUxXSU5EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fX30pO1xufVxuXG4uVklURVNUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fX30pO1xufVxuXG4uUkVBQ1RST1VURVIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19ffSk7XG59XG5cbi5ORVRMSUZZIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fX30pO1xufVxuXG4uRVhQUkVTUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX199KTtcbn1cblxuLlBPU1RHUkVTUUwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19ffSk7XG59XG5cbi5QUklTTUEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19ffSk7XG59XG5cbi5SQUlMV0FZIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fX30pO1xufVxuXG4vKiBQcm9qZWN0IGhvdmVyICovXG4ucHJvamVjdDpob3ZlciwgLnByb2plY3Q6Zm9jdXMge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5saXZlLWljb24ge1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5yZXBvLWljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLnByb2plY3QtbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgIGJvZHkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItMik7XG5cbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBoZWFkZXIgPiBoMSwgaGVhZGVyID4gaDQsIGhlYWRlciA+IHAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIG5hdiA+IGF7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLnRvZ2dsZS13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDBweDtcblxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgI3Byb2plY3RzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnByb2plY3QtdG9vbHMge1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG5cbiAgICAudG9vbCB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1tYWluIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucHJvamVjdC1hc2lkZSB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUdUO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhDQUE4Qzs7SUFFOUMsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDBDQUEwQzs7SUFFMUMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQ0FBcUM7O0lBRXJDLGdDQUFnQzs7SUFFaEMsdUJBQXVCOztJQUV2QixnQ0FBZ0M7SUFDaEMsZ0JBQWdC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QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJO1FBQ0ksdUJBQXVCOztRQUV2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLFVBQVU7UUFDVixNQUFNOztRQUVOLHVDQUF1Qzs7UUFFdkMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7O1FBRVYsU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7O1FBRVgsa0JBQWtCO1FBQ2xCLFVBQVU7O1FBRVYsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdydXBwbyZmYW1pbHk9TXVrdGE6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoIDtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjZjVmM2Y0O1xcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjZTVlNWU1O1xcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiBibGFjaztcXG4gICAgLS1oZWFkZXItc3VidGV4dC1jb2xvcjogcmdiKDEyNywgMTI1LCAxMjUpO1xcblxcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcXG4gICAgLS1tYWluLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xcblxcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogI2ZiZjlmYTtcXG5cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuYm9keS5kYXJrIHtcXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjMGQxYjJhO1xcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjMDgxNDIwO1xcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiAjZjBmMWVlO1xcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xcblxcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogIzBkMWIyYTtcXG4gICAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogI2Q0ZDVkMztcXG5cXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICMxYjI2M2I7XFxuXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xcbn1cXG5cXG4vKiBIZWFkZXIgY29udGVudCAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaGVhZGVyID4gaDQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBmbGV4OiAxO1xcblxcbiAgICBjb2xvcjogKC0taGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDE1MHB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxubmF2ID4gYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIE5hdiBhY3RpdmUgc3RhdGVzICovXFxubmF2ID4gYS5hY3RpdmUgPiAubmF2LWluZGljYXRvciB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbm5hdiA+IGEuYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIE5hdiBob3ZlciAqL1xcbm5hdiA+IGE6aG92ZXIgPiAubmF2LWluZGljYXRvcixcXG5uYXYgPiBhOmZvY3VzID4gLm5hdi1pbmRpY2F0b3Ige1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhOmhvdmVyLFxcbm5hdiA+IGE6Zm9jdXMge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1pbmRpY2F0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxuXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5uYXYgPiBhID4gcCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIFxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogTGlua3Mgc3R5bGluZyAqL1xcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxubGkgPiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zb2NpYWxzLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuXFxuICAgIG1hcmdpbjogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zb2NpYWxzLWljb24uZ2l0aHViIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxufVxcblxcbi5zb2NpYWxzLWljb24ubGlua2VkaW4ge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXFxcIik7XFxufVxcblxcbi5zb2NpYWxzLWljb24uZW1haWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXFxcIik7XFxuXFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5saSA+IGE6aG92ZXIgPiAuc29jaWFscy1pY29uLFxcbmxpID4gYTpmb2N1cyA+IC5zb2NpYWxzLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuXFxuICAgIHdpZHRoOiA2MCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFBhZ2UgMSAtIEFib3V0IHNlY3Rpb24gKi9cXG5cXG4jYWJvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFRoZW1lIHRvZ2dsZSAqL1xcbi50b2dnbGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIERlZmF1bHQgdGhlbWUgKi9cXG4udG9nZ2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9zdW4uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxufVxcblxcbi50b2dnbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBEYXJrIG1vZGUgKi9cXG5ib2R5LmRhcmsgPiBtYWluID4gI2Fib3V0ID4gLnRvZ2dsZS13cmFwcGVyID4gLnRvZ2dsZXtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1xcXCIpO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA4NHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogUGFnZSAyIC0gUHJvamVjdHMgICovXFxuXFxuLnByb2plY3QtY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50ID4gaDEge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IENhcmRzICovXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdC1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtYXNpZGUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtcmlnaHQge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbWcge1xcbiAgICAvKiBUZW1wICovXFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvb3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLyogR2l0aHViIHJlcG8gKyBsaXZlIGljb24gKi9cXG5cXG4ucHJvamVjdC1yZXBvIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LXJlcG8gPiBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnJlcG8taWNvbiB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubGl2ZS1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXFxcIik7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4vKiBUb29sIEljb24gU3R5bGluZyAqL1xcbi5wcm9qZWN0LXRvb2xzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50b29sIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uSFRNTCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2h0bWwuc3ZnXFxcIik7XFxufVxcblxcbi5DU1Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9jc3Muc3ZnXFxcIik7XFxufVxcblxcbi5KUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2pzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uUkVBQ1Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdC5zdmdcXFwiKTtcXG59XFxuXFxuLk5PREVKUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL25vZGVqcy5zdmdcXFwiKTtcXG59XFxuXFxuLk5QTSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL25wbS5zdmdcXFwiKTtcXG59XFxuXFxuLlJFQUNUQk9PVFNUUkFQIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Rib290c3RyYXAuc3ZnXFxcIik7XFxufVxcblxcbi5UQUlMV0lORCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3RhaWx3aW5kLnN2Z1xcXCIpO1xcbn1cXG5cXG4uVklURVNUIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvdml0ZXN0LnN2Z1xcXCIpO1xcbn1cXG5cXG4uUkVBQ1RST1VURVIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdHJvdXRlci5zdmdcXFwiKTtcXG59XFxuXFxuLk5FVExJRlkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9uZXRsaWZ5LnN2Z1xcXCIpO1xcbn1cXG5cXG4uRVhQUkVTUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2V4cHJlc3Muc3ZnXFxcIik7XFxufVxcblxcbi5QT1NUR1JFU1FMIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcG9zdGdyZXNxbC5zdmdcXFwiKTtcXG59XFxuXFxuLlBSSVNNQSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ByaXNtYS5zdmdcXFwiKTtcXG59XFxuXFxuLlJBSUxXQVkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yYWlsd2F5LnN2Z1xcXCIpO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGhvdmVyICovXFxuLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0OmZvY3VzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLmxpdmUtaWNvbiB7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5yZXBvLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAucHJvamVjdC1uYW1lIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItMik7XFxuXFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciA+IGgxLCBoZWFkZXIgPiBoNCwgaGVhZGVyID4gcCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgfVxcblxcbiAgICBuYXYgPiBhe1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcblxcbiAgICAudG9nZ2xlLXdyYXBwZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMTtcXG5cXG4gICAgICAgIHRvcDogNjBweDtcXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMHB4O1xcblxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHMge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAucHJvamVjdC10b29scyB7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcblxcbiAgICAudG9vbCB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1tYWluIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtYXNpZGUge1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1pbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL21vZHVsZXMvaW50ZXJmYWNlJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2xvY2FsL2Zhdmljb24ucG5nJ1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhdmljb25cIikuaHJlZiA9IEZhdmljb247XG5cbkludGVyZmFjZS5pbml0KCk7Il0sIm5hbWVzIjpbIlByb2plY3RMaXN0IiwiRXRjaEFTa2V0Y2giLCJDYWxjdWxhdG9yIiwiUmVwTWUiLCJUaWNUYWNUb2UiLCJUaGluZ3NUb0RvIiwiTXlPYnNlcnZhdG9yeSIsIkJhdHRsZXNoaXAiLCJSZXN1bWVHZW5lcmF0b3IiLCJXYXZlbGVuZ3RoIiwiRmlsZVN0b3JhZ2UiLCJJbnRlcmZhY2UiLCJpbml0Iiwic3RvcmFnZSIsInNldFN0b3JhZ2UiLCJkaXNwbGF5UHJvamVjdHMiLCJ0b2dnbGVUaGVtZSIsInNjcm9sbE5hdkxpbmtBY3RpdmUiLCJhZGRQcm9qZWN0IiwicmVwbyIsImxpdmUiLCJwcm9qZWN0TGlzdCIsInByb2plY3RzV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3QiLCJwcm9qZWN0Q2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcm9qZWN0TWFpbiIsInByb2plY3RBc2lkZSIsImltZyIsInN0eWxlIiwic2NyZWVuc2hvdCIsImFwcGVuZENoaWxkIiwicHJvamVjdFJpZ2h0IiwicHJvamVjdFRleHQiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJkZXNjIiwicHJvamVjdEZvb3QiLCJ0b29scyIsImZvckVhY2giLCJ0b29sIiwiaWNvbiIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoeXBlcmxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJvbmNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIndpbmRvdyIsIm9wZW4iLCJsaW5rcyIsImZvY3VzIiwicmVwb0ljb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uc2Nyb2xsIiwiY3VycmVudCIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2Nyb2xsWSIsImdldEF0dHJpYnV0ZSIsIm5hdkxpbmtzIiwiYSIsInJlbW92ZSIsImNvbnRhaW5zIiwiYnRuIiwiYm9keSIsInRvZ2dsZSIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsImdldFByb2plY3QiLCJmaW5kIiwibmV3UHJvaiIsInVuc2hpZnQiLCJGYXZpY29uIiwiZ2V0RWxlbWVudEJ5SWQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==