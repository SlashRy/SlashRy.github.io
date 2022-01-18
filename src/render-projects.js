const PROJECTS_DIV = document.getElementById("projects-section");

for (let project of PROJECT_LIST) {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    for (tag of project.tags) projectCard.classList.add(tag);
    projectCard.innerHTML = `
    <img src="${project.image}"><div class="card-content">
    <p class="project-name">${project.name}</p>
    <p class="project-description">${project.description}</p>
    <div>
        <a href="${
            project.demoLink
        }" target="_blank">Live Demo <i class="fas fa-desktop fa-xs"></i></a>
        ${
            project.codeLink == "#"
                ? `<a class="school-btn" title="Temporarily disabled, sorry!">View Code <i class="fas fa-code fa-xs"></i></a>`
                : `<a href="${project.codeLink}" target="_blank">View Code <i class="fas fa-code fa-xs"></i></a>`
        }
    </div>
    `;
    PROJECTS_DIV.append(projectCard);
}

// Set the intial filter now that all project cards are created
document.getElementById("recommended-btn").click();
