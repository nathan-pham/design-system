import "https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"
import define, { jsh } from "stateful-components"
import { css } from "../theme.js"

define("d-button", {
    style: css`
        button {
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
            min-width: bu-80;
            
            position: relative;

            transition: background 0.1s ease;
        }

        button:hover {
            background: dblue-600;
        }

        button ion-icon {
            margin: 0 0 0 bu-12;
            font-size: bu-8;
        }
    `,

    render(state, target) {
        return jsh.button({},
            ...target.childNodes
        ) 
    }
})