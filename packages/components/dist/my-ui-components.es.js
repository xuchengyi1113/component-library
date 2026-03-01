import { defineComponent as u, openBlock as c, createElementBlock as i, normalizeClass as r, unref as s, renderSlot as f, createTextVNode as m } from "vue";
const b = "my", p = (t) => {
  const e = () => `${b}-${t}`;
  return { b: e, e: (n) => n ? `${e()}__${n}` : "", m: (n) => n ? `${e()}--${n}` : "", is: (n, d) => d ? `is-${n}` : "" };
}, y = ["disabled"], $ = /* @__PURE__ */ u({
  name: "MyButton",
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = p("btn");
    return (a, o) => (c(), i("button", {
      class: r([
        s(e).b(),
        s(e).m(t.type),
        s(e).m(t.size),
        s(e).is("disabled", t.disabled),
        s(e).is("plain", t.plain),
        s(e).is("round", t.round)
      ]),
      disabled: t.disabled
    }, [
      f(a.$slots, "default", {}, () => [
        o[0] || (o[0] = m("默认按钮", -1))
      ], !0)
    ], 10, y));
  }
}), B = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, l] of e)
    a[o] = l;
  return a;
}, v = /* @__PURE__ */ B($, [["__scopeId", "data-v-20969ae3"]]);
export {
  v as MyButton
};
