import { c as create_ssr_component, d as compute_rest_props, a as setContext, f as spread, h as escape_object, i as escape_attribute_value, j as add_attribute, k as is_void, n as noop, g as getContext, e as escape, v as validate_component, l as compute_slots, o as createEventDispatcher, p as each } from "../../chunks/index.js";
import classNames from "classnames";
function getOptions() {
  const requestOptions = {
    method: "GET",
    headers: {
      "x-ytm-cookie": localStorage.getItem("x-ytm-cookie"),
      "x-ytm-user": localStorage.getItem("x-ytm-user") || 0
    }
  };
  return requestOptions;
}
function postOptions(data) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "x-ytm-cookie": localStorage.getItem("x-ytm-cookie"),
      "x-ytm-user": localStorage.getItem("x-ytm-user") || 0
    }
  };
  return requestOptions;
}
async function createPlaylist(title) {
  const response = await fetch(`/api/playlists/create`, postOptions({ title }));
  const data = await response.json();
  return data;
}
async function addTracksToPlaylist(playlistId, videoIds) {
  const response = await fetch(`/api/playlists/add`, postOptions({ playlistId, videoIds }));
  const data = await response.json();
  return data;
}
async function getPlaylists() {
  try {
    const response = await fetch("/api/playlists", getOptions());
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
async function getTracks(playlistId) {
  const response = await fetch(`/api/tracks/${playlistId}`, getOptions());
  const data = await response.json();
  return data;
}
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options"
  ]);
  setContext("background", true);
  let { tag = "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800",
    red: "border-red-300 dark:border-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800",
    green: "border-green-300 dark:border-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800",
    purple: "border-purple-300 dark:border-purple-800",
    pink: "border-pink-300 dark:border-pink-800",
    blue: "border-blue-300 dark:border-blue-800",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:bg-primary-200 ",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  {
    setContext("color", color);
  }
  divClass = classNames(bgColors[color], textColors[color], rounded && (color === "dropdown" ? "rounded" : "rounded-lg"), border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",
    default: "focus:ring-gray-400 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  buttonClass = classNames(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="${"sr-only"}">${escape(name)}</span>` : ``}
  ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name }, $$restProps, {
      class: classNames("ml-auto", $$props.class)
    }),
    {},
    {
      default: ({ svgSize }) => {
        return `<svg${add_attribute("class", svgSize, 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`;
      }
    }
  )}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { gradient = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { btnClass = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { shadow = null } = $$props;
  const colorClasses = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    alternative: "text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  };
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
  };
  const outlineClasses = {
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  function rounded(gradientOutline = false) {
    if (group) {
      return pill ? "first:rounded-l-full last:rounded-r-full" : gradientOutline ? "first:rounded-l-md last:rounded-r-md" : "first:rounded-l-lg last:rounded-r-lg";
    }
    return pill ? "rounded-full" : gradientOutline ? "rounded-md" : "rounded-lg";
  }
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  let gradientOutlineClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = btnClass ? btnClass : classNames(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    outline && gradient ? "p-0.5" : "inline-flex items-center justify-center " + sizeClasses[size],
    gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    hasBorder() && group && "border-l-0 first:border-l",
    rounded(false),
    shadow && coloredShadowClasses[shadow],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit");
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${outline && gradient ? `
    <span${add_attribute("class", gradientOutlineClass, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${slots.default ? slots.default({}) : ``}`}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-4" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = "" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => classNames(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = classNames(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? classNames("block w-full", "text-sm", "border-0 px-0", "bg-inherit dark:bg-inherit", "focus:outline-none focus:ring-0") : classNames(wrapperClass, "p-2.5 text-sm", "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");
  innerWrapperClass = classNames("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer || "rounded-b-lg", $$slots.header || "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${value || ""}</textarea>`;
        }
      })}
  ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })}`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "size", "placement", "autoclose", "permanent", "backdropClasses"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClasses = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClasses === void 0 && $$bindings.backdropClasses && backdropClasses !== void 0)
    $$bindings.backdropClasses(backdropClasses);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = classNames("relative flex flex-col mx-auto", $$props.class);
  return `${open ? `
  <div${add_attribute("class", classNames("fixed inset-0 z-40", backdropClasses), 0)}></div>
  
  <div${add_attribute("class", classNames("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="${"-1"}" aria-modal="${"true"}" role="${"dialog"}"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}">
      ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return `
        ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : `
              <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3>
            `}
            ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}
        
        <div id="${"modal"}" class="${"p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"}">${slots.default ? slots.default({}) : ``}</div>
        
        ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``}`;
});
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["progress", "size", "labelInside", "labelOutside", "color", "labelInsideClass"]);
  let { progress = "45" } = $$props;
  let { size = "h-2.5" } = $$props;
  let { labelInside = false } = $$props;
  let { labelOutside = "" } = $$props;
  let { color = "blue" } = $$props;
  let { labelInsideClass = "text-blue-100 text-xs font-medium text-center p-0.5 leading-none rounded-full" } = $$props;
  const barColors = {
    blue: "bg-blue-600",
    gray: "bg-gray-600 dark:bg-gray-300",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600 dark:bg-purple-500",
    indigo: "bg-indigo-600 dark:bg-indigo-500"
  };
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.labelInside === void 0 && $$bindings.labelInside && labelInside !== void 0)
    $$bindings.labelInside(labelInside);
  if ($$props.labelOutside === void 0 && $$bindings.labelOutside && labelOutside !== void 0)
    $$bindings.labelOutside(labelOutside);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.labelInsideClass === void 0 && $$bindings.labelInsideClass && labelInsideClass !== void 0)
    $$bindings.labelInsideClass(labelInsideClass);
  return `${labelOutside ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("flex justify-between mb-1", $$props.class))
      }
    ],
    {}
  )}><span class="${"text-base font-medium text-blue-700 dark:text-white"}">${escape(labelOutside)}</span>
    <span class="${"text-sm font-medium text-blue-700 dark:text-white"}">${escape(progress)}%</span></div>` : ``}
