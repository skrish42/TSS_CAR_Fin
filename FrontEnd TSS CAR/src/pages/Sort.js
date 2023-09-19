import { useState } from "react";
import "../Sort.css";
import { data } from "../users";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Sort() {
    const [users, setUsers] = useState(data);
    const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
    const [searchPhrase, setSearchPhrase] = useState("");

    const sortById = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.id - userB.id;
            }
            return userB.id - userA.id;
        });
        setUsers(usersCopy);
        setSorted({ sorted: "id", reversed: !sorted.reversed });
    };

    const sortByName = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            const fullNameA = `${userA.first_name} ${userA.last_name}`;
            const fullNameB = `${userB.first_name} ${userB.last_name}`;
            if (sorted.reversed) {
                return fullNameB.localeCompare(fullNameA);
            }
            return fullNameA.localeCompare(fullNameB);
        });
        setUsers(usersCopy);
        setSorted({ sorted: "name", reversed: !sorted.reversed });
    };

    const sortByHoursspent = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.Hoursspent - userB.Hoursspent;
            }
            return userB.Hoursspent - userA.Hoursspent;
        });
        setUsers(usersCopy);
        setSorted({ sorted: "Hoursspent", reversed: !sorted.reversed });
    };


    const sortByLogincount = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.Logincount - userB.Logincount;
            }
            return userB.Logincount - userA.Logincount;
        });
        setUsers(usersCopy);
        setSorted({ sorted: "Logincount", reversed: !sorted.reversed });
    };

    const search = (event) => {
        const matchedUsers = data.filter((user) => {
            return `${user.first_name} ${user.last_name}`
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });

        setUsers(matchedUsers);
        setSearchPhrase(event.target.value);
    };

    const renderUsers = () => {
        return users.map((user) => {
            return (

                <tr>
                <td> { user.id } </td> 
                <td > { `${user.first_name} ${user.last_name}` } </td> 
                <td> { user.email } </td> 
                <td> { user.Dept } </td>  
                <td> { user.Hoursspent } </td> 
                <td> { user.Logincount } </td>
                </tr >
            );
        });
    };

    const renderArrow = () => {
        if (sorted.reversed) {
            return <FaArrowUp / > ;
        }
        return <FaArrowDown / > ;
    };

    return ( 
        <div className = "App" >
        <div className = "search-container" >
            <input type = "text"
            placeholder = "Search"
            value = { searchPhrase }
            onChange = { search }/> 
            
            </div > 
            <div className = "table-container" >
            <table>
            <thead>
            <tr>
            <th onClick = { sortById } >
            <span style = {
                { marginRight: 10 }
            }> Roll ID </span> {
             sorted.sorted === "id" ? renderArrow() : null } 
             </th > 
             <th onClick = { sortByName } >
            <span style = {
                { marginRight: 10 }
            }> Student Name </span> {
            sorted.sorted === "name" ?
            renderArrow() :
            null
        } </th> 
        <th>
        <span> Email </span> </th> <th>
        <span> Dept </span> </th>


<th onClick = { sortByHoursspent }>
    <span style = {
        { marginRight: 10 }
    } > Hours Spent </span> { 
    sorted.sorted === "Hoursspent" ? renderArrow() : null
} </th> 


<th onClick = { sortByLogincount } >
    <
    span style = {
        { marginRight: 10 }
    } > Login Count </span> {
sorted.sorted === "Logincount" ? renderArrow() : null
} </th> 

        </tr> </thead> <tbody > { renderUsers() } </tbody> 
        </table> 
        </div> 
        </div>
);
}

export default Sort;