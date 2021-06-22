import define, { jsh as h } from "stateful-components"
import { css } from "../theme.js"

define("d-button", {
    style: css`
        button {
            background: dblue-500;
            color: white;

            cursor: pointer;
            display: flex
            align-items: center;
            vertical-align: center;
            box-sizing: border-box;

            padding: bu-8;
            font-size: bu-7;

            outline: none;
            border: none;

            transition: background 0.1s ease;
        }

        button:hover {
            background: dblue-600;
        }
    `,

    render(state, target) {
        return h.button({},
            target.textContent  
        ) 
    }
})