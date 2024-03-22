import { useDispatch } from "react-redux";
import AddBtn from "./components/AddBtn/AddBtn";
import Table from "./components/Table/Table";
import { closeFormAction, showFormAction } from "../../Redux/Action/FormAction";
// import { useEffect } from "react";
// import { GetData } from "../../API/Api";

const Admin = () => {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(showFormAction());
  };

  const closeModal = () => {
    dispatch(closeFormAction());
  };

  // useEffect(() => {
  //   dispatch(GetData());
  // }, []);

  return (
    <div className="container-fluid">
      <AddBtn showModal={showModal} closeModal={closeModal} />
      <Table />
    </div>
  );
};

export default Admin;
