import { defineStore } from 'pinia'

export type User = { username: string; email: string; password: string }

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
  }),
  getters: {},
  actions: {
    addUser(user: User) {
      this.users.push(user)
    },
    signUser(user: User) {
      this.users.fill(user)
    },
  },
})
