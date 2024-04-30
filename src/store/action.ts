import { createAction } from '@reduxjs/toolkit';
import { Actions, AppRoute } from '../const/const';

export const redirectToRoute = createAction<AppRoute>(Actions.REDIRECT_ROUTE);
