export default function Projects() {
  return `
    <section class="flex flex-col justify-center items-center m-20 max-w-6xl mx-auto">
      <h2 class=" text-4xl font-bold text-white mt-20 mb-5">Meine Projekte</h2>
      <p class="text-gray-400 text-xl mb-10">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-800 h-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <img src="./project_1.jpg" alt="Pizzeria Mamma Mia" class="w-full h-70 object-cover">
          <div class="flex flex-col flex-1 p-6">
            <h3 class="text-2xl font-semibold text-white mb-4">Pizzeria Mamma Mia</h3>
            <a href="https://the-restaurant-project.onrender.com" target="_blank" class="inline-block text-blue-500 mb-3 font-medium hover:underline">restaurant-project.onrender.com <i class="fa-solid fa-up-right-from-square"></i> </a>
            <p class="text-gray-400 mb-4">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="gap-1 flex-wrap flex mb-2">
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">HTML</span>
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">CSS</span>
            </div>
            <a href="https://github.com/milty90/The-Restaurant-Project" target="_blank" class="w-fit bg-blue-500 mt-auto p-2 rounded-md font-medium text-amber-50 "><i class="fa-solid fa-code"></i>  Code ansehen</a>
          </div>    
        </div>
        <div class="bg-gray-800 h-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">   
            <img src="./project_2.jpg" alt="Taschenrechner App" class="w-full h-70 object-cover">
          <div class="flex flex-col flex-1 p-6">
              <h3 class="text-2xl font-semibold text-white mb-4">Taschenrechner App</h3>
              <a href="https://taschenrechner-m0ix.onrender.com" target="_blank" class="inline-block text-blue-500 mb-3 font-medium hover:underline">taschenrechner.onrender.com <i class="fa-solid fa-up-right-from-square"></i> </a>
              <p class="text-gray-400 mb-4"> lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="gap-1 flex-wrap flex mb-2">
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">HTML</span> 
                <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">CSS</span>
                <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">JavaScript</span>
              </div>  
              <a href="https://github.com/milty90/Taschenrechner" target="_blank" class="w-fit bg-blue-500 mt-auto p-2 rounded-md font-medium text-amber-50 "><i class="fa-solid fa-code"></i>  Code ansehen</a>
              </div>
        </div>
        <div class="bg-gray-800 h-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="./project_3.jpg" alt="Witze App" class="w-full h-70 object-cover">
          <div class="flex flex-col flex-1 p-6">
              <h3 class="text-2xl font-semibold text-white mb-4">Witze App</h3>
              <a href="https://witze-app.onrender.com/" target="_blank" class="inline-block text-blue-500 mb-3 font-medium hover:underline">witze-app.onrender.com <i class="fa-solid fa-up-right-from-square"></i> </a>
              <p class="text-gray-400 mb-4">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex flex-wrap gap-2 pb-2 mb-auto">
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">HTML</span>
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">JavaScript</span>   
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">SCSS</span>   
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">BEM</span> 
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">Vite</span>   
              <span class="text-amber-50 font-medium bg-gray-900 px-3.5 py-0.5 mb-1 rounded-xl text-sm">AJAX</span>     
              </div>
              <a href="https://github.com/milty90/witze-app" target="_blank" class="w-fit bg-blue-500 mt-4 p-2 rounded-md font-medium text-amber-50 "><i class="fa-solid fa-code"></i>  Code ansehen</a>
            </div>
        </div>
      </div>
    </section>
  `;
}
