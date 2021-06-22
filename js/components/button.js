import "https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"
import define, { jsh, props } from "stateful-components"
import { css } from "../theme.js"

define("d-button", {
    style(state, target) {
        const { childNodes } = target.shadowRoot.childNodes[0]
        const filtered = [...childNodes].filter(node => String(node.textContent).trim().length > 1 && node.nodeName == "#text")

        return css(`button {
            background: dblue-500;
            color: white;

            cursor: pointer;
            display: flex;
            text-align: center;
            align-items: center;
            vertical-align: center;
            justify-content: space-between;

            padding: bu-7 bu-8;
            font-size: bu-7;

            outline: none;
            border: none;
            border-radius: 0;

            ${filtered.length > 0 ? "min-width: bu-80;" : ""}
                
            position: relative;

            transition: background 0.1s ease;
        }

        button:hover {
            background: dblue-600;
        }

        button ion-icon {
            font-size: bu-8;
            margin: 0;
        }`)
    },

    render(state, target) {
        const {style} = props(target)
        
        return jsh.button({style},
            ...target.childNodes
        ) 
    }
})