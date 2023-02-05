import { Component } from "react";
import BHive from "./BHive";
import NameBox from "./NameBox";

class UserInfoBox extends Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="UserBox">
                <div className="cardBox">
                    <NameBox />
                     <BHive />
                </div>
           </div>  
        );
    }
}

export default UserInfoBox;