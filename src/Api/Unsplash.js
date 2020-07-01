import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -5fJteBOE7sEpGScuxGnF7gvg96Gl6hyPiLDXbR26hs",
  },
});
