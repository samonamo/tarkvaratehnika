import React, {Component} from 'react';
import Checkbox from "../helpComponents/CheckBox";
import {Link} from "react-router-dom";



class ListOfWorks extends Component {
    constructor(props) {
        super(props);
        this.selectedCheckboxes = new Set();

        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/service/price/getlist')
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    }

    toggleCheckbox = label => {

        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    createCheckboxes() {
        const {data} = this.state;

        return data.map((work) =>
            <Checkbox
                data={work}
                handleCheckboxChange={this.toggleCheckbox.bind(this)}
                key={work.listedWorkID}
            />
        )
    };



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
                    </div>

                    <div id="names">
                    </div>

                </div>
            </div>
        );
    }
}

export {
    ListOfWorks
};
