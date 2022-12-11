import * as React from "react"
import Gist from "react-gist";

function GistPreView({ id ,file}) {
    return (
        <Gist id={id} file={file}></Gist>)
}

export default GistPreView