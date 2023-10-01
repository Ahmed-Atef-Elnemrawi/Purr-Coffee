import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeesState, coffeesFeature } from "./coffee.feature";

const coffeeSelector = createFeatureSelector<CoffeesState>(coffeesFeatur
