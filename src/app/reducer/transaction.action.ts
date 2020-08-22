import { Action } from "@ngrx/store";

export const CHANGE_PLAN = '[Change Plan] Type plan';

export class ChangePlan implements Action {
  readonly type = CHANGE_PLAN;

  constructor(public payload: { plan: string }) {}
}

export type TransactionAction = ChangePlan;
