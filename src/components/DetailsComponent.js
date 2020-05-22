import React, {Component} from "react";
import {ComponentService} from "../services/ComponentService";


class DetailsComponent extends Component {

    render() {
        const componentId = this.props.match.params.componentId;
        const component = ComponentService.getComponent(componentId);

        return(
            <div>
                <span>{componentId}</span>
                <span>{this.props.match.params.componentId}</span>
                <span>{component.unitName}</span>
            </div>

        );
    }
}

export default DetailsComponent;
