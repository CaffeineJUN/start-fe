function random(...args) {
    let min = 0
    let max = 0

    args.length === 1 ? ([max] = args) : ([min, max] = args)

    if (typeof min !== 'number' || typeof max !== 'number') return -1

    const num = Math.floor(Math.random() * (max - min) + min)
    return num
}

export default random
