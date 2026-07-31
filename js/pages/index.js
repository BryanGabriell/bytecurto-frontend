import { storage } from "../utils/storage.js";

const token = storage.obterToken();

if (token) {
    window.location.href = "encurtador.html"; 
}