<template>
    <div class="mb-10 md:mb-20">
        <div class="bg-lime-200 rounded-3xl p-8">
            <h2 class="text-xl mb-4">{{ project.projectName }}</h2>
            <h4 class="text-4xl md:w-2/4 mb-8">Treasure hunt around the world, on all 7 continents</h4>
            <div class="flex flex-row gap-8 justify-center">
                <div v-for="index in project.assetsCount" :key="index">
                    <img :src="`/img/projects/${project.projectAssets}/image_${index}.png`" alt="Image">
                </div>
            </div>
        </div>
        
        <div class="flex flex-wrap mt-10 md:gap-16 gap-8 font-light text-lg">
            <ul class="md:w-1/2">
                <li class="text-xl mb-3 text-slate-400">Summary:</li>
                <li>
                    <p class="">The Travel Quest is a treasure hunt around the world, on all 7 continents, based on a mobile application that allows you to advance in the adventure, alone or within a team</p>
                </li>
            </ul>
            <ul class="">
                <li class="text-xl mb-3 text-slate-400">Role:</li>
                <li>
                    <p>Senior Product Designer</p>
                </li>
            </ul>
            <ul class="">
                <li class="text-xl mb-3 text-slate-400">Skills:</li>
                <li>Wireframeing</li>
                <li>UI Design in Figma</li>
                <li>Prototype in Figma</li>
                <li>UX</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const project = defineProps({
    projectName: {
        type: String,
        required: true
    },
    projectAssets: {
        type: String,
        required: true
    },
    assetsCount: Number
});
</script>