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
    storage.addProject(_assets_screenshots_Flexor_png__WEBPACK_IMPORTED_MODULE_11__, "Flexor", "A  social media platform built with the PERN stack (PostgreSQL, Express, React, Node.js). The platform enables users to create and join realms, make posts, like content, and engage in nested comment threads, and recieve real-time notifications."[("nodejs", "express", "react", "postgresql", "prisma", "socketio", "tailwind", "vite", "npm", "vercel", "heroku", "supabase")], {
      repo: "https://github.com/HarryAhnHS/flexor-front-end/tree/main",
      live: "https://flexor-front-end-2c6r.vercel.app/"
    });
    console.log(storage);
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
      console.log(project);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxzQkFBc0IsbUNBQW1DO0FBQ3pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFOztBQUVBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxjQUFjLFlBQVksVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxhQUFhLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxhQUFhLFlBQVksVUFBVSxhQUFhLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxXQUFXLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxhQUFhLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxjQUFjLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxXQUFXLE1BQU0sS0FB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O1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNpQjtBQUNVO0FBRXREMEIsUUFBUSxDQUFDMkQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEdBQUdGLDREQUFPO0FBRWpEeEUsMERBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JsYW5rLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5pbXBvcnQgRXRjaEFTa2V0Y2ggZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9ldGNoYXNrZXRjaC5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdcIjtcbmltcG9ydCBSZXBNZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3JlcG1lLnBuZ1wiO1xuaW1wb3J0IFRpY1RhY1RvZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL3RpY3RhY3RvZS5wbmdcIjtcbmltcG9ydCBUaGluZ3NUb0RvIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGhpbmdzdG9kby5wbmdcIjtcbmltcG9ydCBNeU9ic2VydmF0b3J5IGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvbXlvYnNlcnZhdG9yeS5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvYmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBSZXN1bWVHZW5lcmF0b3IgZnJvbSBcIi4uL2Fzc2V0cy9zY3JlZW5zaG90cy9yZXN1bWVnZW5lcmF0b3IucG5nXCJcbmltcG9ydCBXYXZlbGVuZ3RoIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvV2F2ZWxlbmd0aC5wbmdcIjtcbmltcG9ydCBGaWxlU3RvcmFnZSBmcm9tIFwiLi4vYXNzZXRzL3NjcmVlbnNob3RzL2ZpbGVzdG9yYWdlLnBuZ1wiXG5pbXBvcnQgRmxleG9yIGZyb20gXCIuLi9hc3NldHMvc2NyZWVuc2hvdHMvRmxleG9yLnBuZ1wiXG5cbmNvbnN0IEludGVyZmFjZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHNldFN0b3JhZ2UoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHN0b3JhZ2UpO1xuICAgICAgICB0b2dnbGVUaGVtZSgpO1xuICAgICAgICBzY3JvbGxOYXZMaW5rQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcbiAgICAgICAgLy8gTWFudWFsIHN0b3JhZ2Ugc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgUHJvamVjdExpc3QoKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoRXRjaEFTa2V0Y2gsXCJFdGNoLUEtU2tldGNoXCIsIFxuICAgICAgICAgICAgXCJBIHNpbXBsZSBza2V0Y2hib29rIGFwcCBzdXBwb3J0aW5nIGR5bmFtaWMgZ3JpZC1zaXplcy4gVGhpcyB3YXMgb25lIG9mIG15IGZpcnN0IHByb2plY3RzIGltcGxlbWVudGluZyBKUyBvbiBhIHdlYnBhZ2UuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvZXRjaC1hLXNrZXRjaFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9ldGNoLWEtc2tldGNoL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChDYWxjdWxhdG9yLFwiQ2FsY3VsYXRvclwiLCBcbiAgICAgICAgICAgIFwiQSByZWNyZWF0aW9uIG9mIEFwcGxlIElPUyBjYWxjdWxhdG9yIGFwcCB3aXRoIGtleWJvYXJkIHN1cHBvcnQuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSlNcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvY2FsY3VsYXRvclwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9jYWxjdWxhdG9yL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChSZXBNZSwgXCJSZXBNZVwiLCBcbiAgICAgICAgICAgIFwiQSBkYXNoYm9hcmQgZnJvbnQtZW5kIG9ubHkgZGVzaWduIGZvciBhIHdvcmtvdXQgc29jaWFsIHBsYXRmb3JtLiBVdGlsaXplZCByYW5kb21pemVkIGR1bW15IGNvbnRlbnQgdG8gc2ltdWxhdGUgYmFjay1lbmQuXCIsXG4gICAgICAgICAgICBbXCJIVE1MXCIsIFwiQ1NTXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3JlcG1lLWRhc2hib2FyZFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9yZXBtZS1kYXNoYm9hcmQvXCJ9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFRpY1RhY1RvZSwgXCJUaWNUYWNUb2VcIiwgXG4gICAgICAgICAgICBcIkludGVyYWN0aXZlIFRpYy1UYWMtVG9lIGdhbWUgc3VwcG9ydGluZyBQdlAgYW5kIFB2QyB3aXRoIHJhbmdpbmcgZGlmZmljdWx0eS4gSW1wbGVtZW50ZWQgbWluaW1heCBhbGdvcml0aG0gZm9yIGNvbXB1dGVyIGRlY2lzaW9uLW1ha2luZy5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy90aWN0YWN0b2VcIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vdGljdGFjdG9lL1wifVxuICAgICAgICApO1xuXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChUaGluZ3NUb0RvLCBcIlRoaW5nc1RvRG9cIiwgXG4gICAgICAgICAgICBcIlRvZG8gbGlzdCB3aXRoIGZ1bGx5IGN1c3RvbWl6YWJsZSBwcm9qZWN0cyAmIHRvZG9zLiBBdXRvbWF0aWNhbGx5IHNhdmUgY29udGVudCB1c2luZyBsb2NhbFN0b3JhZ2UgQVBJLlwiLFxuICAgICAgICAgICAgW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwibnBtXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL3RoaW5nc1RvRG9cIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vaGFycnlhaG5ocy5naXRodWIuaW8vdGhpbmdzVG9Eby9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoTXlPYnNlcnZhdG9yeSwgXCJNeSBPYnNlcnZhdG9yeVwiLCBcbiAgICAgICAgICAgIFwiU2ltcGxlIHdlYXRoZXIgYXBwIHRvIHF1ZXJ5IGFueSBsb2NhdGlvbiBmb3IgcmVhbCB0aW1lIGRhdGEgdXNpbmcgV2VhdGhlckFQSS5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiLCBcIm5wbVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9teS1vYnNlcnZhdG9yeVwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9oYXJyeWFobmhzLmdpdGh1Yi5pby9teS1vYnNlcnZhdG9yeS9cIn1cbiAgICAgICAgKTtcblxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoQmF0dGxlc2hpcCwgXCJCYXR0bGVzaGlwXCIsIFxuICAgICAgICAgICAgXCJQdkMgYmF0dGxlc2hpcCBnYW1lLiBJbnRlcmFjdGl2ZWx5IGRyYWcsIGRyb3AsIGFuZCByb3RhdGUgc2hpcHMsIGFuZCBiYXR0bGUgYW4gaW50ZWxsaWdlbnQgYWdlbnQgbWFraW5nIGNvbXB1dGVyIGRlY2lzaW9ucy5cIixcbiAgICAgICAgICAgIFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKU1wiLCBcIm5wbVwiXSwgXG4gICAgICAgICAgICB7cmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFycnlBaG5IUy9iYXR0bGVzaGlwXCIsIFxuICAgICAgICAgICAgbGl2ZTogXCJodHRwczovL2hhcnJ5YWhuaHMuZ2l0aHViLmlvL2JhdHRsZXNoaXAvXCJ9XG4gICAgICAgICk7ICAgXG4gICAgICAgIFxuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3QoUmVzdW1lR2VuZXJhdG9yLCBcIlJlc3VtZSBHZW5lcmF0b3JcIiwgXG4gICAgICAgICAgICBcIkEgZnVsbHkgYWRhcHRpdmUgcmVzdW1lIGdlbmVyYXRvciBkZXZlbG9wZWQgdXNpbmcgUmVhY3RKUyBhbmQgUmVhY3QgQm9vdHN0cmFwLiBDdXN0b21pemUgZmllbGRzLCBjYXRlZ29yaWVzLCBhbmQgc3R5bGluZy4gQ29tcGxldGVseSByZXNwb25zaXZlIG91dHB1dCBhdXRvbWF0aWNhbGx5IHNjYWxlZCB3aXRoIEE0IGFzcGVjdCByYXRpb1wiLFxuICAgICAgICAgICAgW1wicmVhY3RcIiwgXCJyZWFjdGJvb3RzdHJhcFwiLCBcIkNTU1wiLCBcIm5wbVwiLCBcIm5ldGxpZnlcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvY3YtYnVpbGRlclwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9zdXBlcmItZHVja2Fub28tYTIyM2I0Lm5ldGxpZnkuYXBwL1wifVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KFdhdmVsZW5ndGgsIFwiV2F2ZWxlbmd0aFwiLCBcbiAgICAgICAgICAgIFwiQSBtb2NrIGUtY29tbWVyY2Ugc2l0ZSBidWlsdCB3aXRoIFJlYWN0SlMgYW5kIFRhaWx3aW5kQ1NTLCB1dGlsaXppbmcgdGhlIFBsYXR6aSBGYWtlIFN0b3JlIEFQSS4gSXQgaW5jbHVkZXMgZHluYW1pYyByb3V0aW5nIHZpYSBSZWFjdCBSb3V0ZXIgYW5kIHRlc3Rpbmcgd2l0aCBSZWFjdCBUZXN0aW5nIExpYnJhcnkgYW5kIFZpdGVzdC5cIixcbiAgICAgICAgICAgIFtcInJlYWN0XCIsIFwidGFpbHdpbmRcIiwgXCJ2aXRlc3RcIiwgXCJyZWFjdHJvdXRlclwiLCBcIm5wbVwiLCBcIm5ldGxpZnlcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvc2hvcHBpbmctY2FydFwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9tYWluLS1lZmZlcnZlc2NlbnQtYnJpZ2FkZWlyb3MtMGRhNzk1Lm5ldGxpZnkuYXBwL1wifVxuICAgICAgICApOyBcbiAgICAgICAgXG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChGaWxlU3RvcmFnZSwgXCJGaWxlIFN0b3JhZ2VcIiwgXG4gICAgICAgICAgICBcIkEgZnVsbC1zdGFjayBmaWxlIHN0b3JhZ2UgYXBwbGljYXRpb24gYnVpbHQgd2l0aCBub2RlSlMgYW5kIGV4cHJlc3NKUy4gVXNlciBhdXRoZW50aWNhdGlvbiB1c2luZyBwYXNzcG9ydEpTLCBQcmlzbWEgT1JNIHdpdGggUG9zdEdyZXNxbCBmb3IgZGF0YWJhc2UsIGFuZCBjbG91ZGluYXJ5IGZvciBzY2FsYWJsZSBjbG91ZCBzdG9yYWdlLiBEZXBsb3llZCBhcHAgb24gUmFpbHdheSBhbmQgZGF0YWJhc2Ugb24gU3VwYWJhc2UuXCIsXG4gICAgICAgICAgICBbXCJub2RlanNcIiwgXCJleHByZXNzXCIsIFwicG9zdGdyZXNxbFwiLCBcInByaXNtYVwiLCBcInRhaWx3aW5kXCIsIFwibnBtXCIsIFwicmFpbHdheVwiLCBcInN1cGFiYXNlXCJdLCBcbiAgICAgICAgICAgIHtyZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYXJyeUFobkhTL2ZpbGUtc3RvcmFnZVwiLCBcbiAgICAgICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9maWxlLXN0b3JhZ2UtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9cIn1cbiAgICAgICAgKTsgIFxuICAgICAgICBcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0KEZsZXhvciwgXCJGbGV4b3JcIiwgXG4gICAgICAgICAgICBcIkEgIHNvY2lhbCBtZWRpYSBwbGF0Zm9ybSBidWlsdCB3aXRoIHRoZSBQRVJOIHN0YWNrIChQb3N0Z3JlU1FMLCBFeHByZXNzLCBSZWFjdCwgTm9kZS5qcykuIFRoZSBwbGF0Zm9ybSBlbmFibGVzIHVzZXJzIHRvIGNyZWF0ZSBhbmQgam9pbiByZWFsbXMsIG1ha2UgcG9zdHMsIGxpa2UgY29udGVudCwgYW5kIGVuZ2FnZSBpbiBuZXN0ZWQgY29tbWVudCB0aHJlYWRzLCBhbmQgcmVjaWV2ZSByZWFsLXRpbWUgbm90aWZpY2F0aW9ucy5cIlxuICAgICAgICAgICAgW1wibm9kZWpzXCIsIFwiZXhwcmVzc1wiLCBcInJlYWN0XCIsIFwicG9zdGdyZXNxbFwiLCBcInByaXNtYVwiLCBcInNvY2tldGlvXCIsIFwidGFpbHdpbmRcIiwgXCJ2aXRlXCIsIFwibnBtXCIsIFwidmVyY2VsXCIsIFwiaGVyb2t1XCIsIFwic3VwYWJhc2VcIl0sIFxuICAgICAgICAgICAge3JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hhcnJ5QWhuSFMvZmxleG9yLWZyb250LWVuZC90cmVlL21haW5cIiwgXG4gICAgICAgICAgICBsaXZlOiBcImh0dHBzOi8vZmxleG9yLWZyb250LWVuZC0yYzZyLnZlcmNlbC5hcHAvXCJ9XG4gICAgICAgICk7ICBcblxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5wcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdExpc3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy13cmFwcGVyXCIpXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFpbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1tYWluXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RBc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXNpZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXNpZGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3Byb2plY3Quc2NyZWVuc2hvdH0pYDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBc2lkZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmlnaHRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljb24gdG8gZGVtb25zdHJhdGUgbGl2ZSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpdmUuY2xhc3NMaXN0LmFkZChcImxpdmUtaWNvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKGxpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvb3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29scy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvb2xzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b29scy5mb3JFYWNoKCh0b29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKHRvb2wudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZXBvXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHlwZXJsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh5cGVybGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtwcm9qZWN0LmxpbmtzLnJlcG99YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwZXJsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgYF9ibGFua2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cGVybGluay5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocHJvamVjdC5saW5rcy5yZXBvLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0ljb24uY2xhc3NMaXN0LmFkZCgncmVwby1pY29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBlcmxpbmsuYXBwZW5kQ2hpbGQocmVwb0ljb24pOyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvLmFwcGVuZENoaWxkKGh5cGVybGluayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmFwcGVuZENoaWxkKHRvb2xzKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGb290LmFwcGVuZENoaWxkKHJlcG8pOyAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdEZvb3QpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEFzaWRlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0UmlnaHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE1haW4pO1xuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5vbmNsaWNrID0gKGUpID0+e1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihwcm9qZWN0LmxpbmtzLmxpdmUsICdfYmxhbmsnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxOYXZMaW5rQWN0aXZlKCkge1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCBlYWNoIHNlY3Rpb24gb2Zmc2V0VG9wIHByb3BlcnR5LCBjb21wYXJlIHdpdGggc2Nyb2xsIFlcbiAgICAgICAgICAgIC8vIElmIHNjcm9sbFkgaXMgd2l0aGluIHNlY3Rpb24sIHRoZW4gYWRkIGl0IGFzIGEgY2xhc3MgdG8gbmF2IGVsZW1lbnRcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gc3VidHJhY3QgYXJiaXRyYXJ5IHZhbHVlIC0gXG4gICAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IHNlY3Rpb25Ub3AgLSA2MCkgeyBcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiBhXCIpO1xuICAgICAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgIGlmIChhLmNsYXNzTGlzdC5jb250YWlucyhjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlOyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcykge1xuICAgICAgICB0aGlzLnNjcmVlbnNob3QgPSBzY3JlZW5zaG90O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnRvb2xzID0gdG9vbHM7XG4gICAgICAgIHRoaXMubGlua3MgPSBsaW5rcztcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGdldFByb2plY3QobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT0gbmFtZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHNjcmVlbnNob3QsIG5hbWUsIGRlc2MsIHRvb2xzLCBsaW5rcykge1xuICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IFByb2plY3Qoc2NyZWVuc2hvdCwgbmFtZSwgZGVzYywgdG9vbHMsIGxpbmtzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC51bnNoaWZ0KG5ld1Byb2opO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9saW5rZWRpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9lbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvc3VuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvaHRtbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvY3NzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9qcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ub2RlanMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9ucG0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdGJvb3RzdHJhcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3RhaWx3aW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvdml0ZXN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Ryb3V0ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9uZXRsaWZ5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvZXhwcmVzcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3Bvc3RncmVzcWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9wcmlzbWEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yYWlsd2F5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvc3VwYWJhc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy90b29scy9zb2NrZXRpby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2hlcm9rdS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZlcmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ZpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcnVwcG8mZmFtaWx5PU11a3RhOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEZvbnQgKi9cblxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGggO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIC8qIEN1c3RvbSBwcm9wZXJ0aWVzIGZvciB0aGVtZSAqL1xuICAgIC0taGVhZGVyLWNvbG9yOiAjZjVmM2Y0O1xuICAgIC0taGVhZGVyLWNvbG9yLTI6ICNlNWU1ZTU7XG4gICAgLS1oZWFkZXItdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1oZWFkZXItc3VidGV4dC1jb2xvcjogcmdiKDEyNywgMTI1LCAxMjUpO1xuXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICNmNWYzZjQ7XG4gICAgLS1tYWluLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XG5cbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogI2ZiZjlmYTtcblxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xuXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5ib2R5LmRhcmsge1xuICAgIC8qIEN1c3RvbSBwcm9wZXJ0aWVzIGZvciB0aGVtZSAqL1xuICAgIC0taGVhZGVyLWNvbG9yOiAjMGQxYjJhO1xuICAgIC0taGVhZGVyLWNvbG9yLTI6ICMxMTIzMzY7XG4gICAgLS1oZWFkZXItdGV4dC1jb2xvcjogI2YwZjFlZTtcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xuXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICMwZDFiMmE7XG4gICAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tbWFpbi1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xuXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICMzYjQ5NjY7XG5cbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmNzE1Yjtcbn1cblxuLyogSGVhZGVyIGNvbnRlbnQgKi9cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xuICAgIFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciA+IGgxIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5oZWFkZXIgPiBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmhlYWRlciA+IHAge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXN1YnRleHQtY29sb3IpO1xufVxuXG4vKiBOYXZiYXIgKi9cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZsZXg6IDE7XG5cbiAgICBjb2xvcjogKC0taGVhZGVyLXRleHQtY29sb3IpO1xufVxuXG5uYXYgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxNTBweDtcblxuICAgIG1hcmdpbjogNXB4O1xufVxuXG5uYXYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBOYXYgYWN0aXZlIHN0YXRlcyAqL1xubmF2ID4gYS5hY3RpdmUgPiAubmF2LWluZGljYXRvciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5uYXYgPiBhLmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi8qIE5hdiBob3ZlciAqL1xubmF2ID4gYTpob3ZlciA+IC5uYXYtaW5kaWNhdG9yLFxubmF2ID4gYTpmb2N1cyA+IC5uYXYtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdiA+IGE6aG92ZXIsXG5uYXYgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm5hdi1pbmRpY2F0b3Ige1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgIGhlaWdodDogMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcblxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxubmF2ID4gYSA+IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIExpbmtzIHN0eWxpbmcgKi9cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmxpID4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uc29jaWFscy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuXG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zb2NpYWxzLWljb24uZ2l0aHViIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5zb2NpYWxzLWljb24ubGlua2VkaW4ge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLnNvY2lhbHMtaWNvbi5lbWFpbCB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogM3B4O1xufVxuXG5saSA+IGE6aG92ZXIgPiAuc29jaWFscy1pY29uLFxubGkgPiBhOmZvY3VzID4gLnNvY2lhbHMtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTWFpbiBjb250ZW50ICovXG5cbm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XG5cbiAgICB3aWR0aDogNjAlO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi8qIFBhZ2UgMSAtIEFib3V0IHNlY3Rpb24gKi9cblxuI2Fib3V0IHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLyogVGhlbWUgdG9nZ2xlICovXG4udG9nZ2xlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiBEZWZhdWx0IHRoZW1lICovXG4udG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIG1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG59XG5cbi50b2dnbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi8qIERhcmsgbW9kZSAqL1xuYm9keS5kYXJrID4gbWFpbiA+ICNhYm91dCA+IC50b2dnbGUtd3JhcHBlciA+IC50b2dnbGV7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5hYm91dC1jb250ZW50ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogODRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5hYm91dC1jb250ZW50ID4gcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXN1YnRleHQtY29sb3IpO1xufVxuXG4vKiBQYWdlIDIgLSBQcm9qZWN0cyAgKi9cblxuLnByb2plY3QtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRlbnQgPiBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICBtYXJnaW46IDBweDtcbn1cblxuLyogUHJvamVjdCBDYXJkcyAqL1xuLnByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLnByb2plY3QtbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3QtYXNpZGUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXJpZ2h0IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLnByb2plY3QtaW1nIHtcbiAgICAvKiBUZW1wICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdC10ZXh0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtbmFtZSAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9qZWN0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnByb2plY3QtZm9vdCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4vKiBHaXRodWIgcmVwbyArIGxpdmUgaWNvbiAqL1xuXG4ucHJvamVjdC1yZXBvIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnByb2plY3QtcmVwbyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJlcG8taWNvbiB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubGl2ZS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgbWFzay1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi8qIFRvb2wgSWNvbiBTdHlsaW5nICovXG4ucHJvamVjdC10b29scyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udG9vbCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5IVE1MIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG5cbi5DU1Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbn1cblxuLkpTIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19ffSk7XG59XG5cbi5SRUFDVCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fX30pO1xufVxuXG4uTk9ERUpTIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fX30pO1xufVxuXG4uTlBNIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fX30pO1xufVxuXG4uUkVBQ1RCT09UU1RSQVAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19ffSk7XG59XG5cbi5UQUlMV0lORCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX199KTtcbn1cblxuLlZJVEVTVCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX199KTtcbn1cblxuLlJFQUNUUk9VVEVSIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fX30pO1xufVxuXG4uTkVUTElGWSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX199KTtcbn1cblxuLkVYUFJFU1Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19ffSk7XG59XG5cbi5QT1NUR1JFU1FMIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pO1xufVxuXG4uUFJJU01BIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fX30pO1xufVxuXG4uUkFJTFdBWSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX199KTtcbn1cblxuLlNVUEFCQVNFIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fX30pO1xufVxuXG4uU09DS0VUSU8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19ffSk7XG59XG5cbi5IRVJPS1Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19ffSk7XG59XG5cbi5WRVJDRUwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19ffSk7XG59XG5cbi5WSVRFIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fX30pO1xufVxuXG4vKiBQcm9qZWN0IGhvdmVyICovXG4ucHJvamVjdDpob3ZlciwgLnByb2plY3Q6Zm9jdXMge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5saXZlLWljb24ge1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5yZXBvLWljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLnByb2plY3QtbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgIGJvZHkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItMik7XG5cbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBoZWFkZXIgPiBoMSwgaGVhZGVyID4gaDQsIGhlYWRlciA+IHAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIG5hdiA+IGF7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLnRvZ2dsZS13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDBweDtcblxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgI3Byb2plY3RzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnByb2plY3QtdG9vbHMge1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG5cbiAgICAudG9vbCB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1tYWluIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucHJvamVjdC1hc2lkZSB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUdUO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhDQUE4Qzs7SUFFOUMsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDBDQUEwQzs7SUFFMUMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQ0FBcUM7O0lBRXJDLGdDQUFnQzs7SUFFaEMsdUJBQXVCOztJQUV2QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCOztJQUVoQixXQUFXOztJQUVYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsK0JBQStCOztJQUUvQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDZCQUE2Qjs7SUFFN0IsZ0NBQWdDOztJQUVoQyx1QkFBdUI7QUFDM0I7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLCtCQUErQjs7SUFFL0IsZUFBZTtJQUNmLEtBQUs7SUFDTCxPQUFPOztJQUVQLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFn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UUFDSSxTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7O1FBRVYsU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7O1FBRVgsa0JBQWtCO1FBQ2xCLFVBQVU7O1FBRVYsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdydXBwbyZmYW1pbHk9TXVrdGE6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoIDtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjZjVmM2Y0O1xcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjZTVlNWU1O1xcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiBibGFjaztcXG4gICAgLS1oZWFkZXItc3VidGV4dC1jb2xvcjogcmdiKDEyNywgMTI1LCAxMjUpO1xcblxcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcXG4gICAgLS1tYWluLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xcblxcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogI2ZiZjlmYTtcXG5cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjcxNWI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuYm9keS5kYXJrIHtcXG4gICAgLyogQ3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZW1lICovXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjMGQxYjJhO1xcbiAgICAtLWhlYWRlci1jb2xvci0yOiAjMTEyMzM2O1xcbiAgICAtLWhlYWRlci10ZXh0LWNvbG9yOiAjZjBmMWVlO1xcbiAgICAtLWhlYWRlci1zdWJ0ZXh0LWNvbG9yOiAjZDRkNWQzO1xcblxcbiAgICAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogIzBkMWIyYTtcXG4gICAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLW1haW4tc3VidGV4dC1jb2xvcjogI2Q0ZDVkMztcXG5cXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICMzYjQ5NjY7XFxuXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY3MTViO1xcbn1cXG5cXG4vKiBIZWFkZXIgY29udGVudCAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaGVhZGVyID4gaDQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBmbGV4OiAxO1xcblxcbiAgICBjb2xvcjogKC0taGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDE1MHB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxubmF2ID4gYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIE5hdiBhY3RpdmUgc3RhdGVzICovXFxubmF2ID4gYS5hY3RpdmUgPiAubmF2LWluZGljYXRvciB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbm5hdiA+IGEuYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIE5hdiBob3ZlciAqL1xcbm5hdiA+IGE6aG92ZXIgPiAubmF2LWluZGljYXRvcixcXG5uYXYgPiBhOmZvY3VzID4gLm5hdi1pbmRpY2F0b3Ige1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYgPiBhOmhvdmVyLFxcbm5hdiA+IGE6Zm9jdXMge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1pbmRpY2F0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxuXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5uYXYgPiBhID4gcCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIFxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogTGlua3Mgc3R5bGluZyAqL1xcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxubGkgPiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zb2NpYWxzLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItc3VidGV4dC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuXFxuICAgIG1hcmdpbjogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zb2NpYWxzLWljb24uZ2l0aHViIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9zb2NpYWxzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxufVxcblxcbi5zb2NpYWxzLWljb24ubGlua2VkaW4ge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvbGlua2VkaW4uc3ZnXFxcIik7XFxufVxcblxcbi5zb2NpYWxzLWljb24uZW1haWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZW1haWwuc3ZnXFxcIik7XFxuXFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5saSA+IGE6aG92ZXIgPiAuc29jaWFscy1pY29uLFxcbmxpID4gYTpmb2N1cyA+IC5zb2NpYWxzLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuXFxuICAgIHdpZHRoOiA2MCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFBhZ2UgMSAtIEFib3V0IHNlY3Rpb24gKi9cXG5cXG4jYWJvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIFRoZW1lIHRvZ2dsZSAqL1xcbi50b2dnbGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIERlZmF1bHQgdGhlbWUgKi9cXG4udG9nZ2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9zdW4uc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL2xvY2FsL3N1bi5zdmdcXFwiKTtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxufVxcblxcbi50b2dnbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBEYXJrIG1vZGUgKi9cXG5ib2R5LmRhcmsgPiBtYWluID4gI2Fib3V0ID4gLnRvZ2dsZS13cmFwcGVyID4gLnRvZ2dsZXtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1xcXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9tb29uLnN2Z1xcXCIpO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA4NHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogUGFnZSAyIC0gUHJvamVjdHMgICovXFxuXFxuLnByb2plY3QtY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50ID4gaDEge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IENhcmRzICovXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdC1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtYXNpZGUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtcmlnaHQge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbWcge1xcbiAgICAvKiBUZW1wICovXFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1zdWJ0ZXh0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvb3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLyogR2l0aHViIHJlcG8gKyBsaXZlIGljb24gKi9cXG5cXG4ucHJvamVjdC1yZXBvIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LXJlcG8gPiBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnJlcG8taWNvbiB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc3VidGV4dC1jb2xvcik7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvc29jaWFscy9naXRodWIuc3ZnXFxcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3NvY2lhbHMvZ2l0aHViLnN2Z1xcXCIpO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubGl2ZS1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy9sb2NhbC9hcnJvdy5zdmdcXFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvbG9jYWwvYXJyb3cuc3ZnXFxcIik7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4vKiBUb29sIEljb24gU3R5bGluZyAqL1xcbi5wcm9qZWN0LXRvb2xzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50b29sIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uSFRNTCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2h0bWwuc3ZnXFxcIik7XFxufVxcblxcbi5DU1Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9jc3Muc3ZnXFxcIik7XFxufVxcblxcbi5KUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2pzLnN2Z1xcXCIpO1xcbn1cXG5cXG4uUkVBQ1Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdC5zdmdcXFwiKTtcXG59XFxuXFxuLk5PREVKUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL25vZGVqcy5zdmdcXFwiKTtcXG59XFxuXFxuLk5QTSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL25wbS5zdmdcXFwiKTtcXG59XFxuXFxuLlJFQUNUQk9PVFNUUkFQIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcmVhY3Rib290c3RyYXAuc3ZnXFxcIik7XFxufVxcblxcbi5UQUlMV0lORCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3RhaWx3aW5kLnN2Z1xcXCIpO1xcbn1cXG5cXG4uVklURVNUIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvdml0ZXN0LnN2Z1xcXCIpO1xcbn1cXG5cXG4uUkVBQ1RST1VURVIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yZWFjdHJvdXRlci5zdmdcXFwiKTtcXG59XFxuXFxuLk5FVExJRlkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9uZXRsaWZ5LnN2Z1xcXCIpO1xcbn1cXG5cXG4uRVhQUkVTUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL2V4cHJlc3Muc3ZnXFxcIik7XFxufVxcblxcbi5QT1NUR1JFU1FMIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvcG9zdGdyZXNxbC5zdmdcXFwiKTtcXG59XFxuXFxuLlBSSVNNQSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3Rvb2xzL3ByaXNtYS5zdmdcXFwiKTtcXG59XFxuXFxuLlJBSUxXQVkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9yYWlsd2F5LnN2Z1xcXCIpO1xcbn1cXG5cXG4uU1VQQUJBU0Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9zdXBhYmFzZS5zdmdcXFwiKTtcXG59XFxuXFxuLlNPQ0tFVElPIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvc29ja2V0aW8uc3ZnXFxcIik7XFxufVxcblxcbi5IRVJPS1Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy9oZXJva3Uuc3ZnXFxcIik7XFxufVxcblxcbi5WRVJDRUwge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pY29ucy90b29scy92ZXJjZWwuc3ZnXFxcIik7XFxufVxcblxcbi5WSVRFIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvdG9vbHMvdml0ZS5zdmdcXFwiKTtcXG59XFxuXFxuLyogUHJvamVjdCBob3ZlciAqL1xcbi5wcm9qZWN0OmhvdmVyLCAucHJvamVjdDpmb2N1cyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtbWFpbiA+IC5wcm9qZWN0LXJpZ2h0ID4gLnByb2plY3QtdGV4dCA+IC5saXZlLWljb24ge1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucmVwby1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1tYWluID4gLnByb2plY3QtcmlnaHQgPiAucHJvamVjdC10ZXh0ID4gLnByb2plY3QtbmFtZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgdG9wOiAwO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLTIpO1xcblxcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgPiBoMSwgaGVhZGVyID4gaDQsIGhlYWRlciA+IHAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgbmF2ID4gYXtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZ2dsZS13cmFwcGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuXFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICByaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG5cXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnByb2plY3QtdG9vbHMge1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvb2wge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtbWFpbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWFzaWRlIHtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL2ludGVyZmFjZSc7XG5pbXBvcnQgRmF2aWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9sb2NhbC9mYXZpY29uLnBuZydcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYXZpY29uXCIpLmhyZWYgPSBGYXZpY29uO1xuXG5JbnRlcmZhY2UuaW5pdCgpOyJdLCJuYW1lcyI6WyJQcm9qZWN0TGlzdCIsIkV0Y2hBU2tldGNoIiwiQ2FsY3VsYXRvciIsIlJlcE1lIiwiVGljVGFjVG9lIiwiVGhpbmdzVG9EbyIsIk15T2JzZXJ2YXRvcnkiLCJCYXR0bGVzaGlwIiwiUmVzdW1lR2VuZXJhdG9yIiwiV2F2ZWxlbmd0aCIsIkZpbGVTdG9yYWdlIiwiRmxleG9yIiwiSW50ZXJmYWNlIiwiaW5pdCIsInN0b3JhZ2UiLCJzZXRTdG9yYWdlIiwiZGlzcGxheVByb2plY3RzIiwidG9nZ2xlVGhlbWUiLCJzY3JvbGxOYXZMaW5rQWN0aXZlIiwiYWRkUHJvamVjdCIsInJlcG8iLCJsaXZlIiwiY29uc29sZSIsImxvZyIsInByb2plY3RMaXN0IiwicHJvamVjdHNXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdCIsInByb2plY3RDYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInByb2plY3RNYWluIiwicHJvamVjdEFzaWRlIiwiaW1nIiwic3R5bGUiLCJzY3JlZW5zaG90IiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0UmlnaHQiLCJwcm9qZWN0VGV4dCIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImRlc2MiLCJwcm9qZWN0Rm9vdCIsInRvb2xzIiwiZm9yRWFjaCIsInRvb2wiLCJpY29uIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImh5cGVybGluayIsInNldEF0dHJpYnV0ZSIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93Iiwib3BlbiIsImxpbmtzIiwiZm9jdXMiLCJyZXBvSWNvbiIsInByZXZlbnREZWZhdWx0Iiwib25zY3JvbGwiLCJjdXJyZW50Iiwic2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJvZmZzZXRUb3AiLCJzY3JvbGxZIiwiZ2V0QXR0cmlidXRlIiwibmF2TGlua3MiLCJhIiwicmVtb3ZlIiwiY29udGFpbnMiLCJidG4iLCJib2R5IiwidG9nZ2xlIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwiZ2V0UHJvamVjdCIsImZpbmQiLCJuZXdQcm9qIiwidW5zaGlmdCIsIkZhdmljb24iLCJnZXRFbGVtZW50QnlJZCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9