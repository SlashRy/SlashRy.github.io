const PROJECTS_DIV = document.getElementById("projects-section");

for (let project of PROJECT_LIST) {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
    <img src="${project.image}"><div class="card-content">
    <p class="project-name">${project.name}</p>
    <p class="project-description">${project.description}</p>
    <div>
        <a href="${project.demoLink}">Live Demo</a>
        <a href="${project.codeLink}">View Code</a>
    </div>
    `;
    PROJECTS_DIV.append(projectCard);
}
