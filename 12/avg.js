function avg(...args) {
    let num = 0
    let count = 0

    const add = arg => {
        if (!parseInt(arg)) return null
        num += arg
        count++
    }

    args.forEach(arg => {
        if (Array.isArray(arg)) return arg.forEach(arr => add(arr))
        add(arg)
    })

    return num / count
}

export default avg
