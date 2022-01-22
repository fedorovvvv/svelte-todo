import { writable, derived } from 'svelte/store'

export const taskArr = writable([
    { id: 1, text: 'Test task 1', done: false, color: '#0029FF', date: '22.11.2021' },
    { id: 2, text: 'Test task 2', done: false, color: '#FF9900', date: '22.12.2021' },
    { id: 3, text: 'Test task 3', done: true, color: '#AD00FF', date: '25.11.2021' },
])

export const colors = derived(taskArr, ($taskArr, set) => {
    const DEF_COLORS = ['#0029FF', '#FF9900', '#AD00FF', '#000000', '#FF5656']

    let taskColors = $taskArr.filter(task => task.color).map(task => task.color)

    let concatColors = taskColors.concat(DEF_COLORS)

    let uniqueColors = concatColors.filter((color, i) => concatColors.indexOf(color) === i);

    let newArr = uniqueColors.map((color, i) => {
        return {
            id: i,
            color: color,
        }
    })
    set(newArr)
})