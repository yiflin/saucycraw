import React, { Component } from 'react';
import Menu from '../Images/menu.jpeg'
import Homemenu from '../Images/homemenu.png'
import Pepper from '../Images/pepperwing.jpg'
import Wings from '../Images/lemonwing.jpg';
import Table from '../Images/table.jpg';
import MenuMain from './PageComponents/MenuMain';
import MenuFried from './PageComponents/MenuFried';
import MenuWings from './PageComponents/MenuWings';
import MenuExtra from './PageComponents/MenuExtra';

class MenuPage extends Component {

    render() {
        return(
            <div>
                <div className="MenuPage-heroimage">
                    <h1 className="MenuPage-herotitle">Menu</h1>
                </div>
                <img className="MenuPage-menuimg" src={Homemenu} alt="menu"/>
                {/*<div className="MenuPage-background">
                    <div className="MenuPage-component">
                        <h1 className="MenuPage-title">Today's Catch</h1>
                        <MenuMain/>
                    </div>
                    <div className="MenuPage-component">
                        <MenuFried/>
                        <img className="MenuPage-rightpicture" src={Wings} alt="wings"/>
                    </div>
                    <div className="MenuPage-component">
                        <MenuWings/>
                    </div>
                    <div className="MenuPage-component">
                        <img className="MenuPage-leftpicture" src={Table} alt="table"/>
                        <MenuExtra/>
                        
                    </div>
                </div>*/}
            </div>
        );
    };
}

export default MenuPage