import { Component } from "react";

class MenuBar extends Component{

    constructor(props)
    {
        super(props);
        this.routeDownload = this.routeDownload.bind(this);
        this.routeHome = this.routeHome.bind(this);
        this.routeNotifications = this.routeNotifications.bind(this);
        this.routeUpload = this.routeUpload.bind(this);
        this.routeHome = this.routeHome.bind(this);
    }
    routeHome()
    {
        window.location = '/home';
    }
    routeUpload()
    {
        window.location = '/upload';
    }
    routeDownload()
    {
        window.location = '/download';
    }
    routeNotifications()
    {
        window.location = '/notification';
    }
    routeLogout()
    {
        window.location = '/';
    }
    render()
    {
        return (
            <div className="NavBar">
                <button onClick={this.routeHome}>Home</button>
                <button onClick={this.routeUpload}>Upload</button>
                <button onClick={this.routeDownload}>Download</button>
                <button onClick="">View</button>
                <button onClick={this.routeNotifications}>Notifications</button>
                <button onClick={this.routeLogout}>Logout</button>
           </div>

        );
    }
}

export default MenuBar;