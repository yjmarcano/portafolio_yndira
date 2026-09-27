const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

const skillsList = [
    { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React / Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Postman / Insomnia", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Power BI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "D3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },
    { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
    { name: "Moodle", icon: "https://www.vectorlogo.zone/logos/moodle/moodle-icon.svg" }
];

function loadSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    skillsList.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}" loading="lazy">
            <span>${skill.name}</span>
        `;
        container.appendChild(card);
    });
}

function loadSpecificProjects() {
    const container = document.getElementById('projectsContainer');
    const exclusiveProjects = [
        { name: "Guía de Certificación V2", description: "Guía integral de preparación técnica, reforzando conceptos modulares y estándares avanzados.", tech: "JavaScript, Markdown, GitHub Pages", url: "https://github.com/yjmarcano" },
        { name: "Gestor de Tareas", description: "Desarrollo y prácticas web fundamentado en estructuración semántica.", tech: "HTML5, CSS3, JavaScript, Git", url: "https://github.com/yjmarcano" },
        { name: "Ecommerce Minimalista", description: "Componentes dinámicos y manipulación del DOM.", tech: "JavaScript, HTML5, CSS3", url: "https://github.com/yjmarcano" },
        { name: "Blog Personal", description: "Integración con bases de datos relacionales.", tech: "MySQL, Modelado ER, Node.js", url: "https://github.com/yjmarcano" },
        { name: "Chat en tiempo Real", description: "Desarrollo backend, construcción de endpoints y APIs REST.", tech: "Node.js, Express.js, Postman", url: "https://github.com/yjmarcano" },
        { name: "Acortador Urls", description: "Interfaces dinámicas y motores de plantilla.", tech: "EJS / Handlebars, JavaScript, Express", url: "https://github.com/yjmarcano" },
        { name: "App Citas Medicas", description: "Arquitectura de seguridad y autenticación basada en tokens.", tech: "JWT, Node.js, Express, Dotenv", url: "https://github.com/yjmarcano" },
        { name: "Mapeo Objeto-Relacional - ORM", description: "Persistencia de datos avanzados y ORM.", tech: "PostgreSQL, Sequelize, Git", url: "https://github.com/yjmarcano" },
        { name: "Pruebas en producción", description: "Evaluación modular integral.", tech: "JavaScript, Postman, Scrum", url: "https://github.com/yjmarcano" },
        { name: "Servicios cloud", description: "Integración avanzada y despliegue.", tech: "AWS, Docker, Node.js, PostgreSQL", url: "https://github.com/yjmarcano" }
    ];

    container.innerHTML = '';
    exclusiveProjects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-info">
                <h3><i class="fas fa-book-bookmark"></i> ${proj.name}</h3>
                <p style="margin-bottom: 0.75rem;">${proj.description}</p>
                <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600;">
                    <i class="fas fa-tools"></i> Tecnologías: ${proj.tech}
                </p>
            </div>
            
        `;
        container.appendChild(card);
    });
}

loadSkills();
loadSpecificProjects();
