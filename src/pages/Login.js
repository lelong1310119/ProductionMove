import "./Login.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
import User from "../Cookie/User";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        if (!data.username.trim()) setError("username", {message: "Bạn chưa nhập tên tài khoản"});
        if (!data.password) setError("password", {message: "Bạn chưa nhập mật khẩu"});
        const response = await Api.login(data);
        if (response.status == 200) {
            let post = response.data;
            console.log(post)
            User.setCookie(post);
            Api.getAuth();
            if (data.user_type === "ADMIN") navigate("/admin/");
            if (data.user_type === "WARRANTY_CENTER") navigate("/warranty/");
            if (data.user_type === "MANUFACTURE_FACTORY") navigate("/factory/");
            if (data.user_type === "DISTRIBUTION_AGENT") navigate("/agent/");
        }
    }

    return (
        <div className="back-login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label><b>Tên tài khoản</b><br/>
                    <input type="text" placeholder="Nhập tên tài khoản" {...register("username", {required: true})}/>
                    {errors.username && <span><br/>{errors.username.message}</span>}
                </label>
                <label><b>Mật khẩu</b><br/>
                    <input type="password" placeholder="Nhập mật khẩu" {...register("password", {required: true})}/>
                    {errors.password && <span><br/>{errors.password.message}</span>}
                </label>
                <label><b>Đăng nhập với</b><br/>
                    <select className="select-login" placeholder="Chọn vai trò" {...register("user_type", {required: true})}>
                        <option value="ADMIN">Ban quản trị</option>
                        <option value="MANUFACTURE_FACTORY">Cơ sở sản xuất</option>
                        <option value="DISTRIBUTION_AGENT">Đại lý phân phối</option>
                        <option value="WARRANTY_CENTER">Trung tâm bảo hành</option>
                    </select>
                    {errors.user_type && <span><br/>{errors.user_type.message}</span>}
                </label>
                <button className="login-button" type="submit">Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login;