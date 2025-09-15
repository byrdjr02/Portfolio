// Project data - in a real application, this would come from a database or API
const projects = [
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing development projects with modern design and smooth user experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: null, // Placeholder for project image
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Weather Dashboard",
        description: "An interactive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
        technologies: ["React", "Chart.js", "Weather API", "CSS3"],
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Blog Engine",
        description: "A content management system for bloggers with markdown support, SEO optimization, and admin dashboard.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Mobile Finance Tracker",
        description: "A React Native mobile app for personal finance tracking with expense categorization and budget planning.",
        technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
        image: null,
        liveLink: "#",
        codeLink: "#"
    }
];

// Function to create a project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<span>Project Image</span>`}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="project-link" target="_blank">Live Demo</a>
                    <a href="${project.codeLink}" class="project-link" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    `;
}

// Function to render all projects
function renderProjects() {
    const projectCardsContainer = document.querySelector('.project-cards');
    
    if (projectCardsContainer) {
        projectCardsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Initialize projects when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
});

// Optional: Add a filter function for future enhancements
function filterProjects(technology) {
    const filteredProjects = projects.filter(project => 
        project.technologies.some(tech => 
            tech.toLowerCase().includes(technology.toLowerCase())
        )
    );
    
    const projectCardsContainer = document.querySelector('.project-cards');
    if (projectCardsContainer) {
        projectCardsContainer.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    }
}

// Optional: Show all projects (reset filter)
function showAllProjects() {
    renderProjects();
}