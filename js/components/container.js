import define, { jsh, props } from "stateful-components"
import { css } from "../theme.js"

define("d-container", {
    style: css(`
        .main {
            max-width: bu-400;
            padding: 0 bu-8;
            margin: 0 auto;
        }

        .flex {
            display: flex;
        }
    `),

    render(state, target) {
        const {type} = props(target)

        return jsh.div({ class: type },
            ...target.childNodes
        ) 
    }
})