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
        return this.projectList.find((project) => {
            project.name == name;
        })
    }

    addProject(screenshot, name, desc, tools, links) {
        const newProj = new Project(screenshot, name, desc, tools, links);
        this.projectList.unshift(newProj);
    }
}

export default ProjectList;