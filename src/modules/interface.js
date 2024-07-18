import ProjectList from "./project";

import EtchASketch from "../assets/screenshots/etchasketch.png";
import Calculator from "../assets/screenshots/calculator.png";
import RepMe from "../assets/screenshots/repme.png";
import TicTacToe from "../assets/screenshots/tictactoe.png";
import ThingsToDo from "../assets/screenshots/thingstodo.png";
import MyObservatory from "../assets/screenshots/myobservatory.png";
import Battleship from "../assets/screenshots/battleship.png";


const Interface = (() => {
    function init() {
        const storage = setStorage();
        displayProjects(storage);
        toggleTheme();
    }

    function setStorage() {
        // Manual storage selection
        const storage = new ProjectList();

        storage.addProject(EtchASketch,"Etch-A-Sketch", 
            "A simple sketchbook app supporting dynamic grid-sizes. This was one of my first projects implementing JS on a webpage.",
            ["HTML", "CSS", "JS"], 
            {repo: "https://github.com/HarryAhnHS/etch-a-sketch", 
            live: "https://harryahnhs.github.io/etch-a-sketch/"}
        );

        storage.addProject(Calculator,"Calculator", 
            "A recreation of Apple IOS calculator app with keyboard support.",
            ["HTML", "CSS", "JS"], 
            {repo: "https://github.com/HarryAhnHS/calculator", 
            live: "https://harryahnhs.github.io/calculator/"}
        );

        storage.addProject(RepMe, "RepMe", 
            "A dashboard front-end only design for a workout social platform. Utilized randomized dummy content to simulate back-end.",
            ["HTML", "CSS"], 
            {repo: "https://github.com/HarryAhnHS/repme-dashboard", 
            live: "https://harryahnhs.github.io/repme-dashboard/"}
        );

        storage.addProject(TicTacToe, "TicTacToe", 
            "Interactive Tic-Tac-Toe game supporting PvP and PvC with ranging difficulty. Implemented minimax algorithm for computer decision-making.",
            ["HTML", "CSS", "JS"], 
            {repo: "https://github.com/HarryAhnHS/tictactoe", 
            live: "https://harryahnhs.github.io/tictactoe/"}
        );

        storage.addProject(ThingsToDo, "ThingsToDo", 
            "Todo list with fully customizable projects & todos. Automatically save content using localStorage API.",
            ["HTML", "CSS", "JS", "npm"], 
            {repo: "https://github.com/HarryAhnHS/thingsToDo", 
            live: "https://harryahnhs.github.io/thingsToDo/"}
        );

        storage.addProject(MyObservatory, "My Observatory", 
            "Simple weather app to query any location for real time data using WeatherAPI.",
            ["HTML", "CSS", "JS", "npm"], 
            {repo: "https://github.com/HarryAhnHS/my-observatory", 
            live: "https://harryahnhs.github.io/my-observatory/"}
        );

        storage.addProject(Battleship, "Battleship", 
            "PvC battleship game. Interactively drag, drop, and rotate ships, and battle an intelligent agent making computer decisions.",
            ["HTML", "CSS", "JS", "npm"], 
            {repo: "https://github.com/HarryAhnHS/battleship", 
            live: "https://harryahnhs.github.io/battleship/"}
        );                   

        return storage.projectList;
    }

    function displayProjects(projectList) {
        const projectsWrapper = document.querySelector(".projects-wrapper")
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

                        project.tools.forEach((tool) => {
                            const icon = document.createElement('div');
                            icon.classList.add("tool");
                            icon.classList.add(tool.toString().toUpperCase());

                            tools.appendChild(icon);
                        })

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

            projectCard.onclick = (e) =>{
                e.preventDefault();
                window.open(project.links.live, '_blank').focus();
            }

        projectsWrapper.appendChild(projectCard);
        }
    }

    function toggleTheme() {
        const btn = document.querySelector(".toggle");
        btn.onclick = (e) => {
            document.body.classList.toggle("dark");
        }
    }

    return {
        init
    }
})();

export default Interface;