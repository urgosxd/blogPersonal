/* eslint-disable */
/**
 *
 *
 */
const React = require("react");
const boots = require("bootstrap/dist/css/bootstrap.min.css");
const Tema = require("styled-components").ThemeProvider;
const Global = require("styled-components").createGlobalStyle`
html{
    font-size:16px;
    line-height: 1.6em;
    text-rendering: optimizeLegibility;
    
}

p{
    line-height: 1.6em;
}

`;
var trustAllScripts = function () {
    var scriptNodes = document.querySelectorAll(
        ".load-external-scripts script"
    );

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = document.createElement("script");
        s.type = node.type || "text/javascript";

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        document.getElementsByTagName("head")[0].appendChild(s);
    }
};

exports.onRouteUpdate = function () {
    trustAllScripts();
};

const theme = {
    colors: {
        azul: "blue",
    },
};

exports.wrapRootElement = ({ element }) => {
    return (
        <Tema theme={theme}>
            <Global />
            {element}
        </Tema>
    );
};
