// ROUTING USING https://github.com/ItalyPaleAle/svelte-spa-router

// Import svelte components
import Homepage from './components/Homepage.svelte'
import Reservation from './components/Reservation.svelte'

// Route dictionary
export default {
    '/': Homepage,
    '/reservation': Reservation
}