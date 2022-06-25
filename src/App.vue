<script setup>
import { useRouter } from "vue-router";
import Nav from "./components/Nav.vue";
import Fade from "./components/Fade.vue";

const router = useRouter();

const search = new URLSearchParams(window.location.search);
const from = search.get("from");

if (from) {
    console.log("Redirecting to", from);
    router.push(from);
}
</script>

<template>
    <Nav />

    <div class="mt-16 h-[calc(100vh-4rem)] w-full overflow-y-auto overflow-x-hidden">
        <router-view v-slot="{ Component }">
            <Fade>
                <component :is="Component" />
            </Fade>
        </router-view>
    </div>
</template>
