import {memo, useEffect} from "react";
import {ConfigContext, ConfigProps, defaultTheme} from "./ConfigType.ts";

const Config = memo((props: ConfigProps) => {
    useEffect(() => {
        if (props.theme && props.theme !== defaultTheme) {
            const style = document.createElement('style');
            const cssVariables = Object.entries(defaultTheme)
                .map(([key, value]) => `--mika-${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}: ${value};`)
                .join('');
            style.innerHTML = `
            :root {
                ${cssVariables}
            }`;
            document.head.appendChild(style);
        }
    });

    return (
        <ConfigContext.Provider value={props}>
            {props.children}
        </ConfigContext.Provider>
    );
});

export default Config;
