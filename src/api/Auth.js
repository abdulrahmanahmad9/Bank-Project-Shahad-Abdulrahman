import instance from ".";
import { removeToken } from "./Storge";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/Auth/login",
      userInfo
    );
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  removeToken();
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post(
      "/mini-project/api/Auth/register",
      formData
    );
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/Auth/register",
    formData
  );
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/A uth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/Auth/users");
  return data;
};

export { login, register, me, getAllUsers, storeToken, logout };
