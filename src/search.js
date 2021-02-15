import React, { Component } from 'react';
import SearchTable from './searchTable';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
           fromValue:'',
           toValue:'',
           isReturn:1, 
           filteredRecords: []
        }
    }

    updateValue(fieldName, value) {
        console.log( fieldName + "  "+ value);
        this.setState({
            [fieldName]: value
        })
    }

    onApplySearch = () => {
        if(!this.state.fromValue || !this.state.toValue) {
            alert("Please neter valida value for search");
        }
        var filteredRows = this.props.names.filter((item) => {
            console.log('curent book id ' + item.bookid);
            console.log('Is return ' + this.state.isReturn === 1);
                console.log("output :" + (this.state.fromValue <= item.bookid && this.state.toValue >= item.bookid));

            if(this.state.isReturn === 1 )
            {
                                return this.state.fromValue <= item.bookid && this.state.toValue >= item.bookid
            }
            else
            {
                return !(this.state.fromValue <= item.bookid && this.state.toValue >= item.bookid)
            }
        });
        console.log("filtered rows : " + JSON.stringify(filteredRows))
        this.setState({
            filteredRecords: filteredRows
        });
    }

    render() {
        return (
            <div>
            <div className="app-input">
                <div>
                    <span>From:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('fromValue', e.target.value)
                    }} />
                </div>
                <div>
                    <span>To:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('toValue', e.target.value)
                    }} />
                </div>
                <div>
                    <span>IsReturn?:</span>
                    <select name="isreturn" id="isreturn" value={this.state.isReturn} onChange={(e) => {
                        console.log('drop down value change: ', e.target.value)
                        this.updateValue('isReturn', e.target.value)
                    }}>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <button onClick={() => {
                    this.onApplySearch()
                }}>Search
                </button>
            </div>
            <div>
             <SearchTable names={this.state.filteredRecords} />
             </div>
             </div>
        );
    }
}


export default Search;
