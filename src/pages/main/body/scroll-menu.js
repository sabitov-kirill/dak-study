import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'

// // Menu item component
// const MenuItem = ({ text, imageSrc }) => {
//     return (
//         <div
//             className={`menuItem ${text}`}
//         >
//             <p>{text}</p>
//         </div>
//     );
// };

// // Menu component
// const Menu = (list) =>
//     list.map(el => {
//         return (
//             <MenuItem
//                 text={el.name}
//                 key={el.name}
//                 imageSrc={el.imageSrc}
//             />
//         );
//     });

// // Scroll menu component
// class PagesMenu extends Component {
//     constructor(props) {
//         super(props);

//         // Menu items list
//         this.menuItemsConstructor = [
//             { name: "Mechanics" },
//             { name: "Molecular" },
//             { name: "Electrostatics" }
//         ];

//         this.menuItems = Menu(this.menuItemsConstructor);

//         this.pageSelect = this.pageSelect.bind(this);
//     }

//     pageSelect(key) {
//         this.props.switchPage(key);
//     }

//     render() {
//         return (
//             <div className={`menuItem`}>
//                 <ScrollMenu
//                     data={this.menuItems}
//                     alignOnResize={true}
//                     clickWhenDrag={false}
//                     wheel={true}
//                     dragging={true}
//                     transition={1}
//                     inertiaScrolling={14}
//                     onSelect={this.pageSelect}
//                 />
//             </div>
//         );
//     }
// }
let list = [
    { name: "Mechanics" },
    { name: "Molecular" },
    { name: "Electrostatics" }
];

const MenuItem = ({ text, selected }) => {
    return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
    list.map(el => {
        const { name } = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });

class PagesMenu extends Component {
    state = {
        alignCenter: true,
        clickWhenDrag: false,
        dragging: true,
        itemsCount: list.length,
        scrollToSelected: false,
        selected: "Mechanics",
        translate: 0,
        transition: 0.3,
        wheel: true
    };

    constructor(props) {
        super(props);
        this.menu = null;
        this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
    }

    onFirstItemVisible = () => {
        console.log("first item is visible");
    };

    onLastItemVisible = () => {
        console.log("last item is visible");

        //     list = list.concat(newItems);
        //     this.menuItems = Menu(list, list.slice(-1)[0].name);
        //     this.setState({
        //         itemsCount: list.length,
        //         selected: this.state.selected
        //     });
    };

    onUpdate = ({ translate }) => {
        console.log(`onUpdate: translate: ${translate}`);
        this.setState({ translate });
    };

    onSelect = key => {
        console.log(`onSelect: ${key}`);
        this.setState({ selected: key });
    };

    componentDidUpdate(prevProps, prevState) {
        const { alignCenter } = prevState;
        const { alignCenter: alignCenterNew } = this.state;
        if (alignCenter !== alignCenterNew) {
            this.menu.setInitial();
        }
    }

    setItemsCount = ev => {
        const { itemsCount = list.length, selected } = this.state;
        const val = +ev.target.value;
        const itemsCountNew =
            !isNaN(val) && val <= list.length && val >= 0
                ? +ev.target.value
                : list.length;
        const itemsCountChanged = itemsCount !== itemsCountNew;

        if (itemsCountChanged) {
            this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
            this.setState({
                itemsCount: itemsCountNew
            });
        }
    };

    setSelected = ev => {
        const { value } = ev.target;
        this.setState({ selected: String(value) });
    };

    render() {
        const {
            alignCenter,
            clickWhenDrag,
            hideArrows,
            dragging,
            hideSingleArrow,
            itemsCount,
            scrollToSelected,
            selected,
            translate,
            transition,
            wheel
        } = this.state;

        const menu = this.menuItems;

        return (
            <div className="PagesMenu">

                <ScrollMenu
                    alignCenter={alignCenter}
                    clickWhenDrag={clickWhenDrag}
                    data={menu}
                    dragging={dragging}
                    hideArrows={hideArrows}
                    hideSingleArrow={hideSingleArrow}
                    onFirstItemVisible={this.onFirstItemVisible}
                    onLastItemVisible={this.onLastItemVisible}
                    onSelect={this.onSelect}
                    onUpdate={this.onUpdate}
                    ref={el => (this.menu = el)}
                    scrollToSelected={scrollToSelected}
                    selected={selected}
                    transition={+transition}
                    translate={translate}
                    wheel={wheel}
                />
            </div>
        );
    }
}

export default PagesMenu;