<script setup lang="ts">
const event = useRequestEvent()

console.log(event?.context.myProject?.validated)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </div>
</template>
