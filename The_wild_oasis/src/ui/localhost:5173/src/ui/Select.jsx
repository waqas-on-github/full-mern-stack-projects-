import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/ui/Select.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9c1d0468"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/waqas/Desktop/full-mern-stack-projects-/The_wild_oasis/src/ui/Select.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import styled from "/node_modules/.vite/deps/styled-components.js?v=9c1d0468";
const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) => props.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
_c = StyledSelect;
function Select({
  options,
  value,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(StyledSelect, { value, onChange, ...props, children: options?.map((option) => /* @__PURE__ */ jsxDEV("option", { value: option.value, children: option.label }, option.value, false, {
    fileName: "/home/waqas/Desktop/full-mern-stack-projects-/The_wild_oasis/src/ui/Select.jsx",
    lineNumber: 21,
    columnNumber: 31
  }, this)) }, void 0, false, {
    fileName: "/home/waqas/Desktop/full-mern-stack-projects-/The_wild_oasis/src/ui/Select.jsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
_c2 = Select;
export default Select;
var _c, _c2;
$RefreshReg$(_c, "StyledSelect");
$RefreshReg$(_c2, "Select");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/waqas/Desktop/full-mern-stack-projects-/The_wild_oasis/src/ui/Select.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJRO0FBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BQU9BLFlBQVk7QUFFbkIsTUFBTUMsZUFBZUQsT0FBT0U7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsTUFJckJDLFdBQ0RBLE1BQU1DLFNBQVMsVUFDWCwwQkFDQSx1QkFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2hDQyxLQVpJSjtBQWNOLFNBQVNLLE9BQU87QUFBQSxFQUFFQztBQUFBQSxFQUFTQztBQUFBQSxFQUFPQztBQUFBQSxFQUFVLEdBQUdOO0FBQU0sR0FBRztBQUN0RCxTQUNFLHVCQUFDLGdCQUFhLE9BQWMsVUFBb0IsR0FBSUEsT0FDakRJLG1CQUFTRyxJQUFLQyxZQUNiLHVCQUFDLFlBQU8sT0FBT0EsT0FBT0gsT0FDbkJHLGlCQUFPQyxTQUR3QkQsT0FBT0gsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLENBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUE7QUFFSjtBQUFDSyxNQVZRUDtBQVlULGVBQWVBO0FBQU8sSUFBQUQsSUFBQVE7QUFBQUMsYUFBQVQsSUFBQTtBQUFBUyxhQUFBRCxLQUFBIiwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkU2VsZWN0Iiwic2VsZWN0IiwicHJvcHMiLCJ0eXBlIiwiX2MiLCJTZWxlY3QiLCJvcHRpb25zIiwidmFsdWUiLCJvbkNoYW5nZSIsIm1hcCIsIm9wdGlvbiIsImxhYmVsIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiU2VsZWN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMC44cmVtIDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLnR5cGUgPT09IFwid2hpdGVcIlxuICAgICAgICA/IFwidmFyKC0tY29sb3ItZ3JleS0xMDApXCJcbiAgICAgICAgOiBcInZhcigtLWNvbG9yLWdyZXktMzAwKVwifTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXktMCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5gO1xuXG5mdW5jdGlvbiBTZWxlY3QoeyBvcHRpb25zLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VsZWN0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ucHJvcHN9PlxuICAgICAge29wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9TdHlsZWRTZWxlY3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiJdLCJmaWxlIjoiL2hvbWUvd2FxYXMvRGVza3RvcC9mdWxsLW1lcm4tc3RhY2stcHJvamVjdHMtL1RoZV93aWxkX29hc2lzL3NyYy91aS9TZWxlY3QuanN4In0=