const projects = [];
const pinnedProjects = [];
const orderedProjects = [];

let isProjectLoaded = false;
let isPinnedProjectLoaded = false;
let isOrdered = false;

const loadRepositories = async () => {
    if (isProjectLoaded) {
        return projects;
    }

    fetch("https://api.github.com/users/EternalCodeTeam/repos?type=public")
        .then((response) => response.json())
        .then((data) => {
            data
                .map((project) => {
                    if (project.name === ".github") {
                        return null; // ignore .github repository
                    }
                    return {
                        name: project.name,
                        description: project.description,
                        link: project.html_url,

                    };
                })
                .filter(Boolean)
                .forEach((project) => {
                    projects.push(project);
                });
        });

    console.log(projects, "projects");

    isProjectLoaded = true;
    return projects;
};

const loadPinnedProjects = async () => {
    if (isPinnedProjectLoaded) {
        return pinnedProjects;
    }

    fetch("https://gh-pinned-repos.egoist.dev/?username=eternalcodeteam")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((project, description, link) => {
                pinnedProjects.push({name: project.repo, description: "", link: ""})

            });
        });

    console.log(pinnedProjects, "projects");

    isPinnedProjectLoaded = true;
    return pinnedProjects;

};

const orderProjects = () => {
    if (isOrdered) {
        return orderedProjects;
    }

    // First, filter out the pinned projects from the main list
    const nonPinnedProjects = projects.filter((project) =>
        !pinnedProjects.some((pinnedProject) => pinnedProject.name === project.name)
    );





    for (const pinnedProject of pinnedProjects) {
        orderedProjects.push(pinnedProject);
    }

    for (const nonPinnedProject of nonPinnedProjects) {
        orderedProjects.push(nonPinnedProject);
    }


    console.log(orderedProjects);
    isOrdered = true;
    return orderedProjects;

};

export default {loadRepositories, loadPinnedProjects, orderProjects};
