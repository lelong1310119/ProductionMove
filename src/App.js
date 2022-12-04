
import './App.css';
import Admin from './pages/Admin';
import WarrantyCenter from './pages/WarrantyCenter';
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  // const [login, setLogin] = useState("LOGIN")
  // const baseURL = "https://production-move-be.vercel.app/api/login"
  // const { register, handleSubmit, setError, formState: { errors } } = useForm();
  // const onSubmit = data => { 
  //   console.log(JSON.stringify(data))
  //       axios.post(baseURL, data).then((response) => {
  //           console.log(response);
  //           if (response.status == 200) setLogin(data.user_type);
  //       });
  // }
  // if (login === "LOGIN") return (
  //   <div>
  //     <form className="form-send" onSubmit={handleSubmit(onSubmit)}>
  //       <label><b>Mã sản phẩm</b><br/>
  //         <input type="text" placeholder="Nhập tên tài khoản" {...register("username", {required: true})}/>
  //         {errors.username && <span><br/>Bạn chưa nhập mã sản phẩm</span>}
  //       </label>
  //       <label><b>Ngày gửi trả</b><br/>
  //         <input type="password" placeholder="Nhập mật khẩu" {...register("password", {required: true})}/>
  //         {errors.password && <span><br/>Bạn chưa nhập ngày gửi trả</span>}
  //       </label>
  //       <label for="cars">Vai trò:</label>
  //       <select size="1" {...register("user_type", {required: true})}>
  //         <option value="ADMIN">ADMIN</option>
  //         <option value="MANUFACTURE_FACTORY">MANUFACTURE_FACTORY</option>
  //       </select>
  //       {errors.user_type && <span><br/>Bạn chưa chọn vai trò</span>}
  //       <button className="save-send" type="submit">Đăng nhập</button>
  //     </form>
  //   </div>
  // )

  // if (login == "ADMIN") return (
  //   <Admin />
  // )

  // if (login == "MANUFACTURE_FACTORY") return (
  //   <WarrantyCenter />
  // )
  return (
    <Admin />
  )
}

export default App;