<div${add_attribute("class", classNames("w-full bg-gray-200 rounded-full dark:bg-gray-700", size, $$props.class), 0)}>${labelInside ? `<div${add_attribute("class", classNames(labelInsideClass, barColors[color]), 0)} style="${"width: " + escape(progress, true) + "%"}">${escape(progress)}%
    </div>` : `<div${add_attribute("class", classNames(barColors[color], size, "rounded-full"), 0)} style="${"width: " + escape(progress, true) + "%"}"></div>`}</div>`;
});
const LoginModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.tag.svelte-t2w9r{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;background-color:#ddd;border-radius:3px;display:inline-block;padding:0 8px;font-weight:700}a.svelte-t2w9r{color:#1A56DB}',
  map: null
};
const LoginModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { onLogin = () => {
  } } = $$props;
  let authUser;
  let cookie;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onLogin === void 0 && $$bindings.onLogin && onLogin !== void 0)
    $$bindings.onLogin(onLogin);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Login", autoclose: true, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Login`;
            }
          })}
		${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Nevermind`;
            }
          })}
	`;
        },
        default: () => {
          return `<p>Sorry, this is super annoying, but it&#39;s the only way we could get this to work
		without bumping into Google&#39;s usage limits.
		<strong>We do not store authentication information</strong>. All login credentials are stored only in your
		browser&#39;s localStoage. For extra safety, consider downloading and running this
		application locally.
	</p>

	<p class="${"text-base leading-relaxed text-gray-500 dark:text-gray-400"}">Open  <a target="${"_blank"}" href="${"https://music.youtube.com"}" rel="${"noreferrer"}" class="${"svelte-t2w9r"}">https://music.youtube.com</a> in another tab.
		If you are not already logged in to YouTube Music, log in.
	</p>

	<p class="${"text-base leading-relaxed text-gray-500 dark:text-gray-400"}">Open developer tools and go to the <span class="${"tag svelte-t2w9r"}">Network</span> tab.
		Look for a URL that starts with <span class="${"tag svelte-t2w9r"}">browse</span>.
		Click the <span class="${"tag svelte-t2w9r"}">Headers</span> subtab and under
		Request Headers copy/paste the value for <span class="${"tag svelte-t2w9r"}">Cookie:</span>
		below. See
		<a href="${"https://mkyong.com/computer-tips/how-to-view-http-headers-in-google-chrome/"}" class="${"svelte-t2w9r"}">here</a>
		for more information.
	</p>

	${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              placeholder: "Cookie value from YouTube Music",
              rows: "6",
              value: cookie
            },
            {
              value: ($$value) => {
                cookie = $$value;
                $$settled = false;
              }
            },
            {}
          )}

	<p class="${"text-base leading-relaxed text-gray-500 dark:text-gray-400"}">Continuing to look at the Request Headers, look for the value associated
		with <span class="${"tag svelte-t2w9r"}">x-google-authuser</span>. Enter that value below.
	</p>

	${validate_component(Input, "Input").$$render($$result, {}, {}, {
            left: ({ props }) => {
              return `<div slot="${"left"}">#</div>`;
            },
            default: ({ props }) => {
              return `<input${spread(
                [
                  { type: "number" },
                  escape_object(props),
                  { placeholder: "x-goog-authuser" }
                ],
                { classes: "svelte-t2w9r" }
              )}${add_attribute("value", authUser, 0)}>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AboutModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { onClose = () => {
  } } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "About",
        autoclose: true,
        class: "w-96",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `OK`;
            }
          })}
	`;
        },
        default: () => {
          return `<p>I wanted a project to try out SvelteKit and I also
		wanted to be able to randomly shuffle and save a
		playlist to YouTube Music, so, I made this!
	</p>
	<p><strong>Usage:</strong> Click playlist, click shuffle button, click save button.
		You can also click playlist headers to sort.
	</p>
	<p><strong>Data Collection Policy:</strong> We do not collect
		any data. All storage is done via the browser&#39;s localStoage.
	</p>
	<p><strong>Disclaimer:</strong> I make absolutely no guarantees of how well this
		will work for you. Use at your own risk.
	</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { queue = [] } = $$props;
  let { index = 0 } = $$props;
  let { onPlay = (track) => {
  } } = $$props;
  let trackTime = "";
  let trackLength = "";
  let trackPosition = 0;
  function getTimes() {
  }
  setInterval(getTimes, 1e3);
  if ($$props.queue === void 0 && $$bindings.queue && queue !== void 0)
    $$bindings.queue(queue);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.onPlay === void 0 && $$bindings.onPlay && onPlay !== void 0)
    $$bindings.onPlay(onPlay);
  return `<div class="${"sticky bottom-0 h-16 min-h-16 border-t-gray-400 p-2"}" style="${"border-top-width: 1px; border-top-style: solid"}"><div class="${"flex flex-row items-center"}"><div class="${"px-4 w-16 inline-block h-6"}">${escape(trackTime)}</div>
		<div class="${"flex-grow"}">${validate_component(Progressbar, "Progressbar").$$render($$result, { progress: trackPosition, size: "h-1.5" }, {}, {})}</div>
		<div class="${"px-4 w-16 inline-block h-6"}">${escape(trackLength)}</div></div>
	<div class="${"flex flex-row justify-between items-center"}"><div id="${"player-controls"}"><button id="${"play-prev"}" class="${"inline-block px-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1);"}"><path d="${"m16 7-7 5 7 5zm-7 5V7H7v10h2z"}"></path></svg></button>
			${`<button id="${"play-button"}" class="${"inline-block px-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1);"}"><path d="${"M7 6v12l10-6z"}"></path></svg></button>`}
			<button id="${"play-next"}" class="${"inline-block px-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1);"}"><path d="${"M7 7v10l7-5zm9 10V7h-2v10z"}"></path></svg></button></div>
		${queue[index]?.title ? `<div id="${"track-info"}" class="${"text-center"}">${escape(queue[index].title)}
				${queue[index].artists && queue[index].artists.length > 0 ? `•
					${escape(queue[index].artists[0].name)}` : ``}</div>` : ``}
		<div id="${"player-options"}"></div></div></div>
