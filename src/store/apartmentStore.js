import { defineStore } from 'pinia'

export const useApartmentSrore = defineStore('apartment', {
    state: () => ({
        apartments: [],
        favorites: []
    }),
    actions: {
        setApartments(data) {
            this.apartments = data
        },
        addFavorite(id) {
            if (!this.favorites.includes(id)) this.favorites.push(id)
        }
    }
})