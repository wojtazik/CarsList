import React, { Component } from 'react';
import "./List.scss";
import TableHeader from "../TableHeader/TableHeader";
import ListItem from "../ListItem/ListItem";

export default class List extends Component {

    state = {
      offers: null    
    }
    changeAvailability = (index) => {  
      let newState = this.state.offers;
      newState[index].availability = !this.state.offers[index].availability; 
      this.setState({
         offers: newState
       })
    }
    handleDelete = (index) => {
      let actualState = this.state.offers;
      actualState.splice(index,1);
      this.setState({
        offers: actualState
      })
    }

    componentDidMount(){
      fetch("../../data.json")
        .then(resp =>{
          if(resp.ok) {return resp.json()}
        })
        .then(resp => {
          this.setState({
            offers: resp.offers
          })
        });
        
    }

    renderList = () =>{
       const List = this.state.offers.map((offer, index) => (
             <ListItem
                key={index}
                index={index} 
                make={offer.make}
                model={offer.model}
                engine={offer.engine}
                availability={offer.availability}
                photo={offer.photo}
                changeAvailability={this.changeAvailability}
                delete={this.handleDelete}
                />
        ));
        return List;
     };

     


  render() {
    return (
      <table className="list">
        <TableHeader/>
        <tbody className="list__body">
            {this.state.offers !== null ? this.renderList() : null}
        </tbody>
      </table>
    )
  }
}

