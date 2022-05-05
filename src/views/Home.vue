<script setup>
import { ref } from "vue";
import MdiGithub from "~icons/mdi/github";
import MdiInstagram from "~icons/mdi/instagram";
import Typing from "../components/Typing.vue";

let T = ref(0);
let timer_id = setInterval(() => {
    T.value = T.value += 25;
    if (T.value >= 30_000) {
        clearInterval(timer_id);
    }
}, 25);
</script>
<template>
    <div class="w-full overflow-y-auto px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing text="My Portfolio" class="mb-2 block text-2xl sm:text-3xl lg:text-4xl" />
        <Typing v-if="T > 1200" text="Hello!" :speed="60" />
        <a
            v-if="T > 1600"
            class="mt-8 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://github.com/"
            target="_blank"
        >
            <MdiGithub class="mr-1 inline-block" />
            <Typing v-if="T > 1600" text="GitHub" :speed="60" />
        </a>
        <a
            v-if="T > 2000"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://instagram.com/"
            target="_blank"
        >
            <MdiInstagram class="mr-1 inline-block" />
            <Typing v-if="T > 2000" text="Instagram" :speed="60" />
        </a>
    </div>
</template>
