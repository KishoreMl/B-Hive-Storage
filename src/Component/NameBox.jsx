import { Component } from "react";
import Hexagon from "./Hexagon";

class NameBox extends Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="nameBox">
                <h1>
                    Kishore.M.L
                </h1>
            </div>
        );
    }
}

export default NameBox;