<template>
    <header>
        <nav class="container max-w-6xl mx-auto flex justify-between items-center p-8">
            <div class="items-center flex gap-3">
                <img class="w-16" src="/images/avatar.png" alt="Razvan Tudosie" />
                <NuxtLink class="text-md text-xl" to="/"><strong>Razvan</strong> Tudosie</NuxtLink>
            </div>
            <div class="invisible sm:visible">
                <a href="#">Download Resume</a>
            </div>
        </nav>
    </header>
    <NuxtPage />
</template>