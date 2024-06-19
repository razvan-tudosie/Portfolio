<template>
    <div class="max-w-3xl mx-auto p-8">
        <h1 class="project md:text-7xl text-6xl">
            The Travel Quest
        </h1>

        <p class="text-lg my-4">
            The Travel Quest is a global treasure hunt app where users travel to different locations on all seven continents to find clues and complete the quest. Participants register and use the companion app to discover new clues, stay connected with the team, and engage with the community. The ultimate goal is to finish the quest and win a big cash prize while exploring diverse places and cultures.
        </p>

        <div>
            <h3 class="text-slate-500">Work Completed</h3>
            <p>Wireframeing, Wire Flows, UI Design, Prototype</p>
        </div>
    </div>

    <div class="mb-4">
        <img src="/projects/TheTravelQuest/project/travelquest_main.jpg" alt="The Travel Quest Design">
    </div>

    <div class="max-w-3xl mx-auto p-8">
        <h2 class="md:text-5xl text-4xl py-4">It all began with an ideea</h2>
        <p class="text-lg mt-4">When the Co-Founder approached me, The Travel Quest was just a concept represented by sketches, a small brand book with the logo, typography, and brand colors. I identified key users, mapped out user flows, and developed wireframes. With a clear vision and structure, the design process began, transforming the initial idea into a tangible, engaging app.</p>
        <img class="mx-auto mt-10" src="/projects/TheTravelQuest/project/image.png" alt="The Travel Quest Design Screens">
    </div>

    <div class="max-w-3xl mx-auto pb-4 px-8">
        <h2 class="md:text-5xl text-4xl py-4">Wireframes & Wireflows</h2>
        <!-- <img class="mx-auto mt-10" src="/projects/TheTravelQuest/project/wireframes.png" alt="The Travel Quest Design Screens">
        <img class="mx-auto mt-10" src="/projects/TheTravelQuest/project/wireflows.png" alt="The Travel Quest Design Screens"> -->
    </div>

    <div class="max-w-7xl mx-auto pb-4 px-8">
        <img class="mx-auto mt-10" src="/projects/TheTravelQuest/project/wireframes.png" alt="The Travel Quest Design Screens">
        <img class="mx-auto mt-10" src="/projects/TheTravelQuest/project/wireflows.png" alt="The Travel Quest Design Screens">
    </div>

    <div class="max-w-3xl mx-auto pt-8 pb-4 px-8">
        <h2 class="md:text-5xl text-4xl py-4">Design Process: Ensuring Ease of Use for All Users</h2>
        <p class="text-lg mt-4">One of the key pain points in the design process was ensuring that The Travel Quest app is easy to use for a diverse audience with varying levels of tech-savviness. To address this, the focus was on creating a design that is simple, intuitive, and familiar to everyone. Through research and careful consideration of user needs, I developed an interface that seamlessly guides users through their adventure, making the treasure hunt accessible and enjoyable for all participants.</p>
    </div>

    <div class="mb-4 mt-10">
        <img class="mx-auto" src="/projects/TheTravelQuest/project/screens.jpg" alt="The Travel Quest Design Screens">
    </div>

    <div class="max-w-3xl mx-auto pb-8 pt-4 px-8">
        <h2 class="md:text-5xl text-4xl py-4">Creating Unique Avatars</h2>
        <p class="text-lg mt-4">Thinking about the project and the diverse, unique people involved, I decided to design a unique avatar system based on topography maps of different locations around the world.</p>
    </div>

    <div class="mb-4">
        <img class="mx-auto" src="/projects/TheTravelQuest/project/avatars.png" alt="The Travel Quest Avatars">
    </div>

    <div class="max-w-3xl mx-auto p-8">
        <h2 class="md:text-5xl text-4xl py-4">The Process</h2>
        <p class="text-lg mt-4">For each topographical map, I rotated the map by 90 degrees and created four iterations. Using the brand color palette, I developed two distinct color variations for each map, resulting in 12 color pairs.</p>
    </div>

    <div class="mb-4">
        <img class="mx-auto" src="/projects/TheTravelQuest/project/avatar_system.png" alt="The Travel Quest Avatars">
    </div>


    <div class="max-w-3xl mx-auto p-8">
        <h2 class="md:text-5xl text-4xl py-4">The Final Touch</h2>
        <p class="text-lg mt-4">By merging these color palettes with the topographical maps, I created a system that generates a wide variety of unique avatars, adding a personal touch to each user’s adventure.</p>
    </div>

    <div class="mb-4 px-8">
        <img class="mx-auto" src="/projects/TheTravelQuest/project/final_avatars.png" alt="The Travel Quest Avatars">
    </div>

</template>

<script setup>

const title = ref('The Travel Quest | Razvan Tudosie Design Portfolio')
const description = ref('Selected works of Product Designer, Razvan Tudosie.')

useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    }]
})
</script>

<style>
p {
    font-size:18px;
}

h1.project {
    /* font-size:660%; */
    line-height:1;
    padding: 20px 0
}
</style>