<template>
    <div class="container max-w-6xl mx-auto py-20 md:py-40 md:px-20">
        <!-- <img class="mx-auto w-24 mb-5" src="/img/avatar.png" alt="Razvan Tudosie" /> -->
        <h1 class="md:text-6xl text-5xl font-bold text-center mb-5">Hi! I’m Razvan</h1>
        <h2 class="text-2xl md:text-3xl text-center font-light px-8 md:px-20">I’m a UI/UX Designer passionate about creating intuitive and visually appealing digital experiences that enhance user satisfaction and drive business success.</h2>
    </div>

    <div class="container max-w-6xl mx-auto p-8">
        <h4 class="text-xs text-slate-400 text-center mb-10">Some of the companies I worked  with:</h4>

        <div class="flex flex-wrap items-center gap-6">
            <div class="grow">
                <img class="mx-auto" src="/img/Logo-Vodafone.svg" alt="Vodafone" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="/img/Logo-Campaign_Monitor.svg" alt="Campaign Monitor" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="/img/Logo-carrefour.svg" alt="Carrefour" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="/img/Logo-IQOS.svg" alt="IQOS" />
            </div>
            <div class="grow">
                <img class="mx-auto" src="/img/Logo-Philip_Morris.svg" alt="Philip Morris" />
            </div>
        </div>

        <div class="mt-32">
            <div  v-for="(project , index) in projects" :key="index">
                <ProjectCard :project='project'/>
            </div>
           

            <!-- <ProjectCard
                project-name='The Travel Quest'
                project-assets="TheTravelQuest"
                :assets-count="2"
            />

            <ProjectCard
                project-name='The Travel Quest'
                project-assets="TheTravelQuest"
                :assets-count="2"
            />

            <ProjectCard
                project-name='The Travel Quest'
                project-assets="TheTravelQuest"
                :assets-count="2"
            /> -->
        </div>
    </div>
</template>

<script setup>
import projects from '/src/data.json'

console.log(projects);
</script>