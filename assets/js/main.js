// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Project Grid Rendering
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById('project-grid');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card rounded-lg p-6';
      card.innerHTML = `
        <h3 class="text-xl font-semibold text-blue-800 mb-2">${project.title}</h3>
        <p class="text-blue-700 mb-4">${project.description}</p>
        <div class="flex space-x-4">
          <a href="${project.guideUrl}" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guide</a>
          <a href="${project.explorerUrl}" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Explorer</a>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading projects:', error));
