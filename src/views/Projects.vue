<script setup>
import { ref, watch } from "vue";
import { random_text } from "@/utils";
import Typing from "@components/Typing.vue";
import Project from "@components/Project.vue";
import Fade from "../components/Fade.vue";

const projects = [
    {
        name: "製作個人網站？",
        description: "This is a project description. " + random_text(64),
        image: "https://picsum.photos/640/320",
        link: "https://github.com",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "寫出 AI？",
        description: "This is a project description. " + random_text(64),
        image: "https://picsum.photos/640/320",
        link: "https://github.com",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "學會 Linux？",
        description: "This is a project description. " + random_text(64),
        image: "https://picsum.photos/640/320",
        link: "https://github.com",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "做出桌布？",
        description: "This is a project description. " + random_text(64),
        image: "https://picsum.photos/640/320",
        link: "https://github.com",
        tags: ["tag1", "tag2", "tag3"],
    },
];

const step = ref(0);
let interval = -1;

watch(step, () => {
    if (step.value > 0 && interval === -1) {
        interval = window.setInterval(() => {
            step.value++;
            if (step.value >= projects.length) {
                window.clearInterval(interval);
            }
        }, 200);
    }
});
</script>
<template>
    <div class="h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="My Projects"
            class="block text-2xl sm:text-3xl lg:text-4xl"
        />
        <div class="py-2">
            <div v-for="(project, index) in projects">
                <Fade>
                    <Project
                        v-if="step >= index + 1"
                        :key="index"
                        class="my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"
                        :name="project.name"
                        :description="project.description"
                        :image="project.image"
                        :link="project.link"
                        :tags="project.tags"
                    />
                </Fade>
            </div>
        </div>
    </div>
</template>
