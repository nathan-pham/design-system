import define, { jsh, props } from "stateful-components"
import { css } from "../theme.js"

define("d-input", {
    style: css(`
        label {
            font-size: bu-7;
            color: dgray-500;

            display: block;
            margin: 0 0 bu-4 0;
        }

        input {
            background: dgray-0;
            color: black;

            font-size: bu-7;

            padding: bu-7 bu-8;
            width: 100%;

            outline: none;
            border: none;
            border-radius: 0;
            border-bottom: bu-0.5 solid dgray-500;

            transition: outline 0.1s ease;
        }

        input::placeholder {
            color: dgray-300;
        }

        input:focus {
            outline: bu-1 solid dblue-500;
            border-bottom: bu-0.5 solid transparent;
        }
    `),

    render(state, target) {
        const {label, name="input-field", style, ...inputProps} = props(target)

        return jsh.div({style},
            jsh.label({ for: name }, label),
            jsh.input({ name, ...inputProps })
        ) 
    }
})

        // <d-input label="Text Input Label" placeholder="Optional placeholder text"></d-input>
