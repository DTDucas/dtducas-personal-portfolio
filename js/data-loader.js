class DataLoader {
  constructor() {
    this.data = null;
    this.init();
  }
  async init() {
    try {
      await this.loadData();
      this.populateContent();
      this.initializeAnimations();
    } catch (error) {
      console.error("Error initializing data loader:", error);
    }
  }
  async loadData() {
    try {
      this.data = {
        personalInfo: {
          name: "Tran Quang Duong",
          title: "BIM Developer",
          avatar: "images/avatar.jpg",
          email: "baymax.contact@gmail.com",
          phone: "+84 123 456 789",
          location: "Ha Noi, Vietnam",
          bio: "Versatile BIM Developer with expertise in Revit API development and automation solutions. Experienced in developing tools for BIM processes and web applications for construction management. Skilled in creating social media automation tools and web services.",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/DTDucas/",
            github: "https://github.com/DTDucas",
            facebook: "https://www.facebook.com/dtducas",
            website: "dtducas.me",
          },
          contact: {
            email: "baymax.contact@gmail.com",
            phone: "+84 123 456 789",
            address: "Ha Noi, Vietnam",
          },
          cvLink: "#",
        },
        careerObjective:
          "Innovative BIM Developer seeking to leverage expertise in Revit API development and web applications to create comprehensive solutions for the AEC industry. Focused on developing efficient automation tools while expanding into full-stack development for construction management systems.",
        education: [
          {
            institution: "University Program",
            degree: "Completed University Program",
            field: "Engineering",
            location: "",
            period: "2019-2023",
            icon: "flaticon-graduation-cap",
          },
        ],
        experience: [
          {
            company: "ABC Company",
            position: "BIM Developer",
            period: "2023 - Present",
            description:
              "Leading BIM tools development and web applications for construction management.",
            achievements: [
              "Developed PPVC Automation tool improving prefabrication workflow efficiency",
              "Created MEP connection automation tools reducing coordination time by 50%",
              "Implemented GitHub Actions deployment pipeline for BIM tools",
              "Developed DMS (Document Management System) with ACC integration",
              "Provided technical consultancy for BIM tools team",
            ],
            icon: "flaticon-suitcase",
          },
          {
            company: "Freelance",
            position: "BIM Developer & Web Developer",
            period: "2023 - Present",
            description:
              "Developing custom BIM tools and social media automation solutions.",
            achievements: [
              "Created automation tool for ETABS to Revit model conversion",
              "Developed AutoCAD to Revit automation solutions",
              "Built social media automation tools for Facebook, YouTube, and TikTok",
              "Developed web APIs for social media management and automation",
            ],
            icon: "flaticon-suitcase",
          },
        ],
        skills: [
          {
            category: "BIM Development",
            items: [
              {
                name: "Revit API",
                image: "images/skills/csharp.png",
                level: 90,
              },
              { name: "C#/.NET", image: "images/skills/csharp.png", level: 85 },
              { name: "Dynamo", image: "images/skills/csharp.png", level: 80 },
              {
                name: "ETABS API",
                image: "images/skills/csharp.png",
                level: 75,
              },
              { name: "AutoCAD", image: "images/skills/csharp.png", level: 85 },
              { name: "BIM 360", image: "images/skills/csharp.png", level: 75 },
            ],
          },
          {
            category: "Web Development",
            items: [
              {
                name: "React/Next.js",
                image: "images/skills/react.png",
                level: 85,
              },
              { name: "Node.js", image: "images/skills/node.png", level: 80 },
              {
                name: "JavaScript",
                image: "images/skills/javascript.png",
                level: 85,
              },
              { name: "HTML/CSS", image: "images/skills/html.png", level: 85 },
              {
                name: "Bootstrap",
                image: "images/skills/bootstrap.png",
                level: 80,
              },
              { name: "MongoDB", image: "images/skills/mongo.png", level: 75 },
            ],
          },
        ],
        projects: [
          {
            name: "ETABS to Revit Converter",
            description:
              "Automated tool for converting ETABS structural models to Revit with bidirectional synchronization and automatic structural element mapping.",
            technologies: ["C#", "Revit API", "ETABS API", ".NET"],
            achievements: [
              "Reduced model conversion time by 70%",
              "Implemented automatic structural element mapping",
              "Developed bidirectional synchronization",
            ],
            link: "https://github.com/DTDucas/etabs-revit",
            icon: "flaticon-circuit-board",
            image: "images/projects/etabs-revit.jpg",
          },
          {
            name: "DMS with ACC Integration",
            description:
              "Document Management System integrated with Autodesk Construction Cloud for real-time document synchronization and automated workflow processes.",
            technologies: ["React", "Node.js", "ACC API", "MongoDB"],
            achievements: [
              "Implemented real-time document synchronization",
              "Created contractor management system",
              "Developed automated workflow processes",
            ],
            link: "https://github.com/DTDucas/dms-acc",
            icon: "flaticon-camp",
            image: "images/projects/dms-acc.jpg",
          },
          {
            name: "PPVC Automation Tool",
            description:
              "Prefabricated Prefinished Volumetric Construction automation tool improving workflow efficiency for modular construction projects.",
            technologies: ["C#", "Revit API", ".NET", "WPF"],
            achievements: [
              "Improved prefabrication workflow efficiency by 60%",
              "Automated modular element generation",
              "Reduced manual coordination errors",
            ],
            link: "https://github.com/DTDucas/ppvc-automation",
            icon: "icon-terminal",
            image: "images/projects/ppvc-automation.jpg",
          },
          {
            name: "MEP Connection Automation",
            description:
              "Advanced MEP systems automation tool for automatic connection generation and coordination in building projects.",
            technologies: ["C#", "Revit API", "Dynamo", ".NET"],
            achievements: [
              "Reduced MEP coordination time by 50%",
              "Automated pipe and duct connections",
              "Improved clash detection accuracy",
            ],
            link: "https://github.com/DTDucas/mep-automation",
            icon: "icon-whatsapp",
            image: "images/projects/mep-automation.jpg",
          },
          {
            name: "Social Media Automation Suite",
            description:
              "Comprehensive automation tools for Facebook, YouTube, and TikTok content management and scheduling.",
            technologies: ["Node.js", "React", "REST APIs", "Python"],
            achievements: [
              "Automated content scheduling across platforms",
              "Built analytics dashboard for social metrics",
              "Developed API integrations for multiple platforms",
            ],
            link: "https://github.com/DTDucas/social-automation",
            icon: "flaticon-bomberman",
            image: "images/projects/social-automation.jpg",
          },
          {
            name: "BIM Tools Development Suite",
            description:
              "Collection of custom BIM tools for enhanced productivity in architectural and engineering workflows.",
            technologies: ["C#", "WPF", "Revit API", "GitHub Actions"],
            achievements: [
              "Created 15+ custom BIM productivity tools",
              "Implemented CI/CD pipeline for tool deployment",
              "Provided technical consultancy for BIM teams",
            ],
            link: "https://github.com/DTDucas/bim-tools-suite",
            icon: "icon-book",
            image: "images/projects/bim-tools-suite.jpg",
          },
        ],
        achievements: [
          {
            title: "Research Award",
            description: "Third Prize in Scientific Research Competition",
            date: "2022",
            organization: "University Research Committee",
            icon: "flaticon-medal",
          },
          {
            title: "Academic Excellence",
            description:
              "Multiple Academic Scholarships (Excellence, Merit, Outstanding Student)",
            date: "2019-2023",
            organization: "University of Technology",
            icon: "flaticon-trophy",
          },
          {
            title: "Five-Star Student Award",
            description:
              "Recognized for outstanding academic and extracurricular achievements",
            date: "2022",
            organization: "University of Technology",
            icon: "flaticon-medal",
          },
        ],
      };
      console.log("Data loaded successfully");
    } catch (error) {
      console.error("Error loading data:", error);
      this.loadFallbackData();
    }
  }
  loadFallbackData() {
    console.warn("Using fallback data");
    this.data = {
      personalInfo: {
        name: "Tran Quang Duong",
        title: "BIM Developer",
        email: "baymax.contact@gmail.com",
        phone: "+84 123 456 789",
        location: "Ha Noi, Vietnam",
        bio: "Versatile BIM Developer with expertise in Revit API development and automation solutions.",
        socialLinks: {
          github: "https://github.com/DTDucas",
          linkedin: "https://www.linkedin.com/in/DTDucas/",
          facebook: "https://www.facebook.com/dtducas",
          website: "dtducas.me",
        },
        cvLink: "#",
      },
      experience: [
        {
          company: "ABC Company",
          position: "BIM Developer",
          period: "2023 - Present",
          description:
            "Leading BIM tools development and web applications for construction management.",
          achievements: [
            "Developed PPVC Automation tool improving prefabrication workflow efficiency",
            "Created MEP connection automation tools reducing coordination time by 50%",
          ],
          icon: "flaticon-suitcase",
        },
      ],
      skills: [
        {
          category: "BIM Development",
          items: [
            { name: "Revit API", image: "images/skills/csharp.png", level: 90 },
            { name: "C#/.NET", image: "images/skills/csharp.png", level: 85 },
          ],
        },
      ],
      projects: [
        {
          name: "ETABS to Revit Converter",
          description:
            "Automated tool for converting ETABS structural models to Revit",
          technologies: ["C#", "Revit API", "ETABS API"],
          link: "https://github.com/DTDucas/etabs-revit",
          icon: "flaticon-circuit-board",
        },
      ],
      achievements: [
        {
          title: "Research Award",
          description: "Third Prize in Scientific Research Competition",
          date: "2022",
          organization: "University Research Committee",
          icon: "flaticon-medal",
        },
      ],
    };
  }
  populateContent() {
    if (!this.data) return;
    this.populatePersonalInfo();
    this.populateHero();
    this.populateAbout();
    this.populateEducation();
    this.populateExperience();
    this.populateSkills();
    this.populateProjects();
    this.populateAchievements();
    this.populateContact();
    this.populateFooter();
  }
  populatePersonalInfo() {
    const { personalInfo } = this.data;
    document.title = `${personalInfo.name} - ${personalInfo.title}`;
    const navbarBrand = document.querySelector(".navbar-brand");
    if (navbarBrand) navbarBrand.textContent = personalInfo.name;
    this.updateMetaTags(personalInfo);
  }
  updateMetaTags(personalInfo) {
    const metaTags = [
      {
        property: "og:title",
        content: `${personalInfo.name} - ${personalInfo.title}`,
      },
      { property: "og:description", content: personalInfo.bio },
      { name: "description", content: personalInfo.bio },
    ];
    metaTags.forEach((tag) => {
      let metaTag = document.querySelector(
        `meta[${Object.keys(tag)[0]}="${Object.values(tag)[0]}"]`
      );
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute(Object.keys(tag)[0], Object.values(tag)[0]);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    });
  }
  populateHero() {
    const { personalInfo } = this.data;
    const heroName = document.querySelector(".hero-wrap h1");
    if (heroName) heroName.textContent = personalInfo.name;
    const rotatingText = document.querySelector(".txt-rotate");
    if (rotatingText) {
      const bimSkills = [
        "BIM Development.",
        "Revit API Programming.",
        "Automation Solutions.",
        "Web Development.",
        "Problem Solving.",
      ];
      rotatingText.setAttribute("data-rotate", JSON.stringify(bimSkills));
    }
  }
  populateAbout() {
    const { personalInfo } = this.data;
    const aboutInfo = document.querySelector(".about-info");
    if (aboutInfo) {
      aboutInfo.innerHTML = `
        <li class="d-flex"><span>Name:</span><span>${personalInfo.name}</span></li>
        <li class="d-flex"><span>Email:</span><span>${personalInfo.email}</span></li>
        <li class="d-flex"><span>Phone:</span><span>${personalInfo.phone}</span></li>
        <li class="d-flex"><span>Location:</span><span>${personalInfo.location}</span></li>
        <li class="d-flex"><span>Title:</span><span>${personalInfo.title}</span></li>
      `;
    }
    const bioText = document.querySelector(".ftco-about .heading-section p");
    if (bioText) bioText.textContent = personalInfo.bio;
    const cvLink = document.querySelector(
      '.btn-primary[href*="CV"], .btn-primary:contains("Download CV")'
    );
    if (cvLink) cvLink.setAttribute("href", personalInfo.cvLink);
  }
  populateEducation() {
    const educationContainer = document.querySelector("#page-1");
    if (!educationContainer || !this.data.education) return;
    const educationHTML = this.data.education
      .map(
        (edu) => `
      <div class="resume-wrap d-flex ftco-animate scroll-reveal">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="${edu.icon}"></span>
        </div>
        <div class="text pl-3">
          <h2>${edu.institution}</h2>
          <span class="position">${edu.degree}</span>
          <p><strong>${edu.field}</strong></p>
          <p>${edu.location}</p>
          <span class="date">${edu.period}</span>
        </div>
      </div>
    `
      )
      .join("");
    const existingContent = educationContainer.querySelector("h2");
    if (existingContent) {
      educationContainer.innerHTML = `<h2 class="heading">Education</h2>${educationHTML}`;
    }
  }
  populateExperience() {
    const experienceContainer = document.querySelector("#page-2");
    if (!experienceContainer || !this.data.experience) return;
    const experienceHTML = this.data.experience
      .map(
        (exp) => `
      <div class="resume-wrap d-flex ftco-animate scroll-reveal">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="${exp.icon}"></span>
        </div>
        <div class="text pl-3">
          <h2>${exp.position}</h2>
          <span class="position">${exp.company}</span>
          <p class="date">${exp.period}</p>
          <p>${exp.description}</p>
          ${
            exp.achievements
              ? `
            <ul>
              ${exp.achievements
                .map((achievement) => `<li>${achievement}</li>`)
                .join("")}
            </ul>
          `
              : ""
          }
        </div>
      </div>
    `
      )
      .join("");
    experienceContainer.innerHTML = `<h2 class="heading">Experience</h2>${experienceHTML}`;
  }
  populateSkills() {
    const skillsContainer = document.querySelector("#page-3");
    if (!skillsContainer || !this.data.skills) return;
    const skillsHTML = this.data.skills
      .map(
        (category) => `
      <div class="skill-category mb-5">
        <h3 class="mb-4 text-center" style="color: var(--primary-blue)">${
          category.category
        }</h3>
        <div class="row skills-grid">
          ${category.items
            .map(
              (skill) => `
            <div class="col-md-4 col-sm-6 mb-4">
              <div class="skill-item">
                <img src="${skill.image}" alt="${skill.name}" class="img-fluid mb-3"
                     onerror="this.src='images/skills/default.png'">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">
                  <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
    skillsContainer.innerHTML = `<h2 class="heading">Skills</h2>${skillsHTML}`;
  }
  populateProjects() {
    const projectSection = document.querySelector(
      "#project-section .container-fluid"
    );
    if (!projectSection || !this.data.projects) {
      console.warn("Projects section not found or no projects data");
      return;
    }
    const projectRows = this.chunkArray(this.data.projects, 3)
      .map(
        (rowProjects) => `
      <div class="row">
        ${rowProjects
          .map(
            (project) => `
          <div class="col-md-4 text-center d-flex ftco-animate scroll-reveal">
            <a href="${project.link}" target="_blank" class="services-1 shadow">
              <span class="icon">
                <i class="${project.icon}"></i>
              </span>
              <div class="desc">
                <h3 class="mb-4">${project.name}</h3>
                <p><strong>${project.technologies.join(" • ")}</strong></p>
                <p>${project.description}</p>
                ${
                  project.achievements
                    ? `
                  <div class="project-achievements mt-3 text-left">
                    ${project.achievements
                      .map(
                        (achievement) => `
                      <div class="achievement-item mb-1">
                        <i class="icon-check mr-2" style="color: #1E88E5"></i>
                        <small>${achievement}</small>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                `
                    : ""
                }
                ${
                  project.image
                    ? `<img src="${project.image}" alt="${project.name}" class="img-fluid mt-3">`
                    : ""
                }
              </div>
            </a>
          </div>
        `
          )
          .join("")}
      </div>
    `
      )
      .join("");
    projectSection.innerHTML = `
      <div class="row justify-content-center py-5 mt-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">Projects</h2>
        </div>
      </div>
      ${projectRows}
    `;
    console.log("Projects populated successfully");
  }
  populateAchievements() {
    const achievementsContainer = document.querySelector("#page-4");
    if (!achievementsContainer || !this.data.achievements) return;
    const achievementsHTML = this.data.achievements
      .map(
        (achievement) => `
      <div class="resume-wrap d-flex ftco-animate scroll-reveal">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="${achievement.icon}"></span>
        </div>
        <div class="text pl-3">
          <h2>${achievement.title}</h2>
          <span class="position"><strong>${achievement.organization}</strong></span>
          <p class="date">${achievement.date}</p>
          <p>${achievement.description}</p>
        </div>
      </div>
    `
      )
      .join("");
    achievementsContainer.innerHTML = `<h2 class="heading">Awards & Achievements</h2>${achievementsHTML}`;
  }
  populateContact() {
    const { personalInfo } = this.data;
    const contactBoxes = document.querySelectorAll(".contact-info .box");
    if (contactBoxes.length >= 3) {
      const phoneBox = contactBoxes[0];
      phoneBox.querySelector("p a").textContent = personalInfo.phone;
      const emailBox = contactBoxes[1];
      emailBox.querySelector("p a").textContent = personalInfo.email;
      emailBox
        .querySelector("p a")
        .setAttribute("href", `mailto:${personalInfo.email}`);
      const websiteBox = contactBoxes[2];
      websiteBox.querySelector("p a").textContent =
        personalInfo.socialLinks.website;
    }
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.setAttribute("action", "https://formspree.io/f/your-form-id");
    }
  }
  populateFooter() {
    const { personalInfo } = this.data;
    // Update footer bio
    const footerBio = document.querySelector(".ftco-footer-widget p");
    if (footerBio && !footerBio.classList.contains("mt-4")) {
      footerBio.textContent = personalInfo.bio.substring(0, 100) + "...";
    }
    const socialLinks = document.querySelectorAll(".ftco-footer-social li a");
    const socialMap = {
      "icon-github": personalInfo.socialLinks.github,
      "icon-linkedin-square": personalInfo.socialLinks.linkedin,
      "icon-facebook": personalInfo.socialLinks.facebook,
    };
    socialLinks.forEach((link) => {
      const icon = link.querySelector("span");
      if (icon && socialMap[icon.className]) {
        link.setAttribute("href", socialMap[icon.className]);
      }
    });
    const footerContact = document.querySelector(".ftco-footer .block-23 ul");
    if (footerContact) {
      footerContact.innerHTML = `
        <li>
          <a><span class="icon icon-phone"></span><span class="text">${personalInfo.phone}</span></a>
        </li>
        <li>
          <a href="mailto:${personalInfo.email}">
            <span class="icon icon-envelope"></span><span class="text">${personalInfo.email}</span>
          </a>
        </li>
      `;
    }
  }
  initializeAnimations() {
    this.initScrollReveal();
    this.initSkillAnimations();
    this.initCounterAnimations();
  }
  initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });
  }
  initSkillAnimations() {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars =
              entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar) => {
              const width = bar.style.getPropertyValue("--skill-width");
              bar.style.width = width;
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".skills-grid").forEach((grid) => {
      skillObserver.observe(grid);
    });
  }
  initCounterAnimations() {
    const counters = document.querySelectorAll(".counter-number");
    counters.forEach((counter) => {
      const target = parseInt(counter.textContent);
      let current = 0;
      const increment = target / 100;
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.disconnect();
          }
        });
      });
      observer.observe(counter);
    });
  }
  chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing DataLoader...");
  try {
    new DataLoader();
  } catch (error) {
    console.error("Failed to initialize DataLoader:", error);
    populateBasicContent();
  }
});
function populateBasicContent() {
  console.log("Using fallback content population");
  // Populate experience section
  const experienceContainer = document.querySelector("#page-2");
  if (experienceContainer) {
    experienceContainer.innerHTML = `
      <h2 class="heading">Experience</h2>
      <div class="resume-wrap d-flex ftco-animate scroll-reveal">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="flaticon-suitcase"></span>
        </div>
        <div class="text pl-3">
          <h2>BIM Developer</h2>
          <span class="position">ABC Company</span>
          <p class="date">2023 - Present</p>
          <p>Leading BIM tools development and web applications for construction management.</p>
          <ul>
            <li>Developed PPVC Automation tool improving prefabrication workflow efficiency</li>
            <li>Created MEP connection automation tools reducing coordination time by 50%</li>
            <li>Implemented GitHub Actions deployment pipeline for BIM tools</li>
          </ul>
        </div>
      </div>
    `;
  }
  const skillsContainer = document.querySelector("#page-3");
  if (skillsContainer) {
    skillsContainer.innerHTML = `
      <h2 class="heading">Skills</h2>
      <div class="skill-category mb-5">
        <h3 class="mb-4 text-center" style="color: #1E88E5">BIM Development</h3>
        <div class="row skills-grid">
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="skill-item">
              <img src="images/skills/csharp.png" alt="Revit API" class="img-fluid mb-3"
                   onerror="this.style.display='none'">
              <div class="skill-name">Revit API</div>
              <div class="skill-level">
                <div class="skill-progress" style="--skill-width: 90%; width: 90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="skill-item">
              <img src="images/skills/csharp.png" alt="C#/.NET" class="img-fluid mb-3"
                   onerror="this.style.display='none'">
              <div class="skill-name">C#/.NET</div>
              <div class="skill-level">
                <div class="skill-progress" style="--skill-width: 85%; width: 85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="skill-item">
              <img src="images/skills/react.png" alt="React" class="img-fluid mb-3"
                   onerror="this.style.display='none'">
              <div class="skill-name">React/Next.js</div>
              <div class="skill-level">
                <div class="skill-progress" style="--skill-width: 80%; width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  const projectSection = document.querySelector(
    "#project-section .container-fluid"
  );
  if (projectSection) {
    projectSection.innerHTML = `
      <div class="row justify-content-center py-5 mt-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">Projects</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 text-center d-flex ftco-animate scroll-reveal">
          <a href="https://github.com/DTDucas/etabs-revit" target="_blank" class="services-1 shadow">
            <span class="icon">
              <i class="flaticon-circuit-board"></i>
            </span>
            <div class="desc">
              <h3 class="mb-4">ETABS to Revit Converter</h3>
              <p><strong>C# • Revit API • ETABS API • .NET</strong></p>
              <p>Automated tool for converting ETABS structural models to Revit with bidirectional synchronization.</p>
            </div>
          </a>
        </div>
        <div class="col-md-4 text-center d-flex ftco-animate scroll-reveal">
          <a href="https://github.com/DTDucas/dms-acc" target="_blank" class="services-1 shadow">
            <span class="icon">
              <i class="flaticon-camp"></i>
            </span>
            <div class="desc">
              <h3 class="mb-4">DMS with ACC Integration</h3>
              <p><strong>React • Node.js • ACC API • MongoDB</strong></p>
              <p>Document Management System integrated with Autodesk Construction Cloud for real-time synchronization.</p>
            </div>
          </a>
        </div>
        <div class="col-md-4 text-center d-flex ftco-animate scroll-reveal">
          <a href="https://github.com/DTDucas/ppvc-automation" target="_blank" class="services-1 shadow">
            <span class="icon">
              <i class="icon-terminal"></i>
            </span>
            <div class="desc">
              <h3 class="mb-4">PPVC Automation Tool</h3>
              <p><strong>C# • Revit API • .NET • WPF</strong></p>
              <p>Prefabricated construction automation tool improving workflow efficiency for modular projects.</p>
            </div>
          </a>
        </div>
      </div>
    `;
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DataLoader;
}
