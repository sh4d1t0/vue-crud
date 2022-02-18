<template>
  <div>
    <nav>
      <RouterLink to="/">Sing Out</RouterLink>
      <RouterLink to="/change-password">Change Password</RouterLink>
    </nav>
    <h1 class="text-2xl font-bold">Profile</h1>
    <div>
      {{ userStore.users[0].username }} - {{ userStore.users[0].email }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/auth'

const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
