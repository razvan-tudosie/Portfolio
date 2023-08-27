<template>
    <div class="mb-10 md:mb-20">
        <div :class="cardClasses">
            <img class="w-20 mb-2" :src="`/images/projects/${project.assets}/${project.logo}`" :alt="`Logo ${project.name}`">
            <h2 class="text-xl mb-4">{{ project.name }}</h2>
            <h3 class="text-4xl md:w-2/4 mb-8">{{ project.intro }}</h3>
            <div class="flex flex-row gap-8 justify-center">
                <div v-for="index in project.assetsCount" :key="index">
                    <img :src="`/images/projects/${project.assets}/image_${index}.png`" alt="Project image">
                </div>
            </div>
        </div>
        
        <div class="flex flex-wrap mt-10 md:gap-16 gap-8 font-light text-lg">
            <div class="md:w-1/2">
                <h3 class="text-xl mb-3 text-slate-400">Summary:</h3>
                <p class="">{{ project.summary }}</p>
            </div>

            <div>
                <h3 class="text-xl mb-3 text-slate-400">Role:</h3>
                <p>{{ project.role }}</p>
            </div>

            <div>
                <h3 class="text-xl mb-3 text-slate-400">Skills:</h3>
                <ul class="">
                    <li v-for="(skill, index) in project.skills" :key="index">
                        {{ skill }}
                    </li>
                </ul>
            </div>

            
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const cardClasses = computed(() => {
  return `${props.project.color} rounded-3xl p-8`;
});
</script>