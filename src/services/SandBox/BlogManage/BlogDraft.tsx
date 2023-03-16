import axios from "axios";

export const draftList = (user:string|null) => axios.get(`/getdraft?state=1&username=${user}`)