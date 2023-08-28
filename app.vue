<template>
    <header>
        <nav class="container max-w-6xl mx-auto flex flex-col sm:flex-row p-8 sm:justify-between items-center gap-3">
            <div class="items-center flex gap-3">
                <img class="w-16" src="/images/avatar.png" alt="Razvan Tudosie" />
                <NuxtLink class="text-md text-xl" to="/"><strong>Razvan</strong> Tudosie</NuxtLink>
            </div>
            <div class="invisible sm:visible">
                <!-- <a href="#">Download Resume</a> -->
            </div>
        </nav>
    </header>
    <NuxtPage />

    <footer class="container max-w-6xl mx-auto flex justify-center py-16 px-8 text-bold">
        <p>&copy; {{ new Date().getFullYear() }} Designed and built by Razvan Tudosie</p>
    </footer>
</template>