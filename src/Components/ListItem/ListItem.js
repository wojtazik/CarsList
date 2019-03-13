import React from 'react';
import "./ListItem.scss"

export default function ListItem(props) {

  const unavailability = "list-item--unavailability";

  return (
    <tr className={`list-item ${props.availability ? null : unavailability}`}>
        <td className="list-item__column">{props.make} {props.model} {props.engine} {props.photo !== undefined && <img  className="list-item__photo" src={props.photo} alt="Car"/>}</td>
        <td className="list-item__column">{props.model}</td>
        <td className="list-item__column">{props.engine}</td>
        <td className="list-item__column">{props.availability ? "Tak" : "Nie"}</td>
        <td className="list-item__column list-item__column--buttons">
          <div className="availability-s">
            Dostępność:
            <label className="switch">
              <input type="checkbox" checked={props.availability} onChange={()=>{props.changeAvailability(props.index)}}/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="delete__wrapper">
            <span className="delete__text">Usuń: </span>
            <button className="delete" onClick={()=>{props.delete(props.index)}}></button>
          </div>
        </td>
    </tr>
  )
}
