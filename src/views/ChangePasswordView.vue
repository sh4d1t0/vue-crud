<template>
  <div>
    <h1 class="text-2xl font-bold">Change Password</h1>
    <div class="mt-8 max-w-md">
      <form class="grid grid-cols-1 gap-6">
        <div class="relative">
          <input
            class="peer input"
            id="password"
            type="password"
            placeholder="Password"
          />
          <label
            for="password"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >Old Password</label
          >
        </div>
        <div class="relative">
          <input
            class="peer input"
            id="password"
            type="password"
            placeholder="Password"
          />
          <label
            for="password"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >New Password</label
          >
        </div>
        <div class="relative">
          <input
            class="peer input"
            id="password"
            type="password"
            placeholder="Password"
          />
          <label
            for="password"
            class="label peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:italic peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
            >Repeat New Password</label
          >
        </div>
        <button class="button-contained">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