<div id="${"player"}" class="${"hidden"}"></div>`;
});
const SaveModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { onSave = () => {
  } } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let playlistName;
  let inputRef;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0)
    $$bindings.onSave(onSave);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Playlist Name",
        autoclose: true,
        class: "w-96",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Create Playlist`;
            }
          })}
		${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Nevermind`;
            }
          })}
	`;
        },
        default: () => {
          return `<p>Enter a name for your new playlist:
	</p>

	${validate_component(Input, "Input").$$render($$result, {}, {}, {
            default: ({ props }) => {
              return `<input${spread([escape_object(props), { placeholder: "Playlist Name" }], {})}${add_attribute("this", inputRef, 0)}${add_attribute("value", playlistName, 0)}>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const styles = "";
const Tracks_svelte_svelte_type_style_lang = "";
const css = {
  code: "th.svelte-a3tp3g.svelte-a3tp3g,td.svelte-a3tp3g.svelte-a3tp3g{text-align:left;margin-top:8px;line-height:24px;color:#eee}td.duration.svelte-a3tp3g.svelte-a3tp3g,th.duration.svelte-a3tp3g.svelte-a3tp3g{text-align:right}th.svelte-a3tp3g.svelte-a3tp3g{margin-top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}td.svelte-a3tp3g.svelte-a3tp3g{cursor:pointer}tr.playing.svelte-a3tp3g td.svelte-a3tp3g{font-weight:bold;background-color:rgba(255, 255, 255, .05)}:root{--svooltip-bg:blue}",
  map: null
};
const Tracks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tracks = [] } = $$props;
  let { currentTrack = {} } = $$props;
  let { onSelect = (tracks2, idx) => {
  } } = $$props;
  let saveModal = false;
  async function savePlaylist(name) {
    saveModal = false;
    if (name) {
      const playlist = await createPlaylist(name);
      const ids = tracks.map((track) => track.id);
      const chunkSize = 100;
      for (let i = 0; i < ids.length; i += chunkSize) {
        const chunk = ids.slice(i, i + chunkSize);
        await addTracksToPlaylist(playlist.id, chunk);
      }
    }
  }
  if ($$props.tracks === void 0 && $$bindings.tracks && tracks !== void 0)
    $$bindings.tracks(tracks);
  if ($$props.currentTrack === void 0 && $$bindings.currentTrack && currentTrack !== void 0)
    $$bindings.currentTrack(currentTrack);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
    $$bindings.onSelect(onSelect);
  $$result.css.add(css);
  return `${validate_component(SaveModal, "SaveModal").$$render(
    $$result,
    {
      open: saveModal,
      onCancel: () => saveModal = false,
      onSave: (playlistName) => savePlaylist(playlistName)
    },
    {},
    {}
  )}

<div class="${"h-full max-h-full flex-grow overflow-auto scroller p-2"}">${tracks.length > 0 ? `<div class="${"flex flex-row mb-4 w-100 justify-start gap-4 ml-6"}"><button id="${"shuffle-playlist"}"><svg alt="${"Shuffle Playlist"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1)"}"><path d="${"M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"}"></path><path d="${"M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"}"></path></svg></button>

			<button id="${"save-playlist"}"><svg alt="${"Save Playlist"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1)"}"><path d="${"M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"}"></path></svg></button></div>
		<table class="${"w-full"}"><thead><tr><th class="${"w-6 svelte-a3tp3g"}"></th>
					<th class="${"svelte-a3tp3g"}">Title </th>
					<th class="${"svelte-a3tp3g"}">Artist </th>
					<th class="${"svelte-a3tp3g"}">Album </th>
					<th class="${"svelte-a3tp3g"}"></th>
					<th class="${"duration svelte-a3tp3g"}">Duration </th></tr></thead>
			<tbody>${each(tracks, (track, idx) => {
    return `<tr class="${["svelte-a3tp3g", currentTrack.id === track.id ? "playing" : ""].join(" ").trim()}"><td class="${"w-6 svelte-a3tp3g"}">${currentTrack.id === track.id ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" style="${"fill: rgba(244, 244, 244, 1);"}"><path d="${"M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"}"></path><path d="${"M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"}"></path></svg>` : ``}</td>
						<td class="${"align-text-top svelte-a3tp3g"}">${escape(track.title)}</td>
						${track.artists.length > 0 ? `<td class="${"align-text-top svelte-a3tp3g"}">${escape(track.artists[0].name)}</td>` : `<td class="${"svelte-a3tp3g"}"></td>`}
						${track.album ? `<td class="${"align-text-top svelte-a3tp3g"}">${escape(track.album.name)}</td>` : `<td class="${"svelte-a3tp3g"}"></td>`}

						${track.likeStatus === "LIKE" ? `<td class="${"svelte-a3tp3g"}"><svg class="${"w-6 h-6 fill-gray-100 stroke-gray-100"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"}"></path></svg>
							</td>` : `${track.likeStatus === "DISLIKE" ? `<td class="${"svelte-a3tp3g"}"><svg class="${"w-6 h-6 fill-gray-100 stroke-gray-100"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"}"></path></svg>
							</td>` : `<td class="${"svelte-a3tp3g"}"></td>`}`}

						<td class="${"duration svelte-a3tp3g"}">${escape(track.duration)}</td>
					</tr>`;
  })}</tbody></table>` : ``}</div>`;
});
const Playlists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lists = [] } = $$props;
  let { onSelect = () => {
  } } = $$props;
  if ($$props.lists === void 0 && $$bindings.lists && lists !== void 0)
    $$bindings.lists(lists);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
    $$bindings.onSelect(onSelect);
  return `<div class="${"h-full w-72 p-2 max-h-full"}"><div class="${"text-xl"}">Playlists</div>

	${each(lists, (list) => {
    return `<button class="${"block h-6 mt-2"}">${escape(list.title)}</button>`;
  })}</div>`;
});
const Mixer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loginModal = false;
  let aboutModal = false;
  let playlists = [];
  let tracks = [];
  let currentTrack = {};
  let playIndex;
  async function loadPlaylists() {
    loginModal = false;
    playlists = await getPlaylists();
    if (playlists.error) {
      playlists = [];
      loginModal = true;
    }
  }
  async function loadPlaylist(id) {
    const playlist = await getTracks(id);
    playlist.name;
    tracks = playlist.tracks;
    tracks = tracks.map((track) => {
      const split = track.duration.split(":");
      const seconds = split[0] * 60 + split[1];
      return { ...track, seconds };
    });
  }
  return `${validate_component(LoginModal, "LoginModal").$$render(
    $$result,
    {
      open: loginModal,
      onLogin: () => loadPlaylists()
    },
    {},
    {}
  )}
