import {Project, ProjectList} from "./project";


const Interface = (() => {
    function setStorage() {
        const storage = new ProjectList();
        storage.addProject("");
    }

    return {
        setStorage
    }
})

