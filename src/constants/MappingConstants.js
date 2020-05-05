import {number} from "prop-types";

export const ComponentDetails = {
    referenceCode: String,
    unitName: String,
    unitType: String,
    quantity: number,
    parameters: String,
    datasheetUrl: String,
    productUrl: String,
    storageLocation: String,
    storageLabel: String,
    manufacturer: String,
    productCode: String,
    notes: String,
    purchaseDate: Date,
    price: String,
    purchasedPlace: String,
    billNumber: String,
    status: String
};


export const statusTypes = [
    {
        value: 'Available'
    },
    {
        value: 'Not Available'
    },
    {
        value: 'In Use'
    },
    {
        value: 'Damaged'
    },
    {
        value: 'Obsolete'
    },
    {
        value: 'Repairing'
    }
];
