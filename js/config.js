const generatePalette = (base, colors) => {
    let palette = {}

    palette[`${base}-50`] = colors.shift()
    for(let i = 1; i < colors.length; i++) {
        palette[`${base}-${i * 100}`] = colors.shift()
    }

    return palette
}

export const color = {
    "black": "#000000",
    "white": "#ffffff",

    ...generatePalette("blue", [
        "#edf5ff",
        "#d0e2ff",
        "#a6c8ff",
        "#78a9ff",
        "#4589ff",
        "#0f62fe",
        "#0043ce",
        "#002d9c",
        "#001d6c",
        "#001141"
    ]),
    // ...generatePalette("gray", [

    // ])
}

export const css = (strings) => {
    let stylesheet = Array.isArray(strings) ? strings.join(' ') : strings

    for(const [key, value] of Object.entries(color)) {
        if(stylesheet.includes(key)) {
            stylesheet = stylesheet.replace(key, value)
        }
        // if(stylesheet.includes(key)) {
        // }
    }
    
    return stylesheet
}

