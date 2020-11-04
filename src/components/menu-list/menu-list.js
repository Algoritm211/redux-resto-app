import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc'
import './menu-list.scss';
import { addedToCard, menuLoaded, menuRequested } from '../../actions';

import Spinner from '../spinner'



class MenuList extends Component {


  componentDidMount() {
    this.props.menuRequested()
    const {RestoService} = this.props

    RestoService.getMenuItems()
      .then(res => this.props.menuLoaded(res))
  }

    render() {

      const {menuItems, loading, addedToCard} = this.props 

      if (loading) {
        return <Spinner />
      }

        return (
            <ul className="menu__list">
              {menuItems.map(menuItem => {
                return (
                  <MenuListItem menuItem={menuItem} key={menuItem.id} onAddToCard={() => addedToCard(menuItem.id)}/>
                )
              })}
            </ul>
        )
    }
};

function mapStateToProps(state) {
  return {
    menuItems: state.menu,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuLoaded: (newMenu) => dispatch(menuLoaded(newMenu)),
    menuRequested: () => dispatch(menuRequested()),
    addedToCard: (id) => dispatch(addedToCard(id))
  }
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));