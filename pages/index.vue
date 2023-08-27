<template>
    <div class="container max-w-6xl mx-auto py-20 px-8 md:py-40 md:px-20">
        <!-- <img class="mx-auto w-24 mb-5" src="images/avatar.png" alt="Razvan Tudosie" /> -->
        <h1 class="md:text-6xl text-5xl font-bold text-center mb-5">Hello World!</h1>
        <h2 class="text-2xl md:text-3xl text-center font-light px-8 md:px-20">I’m a UI/UX Designer passionate about creating intuitive and visually appealing digital experiences that enhance user satisfaction and drive business success.</h2>
        
        <div class="my-10">
            <a class="justify-center text-2xl border-2 border-slate-700 py-4 px-8 my-4 bg-slate-900 text-white flex gap-2" href="mailto:tudosierazvan@gmail.com" target="_blank">
                Email me
                <img class="w-8" src="images/icon-email.svg" alt="">
            </a>
            
            <a class="justify-center  text-2xl border-2 border-slate-700 py-4 px-8 my-4 flex gap-2" href="https://www.linkedin.com/in/tudosierazvan/" target="_blank">
                Let's connect
                <img class="w-8" src="images/icon-linkedin.svg" alt="">
            </a>

            <div class="visible sm:invisible justify-center py-4 px-8 my-4 text-xl text-center">
                <a href="#">Download Resume</a>
            </div>
        </div>
    </div>

    <div class="container max-w-6xl mx-auto p-8">
        <h4 class="text-xs text-slate-400 text-center mb-10">Some of the companies I worked  with:</h4>

        <div class="flex flex-wrap items-center gap-6">
            <div class="grow">
                <img class="mx-auto" src="images/Logo-Vodafone.svg" alt="Vodafone" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="images/Logo-Campaign_Monitor.svg" alt="Campaign Monitor" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="images/Logo-carrefour.svg" alt="Carrefour" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="images/Logo-IQOS.svg" alt="IQOS" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="images/Logo-Philip_Morris.svg" alt="Philip Morris" />
            </div>
        </div>

        <div class="mt-32">
            <div  v-for="(project , index) in projects" :key="index">
                <ProjectCard :project='project'/>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from '/src/data.json'

console.log(projects);
</script>