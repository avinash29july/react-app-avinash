import React, {useRef, useState} from 'react';
import { DATA } from '../table/makeData';
import TableComponent from '../table/TableComponent';
import './add.css';

const AddComponent = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();
    const [tableData, setTableData] = useState(DATA);
    
    const [addData, setAddData]= useState({});

    const addHandler = () => {
        let postData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            age: ageRef.current.value
        } 
        setAddData(postData);
        console.log(postData);
    }
    return(
        <>
            <label>First Name</label>   
            <input type="text" ref={firstNameRef} name="firstName" />
            <label>Last Name</label>
            <input type="text" ref={lastNameRef} name="lastName" />
            <label>Age</label>
            <input type="text" ref={ageRef} name="age" />
            <button onClick={addHandler}>Add</button>
            <br/>
            <br/>
            <TableComponent addData={addData} tableData={tableData}/>
        </>
    );
}
export default AddComponent;