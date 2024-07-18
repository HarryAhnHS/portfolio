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
        this.projectList;
    }

    addProject(screenshot, name, desc, tools, links) {
        const newProj = new Project(screenshot, name, desc, tools, links);
        this.projectList.push(newProj);
    }

    deleteProject(screenshot, name, desc, tools, links) {
        const newProj = new Project(screenshot, name, desc, tools, links);
        this.projectList.push(newProj);
    }
}