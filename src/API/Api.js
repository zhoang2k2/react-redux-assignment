import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "@/Redux/Action/FormAction";
import axios from "axios";

// export const GetData = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/accounts");
//     const accounts = response.data;
//     return accounts;
//   } catch (err) {
//     console.error("get data: ", err);
//   }
// };

// export const PostData = async (data: any) => {
//   try {
//     await axios.post("http://localhost:3000/accounts", data);
//     console.log("Succescfully Add New Account");
//   } catch (err) {
//     console.error("Fail to Post", err);
//   }
// };

// export const DeleteData = async (id: string) => {
//   try {
//     await axios.delete(`http://localhost:3000/accounts/${id}`);
//     console.log("Succescfully Delete");
//   } catch (err) {
//     console.error("Fail Delete: ", err);
//   }
// };

// export const PutData = async (id: string, data: any) => {
//   try {
//     await axios.put(`http://localhost:3000/accounts/${id}`, data);
//     console.log("success update");
//   } catch (err) {
//     console.log("fail to update", err);
//   }
// };

export const GetData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const res = await axios.get("http://localhost:3000/accounts");
      dispatch(fetchDataSuccess(res.data));
    } catch (err) {
      dispatch(fetchDataFailure(err));
    }
  };
};
