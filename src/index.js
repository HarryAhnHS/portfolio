import './style/style.css';
import Git from './assets/github.png';
import Interface from './modules/interface';
import {Project, ProjectList} from "./modules/project";

document.getElementById("github").src = Git; // Fill github logo

Interface.setStorage();

// console.log(ProjectList.projectList);