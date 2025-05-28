import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            user: null,
            token: '',
            // host: 'http://localhost:8001/api/'
            host: 'https://sis.materdeicollege.com/api/'
        }
    },
})