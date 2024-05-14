import { NextFunction, Request, Response } from "express";
import { createOrderValidator, getOrderPriceValidator, updateOrderValidator } from "../../utility/validators/order";

export const validateCreateOrder = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    createOrderValidator
        .validate(req.body, { abortEarly: false })
        .then(() => {
            next();
        })
        .catch((errors) => {
            next(errors);
        });
};

export const validateGetOrderPrice = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    getOrderPriceValidator
        .validate(req.query, { abortEarly: false })
        .then(() => {
            next();
        })
        .catch((errors) => {
            next(errors);
        });
};

export const validateUpdateOrder = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    updateOrderValidator
        .validate(req.body, { abortEarly: false })
        .then(() => {
            next();
        })
        .catch((errors) => {
            next(errors);
        });
};