import { useSafeEffect, useSafeCallback, useIsMounted } from "./useSafe";
import { useConsole } from "./useConsole";
import { useIf } from "./useIf";
import { useLZObject } from "./useLZ";
import { useContextReducer, createSafeCtx } from "./context-utils";
import { useDebounce, useTimeout } from "./misc";

export default function UtilityHooks() {
  return {
    useLZObject,
    useSafeEffect,
    useSafeCallback,
    useIsMounted,
    useConsole,
    useIf,
    useTimeout,
    useDebounce,
    createSafeCtx,
    useContextReducer
  };
}
