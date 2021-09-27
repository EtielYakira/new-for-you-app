import { createAction } from "@reduxjs/toolkit"

// API
const API_BEGAN = "api/callBegan";
const API_SUCCESS = "api/callSuccess";
const API_FAILED = "api/callFailed";

export const apiCallBegan = createAction(API_BEGAN)
export const apiCallSuccess = createAction(API_SUCCESS)
export const apiCallFailed = createAction(API_FAILED)

