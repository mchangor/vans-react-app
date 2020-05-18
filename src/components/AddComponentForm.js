import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import './AddComponentForm.css'
import {ComponentDetails} from '../constants/MappingConstants'


const initialState = {
    ComponentDetails: ComponentDetails,
    referenceCode: '',
    unitName: '',
    unitType: '',
    quantity: '',
    parameters: '',
    datasheetUrl: '',
    productUrl: '',
    storageLocation: '',
    storageLabel: '',
    manufacturer: '',
    productCode: '',
    notes: '',
    purchaseDate: '',
    price: '',
    purchasedPlace: '',
    billNumber: ''
};

class AddComponentForm extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    buildComponentDetailsObject(event) {
        const componentDetails = this.state.ComponentDetails;
        componentDetails.referenceCode = this.state.referenceCode;
        componentDetails.unitName = this.state.unitName;
        componentDetails.unitType = this.state.unitType;
        componentDetails.quantity = this.state.quantity;
        componentDetails.parameters = this.state.parameters;
        componentDetails.datasheetUrl = this.state.datasheetUrl;
        componentDetails.productUrl = this.state.productUrl;
        componentDetails.storageLocation = this.state.storageLocation;
        componentDetails.storageLabel = this.state.storageLabel;
        componentDetails.manufacturer = this.state.manufacturer;
        componentDetails.productCode = this.state.productCode;
        componentDetails.notes = this.state.notes;
        componentDetails.purchaseDate = this.state.purchaseDate;
        componentDetails.purchasedPlace = this.state.purchasedPlace;
        componentDetails.price = this.state.price;
        componentDetails.billNumber = this.state.billNumber;
        event.preventDefault();
        //Todo: remove console logs
        console.log(componentDetails);
    }

    resetForm = event => {
        event.currentTarget.form.reset();
        this.setState(initialState);
    };

    //Todo: Add error messages and restrictions like only numbers for Quantity field is allowed
    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.buildComponentDetailsObject.bind(this)}>
                    <div className="form-wrapper">
                        <TextField label="Unit Name" onChange={this.handleChange('unitName')} className={"field"}
                                   required={true}/>
                        <TextField label="Unit Type" onChange={this.handleChange('unitType')} className={"field"}
                                   required={true}/>
                        <TextField label="Reference Code" onChange={this.handleChange('referenceCode')} className={"field"}
                                   helperText={"Internal reference code for the component"} required={true}/>
                        <TextField label="Quantity" onChange={this.handleChange('quantity')} className={"field"}
                                   required={true}/>
                        <TextField label="Parameters" onChange={this.handleChange('parameters')} className={"field"}
                                   required={true}/>
                        <TextField label="Datasheet URL" onChange={this.handleChange('datasheetUrl')} className={"field"}
                                   required={false}/>
                        <TextField label="Product URL" onChange={this.handleChange('productUrl')} className={"field"}
                                   required={false}/>
                        <TextField label="Storage Location" onChange={this.handleChange('storageLocation')} className={"field"}
                                   required={true}/>
                        <TextField label="Storage Label" onChange={this.handleChange('storageLabel')} className={"field"}
                                   required={true}/>
                        <TextField label="Manufacturer" onChange={this.handleChange('manufacturer')} className={"field"}
                                   required={false}/>
                        <TextField label="Product Code" onChange={this.handleChange('productCode')} className={"field"}
                                   required={true}/>
                        <TextField label="Notes" onChange={this.handleChange('notes')} className={"field"}
                                   required={false}/>
                        <TextField label="Purchase Date" onChange={this.handleChange('purchaseDate')} className={"field"}
                                   required={false}/>
                        <TextField label="Price" onChange={this.handleChange('price')} className={"field"}
                                   required={false}/>
                        <TextField label="Purchased Place" onChange={this.handleChange('purchasedPlace')} className={"field"}
                                   required={false}/>
                        <TextField label="Bill Number" onChange={this.handleChange('billNumber')} className={"field"}
                                   required={false}/>

                        <div className={"buttonContainer"}>
                            <Button size={'medium'} type="submit" value="Submit" className={"button"} variant="contained" color="primary">
                                Save
                            </Button>
                            <Button size={'medium'} className={"button"} variant="contained" color="primary" onClick={this.resetForm.bind(this)}>
                                Reset
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddComponentForm;
