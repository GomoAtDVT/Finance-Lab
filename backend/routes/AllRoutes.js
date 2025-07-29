import express from "express";
import { RegisterUserController } from "../controllers/RegisterUserController.js";
import { LoginUserController } from "../controllers/LoginUserController.js";
import { ViewUserController } from "../controllers/ViewUserController.js";
import { EditUserController } from "../controllers/EditUserController.js";
import { DeleteUserController } from "../controllers/DeleteUserController.js";
import { AddTransactionController } from "../controllers/AddTransactionController.js";
import AuthTokenMiddleware from "../middleware/AuthTokenMiddleware.js";
import { RefreshController } from "../controllers/RefreshController.js";
import { ViewTransactionsController, ViewTransactionsIncomeController, ViewTransactionsExpenseController } from "../controllers/ViewTransactionsController.js";
import { EditTransactionController } from "../controllers/EditTransactionController.js";
import { DeleteTransactionController } from "../controllers/DeleteTransactionController.js";

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
AllRoutes.post("/transactions/expenses", AuthTokenMiddleware , AddTransactionController);

//endpoint to add an income
AllRoutes.post("/transactions/incomes", AuthTokenMiddleware , AddTransactionController);

//endpoint to view all transactions
// Note: This endpoint is designed to retrieve all transactions for the authenticated user.
AllRoutes.get("/transactions", AuthTokenMiddleware,  ViewTransactionsController);

// view all my expenses
AllRoutes.get("/transactions/expenses", AuthTokenMiddleware,  ViewTransactionsExpenseController);

// view all my incomes
AllRoutes.get("/transactions/incomes", AuthTokenMiddleware,  ViewTransactionsIncomeController);

//endpoint to edit an expense
// Note: The endpoint is designed to edit a specific expense by its ID.
AllRoutes.patch("/transactions/:id", AuthTokenMiddleware, EditTransactionController);

//endpoint to delete an expense
AllRoutes.delete("/transactions/:id", AuthTokenMiddleware, DeleteTransactionController);

//endpoint to refresh the access token
AllRoutes.post("/refresh", RefreshController);

// goals
 