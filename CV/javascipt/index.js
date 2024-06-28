const skills = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'React', level: 'Beginner' },
    { name: 'Java', level: 'Advanced' },
    { name: 'C# Asp.Net Core', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'MVC', level: 'Intermediate' },
    { name: 'C# WPF', level: 'Beginner' }
  ];



function createSkillsSection(skills) {
    const skillsContainer = document.getElementById('skills-list');
    
    skills.forEach(skill => {
      const li = document.createElement('li');
      const skillLevel = document.createElement('span');
      
      li.textContent = skill.name;
      skillLevel.textContent = skill.level;
      skillLevel.classList.add('skill-level');
      
      li.appendChild(skillLevel);
      skillsContainer.appendChild(li);
    });
  }
  
  createSkillsSection(skills);
  
  document.querySelectorAll('.topnav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Log a welcome message
  console.log('Welcome to my personal CV page!');