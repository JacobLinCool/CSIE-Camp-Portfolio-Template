<script setup>
import Typing from "@components/Typing.vue";

defineProps({
    name: { type: String, default: "Project" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    tags: { type: Array, default: () => [] },
});
</script>

<template>
    <div>
        <h1 class="text-2xl">Name: {{ name }}</h1>
        Description: {{ description }}<br />
        Image: {{ image }}<br />
        Link: {{ link }}<br />
        <Typing :text="tags.join(' / ')" />
    </div>
</template>
