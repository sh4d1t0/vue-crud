<template>
  <div class="py-12">
    <h1 class="text-2xl font-bold">Sing-up</h1>
    <div class="mt-8 max-w-md">
      <form class="grid grid-cols-1 gap-6" @submit.prevent="submit">
        <div class="relative">
          <input
            class="peer input"
            id="username"
            v-model="inputs.username"
            type="text"
            placeholder="Username"
          />
          <label
            for="username"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >Username</label
          >
        </div>
        <div class="relative">
          <input
            class="peer input"
            id="email"
            v-model="inputs.email"
            type="email"
            placeholder="Email"
          />
          <label
            for="email"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >Email</label
          >
        </div>
        <div class="relative">
          <input
            class="peer input"
            id="password"
            v-model="inputs.password"
            type="password"
            placeholder="Password"
          />
          <label
            for="password"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >Password</label
          >
        </div>
        <button class="button-contained" type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useUserStore } from '@/stores/auth'

export default defineComponent({
  setup() {
    const inputs = reactive({ username: '', email: '', password: '' })
    const user = useUserStore()
    const submit = () => {
      user.addUser({ ...inputs })
      inputs.username = ''
      inputs.email = ''
      inputs.password = ''
    }
    return { inputs, submit }
  },
})
</script>

<style lang="scss" scoped>
.input {
  @apply h-10 w-full py-2 pl-9 pr-3 block rounded placeholder:text-base text-gray-900 sm:text-sm placeholder-transparent;
}
.label {
  @apply absolute -top-3.5 h-10 w-full pl-9 pr-3 text-sm text-gray-600 transition-all;
}
.button-contained {
  @apply rounded-full focus:outline-none focus:ring text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 focus:bg-emerald-600/90 text-base px-3 py-2;
}
</style>
