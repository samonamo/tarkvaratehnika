import React, {Component} from 'react';
import Checkbox from "../helpClasses/CheckBox";
import {Link} from "react-router-dom";


const items = [
    'Lõikus',
    'Värvimine',
    'Soeng',
];

class ListOfWorks extends Component {
    constructor(props) {
        super(props);
        this.selectedCheckboxes = new Set();
    }

    submit = (event) => {

        fetch('http://localhost:8080/service/price/getlist')
            .then(response => response.json())
            .then(data => console.log("Data:" + JSON.stringify(data)));

        event.preventDefault();


    };

    toggleCheckbox = label => {

        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox.bind(this)}
            key={label}
        />
    );

    createCheckboxes = () => (
        items.map(this.createCheckbox.bind(this))
    );


    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">


                        {this.createCheckboxes()}
                        <Link to={{
                            pathname: '/AcceptBooking',
                            state: {
                                selected: this.selectedCheckboxes
                            }
                        }}>Accept</Link>
                        <button type="submit" onClick={this.submit}>Data Getting</button>
                    </div>
                    <div id="names">

                    </div>

                </div>
            </div>
        );
    }
}

export {
    ListOfWorks,
};