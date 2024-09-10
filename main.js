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
/* harmony import */ var _assets_screenshots_Flexor_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/screenshots/Flexor.png */ "./src/assets/screenshots/Flexor.png");












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
    storage.addProject(_assets_screenshots_filestorage_png__WEBPACK_IMPORTED_MODULE_10__, "File Storage", "A full-stack file storage application built with nodeJS and expressJS. User authentication using passportJS, Prisma ORM with PostGresql for database, and cloudinary for scalable cloud storage. Deployed app on Railway and database on Supabase.", ["nodejs", "express", "postgresql", "prisma", "tailwind", "npm", "railway", "supabase"], {
      repo: "https://github.com/HarryAhnHS/file-storage",
      live: "https://file-storage-production.up.railway.app/"
    });
    storage.addProject(_assets_screenshots_Flexor_png__WEBPACK_IMPORTED_MODULE_11__, "Flexor", "A full-stack social media platform built with the PERN stack (PostgreSQL, Express, React, Node.js), featuring jwt token authentication and real-time notifications via Socket.IO. The platform enables users to create and join realms, make posts, like content, and engage in nested comment threads, providing a dynamic and interactive social experience."[("nodejs", "express", "react", "postgresql", "prisma", "socketio", "tailwind", "vite", "npm", "vercel", "heroku", "supabase")], {
      repo: "https://github.com/HarryAhnHS/flexor-front-end/tree/main",
      live: "https://flexor-front-end-2c6r.vercel.app/"
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
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/supabase.svg */ "./src/assets/icons/tools/supabase.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/socketio.svg */ "./src/assets/icons/tools/socketio.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/heroku.svg */ "./src/assets/icons/tools/heroku.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/vercel.svg */ "./src/assets/icons/tools/vercel.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/tools/vite.svg */ "./src/assets/icons/tools/vite.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
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
    --header-color-2: #112336;
    --header-text-color: #f0f1ee;
    --header-subtext-color: #d4d5d3;

    --main-background-color: #0d1b2a;
    --main-text-color: white;
    --main-subtext-color: #d4d5d3;

    --card-background-color: #3b4966;

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

.SUPABASE {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___});
}

.SOCKETIO {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___});
}

.HEROKU {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___});
}

.VERCEL {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___});
}

