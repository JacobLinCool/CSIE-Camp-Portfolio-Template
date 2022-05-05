<script setup>
defineProps({
    name: { type: String, default: "Project" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
});
</script>

<template>
    <div>
        Name: {{ name }}<br />
        Description: {{ description }}<br />
        Image: {{ image }}<br />
    </div>
</template>
