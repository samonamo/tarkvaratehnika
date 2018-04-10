import React, {Component} from 'react';

class AcceptBooking extends Component {


    render() {
        const {selected} = this.props.location.state;
        return (
            <div>
                <h1>Accept Booking</h1>
                <thead>
                <tr>
                    <th>
                        Is that right ?
                    </th>
                </tr>
                </thead>
                <tbody>
                {[...selected].map((checkbox) => {
                    return (
                        <tr>
                            <th>{checkbox.name}{checkbox.length}{checkbox.price}</th>
                            {console.log(checkbox)}
                        </tr>
                    )
                })}
                </tbody>
            </div>
        );
    }
}

export default AcceptBooking;
