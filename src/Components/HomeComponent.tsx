import { Component } from "react";
import TableComponent from "./TableComponent";
var moment = require('moment');

class HomeProps { }

class HomeState {
    constructor() {
    }
}

class HomeComponent extends Component<HomeProps, HomeState> {
    constructor() {
        super(new HomeProps());
        this.state = new HomeState();
    }

    render() {
        return (
            <div className="h-screen bg-gray-100 pt-8">
                <TableComponent></TableComponent>
            </div>
        );
    }
}

export default HomeComponent;