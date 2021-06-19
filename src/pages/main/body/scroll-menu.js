import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'

// Menu item component
const MenuItem = ({ text, imageSrc }) => {
    return (
        <div
            className={`menuItem ${text}`}
        >
            <p>{text}</p>
        </div>
    );
};

// Menu component
const Menu = (list) =>
    list.map(el => {
        return (
            <MenuItem
                text={el.name}
                key={el.name}
                imageSrc={el.imageSrc}
            />
        );
    });

// Scroll menu component
class PagesMenu extends Component {
    constructor(props) {
        super(props);

        // Menu items list
        this.menuItemsConstructor = [
            { name: "Mechanics" },
            { name: "Molecular" },
            { name: "Electrostatics" }
        ];

        this.menuItems = Menu(this.menuItemsConstructor);

        this.pageSelect = this.pageSelect.bind(this);
    }

    pageSelect(key) {
        this.props.switchPage(key);
    }

    render() {
        return (
            <div className={`menuItem`}>
                <ScrollMenu
                    data={this.menuItems}
                    alignOnResize={true}
                    clickWhenDrag={false}
                    wheel={true}
                    dragging={true}
                    transition={1}
                    inertiaScrolling={1}
                    onSelect={this.pageSelect}
                />
            </div>
        );
    }
}

export default PagesMenu;