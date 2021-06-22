export const appendProjects = (projectWorkElement, projectData) => {
    projectWorkElement.innerHTML = '';
    for (let i = 0; i < projectData.length; i++) {
        projectWorkElement.innerHTML += `
        <div class="project_layer">
            <a href="${projectData[i].url}" target='_blank' class="project_layer_overlay">
                <h3>
                    ${projectData[i].title}
                </h3>
                <p>
                    ${projectData[i].description}
                </p>
            </a>
            <img src="${projectData[i].imgUrl}" alt="yelpcamp">
        </div>
        `;
    }
}