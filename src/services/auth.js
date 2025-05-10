import API from "./_app";

const login = async (username, password) => {
  try {
    const response = await API.post("/api/public/login", {
      username,
      password,
    });

    // Simpan token di sessionStorage
    sessionStorage.setItem("accessToken", response.data.data.accessToken);
    // sessionStorage.setItem("refreshToken", response.data.data.refreshToken);

    return response.data; // Kembalikan data user dan token
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Bisa ditangani di komponen
  }
};

const register = async (username, password, email) => {
  try {
    const response = await API.post("/api/public/register", {
      username,
      password,
      email,
    });

    return response.data; // Data pengguna yang sudah terdaftar
  } catch (error) {
    console.error("Register error:", error);
    throw error; // Bisa ditangani di komponen
  }
};


export {
    login,
    register
}