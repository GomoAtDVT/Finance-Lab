import express from "express";
import { RegisterUserController } from "../controllers/RegisterUserController.js";
import { LoginUserController } from "../controllers/LoginUserController.js";
import { ViewUserController } from "../controllers/ViewUserController.js";
import { EditUserController } from "../controllers/EditUserController.js";
import { DeleteUserController } from "../controllers/DeleteUserController.js";
import { AddExpenseController } from "../controllers/AddExpenseController.js";
import AuthTokenMiddleware from "../middleware/AuthTokenMiddleware.js";
import { RefreshController } from "../controllers/RefreshController.js";
import { ViewExpensesController } from "../controllers/ViewExpensesController.js";
import { EditExpenseController } from "../controllers/EditExpenseController.js";
import { DeleteExpenseController } from "../controllers/DeleteExpenseController.js";

export const AllRoutes = express.Router();

//endpoint to register a user
AllRoutes.post("/register", RegisterUserController);

//endpoint to login an existing user
AllRoutes.post("/login", LoginUserController);

//endpoint to check out my profile
AllRoutes.get("/user/:id", AuthTokenMiddleware , ViewUserController);

//endpoint to edit my profile
AllRoutes.patch("/user/:id", AuthTokenMiddleware , EditUserController);

//endpoint to delete the entire profile
AllRoutes.delete("/user/:id", AuthTokenMiddleware , DeleteUserController);

//endpoint to add an expense
AllRoutes.post("/expenses", AuthTokenMiddleware , AddExpenseController);

// view all my expenses
AllRoutes.get("/expenses", AuthTokenMiddleware,  ViewExpensesController);

//endpoint to edit an expense
// Note: The endpoint is designed to edit a specific expense by its ID.
AllRoutes.patch("/expenses/:id", AuthTokenMiddleware, EditExpenseController);

//endpoint to delete an expense
AllRoutes.delete("/expenses/:id", AuthTokenMiddleware, DeleteExpenseController);

//endpoint to refresh the access token
AllRoutes.post("/refresh", RefreshController);
// expenses
// goals
 