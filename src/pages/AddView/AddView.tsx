import React, { useRef, useContext, useState } from "react";
import Card from "../../Component/UI/Card/Card";
import InputText from "../../Component/UI/InputText/InputText";
import { AddModel } from "../EditableLayout/EditableStore/ContextModel";
import EditableContext from "../EditableLayout/EditableStore/editableContext";
import styles from "./AddView.module.scss";

const AddView = () => {
  const ctx = useContext(EditableContext);
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const ageRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const [text, setText] = useState("");

  const addNewHandler = () => {
    setText("");
    let setObj: AddModel = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
    };

    if (
      firstNameRef.current.value !== "" &&
      lastNameRef.current.value !== "" &&
      ageRef.current.value !== "" &&
      emailRef.current.value !== ""
    ) {
      ctx.addRow(setObj);
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      ageRef.current.value = "";
      emailRef.current.value = "";
    } else {
      setText("Please fill all details");
    }
  };

  return (
    <Card>
      <div className={styles.section}>
        <InputText
          name="text"
          ref={firstNameRef}
          label="First Name"
          id="firstName"
        />
      </div>
      <div className={styles.section}>
        <InputText
          name="text"
          ref={lastNameRef}
          label="Last Name"
          id="lastName"
        />
      </div>

      <div className={styles.section}>
        <InputText name="text" ref={ageRef} label="Age" id="age" />
      </div>
      <div className={styles.section}>
        <InputText
          name="text"
          ref={emailRef}
          label="Email Address"
          id="email"
        />
      </div>
      <div className={styles.sectionBtn}>
        <button onClick={addNewHandler}>Add New</button>
        <p>{text}</p>
      </div>
    </Card>
  );
};

export default AddView;