.VITE {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Mukta:wght@200;300;400;500;600;700;800&display=swap');\n\nhtml {\n    scroll-behavior: smooth ;\n}\n\nimg {\n    max-width: 100%;\n}\n\nbody {\n    background-color: var(--main-background-color);\n\n    /* Custom properties for theme */\n    --header-color: #f5f3f4;\n    --header-color-2: #e5e5e5;\n    --header-text-color: black;\n    --header-subtext-color: rgb(127, 125, 125);\n\n    --main-background-color: #f5f3f4;\n    --main-text-color: black;\n    --main-subtext-color: rgb(93, 93, 93);\n\n    --card-background-color: #fbf9fa;\n\n    --accent-color: #ff715b;\n\n    font-family: 'Mukta', sans-serif;\n    font-weight: 300;\n\n    margin: 0px;\n\n    display: flex;\n    justify-content: flex-end;\n}\n\nbody.dark {\n    /* Custom properties for theme */\n    --header-color: #0d1b2a;\n    --header-color-2: #112336;\n    --header-text-color: #f0f1ee;\n    --header-subtext-color: #d4d5d3;\n\n    --main-background-color: #0d1b2a;\n    --main-text-color: white;\n    --main-subtext-color: #d4d5d3;\n\n    --card-background-color: #3b4966;\n\n    --accent-color: #ff715b;\n}\n\n/* Header content */\n\nheader {\n    height: 100vh;\n    width: 40%;\n    background-color: var(--header-color);\n    color: var(--header-text-color);\n    \n    position: fixed;\n    top:0;\n    left: 0;\n\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 130px;\n    padding-bottom: 130px;\n\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader > h1 {\n    font-size: 48px;\n    font-weight: 600;\n    margin: 0px;\n    margin-left: -5px;\n\n    padding-bottom: 15px;\n}\n\nheader > h4 {\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0px;\n}\n\nheader > p {\n    font-weight: 200;\n    margin: 0px;\n\n    color: var(--header-subtext-color);\n}\n\n/* Navbar */\n\nnav {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n\n    flex: 1;\n\n    color: (--header-text-color);\n}\n\nnav > a {\n    text-decoration: none;\n\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n\n    width: 150px;\n\n    margin: 5px;\n}\n\nnav > a:visited {\n    color: inherit;\n}\n\n/* Nav active states */\nnav > a.active > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a.active {\n    color: var(--accent-color);\n}\n\n/* Nav hover */\nnav > a:hover > .nav-indicator,\nnav > a:focus > .nav-indicator {\n    width: 50px;\n    border-color: var(--accent-color);\n}\n\nnav > a:hover,\nnav > a:focus {\n    color: var(--accent-color);\n}\n\n.nav-indicator {\n    margin-left: 10px;\n    margin-right: 10px;\n\n    height: 0px;\n    width: 30px;\n\n    border-top: 1px solid var(--header-text-color);\n\n    transition: width 0.5s;\n\n    pointer-events: none;\n}\n\nnav > a > p {\n    text-transform: uppercase;\n    margin: 0px;\n\n    text-transform: uppercase;\n\n    font-size: 18px;\n    font-weight: 600;\n    \n    pointer-events: none;\n}\n\n/* Links styling */\n\nul {\n    list-style-type: none;\n    \n    display: flex;\n    justify-content: center;\n\n    padding: 0px;\n    margin-bottom: 50px;\n}\n\nli > a {\n    text-decoration: none;\n    color: inherit;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.socials-icon {\n    background-color: var(--header-subtext-color);\n    background-position: center center;\n    mask-repeat: no-repeat;\n\n    width: 28px;\n    height: 28px;\n\n    margin: 5px;\n\n    display: inline-block;\n}\n\n.socials-icon.github {\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n}\n\n.socials-icon.linkedin {\n    -webkit-mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n    mask-image: url(\"../assets/icons/socials/linkedin.svg\");\n}\n\n.socials-icon.email {\n    -webkit-mask-image: url(\"../assets/icons/socials/email.svg\");\n    mask-image: url(\"../assets/icons/socials/email.svg\");\n\n    width: 32px;\n    height: 32px;\n    margin: 3px;\n}\n\nli > a:hover > .socials-icon,\nli > a:focus > .socials-icon {\n    background-color: var(--accent-color);\n}\n\n/* Main content */\n\nmain {\n    background-color: var(--main-background-color);\n    color: var(--main-text-color);\n\n    width: 60%;\n\n    box-sizing: border-box;\n\n    padding-left: 50px;\n    padding-right: 50px;\n\n    padding-bottom: 50px;\n}\n\n/* Page 1 - About section */\n\n#about {\n    padding-top: 25px;\n    padding-bottom: 50px;\n}\n\n/* Theme toggle */\n.toggle-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n/* Default theme */\n.toggle {\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-image: url(\"../assets/icons/local/sun.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n\n    cursor: pointer;\n\n    transition: background-color 0.15s;\n}\n\n.toggle:hover {\n    background-color: var(--accent-color);\n}\n\n/* Dark mode */\nbody.dark > main > #about > .toggle-wrapper > .toggle{\n    -webkit-mask-image: url(\"../assets/icons/local/moon.svg\");\n    mask-image: url(\"../assets/icons/local/moon.svg\");\n}\n\n.about-content {\n    padding-top: 50px;\n}\n\n.about-content > h1 {\n    font-size: 84px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n.about-content > p {\n    font-size: 20px;\n    color: var(--main-subtext-color);\n}\n\n/* Page 2 - Projects  */\n\n.project-content {\n    padding-top: 50px;\n}\n\n.project-content > h1 {\n    font-size: 32px;\n    font-weight: 100;\n\n    margin: 0px;\n}\n\n/* Project Cards */\n.project {\n    background-color: var(--card-background-color);\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    border-radius: 5px;\n\n    margin-top: 25px;\n\n    cursor: pointer;\n\n    transition: transform 0.3s;\n}\n\n.project-main {\n    display: flex;\n}\n\n.project-aside {\n    padding: 15px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-right {\n    flex: 1;\n\n    padding: 15px;\n}\n\n.project-img {\n    /* Temp */\n    width: 100px;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n\n    border-radius: 5px;\n}\n\n.project-text{\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.project-name  {\n    display: flex;\n    align-items: center;\n\n    font-size: 32px;\n    font-weight: 500;\n\n    margin: 0px;\n}\n\n.project-desc {\n    font-size: 16px;\n    color: var(--main-subtext-color);\n    margin: 0px;\n}\n\n.project-foot {\n    display: flex;\n\n    padding-top: 15px;\n}\n\n/* Github repo + live icon */\n\n.project-repo {\n    transition: all 0.3s;\n}\n\n.project-repo > a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-right: 15px;\n}\n\n.repo-icon {\n    width: 22px;\n    height: 22px;\n\n    background-color: var(--main-subtext-color);\n    -webkit-mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-image: url(\"../assets/icons/socials/github.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.3s;\n}\n\n.live-icon {\n    width: 20px;\n    height: 20px;\n\n    position: absolute;\n    top: 25px;\n    right: 25px;\n\n    background-color: transparent;\n    -webkit-mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-image: url(\"../assets/icons/local/arrow.svg\");\n    mask-repeat: no-repeat;\n\n    display: inline-block;\n\n    transition: all 0.15s;\n}\n\n/* Tool Icon Styling */\n.project-tools {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    gap: 15px;\n}\n\n.tool {\n    width: 20px;\n    height: 20px;\n\n    background-position: center center;\n    background-size: contain;\n}\n\n.HTML {\n    background-image: url(\"../assets/icons/tools/html.svg\");\n}\n\n.CSS {\n    background-image: url(\"../assets/icons/tools/css.svg\");\n}\n\n.JS {\n    background-image: url(\"../assets/icons/tools/js.svg\");\n}\n\n.REACT {\n    background-image: url(\"../assets/icons/tools/react.svg\");\n}\n\n.NODEJS {\n    background-image: url(\"../assets/icons/tools/nodejs.svg\");\n}\n\n.NPM {\n    background-image: url(\"../assets/icons/tools/npm.svg\");\n}\n\n.REACTBOOTSTRAP {\n    background-image: url(\"../assets/icons/tools/reactbootstrap.svg\");\n}\n\n.TAILWIND {\n    background-image: url(\"../assets/icons/tools/tailwind.svg\");\n}\n\n.VITEST {\n    background-image: url(\"../assets/icons/tools/vitest.svg\");\n}\n\n.REACTROUTER {\n    background-image: url(\"../assets/icons/tools/reactrouter.svg\");\n}\n\n.NETLIFY {\n    background-image: url(\"../assets/icons/tools/netlify.svg\");\n}\n\n.EXPRESS {\n    background-image: url(\"../assets/icons/tools/express.svg\");\n}\n\n.POSTGRESQL {\n    background-image: url(\"../assets/icons/tools/postgresql.svg\");\n}\n\n.PRISMA {\n    background-image: url(\"../assets/icons/tools/prisma.svg\");\n}\n\n.RAILWAY {\n    background-image: url(\"../assets/icons/tools/railway.svg\");\n}\n\n.SUPABASE {\n    background-image: url(\"../assets/icons/tools/supabase.svg\");\n}\n\n.SOCKETIO {\n    background-image: url(\"../assets/icons/tools/socketio.svg\");\n}\n\n.HEROKU {\n    background-image: url(\"../assets/icons/tools/heroku.svg\");\n}\n\n.VERCEL {\n    background-image: url(\"../assets/icons/tools/vercel.svg\");\n}\n\n.VITE {\n    background-image: url(\"../assets/icons/tools/vite.svg\");\n}\n\n/* Project hover */\n.project:hover, .project:focus {\n    transform: scale(1.03);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .live-icon {\n    top: 15px;\n    right: 15px;\n\n    background-color: var(--accent-color);\n}\n\n.repo-icon:hover {\n    background-color: var(--accent-color);\n    transform: rotate(360deg);\n}\n\n.project:hover > .project-main > .project-right > .project-text > .project-name {\n    color: var(--accent-color);\n}\n\n/* Media queries */\n\n@media only screen and (max-width: 820px) {\n    body {\n        justify-content: center;\n\n        position: relative;\n    }\n\n    header {\n        height: 100px;\n        width: 100%;\n        padding: 0;\n        top: 0;\n\n        background-color: var(--header-color-2);\n\n        z-index: 1;\n    }\n\n    header > h1, header > h4, header > p {\n        display: none;\n    }\n\n    nav {\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        margin-top: 15px;\n    }\n\n    nav > a{\n        height: 40px;\n        margin: 0;\n    }\n\n    ul {\n        margin: 0;\n        margin-bottom: 5px;\n    }\n\n    .toggle-wrapper {\n        position: fixed;\n        z-index: 1;\n\n        top: 60px;\n        right: 25px;\n    }\n\n    main {\n        width: 100%;\n\n        position: absolute;\n        top: 100px;\n\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n\n    #projects {\n        padding-top: 50px;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .project-tools {\n        gap: 5px;\n    }\n\n    .tool {\n        width: 16px;\n        height: 16px;\n    }\n\n    .project-name {\n        font-size: 20px;\n    }\n\n    .project-main {\n        flex-direction: column;\n    }\n\n    .project-aside {\n        height: 200px;\n    }\n\n    .project-img {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/icons/tools/heroku.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/heroku.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f1cc0c4584482604a5f.svg";

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

module.exports = __webpack_require__.p + "fdd265f508da2b5700c5.svg";

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

/***/ "./src/assets/icons/tools/socketio.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/tools/socketio.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcfe1fe349e99170b0e7.svg";

/***/ }),

