"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./models/user"));
const address_1 = __importDefault(require("./models/address"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const body_parser_1 = __importDefault(require("body-parser"));
// import upload from './middleware/multerMiddleware';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
const port = 4000;
app.use("/", userRoute_1.default);
app.use((0, cors_1.default)({
    origin: "*"
}));
user_1.default.sync().then(() => {
    console.log('Table sync');
});
address_1.default.sync().then(() => {
    console.log('Table sync');
});
database_1.default.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`);
    });
}).catch(err => console.error("Unable to connect to the database:", err));
