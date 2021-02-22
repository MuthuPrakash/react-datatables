import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Book Type',
        selector: 'booktype',
        sortable: true
    },
    {
        name: 'Book Id',
        selector: 'bookid',
        sortable: true
    },
    {
        name: 'Sys Id',
        selector: 'sysid'
    },
    {
        name: 'Is Return',
        selector: 'return'
    },
    {
        name: 'Return Id',
        selector: 'returnid'
    }
];

class Table extends Component {
    render() {
        console.log(JSON.stringify(this.props.names));
        return (
            <div>
                <DataTable
                    title="Book Items"
                    columns={columns}
                    data={this.props.names}
                    striped={true}
                    highlightOnHover={true}
                    responsive={true}
                    defaultSortField="bookid"
                    defaultSortAsc={true}
                    pagination={true}
                    paginationPerPage={50}
                    paginationRowsPerPageOptions={[50, 100, 150, 200, 250, 300]}
                />
            </div>);
    }
}


export default Table;