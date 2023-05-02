import { stat } from "fs";
import { Component } from "react";

class RowProps {
    name: string;
    status?: number;
    constructor(name: string, status?: number) {
        this.name = name;
        this.status = status;
    }
}

class RowState {
    constructor() {
    }
}

class RowComponent extends Component<RowProps, RowState> {
    constructor(props: RowProps) {
        super(props);
        this.state = new RowState();
    }

    statusText = (status?: number) => {
        if (status == 0) {
            return "Ready";
        }

        if (status = 1) {
            return "Waiting";
        }

        if (status == 2) {
            return "Opening";
        }

        return "";
    }

    render() {
        return (
            <tr className="">
                <td className="w-1/10 px-6 py-3 text-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-3 w-3 selectBox" />
                </td>
                <td className="w-3/10 px-6 py-4 text-center">{this.props.name}</td>
                <td className="w-3/10 px-6 py-4 text-center">
                    <button className="text-green-400 border border-green-400 hover:bg-green-400 hover:text-white active:bg-green-400 px-2 py-1 rounded" type="button">
                        Run
                    </button>
                </td>
                <td className="w-5/10 px-6 py-4 text-center">{this.statusText(this.props.status)}</td>
            </tr>
        );
    }
}

export default RowComponent;