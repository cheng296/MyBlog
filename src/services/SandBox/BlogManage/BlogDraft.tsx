import axios from "axios";

export const draftList = (user:string|null) => axios.get(`http://localhost:5000/getdraft?state=1&username=${user}`)