/***/ "./src/assets/icons/tools/supabase.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/tools/supabase.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e18c4d2badbc612c0f2b.svg";

/***/ }),

/***/ "./src/assets/icons/tools/tailwind.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/tools/tailwind.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b3f5baf8ad130d320c5.svg";

/***/ }),

/***/ "./src/assets/icons/tools/vercel.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/vercel.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f77fd1fe7ab50742b00.svg";

/***/ }),

/***/ "./src/assets/icons/tools/vite.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/tools/vite.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1255900661fffc5bb63b.svg";

/***/ }),

/***/ "./src/assets/icons/tools/vitest.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tools/vitest.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f87d932b6998f5430a3b.svg";

/***/ }),

/***/ "./src/assets/screenshots/Flexor.png":
/*!*******************************************!*\
  !*** ./src/assets/screenshots/Flexor.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8eec05c5b294bd3274ab.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLGFBQWEsWUFBWSxVQUFVLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFdBQVcsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sYUFBYSxjQUFjLGNBQWMsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9B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YTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ2lCO0FBQ1U7QUFFdER3QixRQUFRLENBQUMyRCxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNDLElBQUksR0FBR0YsNERBQU87QUFFakR0RSwwREFBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JsYW5rLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmltcG9ydCBFdGNoQVNrZXRjaCBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL2V0Y2hhc2tldGNoLnBuZ1wiO1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFJlcE1lIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvcmVwbWUucG5nXCI7XG5pbXBvcnQgVGljVGFjVG9lIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGljdGFjdG9lLnBuZ1wiO1xuaW1wb3J0IFRoaW5nc1RvRG8gZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy90aGluZ3N0b2RvLnBuZ1wiO1xuaW1wb3J0IE15T2JzZXJ2YXRvcnkgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9teW9ic2VydmF0b3J5LnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9iYXR0bGVzaGlwLnBuZ1wiO1xuaW1wb3J0IFJlc3VtZUdlbmVyYXRvciBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3Jlc3VtZWdlbmVyYXRvci5wbmdcIlxuaW1wb3J0IFdhdmVsZW5ndGggZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9XYXZlbGVuZ3RoLnBuZ1wiO1xuaW1wb3J0IEZpbGVTdG9yYWdlIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvZmlsZXN0b3JhZ2UucG5nXCJcbmltcG9ydCBGbGV4b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9GbGV4b3IucG5nXCJcblxuY29uc3QgSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gc2V0U3RvcmFnZSgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoc3RvcmFnZSk7XG4gICAgICAgIHRvZ2dsZVRoZW1lKCk7XG4gICAgICAgIHNjcm9sbE5hdkxpbmtBY3RpdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKCkge1xuICAgICAgICAvLyBNYW51YWwgc3RvcmFnZSBzZWxlY3Rpb25cbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChFdGNoQVNrZXRjaCxcIkV0Y2gtQS1Ta2V0Y2hcIiwgXG4gICAgICAgICAgICBcIkEgc2ltcGxlIHNrZXRjaGJvb2sgYXBwIHN1cHBvcnRpbmcgZHluYW1pYyBncmlkLXNpemVzLiBUaGlzIHdhcyBvbmUgb2YgbXkgZmlyc3QgcHJvamVjdHMgaW1wbGVtZW50aW5nIEpTIG9uIGEgd2VicGFnZS5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9ldGNoLWEtc2tldGNoXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2V0Y2gtYS1za2V0Y2gvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KENhbGN1bGF0b3IsXCJDYWxjdWxhdG9yXCIsIFxuICAgICAgICAgICAgXCJBIHJlY3JlYXRpb24gb2YgQXBwbGUgSU9TIGNhbGN1bGF0b3IgYXBwIHdpdGgga2V5Ym9hcmQgc3VwcG9ydC5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9jYWxjdWxhdG9yXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2NhbGN1bGF0b3IvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFJlcE1lLCBcIlJlcE1lXCIsIFxuICAgICAgICAgICAgXCJBIGRhc2hib2FyZCBmcm9udC1lbmQgb25seSBkZXNpZ24gZm9yIGEgd29ya291dCBzb2NpYWwgcGxhdGZvcm0uIFV0aWxpemVkIHJhbmRvbWl6ZWQgZHVtbXkgY29udGVudCB0byBzaW11bGF0ZSBiYWNrLWVuZC5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvcmVwbWUtZGFzaGJvYXJkXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL3JlcG1lLWRhc2hib2FyZC9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoVGljVGFjVG9lLCBcIlRpY1RhY1RvZVwiLCBcbiAgICAgICAgICAgIFwiSW50ZXJhY3RpdmUgVGljLVRhYy1Ub2UgZ2FtZSBzdXBwb3J0aW5nIFB2UCBhbmQgUHZDIHdpdGggcmFuZ2luZyBkaWZmaWN1bHR5LiBJbXBsZW1lbnRlZCBtaW5pbWF4IGFsZ29yaXRobSBmb3IgY29tcHV0ZXIgZGVjaXNpb24tbWFraW5nLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3RpY3RhY3RvZVwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby90aWN0YWN0b2UvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFRoaW5nc1RvRG8sIFwiVGhpbmdzVG9Eb1wiLCBcbiAgICAgICAgICAgIFwiVG9kbyBsaXN0IHdpdGggZnVsbHkgY3VzdG9taXphYmxlIHByb2plY3RzICYgdG9kb3MuIEF1dG9tYXRpY2FsbHkgc2F2ZSBjb250ZW50IHVzaW5nIGxvY2FsU3RvcmFnZSBBUEkuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIiwgXCJucG1cIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvdGhpbmdzVG9Eb1wiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby90aGluZ3NUb0RvL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChNeU9ic2VydmF0b3J5LCBcIk15IE9ic2VydmF0b3J5XCIsIFxuICAgICAgICAgICAgXCJTaW1wbGUgd2VhdGhlciBhcHAgdG8gcXVlcnkgYW55IGxvY2F0aW9uIGZvciByZWFsIHRpbWUgZGF0YSB1c2luZyBXZWF0aGVyQVBJLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL215LW9ic2VydmF0b3J5XCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL215LW9ic2VydmF0b3J5L1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChCYXR0bGVzaGlwLCBcIkJhdHRsZXNoaXBcIiwgXG4gICAgICAgICAgICBcIlB2QyBiYXR0bGVzaGlwIGdhbWUuIEludGVyYWN0aXZlbHkgZHJhZywgZHJvcCwgYW5kIHJvdGF0ZSBzaGlwcywgYW5kIGJhdHRsZSBhbiBpbnRlbGxpZ2VudCBhZ2VudCBtYWtpbmcgY29tcHV0ZXIgZGVjaXNpb25zLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL2JhdHRsZXNoaXBcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vYmF0dGxlc2hpcC9cIn1cbiAgICAgICAgKTsgICBcbiAgICAgICAgXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChSZXN1bWVHZW5lcmF0b3IsIFwiUmVzdW1lIEdlbmVyYXRvclwiLCBcbiAgICAgICAgICAgIFwiQSBmdWxseSBhZGFwdGl2ZSByZXN1bWUgZ2VuZXJhdG9yIGRldmVsb3BlZCB1c2luZyBSZWFjdEpTIGFuZCBSZWFjdCBCb290c3RyYXAuIEN1c3RvbWl6ZSBmaWVsZHMsIGNhdGVnb3JpZXMsIGFuZCBzdHlsaW5nLiBDb21wbGV0ZWx5IHJlc3BvbnNpdmUgb3V0cHV0IGF1dG9tYXRpY2FsbHkgc2NhbGVkIHdpdGggQTQgYXNwZWN0IHJhdGlvXCIsXG4gICAgICAgICAgICBbXCJyZWFjdFwiLCBcInJlYWN0Ym9vdHN0cmFwXCIsIFwiQ1NTXCIsIFwibnBtXCIsIFwibmV0bGlmeVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9jdi1idWlsZGVyXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL3N1cGVyYi1kdWNrYW5vby1hMjIzYjQubmV0bGlmeS5hcHAvXCJ9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoV2F2ZWxlbmd0aCwgXCJXYXZlbGVuZ3RoXCIsIFxuICAgICAgICAgICAgXCJBIG1vY2sgZS1jb21tZXJjZSBzaXRlIGJ1aWx0IHdpdGggUmVhY3RKUyBhbmQgVGFpbHdpbmRDU1MsIHV0aWxpemluZyB0aGUgUGxhdHppIEZha2UgU3RvcmUgQVBJLiBJdCBpbmNsdWRlcyBkeW5hbWljIHJvdXRpbmcgdmlhIFJlYWN0IFJvdXRlciBhbmQgdGVzdGluZyB3aXRoIFJlYWN0IFRlc3RpbmcgTGlicmFyeSBhbmQgVml0ZXN0LlwiLFxuICAgICAgICAgICAgW1wicmVhY3RcIiwgXCJ0YWlsd2luZFwiLCBcInZpdGVzdFwiLCBcInJlYWN0cm91dGVyXCIsIFwibnBtXCIsIFwibmV0bGlmeVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9zaG9wcGluZy1jYXJ0XCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL21haW4tLWVmZmVydmVzY2VudC1icmlnYWRlaXJvcy0wZGE3OTUubmV0bGlmeS5hcHAvXCJ9XG4gICAgICAgICk7IFxuICAgICAgICBcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KEZpbGVTdG9yYWdlLCBcIkZpbGUgU3RvcmFnZVwiLCBcbiAgICAgICAgICAgIFwiQSBmdWxsLXN0YWNrIGZpbGUgc3RvcmFnZSBhcHBsaWNhdGlvbiBidWlsdCB3aXRoIG5vZGVKUyBhbmQgZXhwcmVzc0pTLiBVc2VyIGF1dGhlbnRpY2F0aW9uIHVzaW5nIHBhc3Nwb3J0SlMsIFByaXNtYSBPUk0gd2l0aCBQb3N0R3Jlc3FsIGZvciBkYXRhYmFzZSwgYW5kIGNsb3VkaW5hcnkgZm9yIHNjYWxhYmxlIGNsb3VkIHN0b3JhZ2UuIERlcGxveWVkIGFwcCBvbiBSYWlsd2F5IGFuZCBkYXRhYmFzZSBvbiBTdXBhYmFzZS5cIixcbiAgICAgICAgICAgIFtcIm5vZGVqc1wiLCBcImV4cHJlc3NcIiwgXCJwb3N0Z3Jlc3FsXCIsIFwicHJpc21hXCIsIFwidGFpbHdpbmRcIiwgXCJucG1cIiwgXCJyYWlsd2F5XCIsIFwic3VwYWJhc2VcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvZmlsZS1zdG9yYWdlXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2ZpbGUtc3RvcmFnZS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL1wifVxuICAgICAgICApOyAgXG4gICAgICAgIFxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoRmxleG9yLCBcIkZsZXhvclwiLCBcbiAgICAgICAgICAgIFwiQSBmdWxsLXN0YWNrIHNvY2lhbCBtZWRpYSBwbGF0Zm9ybSBidWlsdCB3aXRoIHRoZSBQRVJOIHN0YWNrIChQb3N0Z3JlU1FMLCBFeHByZXNzLCBSZWFjdCwgTm9kZS5qcyksIGZlYXR1cmluZyBqd3QgdG9rZW4gYXV0aGVudGljYXRpb24gYW5kIHJlYWwtdGltZSBub3RpZmljYXRpb25zIHZpYSBTb2NrZXQuSU8uIFRoZSBwbGF0Zm9ybSBlbmFibGVzIHVzZXJzIHRvIGNyZWF0ZSBhbmQgam9pbiByZWFsbXMsIG1ha2UgcG9zdHMsIGxpa2UgY29udGVudCwgYW5kIGVuZ2FnZSBpbiBuZXN0ZWQgY29tbWVudCB0aHJlYWRzLCBwcm92aWRpbmcgYSBkeW5hbWljIGFuZCBpbnRlcmFjdGl2ZSBzb2NpYWwgZXhwZXJpZW5jZS5cIlxuICAgICAgICAgICAgW1wibm9kZWpzXCIsIFwiZXhwcmVzc1wiLCBcInJlYWN0XCIsIFwicG9zdGdyZXNxbFwiLCBcInByaXNtYVwiLCBcInNvY2tldGlvXCIsIFwidGFpbHdpbmRcIiwgXCJ2aXRlXCIsIFwibnBtXCIsIFwidmVyY2VsXCIsIFwiaGVyb2t1XCIsIFwic3VwYWJhc2VcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvZmxleG9yLWZyb250LWVuZC90cmVlL21haW5cIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vZmxleG9yLWZyb250LWVuZC0yYzZyLnZlcmNlbC5hcHAvXCJ9XG4gICAgICAgICk7ICBcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5wcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdExpc3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy13cmFwcGVyXCIpXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFpbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1tYWluXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RBc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXNpZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXNpZGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3Byb2plY3Quc2NyZWVuc2hvdH0pYDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBc2lkZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmlnaHRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljb24gdG8gZGVtb25zdHJhdGUgbGl2ZSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpdmUuY2xhc3NMaXN0LmFkZChcImxpdmUtaWNvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKGxpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvb3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29scy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvb2xzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9vbHMuZm9yRWFjaCgodG9vbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0b29sXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCh0b29sLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29scy5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVwb1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGh5cGVybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoeXBlcmxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7cHJvamVjdC5saW5rcy5yZXBvfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cGVybGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIGBfYmxhbmtgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBlcmxpbmsub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHByb2plY3QubGlua3MucmVwbywgJ19ibGFuaycpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9JY29uLmNsYXNzTGlzdC5hZGQoJ3JlcG8taWNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLmFwcGVuZENoaWxkKHJlcG9JY29uKTsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5hcHBlbmRDaGlsZChoeXBlcmxpbmspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZCh0b29scyk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9vdC5hcHBlbmRDaGlsZChyZXBvKTsgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RGb290KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RNYWluLmFwcGVuZENoaWxkKHByb2plY3RBc2lkZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFJpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RNYWluKTtcblxuICAgICAgICAgICAgcHJvamVjdENhcmQub25jbGljayA9IChlKSA9PntcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocHJvamVjdC5saW5rcy5saXZlLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsTmF2TGlua0FjdGl2ZSgpIHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgZWFjaCBzZWN0aW9uIG9mZnNldFRvcCBwcm9wZXJ0eSwgY29tcGFyZSB3aXRoIHNjcm9sbCBZXG4gICAgICAgICAgICAvLyBJZiBzY3JvbGxZIGlzIHdpdGhpbiBzZWN0aW9uLCB0aGVuIGFkZCBpdCBhcyBhIGNsYXNzIHRvIG5hdiBlbGVtZW50XG4gICAgICAgICAgICAvLyBOZWVkIHRvIHN1YnRyYWN0IGFyYml0cmFyeSB2YWx1ZSAtIFxuICAgICAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBzZWN0aW9uVG9wIC0gNjApIHsgXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIik7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2ID4gYVwiKTtcbiAgICAgICAgICAgIG5hdkxpbmtzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICBpZiAoYS5jbGFzc0xpc3QuY29udGFpbnMoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xuICAgICAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90ID0gc2NyZWVuc2hvdDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy50b29scyA9IHRvb2xzO1xuICAgICAgICB0aGlzLmxpbmtzID0gbGlua3M7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID09IG5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChzY3JlZW5zaG90LCBuYW1lLCBkZXNjLCB0b29scywgbGlua3MpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qZWN0KHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcyk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QudW5zaGlmdChuZXdQcm9qKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvbW9vbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2h0bWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2Nzcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvanMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbm9kZWpzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbnBtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Rib290c3RyYXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy90YWlsd2luZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZpdGVzdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0cm91dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbmV0bGlmeS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2V4cHJlc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9wb3N0Z3Jlc3FsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcHJpc21hLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmFpbHdheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3N1cGFiYXNlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvc29ja2V0aW8uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9oZXJva3Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy92ZXJjZWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy92aXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3J1cHBvJmZhbWlseT1NdWt0YTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGb250ICovXG5cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoIDtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cbiAgICAtLWhlYWRlci1jb2xvcjogI2Y1ZjNmNDtcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjZTVlNWU1O1xuICAgIC0taGVhZGVyLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6IHJnYigxMjcsIDEyNSwgMTI1KTtcblxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmM2Y0O1xuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xuXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICNmYmY5ZmE7XG5cbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1YjtcblxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cbiAgICBtYXJnaW46IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuYm9keS5kYXJrIHtcbiAgICAvKiBDdXN0b20gcHJvcGVydGllcyBmb3IgdGhlbWUgKi9cbiAgICAtLWhlYWRlci1jb2xvcjogIzBkMWIyYTtcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjMTEyMzM2O1xuICAgIC0taGVhZGVyLXRleHQtY29sb3I6ICNmMGYxZWU7XG4gICAgLS1oZWFkZXItc3VidGV4dC1jb2xvcjogI2Q0ZDVkMztcblxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGQxYjJhO1xuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogI2Q0ZDVkMztcblxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM2I0OTY2O1xuXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XG59XG5cbi8qIEhlYWRlciBjb250ZW50ICovXG5cbmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcbiAgICBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjA7XG4gICAgbGVmdDogMDtcblxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaGVhZGVyID4gaDQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5oZWFkZXIgPiBwIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yKTtcbn1cblxuLyogTmF2YmFyICovXG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBmbGV4OiAxO1xuXG4gICAgY29sb3I6ICgtLWhlYWRlci10ZXh0LWNvbG9yKTtcbn1cblxubmF2ID4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTUwcHg7XG5cbiAgICBtYXJnaW46IDVweDtcbn1cblxubmF2ID4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyogTmF2IGFjdGl2ZSBzdGF0ZXMgKi9cbm5hdiA+IGEuYWN0aXZlID4gLm5hdi1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxubmF2ID4gYS5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBOYXYgaG92ZXIgKi9cbm5hdiA+IGE6aG92ZXIgPiAubmF2LWluZGljYXRvcixcbm5hdiA+IGE6Zm9jdXMgPiAubmF2LWluZGljYXRvciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5uYXYgPiBhOmhvdmVyLFxubmF2ID4gYTpmb2N1cyB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5uYXYtaW5kaWNhdG9yIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICBoZWlnaHQ6IDBweDtcbiAgICB3aWR0aDogMzBweDtcblxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG5cbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbm5hdiA+IGEgPiBwIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBMaW5rcyBzdHlsaW5nICovXG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5saSA+IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnNvY2lhbHMtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcblxuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc29jaWFscy1pY29uLmdpdGh1YiB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uc29jaWFscy1pY29uLmxpbmtlZGluIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5zb2NpYWxzLWljb24uZW1haWwge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblxuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW46IDNweDtcbn1cblxubGkgPiBhOmhvdmVyID4gLnNvY2lhbHMtaWNvbixcbmxpID4gYTpmb2N1cyA+IC5zb2NpYWxzLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi8qIE1haW4gY29udGVudCAqL1xuXG5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xuXG4gICAgd2lkdGg6IDYwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4vKiBQYWdlIDEgLSBBYm91dCBzZWN0aW9uICovXG5cbiNhYm91dCB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi8qIFRoZW1lIHRvZ2dsZSAqL1xuLnRvZ2dsZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogRGVmYXVsdCB0aGVtZSAqL1xuLnRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xufVxuXG4udG9nZ2xlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBEYXJrIG1vZGUgKi9cbmJvZHkuZGFyayA+IG1haW4gPiAjYWJvdXQgPiAudG9nZ2xlLXdyYXBwZXIgPiAudG9nZ2xle1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uYWJvdXQtY29udGVudCA+IGgxIHtcbiAgICBmb250LXNpemU6IDg0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uYWJvdXQtY29udGVudCA+IHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbn1cblxuLyogUGFnZSAyIC0gUHJvamVjdHMgICovXG5cbi5wcm9qZWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ucHJvamVjdC1jb250ZW50ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi8qIFByb2plY3QgQ2FyZHMgKi9cbi5wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5wcm9qZWN0LW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0LWFzaWRlIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1yaWdodCB7XG4gICAgZmxleDogMTtcblxuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gICAgLyogVGVtcCAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QtdGV4dHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0LW5hbWUgIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ucHJvamVjdC1kZXNjIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9qZWN0LWZvb3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLyogR2l0aHViIHJlcG8gKyBsaXZlIGljb24gKi9cblxuLnByb2plY3QtcmVwbyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wcm9qZWN0LXJlcG8gPiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5yZXBvLWljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxpdmUtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogMjVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4vKiBUb29sIEljb24gU3R5bGluZyAqL1xuLnByb2plY3QtdG9vbHMge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGdhcDogMTVweDtcbn1cblxuLnRvb2wge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uSFRNTCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xufVxuXG4uQ1NTIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG59XG5cbi5KUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xufVxuXG4uUkVBQ1Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX199KTtcbn1cblxuLk5PREVKUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KTtcbn1cblxuLk5QTSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX199KTtcbn1cblxuLlJFQUNUQk9PVFNUUkFQIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fX30pO1xufVxuXG4uVEFJTFdJTkQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19ffSk7XG59XG5cbi5WSVRFU1Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19ffSk7XG59XG5cbi5SRUFDVFJPVVRFUiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX199KTtcbn1cblxuLk5FVExJRlkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19ffSk7XG59XG5cbi5FWFBSRVNTIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pO1xufVxuXG4uUE9TVEdSRVNRTCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX199KTtcbn1cblxuLlBSSVNNQSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX199KTtcbn1cblxuLlJBSUxXQVkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19ffSk7XG59XG5cbi5TVVBBQkFTRSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX199KTtcbn1cblxuLlNPQ0tFVElPIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fX30pO1xufVxuXG4uSEVST0tVIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fX30pO1xufVxuXG4uVkVSQ0VMIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fX30pO1xufVxuXG4uVklURSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX199KTtcbn1cblxuLyogUHJvamVjdCBob3ZlciAqL1xuLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0OmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAubGl2ZS1pY29uIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ucmVwby1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5wcm9qZWN0LW5hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4vKiBNZWRpYSBxdWVyaWVzICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLTIpO1xuXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgaGVhZGVyID4gaDEsIGhlYWRlciA+IGg0LCBoZWFkZXIgPiBwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBuYXYgPiBhe1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC50b2dnbGUtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwcHg7XG5cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgICNwcm9qZWN0cyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5wcm9qZWN0LXRvb2xzIHtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLnRvb2wge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtbWFpbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnByb2plY3QtYXNpZGUge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUzs7QUFHVDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7O0lBRTlDLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7O0lBRTFDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIscUNBQXFDOztJQUVyQyxnQ0FBZ0M7O0lBRWhDLHVCQUF1Qjs7SUFFdkIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjs7SUFFaEIsV0FBVzs7SUFFWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLCtCQUErQjs7SUFFL0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qiw2QkFBNkI7O0lBRTdCLGdDQUFnQzs7SUFFaEMsdUJBQXVCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHFDQUFxQztJQUNyQywrQkFBK0I7O0lBRS9CLGVBQWU7SUFDZixLQUFLO0lBQ0wsT0FBTzs7SUFFUCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjs7SUFFakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lB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OztRQUVWLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXOztRQUVYLGtCQUFrQjtRQUNsQixVQUFVOztRQUVWLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcnVwcG8mZmFtaWx5PU11a3RhOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aCA7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIC8qIEN1c3RvbSBwcm9wZXJ0aWVzIGZvciB0aGVtZSAqL1xcbiAgICAtLWhlYWRlci1jb2xvcjogI2Y1ZjNmNDtcXG4gICAgLS1oZWFkZXItY29sb3ItMjogI2U1ZTVlNTtcXG4gICAgLS1oZWFkZXItdGV4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0taGVhZGVyLXN1YnRleHQtY29sb3I6IHJnYigxMjcsIDEyNSwgMTI1KTtcXG5cXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICNmNWYzZjQ7XFxuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiBibGFjaztcXG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcXG5cXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICNmYmY5ZmE7XFxuXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xcblxcbiAgICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmJvZHkuZGFyayB7XFxuICAgIC8qIEN1c3RvbSBwcm9wZXJ0aWVzIGZvciB0aGVtZSAqL1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzBkMWIyYTtcXG4gICAgLS1oZWFkZXItY29sb3ItMjogIzExMjMzNjtcXG4gICAgLS1oZWFkZXItdGV4dC1jb2xvcjogI2YwZjFlZTtcXG4gICAgLS1oZWFkZXItc3VidGV4dC1jb2xvcjogI2Q0ZDVkMztcXG5cXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICMwZDFiMmE7XFxuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1tYWluLXN1YnRleHQtY29sb3I6ICNkNGQ1ZDM7XFxuXFxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM2I0OTY2O1xcblxcbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1YjtcXG59XFxuXFxuLyogSGVhZGVyIGNvbnRlbnQgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbmhlYWRlciA+IGg0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBOYXZiYXIgKi9cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZmxleDogMTtcXG5cXG4gICAgY29sb3I6ICgtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxubmF2ID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxNTBweDtcXG5cXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbm5hdiA+IGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBOYXYgYWN0aXZlIHN0YXRlcyAqL1xcbm5hdiA+IGEuYWN0aXZlID4gLm5hdi1pbmRpY2F0b3Ige1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBOYXYgaG92ZXIgKi9cXG5uYXYgPiBhOmhvdmVyID4gLm5hdi1pbmRpY2F0b3IsXFxubmF2ID4gYTpmb2N1cyA+IC5uYXYtaW5kaWNhdG9yIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2ID4gYTpob3ZlcixcXG5uYXYgPiBhOmZvY3VzIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5uYXYtaW5kaWNhdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG5cXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcblxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xcblxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xcblxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxubmF2ID4gYSA+IHAge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzIHN0eWxpbmcgKi9cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbmxpID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uc29jaWFscy1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmdpdGh1YiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmxpbmtlZGluIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2xpbmtlZGluLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2xpbmtlZGluLnN2Z1xcXCIpO1xcbn1cXG5cXG4uc29jaWFscy1pY29uLmVtYWlsIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2VtYWlsLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2VtYWlsLnN2Z1xcXCIpO1xcblxcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxubGkgPiBhOmhvdmVyID4gLnNvY2lhbHMtaWNvbixcXG5saSA+IGE6Zm9jdXMgPiAuc29jaWFscy1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50ICovXFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcblxcbiAgICB3aWR0aDogNjAlO1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBQYWdlIDEgLSBBYm91dCBzZWN0aW9uICovXFxuXFxuI2Fib3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBUaGVtZSB0b2dnbGUgKi9cXG4udG9nZ2xlLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBEZWZhdWx0IHRoZW1lICovXFxuLnRvZ2dsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvc3VuLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9zdW4uc3ZnXFxcIik7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xcbn1cXG5cXG4udG9nZ2xlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLyogRGFyayBtb2RlICovXFxuYm9keS5kYXJrID4gbWFpbiA+ICNhYm91dCA+IC50b2dnbGUtd3JhcHBlciA+IC50b2dnbGV7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvbW9vbi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvbW9vbi5zdmdcXFwiKTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogODRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5hYm91dC1jb250ZW50ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XFxufVxcblxcbi8qIFBhZ2UgMiAtIFByb2plY3RzICAqL1xcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGVudCA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogUHJvamVjdCBDYXJkcyAqL1xcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLnByb2plY3QtbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LWFzaWRlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXJpZ2h0IHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QtaW1nIHtcXG4gICAgLyogVGVtcCAqL1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC10ZXh0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LW5hbWUgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnByb2plY3QtZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb290IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi8qIEdpdGh1YiByZXBvICsgbGl2ZSBpY29uICovXFxuXFxuLnByb2plY3QtcmVwbyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdC1yZXBvID4gYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5yZXBvLWljb24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmxpdmUtaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICByaWdodDogMjVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL2Fycm93LnN2Z1xcXCIpO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLyogVG9vbCBJY29uIFN0eWxpbmcgKi9cXG4ucHJvamVjdC10b29scyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udG9vbCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLkhUTUwge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9odG1sLnN2Z1xcXCIpO1xcbn1cXG5cXG4uQ1NTIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvY3NzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uSlMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9qcy5zdmdcXFwiKTtcXG59XFxuXFxuLlJFQUNUIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Quc3ZnXFxcIik7XFxufVxcblxcbi5OT0RFSlMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ub2RlanMuc3ZnXFxcIik7XFxufVxcblxcbi5OUE0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ucG0uc3ZnXFxcIik7XFxufVxcblxcbi5SRUFDVEJPT1RTVFJBUCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3JlYWN0Ym9vdHN0cmFwLnN2Z1xcXCIpO1xcbn1cXG5cXG4uVEFJTFdJTkQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy90YWlsd2luZC5zdmdcXFwiKTtcXG59XFxuXFxuLlZJVEVTVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZpdGVzdC5zdmdcXFwiKTtcXG59XFxuXFxuLlJFQUNUUk9VVEVSIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Ryb3V0ZXIuc3ZnXFxcIik7XFxufVxcblxcbi5ORVRMSUZZIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvbmV0bGlmeS5zdmdcXFwiKTtcXG59XFxuXFxuLkVYUFJFU1Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9leHByZXNzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uUE9TVEdSRVNRTCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3Bvc3RncmVzcWwuc3ZnXFxcIik7XFxufVxcblxcbi5QUklTTUEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9wcmlzbWEuc3ZnXFxcIik7XFxufVxcblxcbi5SQUlMV0FZIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmFpbHdheS5zdmdcXFwiKTtcXG59XFxuXFxuLlNVUEFCQVNFIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvc3VwYWJhc2Uuc3ZnXFxcIik7XFxufVxcblxcbi5TT0NLRVRJTyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3NvY2tldGlvLnN2Z1xcXCIpO1xcbn1cXG5cXG4uSEVST0tVIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvaGVyb2t1LnN2Z1xcXCIpO1xcbn1cXG5cXG4uVkVSQ0VMIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvdmVyY2VsLnN2Z1xcXCIpO1xcbn1cXG5cXG4uVklURSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZpdGUuc3ZnXFxcIik7XFxufVxcblxcbi8qIFByb2plY3QgaG92ZXIgKi9cXG4ucHJvamVjdDpob3ZlciwgLnByb2plY3Q6Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LW1haW4gPiAucHJvamVjdC1yaWdodCA+IC5wcm9qZWN0LXRleHQgPiAubGl2ZS1pY29uIHtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMTVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLnJlcG8taWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5wcm9qZWN0LW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHRvcDogMDtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvci0yKTtcXG5cXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyID4gaDEsIGhlYWRlciA+IGg0LCBoZWFkZXIgPiBwIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIG5hdiA+IGF7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuXFxuICAgIC50b2dnbGUtd3JhcHBlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxO1xcblxcbiAgICAgICAgdG9wOiA2MHB4O1xcbiAgICAgICAgcmlnaHQ6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0cyB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5wcm9qZWN0LXRvb2xzIHtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC50b29sIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LW1haW4ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1hc2lkZSB7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy9pbnRlcmZhY2UnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvbG9jYWwvZmF2aWNvbi5wbmcnXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmF2aWNvblwiKS5ocmVmID0gRmF2aWNvbjtcblxuSW50ZXJmYWNlLmluaXQoKTsiXSwibmFtZXMiOlsiUHJvamVjdExpc3QiLCJFdGNoQVNrZXRjaCIsIkNhbGN1bGF0b3IiLCJSZXBNZSIsIlRpY1RhY1RvZSIsIlRoaW5nc1RvRG8iLCJNeU9ic2VydmF0b3J5IiwiQmF0dGxlc2hpcCIsIlJlc3VtZUdlbmVyYXRvciIsIldhdmVsZW5ndGgiLCJGaWxlU3RvcmFnZSIsIkZsZXhvciIsIkludGVyZmFjZSIsImluaXQiLCJzdG9yYWdlIiwic2V0U3RvcmFnZSIsImRpc3BsYXlQcm9qZWN0cyIsInRvZ2dsZVRoZW1lIiwic2Nyb2xsTmF2TGlua0FjdGl2ZSIsImFkZFByb2plY3QiLCJyZXBvIiwibGl2ZSIsInByb2plY3RMaXN0IiwicHJvamVjdHNXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdCIsInByb2plY3RDYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInByb2plY3RNYWluIiwicHJvamVjdEFzaWRlIiwiaW1nIiwic3R5bGUiLCJzY3JlZW5zaG90IiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0UmlnaHQiLCJwcm9qZWN0VGV4dCIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImRlc2MiLCJwcm9qZWN0Rm9vdCIsInRvb2xzIiwiZm9yRWFjaCIsInRvb2wiLCJpY29uIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImh5cGVybGluayIsInNldEF0dHJpYnV0ZSIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93Iiwib3BlbiIsImxpbmtzIiwiZm9jdXMiLCJyZXBvSWNvbiIsInByZXZlbnREZWZhdWx0Iiwib25zY3JvbGwiLCJjdXJyZW50Iiwic2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJvZmZzZXRUb3AiLCJzY3JvbGxZIiwiZ2V0QXR0cmlidXRlIiwibmF2TGlua3MiLCJhIiwicmVtb3ZlIiwiY29udGFpbnMiLCJidG4iLCJib2R5IiwidG9nZ2xlIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwiZ2V0UHJvamVjdCIsImZpbmQiLCJuZXdQcm9qIiwidW5zaGlmdCIsIkZhdmljb24iLCJnZXRFbGVtZW50QnlJZCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9