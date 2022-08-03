import loginUserService from "../services/login/loginUser.service.js";

class LoginController {
  store(request, response) {
    const { email, password } = request.body;

    try {
      const loginUser = loginUserService(email, password);

      return response.status(200).json(loginUser);
    } catch (err) {
      return response
        .status(400)
        .json({ status: "error", message: err.message });
    }
  }
}

export default LoginController;
