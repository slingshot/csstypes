/**
 * Represents the CSS var() function, which allows for the usage of CSS custom properties.
 */
export type VarValue = `var(${string})`;

/**
 * Represents the CSS calc() function, which allows for computations with CSS values.
 */
export type CalcValue = `calc(${string})`;

/**
 * Represents the CSS min() function, which takes a list of lengths and returns the smallest.
 */
export type MinValue = `min(${string})`;

/**
 * Represents the CSS max() function, which takes a list of lengths and returns the largest.
 */
export type MaxValue = `max(${string})`;

/**
 * Represents the CSS clamp() function, which clamps a value between an upper and lower bound.
 */
export type ClampValue = `clamp(${string})`;


/**
 * Pixel unit. One pixel represents a single point on the screen.
 */
export type PixelSize = `${number}px`;

/**
 * Root em unit. It is relative to the root element's font-size.
 */
export type RemSize = `${number}rem`;

/**
 * Em unit. It is relative to the parent element's font-size.
 */
export type EmSize = `${number}em`;

/**
 * Percentage unit. It is relative to the parent element's size.
 */
export type PercentageSize = `${number}%`;

/**
 * Viewport width unit. A percentage of the total width of the viewport.
 */
export type ViewportWidthSize = `${number}vw`;

/**
 * Viewport height unit. A percentage of the total height of the viewport.
 */
export type ViewportHeightSize = `${number}vh`;

/**
 * Point unit. A point is traditionally a typographic unit of measurement.
 */
export type PointSize = `${number}pt`;

/**
 * Pica unit. One pica is approximately 1/6th of an inch.
 */
export type PicaSize = `${number}pc`;

/**
 * Ex unit. It is typically the height of the letter 'x'.
 */
export type ExSize = `${number}ex`;

/**
 * Cap unit. It is typically the height of a capital letter.
 */
export type CapSize = `${number}cap`;

/**
 * Ch unit. It is typically the width of the number 0 of the current font in pixels.
 */
export type ChSize = `${number}ch`;

/**
 * Ic unit. It is typically the width of a CJK character of the current font in pixels.
 */
export type IcSize = `${number}ic`;

/**
 * Line height unit. It is relative to the current element's line height.
 */
export type LhSize = `${number}lh`;

/**
 * Root line height unit. It is relative to the root element's line height.
 */
export type RlhSize = `${number}rlh`;

/**
 * Viewport height unit. A percentage of the total height of the viewport.
 */
export type VhSize = `${number}vh`;

/**
 * Viewport minimum unit. It represents the smaller dimension of the viewport.
 */
export type VminSize = `${number}vmin`;

/**
 * Viewport maximum unit. It represents the larger dimension of the viewport.
 */
export type VmaxSize = `${number}vmax`;

/**
 * Quarter-millimeter unit. One Q is equal to 0.25 millimeters.
 */
export type QSize = `${number}Q`;

/**
 * Centimeter unit. A physical unit of length.
 */
export type CentimeterSize = `${number}cm`;

/**
 * Millimeter unit. A physical unit of length.
 */
export type MillimeterSize = `${number}mm`;

/**
 * Inch unit. A physical unit of length, typically used in the United States.
 */
export type InchSize = `${number}in`;

/**
 * Named color. Represent a color using a predefined or standard color name.
 */
export type NamedColor = "aqua" | "black" | "blue" | "fuchsia" | "gray" | "green" | "lime" | "maroon" | "navy" | "olive" | "purple" | "red" | "silver" | "teal" | "white" | "yellow" | string; // string added for all named colors

/**
 * Hexadecimal color. Represent a color using hexadecimal values.
 */
export type HexColor = `#${string}`;

/**
 * Hexadecimal color with alpha. Represent a color using hexadecimal values, including alpha transparency.
 */
export type HexColorAlpha = `#${string}${string}`; // To include alpha in hex

/**
 * RGB color. Represent a color using red, green, and blue color channels.
 */
export type RgbColor = `rgb(${number}, ${number}, ${number})`;

/**
 * RGBA color. Represent a color using red, green, blue color channels and alpha transparency.
 */
export type RgbaColor = `rgba(${number}, ${number}, ${number}, ${number | `0.${string}`})`; // last parameter to include 0-1 range for alpha

/**
 * HSL color. Represent a color using hue, saturation, and lightness.
 */
export type HslColor = `hsl(${number}, ${number}%, ${number}%)`;

/**
 * HSLA color. Represent a color using hue, saturation, lightness, and alpha transparency.
 */
export type HslaColor = `hsla(${number}, ${number}%, ${number}%, ${number | `0.${string}`})`; // last parameter to include 0-1 range for alpha

/**
 * A composite type for all possible CSS color representations.
 */
export type CSSColor = NamedColor | HexColor | HexColorAlpha | RgbColor | RgbaColor | HslColor | HslaColor | VarValue;

/**
 * A composite type for all possible CSS length representations.
 */
export type CSSLength = PixelSize | RemSize | EmSize | PercentageSize | ViewportWidthSize | ViewportHeightSize | VhSize | PointSize | PicaSize | ExSize | CapSize | ChSize | IcSize | LhSize | RlhSize | VminSize | VmaxSize | QSize | CentimeterSize | MillimeterSize | InchSize | CalcValue | MinValue | MaxValue | ClampValue | VarValue;