${validate_component(AboutModal, "AboutModal").$$render(
    $$result,
    {
      open: aboutModal,
      onClose: () => aboutModal = false
    },
    {},
    {}
  )}

<div class="${"flex flex-col w-screen h-screen"}"><header class="${"h-12 flex-shrink-0 pl-2"}" style="${"line-height: 3rem; background-color: rgba(255, 255, 255, 0.05"}"><div class="${"flex flex-row justify-between"}"><div>YouTube Music Mixer</div>
			<button class="${"mr-12"}">About</button></div></header>
	<div class="${"flex flex-row flex-grow"}" style="${"max-height: calc(100vh - 112px)"}">${validate_component(Playlists, "Playlists").$$render(
    $$result,
    {
      lists: playlists,
      onSelect: (id) => loadPlaylist(id)
    },
    {},
    {}
  )}
		${validate_component(Tracks, "Tracks").$$render(
    $$result,
    {
      tracks,
      currentTrack,
      onSelect: (list, idx) => {
        tracks = list;
        playIndex = idx;
      }
    },
    {},
    {}
  )}</div>
	<footer class="${"flex-shrink-0"}">${validate_component(Player, "Player").$$render(
    $$result,
    {
      queue: [...tracks],
      index: playIndex,
      onPlay: (track) => currentTrack = track
    },
    {},
    {}
  )}</footer></div>

${$$result.head += `<!-- HEAD_svelte-uqb4l9_START --><script src="${"https://www.youtube.com/iframe_api"}"><\/script><!-- HEAD_svelte-uqb4l9_END -->`, ""}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mixer, "Mixer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
