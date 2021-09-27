import { createAction } from "@reduxjs/toolkit"

// ARTICLES
const ARTICLE_ADDED = "articleAdded"
const ARTICLE_REMOVED = "articleRemoved"

export const articleAdded = createAction(ARTICLE_ADDED);
export const articleRemoved = createAction(ARTICLE_REMOVED);

// API
const API_BEGAN = "api/callBegan";
const API_SUCCESS = "api/callSuccess";
const API_FAILED = "api/callFailed";

export const apiCallBegan = createAction(API_BEGAN)
export const apiCallSuccess = createAction(API_SUCCESS)
export const apiCallFailed = createAction(API_FAILED)

