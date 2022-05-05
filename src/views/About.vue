<script setup>
import { ref } from "vue";
import Typing from "../components/Typing.vue";

function open(url) {
    window.open(url, "_blank");
}
</script>

<script>
let show_pic = ref(false);
setTimeout(() => {
    show_pic.value = true;
}, 400);

let T = ref(0);
let timer_id = setInterval(() => {
    T.value = T.value += 25;
    if (T.value >= 30_000) {
        clearInterval(timer_id);
    }
}, 25);
</script>

<template>
    <div class="h-full w-full px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
        <Typing text="About Me" class="mb-8 block text-2xl sm:text-3xl lg:text-4xl" />
    </div>
</template>
