import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function fetchUser(username) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}`);
    return data;
  } catch (err) {
    if (err?.response?.status === 404) throw new Error("User not found");
    throw new Error(err?.message || "Failed to fetch user");
  }
}

export async function fetchUserRepos(username) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}/repos?per_page=100`);
    return data;
  } catch (err) {
    throw new Error(err?.message || "Failed to fetch repositories");
  }
}

export default { fetchUser, fetchUserRepos };
