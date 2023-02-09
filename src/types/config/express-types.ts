import { Request, Response } from "express";
import { IBill } from "../models/bill.types";

/**
 * Express Custom Request.
 */
export interface CustomRequest<T> extends Request {
    bill?: IBill
    body: T
}

/**
 * Express Custom Response.
 */
// tslint:disable-next-line:no-empty-interface
export interface CustomResponse extends Response {
}