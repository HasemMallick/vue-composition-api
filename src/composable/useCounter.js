import { ref } from 'vue'

// Counter composable
export function useCounter(initialValue = 0) {
    const count = ref(initialValue)

    const incrementCounter = () => count.value += 1000
    const decrementCounter = () => count.value -= 1000

    return { count, incrementCounter, decrementCounter }
}