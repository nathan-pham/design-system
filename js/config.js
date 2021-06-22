const generatePalette = (base, colors) => {
    let palette = {}

    palette[`${base}-50`] = colors.shift()
    for(let i = 1; i < colors.length; i++) {
        palette[`${base}-${i * 100}`] = colors.shift()
    }

    return palette
}

export const theme = {
    // colors
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

    // base units
    "bu": "0.125rem"
}

export const style = (strings) => {
    let stylesheet = Array.isArray(strings) ? strings.join(' ') : strings

    for(const [key, value] of Object.entries(theme)) {
        if(stylesheet.includes(key)) {
            if(key.includes("bu")) {
                const matches = stylesheet.match(/bu-[0-9]+/g)

                if(matches) {
                    for(const match of matches) {
                        const [bu, multiplier] = match.split('-')
                        stylesheet = stylesheet.replaceAll(match, `calc(${theme.bu} * ${multiplier})`)
                    }
                }
            } else {
                stylesheet = stylesheet.replaceAll(key, value)
            }
        }
    }
    
    return stylesheet
}

