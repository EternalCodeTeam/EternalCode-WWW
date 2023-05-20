type Project = {
    name: string,
    description: string,
    link: string,
}

const EGOIST_PINNED_REPOS_URL = "https://gh-pinned-repos.egoist.dev/?username=eternalcodeteam";
type EgoistPinnedProject = {
    repo: string,
    description: string,
    link: string,
}
const pinnedProjects: Promise<Array<Project>> = fetch(EGOIST_PINNED_REPOS_URL)
    .then(response => response.json() as Promise<EgoistPinnedProject[]>)
    .then(projects => projects.map(project => ({
        name: project.repo,
        description: project.description,
        link: project.link,
    })));

const GITHUB_API_URL = "https://api.github.com/users/eternalcodeteam/repos?type=public";
type GithubApiProject = {
    name: string,
    description: string,
    html_url: string,
}
const ignoredRepos = [".github"];

const allProjects: Promise<Array<Project>> = fetch(GITHUB_API_URL)
    .then(response => response.json() as Promise<GithubApiProject[]>)
    .then(projects => projects.filter(project => !ignoredRepos.includes(project.name)))
    .then(projects => projects.map(project => ({
        name: project.name,
        description: project.description,
        link: project.html_url,
    })));

const notPinnedProjects: Promise<Array<Project>> = Promise.all([allProjects, pinnedProjects])
    .then(([allProjects, pinnedProjects]) => {
        const pinned = pinnedProjects.map(project => project.name);
        return allProjects.filter(project => !pinned.includes(project.name));
    });

export {pinnedProjects, notPinnedProjects};
