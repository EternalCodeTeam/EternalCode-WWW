const projects = [];
const pinnedProjects = [];
let orderedProjects = [];

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
                        link: project.link,

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
            data.forEach(project => {
                pinnedProjects.push(project.repo);
            });
        });

    console.log(pinnedProjects, "projects");

    isPinnedProjectLoaded = true;
    return pinnedProjects;

};

const orderProjects = (pinnedProjects, projects) => {
    if (isOrdered) {
        return projects;
    }

    // First, filter out the pinned projects from the main list
    const nonPinnedProjects = projects.filter((project) =>
        !pinnedProjects.some((pinnedProject) => pinnedProject.repo === project.name)
    );

    // Then, merge the pinned projects with the rest of the projects
    orderedProjects = [...pinnedProjects, ...nonPinnedProjects];

    console.log(orderedProjects);
    isOrdered = true;
    return orderedProjects;

};

export {loadRepositories, loadPinnedProjects, orderProjects};