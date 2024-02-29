"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/*
*   Clase para funcionalidad de rutas Login
*/
class AuthRoutes {
    // Inicializa
    constructor() {
        this.authRoutes = new AuthRoutes();
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Invocando autenticación');
        });
    }
}
//# sourceMappingURL=authRoutes.js.map