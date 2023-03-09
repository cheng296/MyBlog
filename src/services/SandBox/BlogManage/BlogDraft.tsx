import axios from "axios";

export const draftList = () => axios.get('http://localhost:5000/getdraft?state=1')