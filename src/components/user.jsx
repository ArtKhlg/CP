import React from "react";
import Quality from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    return (<>
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((item) => (
                    <Quality 
                        key={item._id} 
                        { ...item}
                    />
                ))}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} /5</td>
            <td >
                <Bookmark 
                    status={props.bookmark} 
                    onBookmarks={props.onBookmarks} 
                    _id={props._id}
                />
                
            </td>
            <td>
                <button
                    onClick={() => props.onDelete(props._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td> 
        </tr></>)
}

export default User