// Traducciones del sitio.
//
// El español es el idioma original y vive en index.html.
// Aquí solo va el inglés: cada clave corresponde a un atributo data-i18n="clave"
// (reemplaza el contenido del elemento) o data-i18n-alt="clave" (reemplaza el texto alternativo).
// Si agregas un texto nuevo al HTML, ponle data-i18n y agrega su traducción aquí.
//
// "ui" son los textos de botones que genera script.js (en ambos idiomas).

window.I18N = {
    ui: {
        es: {
            nav: 'Navegación principal',
            themeToLight: 'Cambiar a modo claro',
            themeToDark: 'Cambiar a modo oscuro',
            menuOpen: 'Abrir menú',
            menuClose: 'Cerrar menú',
            langButton: 'EN',
            langButtonLabel: 'Switch to English',
            langButtonLang: 'en',
            copyEmail: 'Copiar correo',
            copied: '¡Correo copiado!',
            copyFailed: 'No se pudo copiar el correo',
            description: 'CV de Jesús Rubén Gámez Molina, desarrollador de software e Ingeniero en Sistemas Computacionales. Experiencia en .NET, C#, Vue.js, Angular, SQL Server, MongoDB e integración de IA.'
        },
        en: {
            nav: 'Main navigation',
            themeToLight: 'Switch to light mode',
            themeToDark: 'Switch to dark mode',
            menuOpen: 'Open menu',
            menuClose: 'Close menu',
            langButton: 'ES',
            langButtonLabel: 'Cambiar a español',
            langButtonLang: 'es',
            copyEmail: 'Copy email',
            copied: 'Email copied!',
            copyFailed: 'Could not copy the email',
            description: 'Resume of Jesús Rubén Gámez Molina, software developer and Computer Systems Engineer. Experience with .NET, C#, Vue.js, Angular, SQL Server, MongoDB and AI integration.'
        }
    },

    en: {
        // Menú
        'nav.inicio': 'Home',
        'nav.sobre': 'About me',
        'nav.experiencia': 'Experience',
        'nav.destacados': 'Key projects',
        'nav.personales': 'Personal projects',
        'nav.habilidades': 'Skills',
        'nav.formacion': 'Education',
        'nav.cursos': 'Courses',
        'nav.aptitudes': 'Soft skills',

        // Inicio
        'inicio.subtitulo': 'Software Developer | Computer Systems Engineer',
        'inicio.resumen':
            'I am a Computer Systems Engineer with extensive experience in software development. ' +
            'Throughout my career I have designed and implemented technology solutions that address real needs, ' +
            'using a wide range of technologies and programming languages. I stand out for my practical approach, ' +
            'adaptability and commitment to continuous improvement, constantly adopting new tools and methodologies ' +
            'to deliver <strong>robust, efficient, high-value solutions</strong>.',

        // Sobre mí
        'sobre.titulo': '📍 About me',
        'sobre.ubicacion': 'Guasave, Sinaloa, Mexico',
        'sobre.idiomas': 'Spanish / English',

        // Experiencia
        'exp.titulo': '💼 Professional experience',

        'exp.azzule.puesto': 'Spyral Systems | Azzule Systems | Software Developer',
        'exp.azzule.fecha': 'April 2025 – Present',
        'exp.azzule.lista':
            '<li>Development of web and backend solutions for clients across different industries.</li>' +
            '<li>Delivery of projects focused on operational efficiency, process automation and continuous improvement.</li>' +
            '<li>Use of modern technologies such as .NET 6+, Vue.js 3 and REST APIs, with SQL Server and MongoDB database management.</li>' +
            '<li>Participation in the design and development of enterprise portals with built-in AI features, focused on ' +
            'intelligent assistance, conversational flows and automated data analysis.</li>' +
            '<li>Building interactive Vue.js interfaces integrated with AI modules for recommendations, smart validation ' +
            'and guided navigation.</li>' +
            '<li>Development of REST APIs in C# implementing services, architecture patterns, business logic and ' +
            'SQL/MongoDB persistence, including conversation history and advanced data processing.</li>' +
            '<li>Integration of SignalR/WebSockets, AutoMapper, log4net and Serilog for real-time communication, ' +
            'traceability and observability.</li>' +
            '<li>AI-driven process optimization and automation, reducing operating times and improving the user ' +
            'experience across the delivered portals.</li>' +
            '<li>Key projects: AzzuleAI (web portal that automates processes through natural-language prompts).</li>',

        'exp.coppel.puesto': 'Coppel S.A. de C.V. | Software Developer – Accounting and Finance',
        'exp.coppel.fecha': 'August 2022 – March 2025',
        'exp.coppel.lista':
            '<li>Development and maintenance: design, implementation and maintenance of solutions for accounting and ' +
            'financial systems, including invoicing, payroll and tax management.</li>' +
            '<li>Strategic projects: participation in key projects such as MultiIEPS, motorcycle sales and a ' +
            'transaction-monitoring application built with .NET C#.</li>' +
            '<li>Technologies: C#, C++, Java, SQL (PostgreSQL, SQL Server), Java Spring Boot.</li>' +
            '<li>Security: vulnerability mitigation, code remediation and system recovery after cyberattacks.</li>',

        'exp.feoss.puesto': 'FEOSS | Software Developer – Vehicle Regularization Advisor',
        'exp.feoss.fecha': 'January 2018 – January 2022',
        'exp.feoss.lista':
            '<li>Advisor on the legal regularization of foreign vehicles.</li>' +
            '<li>Development of a data storage system with C# and SQL Server to manage imported vehicles.</li>',

        // Proyectos destacados
        'destacados.titulo': 'Key Projects 🛠️ . 💻',
        'boton.visitar': 'Visit website',

        'azzule.badge.ia': '⭐ AI Assistant',
        'azzule.logo': 'Azzule logo',
        'azzule.descripcion':
            'Azzule is a leading provider of cloud solutions for data management and regulatory compliance in the ' +
            'food supply chain. It specializes in food safety, sustainability and audit automation, helping growers, ' +
            'packers and distributors streamline regulatory compliance, reduce risk and improve operational efficiency.',

        'coppel.badge.incidencias': 'Incident resolution',
        'coppel.badge.cancelacion': '● Invoice cancellation',
        'coppel.badge.nomina': '● Payroll',
        'coppel.badge.seguridad': 'Static code security',
        'coppel.badge.legados': 'Legacy systems',
        'coppel.logo': 'Coppel logo',
        'coppel.subtitulo': 'Projects',
        'coppel.descripcion':
            'During my time at Coppel I took part in a wide range of activities, from developing and maintaining ' +
            'solutions for legacy systems to building regulatory solutions required by the Mexican government. ' +
            'I worked on tax-related projects, including payroll and DRP invoicing systems with electronic invoice ' +
            'stamping (CFDI) and their subsequent cancellation. These are the main projects I worked on:',
        'coppel.lista':
            '<li>CFDI 4.0</li>' +
            '<li>MultiIEPS</li>' +
            '<li>Static code remediation</li>' +
            '<li>Salary update for the UMA increase</li>' +
            '<li>Motorcycle sale double cancellation</li>' +
            '<li>Architecture/Documentation</li>' +
            '<li>Evo Payments transaction monitoring</li>',

        // Proyectos personales
        'personales.titulo': 'Personal projects 💡',
        'codeai.badge.ia': 'Artificial Intelligence',
        'codeai.badge.auth': 'Secure authentication',
        'codeai.badge.acceso': 'Access control',
        'codeai.subtitulo': 'Personal project',
        'codeai.descripcion':
            'CodeAI is a web platform for intelligent code analysis, designed to centralize software project ' +
            'management, analyze repository changes and detect potential quality, maintainability and risk issues ' +
            'using artificial intelligence.<br><br>' +
            'The solution was built with Angular on the frontend and Node.js, Fastify and TypeScript on the backend, ' +
            'using SQL Server to persist projects, users, sessions, analyses and findings.<br><br>' +
            'CodeAI integrates with GitHub to browse repositories, branches and commits, allowing specific changes ' +
            'to be selected and sent to an AI-powered analysis engine.<br><br>' +
            'The system processes the files modified in each commit and produces technical insights such as risk ' +
            'level, Code Health, an analysis summary and findings classified by severity, category, file and line ' +
            'of code.<br><br>' +
            'The platform also includes a complete authentication and authorization system. Passwords are hashed ' +
            'with Argon2id and sessions use secure tokens stored in HttpOnly cookies, keeping only the hash of each ' +
            'session in SQL Server.<br><br>' +
            'CodeAI provides Administrator and User roles, route protection in both Angular and the backend, and ' +
            'per-user project assignment to control which projects each account can view and analyze.<br><br>' +
            'The project follows a modular architecture, separating responsibilities across authentication, users, ' +
            'projects, analysis, GitHub integration, artificial intelligence and data access.',
        'codeai.lista':
            '<li>Centralized metrics and analysis dashboard.</li>' +
            '<li>Project and technology management.</li>' +
            '<li>GitHub repository integration.</li>' +
            '<li>Branch and commit browsing.</li>' +
            '<li>AI-powered code analysis.</li>' +
            '<li>Per-commit analysis.</li>' +
            '<li>Detection and classification of technical findings.</li>' +
            '<li>Findings classified by severity.</li>' +
            '<li>Code Health and risk level metrics.</li>' +
            '<li>Analysis run history.</li>' +
            '<li>Authentication and authorization system.</li>' +
            '<li>Passwords hashed with Argon2id.</li>' +
            '<li>Secure sessions with HttpOnly cookies.</li>' +
            '<li>Revocable sessions stored in SQL Server.</li>' +
            '<li>Route protection with Angular Guards.</li>' +
            '<li>Administrator and User roles.</li>' +
            '<li>User management from the dashboard.</li>' +
            '<li>Per-user project assignment.</li>' +
            '<li>Backend permission validation.</li>',
        'codeai.boton.frontend': 'View frontend code',
        'codeai.boton.backend': 'View backend code',
        'codeai.boton.bd': 'View database setup',

        // Habilidades
        'habilidades.titulo': '🛠️ Technical skills',
        'habilidades.bd': '🗄️ Databases',
        'habilidades.otras': '🧰 Other tools',
        'habilidades.so': '💻 Operating systems',

        // Formación
        'formacion.titulo': '📚 Education',
        'formacion.itsg.titulo': 'B.S. in Computer Systems Engineering',
        'formacion.itsg.fecha': '📅 August 2018 – December 2022',
        'formacion.cetis.titulo': 'Technical Degree in Programming',
        'formacion.cetis.fecha': '📅 August 2015 – July 2018',

        // Cursos
        'cursos.titulo': '📘 Courses and Certifications',
        'cursos.mysqlDocker': '🐳 Deploying MySQL with Docker',
        'cursos.docker': '🐳 Docker Fundamentals',
        'cursos.agiles': '📊 Agile Methodologies <small>(Emerging Technologies Institute)</small>',
        'cursos.emergentes': '🚀 Introduction to Emerging Technologies',
        'cursos.angular': 'Angular University – From Zero to Expert!',
        'cursos.linkedinMysql': 'Deploying MySQL with Docker - LinkedIn',
        'cursos.linkedinGithub': 'GitHub for Developers - LinkedIn',
        'cursos.linkedinDocker': 'Docker Essential Training - LinkedIn',
        'cursos.python': 'Python in Practice: From Zero to Python Developer',
        'cursos.seguridadNube': 'Introduction to Security Principles in Cloud Computing',
        'cursos.microsoft': 'Microsoft Certifications',

        // Aptitudes
        'aptitudes.titulo': '💡 Soft skills',
        'aptitudes.lista':
            '<span>Teamwork</span>' +
            '<span>Time management</span>' +
            '<span>Organization</span>' +
            '<span>Self-taught</span>',

        // Contacto
        'contacto.titulo': "Let's talk",
        'contacto.texto': 'If you have a project or an opportunity in mind, drop me a line. I would be glad to chat.',
        'contacto.correo': 'Email',
        'contacto.telefono': 'Phone',

        // Descargar CV (el PDF solo existe en español)
        'cv.descargar': 'Download CV (Spanish PDF)'
    }
};
