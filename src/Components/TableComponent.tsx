import { Component } from "react";
import RowComponent from "./RowComponent";
var moment = require('moment');

class TableProps { }

class TableState {
    listProfile: ProfileEntity[] = [];
    constructor() {
    }
}

class ProfileEntity {
    nameFolder: string;
    status: number;
    constructor(nameFolder: string, status: number) {
        this.nameFolder = nameFolder;
        this.status = status;
    }
}

class TableComponent extends Component<TableProps, TableState> {
    constructor() {
        super(new TableProps());
        this.state = new TableState();
    }

    componentDidMount(): void {
        this.fetchProfileEntities();
    }

    async fetchProfileEntities(): Promise<void> {
        const response = await fetch('/Profile/GetAll');
        const data = await response.json();
        const profileEntities: ProfileEntity[] = data.map((item: any) => {
            return {
                nameFolder: item.nameFolder,
                status: item.status
            }
        });
        this.setState(Object.assign({}, this.state, { listProfile: profileEntities }));

    }


    render() {
        return (
            <div className="px-8">
                <table className="table-auto w-full divide-y divide-gray-200 py-5">
                    <thead className="bg-gray-50 rounded-t-lg">
                        <tr>
                            <th className="w-1/10">
                                <input type="checkbox" className="form-checkbox text-indigo-600 h-3 w-3 selectBox" />
                            </th>
                            <th className="w-3/10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="w-3/10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"></th>
                            <th className="w-5/10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            this.state.listProfile.map(profile => {
                                return <RowComponent name={profile.nameFolder} status={profile.status}></RowComponent>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComponent;