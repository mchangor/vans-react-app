

export class ComponentService {

    constructor(){}

    static getComponent(componentId) {
        return this.createData(1, 'Cupcake', 305, 3.7, 67, 4.3,3);
    }

    static createData(componentId, unitName, type, referenceCode, quantity, parameters, storageLocation) {
        return {componentId, unitName, type, referenceCode, quantity, parameters, storageLocation};
    }

    static createDataRows() {
        let data = [
            this.createData(1, 'Cupcake', 305, 3.7, 67, 4.3,7),
            this.createData(2, 'Donut', 452, 25.0, 51, 4.9,3),
            this.createData(3, 'Eclair', 262, 16.0, 24, 6.0,5),
            this.createData(4,'Frozen yoghurt', 159, 6.0, 24, 4.0,5),
            this.createData(5,'Gingerbread', 356, 16.0, 49, 3.9,6),
        ];
        return data;
    }
}

