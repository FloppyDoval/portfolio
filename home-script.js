// // Projects data
// const projects = [
//     {
//       id: 'personas',
//       title: '✎ Personas & Storyboard ᝰ',
//       subtitle: 'React, Chakra UI, TypeScript, Java',
//       description: "User research, Personas, and Storyboarding of a user's journey using a hot beverages vending machine",
//       tags: ["UX Research", "Frontend WebDev"],
//       thumbnail: "/images/coffee_icon.png",
//       path: '/projects/personas'
//     },
//     // Add other projects
//   ];
  
//   // Load projects when the DOM is ready
//   document.addEventListener('DOMContentLoaded', () => {
//     const projectsGrid = document.getElementById('projects-grid');
    
//     if (projectsGrid) {
//       projects.forEach(project => {
//         const card = document.createElement('div');
//         card.className = 'project-card';
//         card.innerHTML = `
//           <img src="${project.thumbnail}" alt="${project.title}">
//           <h3>${project.title}</h3>
//           <p>${project.description}</p>
//           <div class="tags">
//             ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
//           </div>
//         `;
        
//         card.addEventListener('click', () => {
//           window.location.href = project.path;
//         });
        
//         projectsGrid.appendChild(card);
//       });
//     }
//   });