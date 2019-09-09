const randomize = () =>
    0.5 - Math.random()

export const shuffle = data =>
    data.sort(randomize)
