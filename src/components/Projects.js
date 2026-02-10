export default function Projects() {
  return `
    <section class="flex flex-col justify-center items-center m-20 max-w-6xl mx-auto">
      <h2 class=" text-4xl font-bold text-white mt-20 mb-5">Meine Projekte</h2>
      <p class="text-gray-400 text-xl mb-10">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-800 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="./project_1.jpg" alt="Pizzeria Mamma Mia" class="w-full h-70 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-white mb-4">Pizzeria Mamma Mia</h3>
            <a href="https://the-restaurant-project.onrender.com" target="_blank" class="inline-block text-blue-500 mb-3 hover:underline">restaurant-project.onrender.com</a>
            <p class="text-gray-400 mb-4">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="inline-block bg-blue-500 mt-2 p-2 rounded-md text-amber-50 ">Code ansehen</a>
          </div>    
        </div>
        <div class="bg-gray-800 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">   
            <img src="./project_2.jpg" alt="Taschenrechner App" class="w-full h-70 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-white mb-4">Taschenrechner App</h3>
              <a href="https://taschenrechner-m0ix.onrender.com" target="_blank" class="inline-block text-blue-500 mb-3 hover:underline">taschenrechner.onrender.com</a>
              <p class="text-gray-400 mb-4">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="inline-block bg-blue-500 mt-2 p-2 rounded-md text-amber-50 ">Code ansehen</a>

            </div>
        </div>
        <div class="bg-gray-800 h-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="./project_3.jpg" alt="Witze App" class="w-full h-70 object-cover">
            <div class="h-full p-6">
              <h3 class="text-2xl font-semibold text-white mb-4">Witze App</h3>
              <a href="https://witze-app.onrender.com/" target="_blank" class="inline-block text-blue-500 mb-3 hover:underline">witze-app.onrender.com</a>
              <p class="text-gray-400 mb-4">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" class="inline-block bg-blue-500 mt-2 p-2 rounded-md text-amber-50 ">Code ansehen</a>
            </div>
        </div>
      </div>
    </section>
  `;
}
