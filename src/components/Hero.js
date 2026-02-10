export default function Hero() {
  return `
    <section class=" relative h-full mx-auto grid lg:grid-cols-2 gap-10 pt-0 max-w-300 bg-gray-900 text-white">
      <div class="text-left flex flex-col items-start md:flex-col md:px-25 lg:pl-10 lg:pr-0">
        <img src="./avatar.png" alt="profile picture" class="w-20 h-20 rounded-full border-3 border-gray-400 object-cover ml-2 mb-6 md:mb-10 md:w-30 md:h-30 lg:hidden">
        <p class="text-xl md:text mb-4 pl-1 lg:text-2xl  ">Hi, ich bin <span class="font-bold text-gray-300">Milan.</span></p>
        <p class="text-4xl md:text-6xl mb-4 md:mb-8">Ihr neuer <span class="font-bold bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"><br>Frontend Developer.</span></p>
        <p class="text-l text-gray-400 mb-8 md:text-xl md:mb-10">Mein Name ist Milan und ich bin Softwareentwickler mit Schwerpunkt auf den Bereich Frontend Web Development. Ich liebe es neue Dinge zu lernen und Ideen in die Realität zu bringen.</p>
        <div class="flex space-x-6  rounded-lg mb-10">
        <i class="fa-brands fa-linkedin text-3xl text-gray-400 hover:text-gray-100 hover:scale-120 transition-all duration-75 lg:text-4xl"></i>
        <i class="fa-brands fa-github text-3xl text-gray-400 hover:text-gray-100 hover:scale-120 transition-all duration-75 lg:text-4xl"></i>
        <i class="fa-solid fa-envelope text-3xl text-gray-400 hover:text-gray-100 hover:scale-120 transition-all duration-75 lg:text-4xl"></i>
        </div>
        <a href="#" class="ml-1 text-xl bg-blue-600 hover:bg-linear-to-r hover:scale-110 hover:translate-x-2 duration-200  from-blue-600 via-purple-500 to-pink-500 px-6 py-3 rounded-lg transition">Projecte ansehen  ↓</a>
      </div>
      <div class="flex items-center justify-center md:relative">
       <img src="./techs.png" alt="techs" class="object-cover sm:max-w-110 lg:absolute lg:inset-0 xl:max-w-140">
       <img src="./avatar.png" alt="profile picture" class="hidden lg:block w-20 h-20 rounded-full border-3 border-gray-400 object-cover ml-2 mb-6 md:mt-10 md:w-35 md:h-35 lg:absolute lg:inset-0 hover:shadow-lg hover:scale-160 transition-transform duration-300">
      </div>
    </section>
  `;
}
