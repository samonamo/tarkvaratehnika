import React, {Component} from 'react';

class Checkbox extends Component {
    state = {
        isChecked: false,
    };

    toggleCheckboxChange = () => {
        const {handleCheckboxChange, data} = this.props;

        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(data);
    };

    render() {
        const {data} = this.props;
        const {isChecked} = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={data.name}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    {data.name} ,kestvus {data.length} min, hind {data.price} €
                </label>
            </div>
        );
    }
}


export default Checkbox;