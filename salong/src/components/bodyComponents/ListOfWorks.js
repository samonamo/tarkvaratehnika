import React, {Component} from 'react';
import Checkbox from "../helpComponents/CheckBox";
import {Link} from "react-router-dom";
import * as Constants from "../../constants/Constants";
import {Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        selectedCheckboxes: state.selectedCheckboxes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Constants, dispatch),
    }
};

class ListOfWorks extends Component {
    constructor(props) {
        super();

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
        console.log(this.props.selectedCheckboxes)
        if (this.props.selectedCheckboxes.has(label)) {
            this.props.selectedCheckboxes.delete(label);
        } else {
            this.props.selectedCheckboxes.add(label);
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

                        <Link to="/AcceptBooking">Accept</Link>
                    </div>

                    <div id="names">
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfWorks);
