import type { IAppliable, UnsafeHTMLElement } from "./attrs";
/**
 * A CSS property that will be applied to an element's style attribute.
 **/
export declare class CssProp implements IAppliable {
    key: string;
    value: string;
    /**
     * Creates a new CSS property that will be applied to an element's style attribute.
     * @param key - the property name.
     * @param value - the value to set for the property.
     */
    constructor(key: string, value: string);
    /**
     * Set the attribute value on an HTMLElement
     * @param elem - the element on which to set the attribute.
     */
    apply(elem: UnsafeHTMLElement): void;
}
export declare class CssPropSet implements IAppliable {
    set: Map<string, string>;
    constructor(...rest: (CssProp | CssPropSet)[]);
    /**
     * Set the attribute value on an HTMLElement
     * @param elem - the element on which to set the attribute.
     */
    apply(elem: UnsafeHTMLElement): void;
}
/**
 * Combine style properties.
 **/
export declare function styles(...rest: (CssProp | CssPropSet)[]): CssPropSet;
export declare function alignContent(v: string): CssProp;
export declare function alignItems(v: string): CssProp;
export declare function alignSelf(v: string): CssProp;
export declare function alignmentBaseline(v: string): CssProp;
export declare function all(v: string): CssProp;
export declare function animation(v: string): CssProp;
export declare function animationDelay(v: string): CssProp;
export declare function animationDirection(v: string): CssProp;
export declare function animationDuration(v: string): CssProp;
export declare function animationFillMode(v: string): CssProp;
export declare function animationIterationCount(v: string): CssProp;
export declare function animationName(v: string): CssProp;
export declare function animationPlayState(v: string): CssProp;
export declare function animationTimingFunction(v: string): CssProp;
export declare function appearance(v: string): CssProp;
export declare function backdropFilter(v: string): CssProp;
export declare function backfaceVisibility(v: string): CssProp;
export declare function background(v: string): CssProp;
export declare function backgroundAttachment(v: string): CssProp;
export declare function backgroundBlendMode(v: string): CssProp;
export declare function backgroundClip(v: string): CssProp;
export declare function backgroundColor(v: string): CssProp;
export declare function backgroundImage(v: string): CssProp;
export declare function backgroundOrigin(v: string): CssProp;
export declare function backgroundPosition(v: string): CssProp;
export declare function backgroundPositionX(v: string): CssProp;
export declare function backgroundPositionY(v: string): CssProp;
export declare function backgroundRepeat(v: string): CssProp;
export declare function backgroundRepeatX(v: string): CssProp;
export declare function backgroundRepeatY(v: string): CssProp;
export declare function backgroundSize(v: string): CssProp;
export declare function baselineShift(v: string): CssProp;
export declare function blockSize(v: string): CssProp;
export declare function border(v: string): CssProp;
export declare function borderBlockEnd(v: string): CssProp;
export declare function borderBlockEndColor(v: string): CssProp;
export declare function borderBlockEndStyle(v: string): CssProp;
export declare function borderBlockEndWidth(v: string): CssProp;
export declare function borderBlockStart(v: string): CssProp;
export declare function borderBlockStartColor(v: string): CssProp;
export declare function borderBlockStartStyle(v: string): CssProp;
export declare function borderBlockStartWidth(v: string): CssProp;
export declare function borderBottom(v: string): CssProp;
export declare function borderBottomColor(v: string): CssProp;
export declare function borderBottomLeftRadius(v: string): CssProp;
export declare function borderBottomRightRadius(v: string): CssProp;
export declare function borderBottomStyle(v: string): CssProp;
export declare function borderBottomWidth(v: string): CssProp;
export declare function borderCollapse(v: string): CssProp;
export declare function borderColor(v: string): CssProp;
export declare function borderImage(v: string): CssProp;
export declare function borderImageOutset(v: string): CssProp;
export declare function borderImageRepeat(v: string): CssProp;
export declare function borderImageSlice(v: string): CssProp;
export declare function borderImageSource(v: string): CssProp;
export declare function borderImageWidth(v: string): CssProp;
export declare function borderInlineEnd(v: string): CssProp;
export declare function borderInlineEndColor(v: string): CssProp;
export declare function borderInlineEndStyle(v: string): CssProp;
export declare function borderInlineEndWidth(v: string): CssProp;
export declare function borderInlineStart(v: string): CssProp;
export declare function borderInlineStartColor(v: string): CssProp;
export declare function borderInlineStartStyle(v: string): CssProp;
export declare function borderInlineStartWidth(v: string): CssProp;
export declare function borderLeft(v: string): CssProp;
export declare function borderLeftColor(v: string): CssProp;
export declare function borderLeftStyle(v: string): CssProp;
export declare function borderLeftWidth(v: string): CssProp;
export declare function borderRadius(v: string): CssProp;
export declare function borderRight(v: string): CssProp;
export declare function borderRightColor(v: string): CssProp;
export declare function borderRightStyle(v: string): CssProp;
export declare function borderRightWidth(v: string): CssProp;
export declare function borderSpacing(v: string): CssProp;
export declare function borderStyle(v: string): CssProp;
export declare function borderTop(v: string): CssProp;
export declare function borderTopColor(v: string): CssProp;
export declare function borderTopLeftRadius(v: string): CssProp;
export declare function borderTopRightRadius(v: string): CssProp;
export declare function borderTopStyle(v: string): CssProp;
export declare function borderTopWidth(v: string): CssProp;
export declare function borderWidth(v: string): CssProp;
export declare function bottom(v: string): CssProp;
export declare function boxShadow(v: string): CssProp;
export declare function boxSizing(v: string): CssProp;
export declare function breakAfter(v: string): CssProp;
export declare function breakBefore(v: string): CssProp;
export declare function breakInside(v: string): CssProp;
export declare function bufferedRendering(v: string): CssProp;
export declare function captionSide(v: string): CssProp;
export declare function caretColor(v: string): CssProp;
export declare function clear(v: string): CssProp;
export declare function clip(v: string): CssProp;
export declare function clipPath(v: string): CssProp;
export declare function clipRule(v: string): CssProp;
export declare function color(v: string): CssProp;
export declare function colorInterpolation(v: string): CssProp;
export declare function colorInterpolationFilters(v: string): CssProp;
export declare function colorRendering(v: string): CssProp;
export declare function colorScheme(v: string): CssProp;
export declare function columnCount(v: string): CssProp;
export declare function columnFill(v: string): CssProp;
export declare function columnGap(v: string): CssProp;
export declare function columnRule(v: string): CssProp;
export declare function columnRuleColor(v: string): CssProp;
export declare function columnRuleStyle(v: string): CssProp;
export declare function columnRuleWidth(v: string): CssProp;
export declare function columnSpan(v: string): CssProp;
export declare function columnWidth(v: string): CssProp;
export declare function columns(v: string): CssProp;
export declare function contain(v: string): CssProp;
export declare function containIntrinsicSize(v: string): CssProp;
export declare function content(v: string): CssProp;
export declare function counterIncrement(v: string): CssProp;
export declare function counterReset(v: string): CssProp;
export declare function cursor(v: string): CssProp;
export declare function cx(v: string): CssProp;
export declare function cy(v: string): CssProp;
export declare function d(v: string): CssProp;
export declare function direction(v: string): CssProp;
export declare function display(v: string): CssProp;
export declare function dominantBaseline(v: string): CssProp;
export declare function emptyCells(v: string): CssProp;
export declare function fill(v: string): CssProp;
export declare function fillOpacity(v: string): CssProp;
export declare function fillRule(v: string): CssProp;
export declare function filter(v: string): CssProp;
export declare function flex(v: string): CssProp;
export declare function flexBasis(v: string): CssProp;
export declare function flexDirection(v: string): CssProp;
export declare function flexFlow(v: string): CssProp;
export declare function flexGrow(v: string): CssProp;
export declare function flexShrink(v: string): CssProp;
export declare function flexWrap(v: string): CssProp;
export declare function float(v: string): CssProp;
export declare function floodColor(v: string): CssProp;
export declare function floodOpacity(v: string): CssProp;
export declare function font(v: string): CssProp;
export declare function fontDisplay(v: string): CssProp;
export declare function fontFamily(v: string): CssProp;
export declare function fontFeatureSettings(v: string): CssProp;
export declare function fontKerning(v: string): CssProp;
export declare function fontOpticalSizing(v: string): CssProp;
export declare function fontSize(v: string): CssProp;
export declare function fontStretch(v: string): CssProp;
export declare function fontStyle(v: string): CssProp;
export declare function fontVariant(v: string): CssProp;
export declare function fontVariantCaps(v: string): CssProp;
export declare function fontVariantEastAsian(v: string): CssProp;
export declare function fontVariantLigatures(v: string): CssProp;
export declare function fontVariantNumeric(v: string): CssProp;
export declare function fontVariationSettings(v: string): CssProp;
export declare function fontWeight(v: string): CssProp;
export declare function forcedColorAdjust(v: string): CssProp;
export declare function gap(v: string): CssProp;
export declare function grid(v: string): CssProp;
export declare function gridArea(v: string): CssProp;
export declare function gridAutoColumns(v: string): CssProp;
export declare function gridAutoFlow(v: string): CssProp;
export declare function gridAutoRows(v: string): CssProp;
export declare function gridColumn(v: string): CssProp;
export declare function gridColumnEnd(v: string): CssProp;
export declare function gridColumnGap(v: string): CssProp;
export declare function gridColumnStart(v: string): CssProp;
export declare function gridGap(v: string): CssProp;
export declare function gridRow(v: string): CssProp;
export declare function gridRowEnd(v: string): CssProp;
export declare function gridRowGap(v: string): CssProp;
export declare function gridRowStart(v: string): CssProp;
export declare function gridTemplate(v: string): CssProp;
export declare function gridTemplateAreas(v: string): CssProp;
export declare function gridTemplateColumns(v: string): CssProp;
export declare function gridTemplateRows(v: string): CssProp;
export declare function height(v: string): CssProp;
export declare function hyphens(v: string): CssProp;
export declare function imageOrientation(v: string): CssProp;
export declare function imageRendering(v: string): CssProp;
export declare function inlineSize(v: string): CssProp;
export declare function isolation(v: string): CssProp;
export declare function justifyContent(v: string): CssProp;
export declare function justifyItems(v: string): CssProp;
export declare function justifySelf(v: string): CssProp;
export declare function left(v: string): CssProp;
export declare function letterSpacing(v: string): CssProp;
export declare function lightingColor(v: string): CssProp;
export declare function lineBreak(v: string): CssProp;
export declare function lineHeight(v: string): CssProp;
export declare function listStyle(v: string): CssProp;
export declare function listStyleImage(v: string): CssProp;
export declare function listStylePosition(v: string): CssProp;
export declare function listStyleType(v: string): CssProp;
export declare function margin(v: string): CssProp;
export declare function marginBlockEnd(v: string): CssProp;
export declare function marginBlockStart(v: string): CssProp;
export declare function marginBottom(v: string): CssProp;
export declare function marginInlineEnd(v: string): CssProp;
export declare function marginInlineStart(v: string): CssProp;
export declare function marginLeft(v: string): CssProp;
export declare function marginRight(v: string): CssProp;
export declare function marginTop(v: string): CssProp;
export declare function marker(v: string): CssProp;
export declare function markerEnd(v: string): CssProp;
export declare function markerMid(v: string): CssProp;
export declare function markerStart(v: string): CssProp;
export declare function mask(v: string): CssProp;
export declare function maskType(v: string): CssProp;
export declare function maxBlockSize(v: string): CssProp;
export declare function maxHeight(v: string): CssProp;
export declare function maxInlineSize(v: string): CssProp;
export declare function maxWidth(v: string): CssProp;
export declare function maxZoom(v: string): CssProp;
export declare function minBlockSize(v: string): CssProp;
export declare function minHeight(v: string): CssProp;
export declare function minInlineSize(v: string): CssProp;
export declare function minWidth(v: string): CssProp;
export declare function minZoom(v: string): CssProp;
export declare function mixBlendMode(v: string): CssProp;
export declare function objectFit(v: string): CssProp;
export declare function objectPosition(v: string): CssProp;
export declare function offset(v: string): CssProp;
export declare function offsetDistance(v: string): CssProp;
export declare function offsetPath(v: string): CssProp;
export declare function offsetRotate(v: string): CssProp;
export declare function opacity(v: string): CssProp;
export declare function order(v: string): CssProp;
export declare function orientation(v: string): CssProp;
export declare function orphans(v: string): CssProp;
export declare function outline(v: string): CssProp;
export declare function outlineColor(v: string): CssProp;
export declare function outlineOffset(v: string): CssProp;
export declare function outlineStyle(v: string): CssProp;
export declare function outlineWidth(v: string): CssProp;
export declare function overflow(v: string): CssProp;
export declare function overflowAnchor(v: string): CssProp;
export declare function overflowWrap(v: string): CssProp;
export declare function overflowX(v: string): CssProp;
export declare function overflowY(v: string): CssProp;
export declare function overscrollBehavior(v: string): CssProp;
export declare function overscrollBehaviorBlock(v: string): CssProp;
export declare function overscrollBehaviorInline(v: string): CssProp;
export declare function overscrollBehaviorX(v: string): CssProp;
export declare function overscrollBehaviorY(v: string): CssProp;
export declare function padding(v: string): CssProp;
export declare function paddingBlockEnd(v: string): CssProp;
export declare function paddingBlockStart(v: string): CssProp;
export declare function paddingBottom(v: string): CssProp;
export declare function paddingInlineEnd(v: string): CssProp;
export declare function paddingInlineStart(v: string): CssProp;
export declare function paddingLeft(v: string): CssProp;
export declare function paddingRight(v: string): CssProp;
export declare function paddingTop(v: string): CssProp;
export declare function pageBreakAfter(v: string): CssProp;
export declare function pageBreakBefore(v: string): CssProp;
export declare function pageBreakInside(v: string): CssProp;
export declare function paintOrder(v: string): CssProp;
export declare function perspective(v: string): CssProp;
export declare function perspectiveOrigin(v: string): CssProp;
export declare function placeContent(v: string): CssProp;
export declare function placeItems(v: string): CssProp;
export declare function placeSelf(v: string): CssProp;
export declare function pointerEvents(v: string): CssProp;
export declare function position(v: string): CssProp;
export declare function quotes(v: string): CssProp;
export declare function r(v: string): CssProp;
export declare function resize(v: string): CssProp;
export declare function right(v: string): CssProp;
export declare function rowGap(v: string): CssProp;
export declare function rubyPosition(v: string): CssProp;
export declare function rx(v: string): CssProp;
export declare function ry(v: string): CssProp;
export declare function scrollBehavior(v: string): CssProp;
export declare function scrollMargin(v: string): CssProp;
export declare function scrollMarginBlock(v: string): CssProp;
export declare function scrollMarginBlockEnd(v: string): CssProp;
export declare function scrollMarginBlockStart(v: string): CssProp;
export declare function scrollMarginBottom(v: string): CssProp;
export declare function scrollMarginInline(v: string): CssProp;
export declare function scrollMarginInlineEnd(v: string): CssProp;
export declare function scrollMarginInlineStart(v: string): CssProp;
export declare function scrollMarginLeft(v: string): CssProp;
export declare function scrollMarginRight(v: string): CssProp;
export declare function scrollMarginTop(v: string): CssProp;
export declare function scrollPadding(v: string): CssProp;
export declare function scrollPaddingBlock(v: string): CssProp;
export declare function scrollPaddingBlockEnd(v: string): CssProp;
export declare function scrollPaddingBlockStart(v: string): CssProp;
export declare function scrollPaddingBottom(v: string): CssProp;
export declare function scrollPaddingInline(v: string): CssProp;
export declare function scrollPaddingInlineEnd(v: string): CssProp;
export declare function scrollPaddingInlineStart(v: string): CssProp;
export declare function scrollPaddingLeft(v: string): CssProp;
export declare function scrollPaddingRight(v: string): CssProp;
export declare function scrollPaddingTop(v: string): CssProp;
export declare function scrollSnapAlign(v: string): CssProp;
export declare function scrollSnapStop(v: string): CssProp;
export declare function scrollSnapType(v: string): CssProp;
export declare function shapeImageThreshold(v: string): CssProp;
export declare function shapeMargin(v: string): CssProp;
export declare function shapeOutside(v: string): CssProp;
export declare function shapeRendering(v: string): CssProp;
export declare function size(v: string): CssProp;
export declare function speak(v: string): CssProp;
export declare function src(v: string): CssProp;
export declare function stopColor(v: string): CssProp;
export declare function stopOpacity(v: string): CssProp;
export declare function stroke(v: string): CssProp;
export declare function strokeDasharray(v: string): CssProp;
export declare function strokeDashoffset(v: string): CssProp;
export declare function strokeLinecap(v: string): CssProp;
export declare function strokeLinejoin(v: string): CssProp;
export declare function strokeMiterlimit(v: string): CssProp;
export declare function strokeOpacity(v: string): CssProp;
export declare function strokeWidth(v: string): CssProp;
export declare function tabSize(v: string): CssProp;
export declare function tableLayout(v: string): CssProp;
export declare function textAlign(v: string): CssProp;
export declare function textAlignLast(v: string): CssProp;
export declare function textAnchor(v: string): CssProp;
export declare function textCombineUpright(v: string): CssProp;
export declare function textDecoration(v: string): CssProp;
export declare function textDecorationColor(v: string): CssProp;
export declare function textDecorationLine(v: string): CssProp;
export declare function textDecorationSkipInk(v: string): CssProp;
export declare function textDecorationStyle(v: string): CssProp;
export declare function textIndent(v: string): CssProp;
export declare function textOrientation(v: string): CssProp;
export declare function textOverflow(v: string): CssProp;
export declare function textRendering(v: string): CssProp;
export declare function textShadow(v: string): CssProp;
export declare function textSizeAdjust(v: string): CssProp;
export declare function textTransform(v: string): CssProp;
export declare function textUnderlinePosition(v: string): CssProp;
export declare function top(v: string): CssProp;
export declare function touchAction(v: string): CssProp;
export declare function transform(v: string): CssProp;
export declare function transformBox(v: string): CssProp;
export declare function transformOrigin(v: string): CssProp;
export declare function transformStyle(v: string): CssProp;
export declare function transition(v: string): CssProp;
export declare function transitionDelay(v: string): CssProp;
export declare function transitionDuration(v: string): CssProp;
export declare function transitionProperty(v: string): CssProp;
export declare function transitionTimingFunction(v: string): CssProp;
export declare function unicodeBidi(v: string): CssProp;
export declare function unicodeRange(v: string): CssProp;
export declare function userSelect(v: string): CssProp;
export declare function userZoom(v: string): CssProp;
export declare function vectorEffect(v: string): CssProp;
export declare function verticalAlign(v: string): CssProp;
export declare function visibility(v: string): CssProp;
export declare function whiteSpace(v: string): CssProp;
export declare function widows(v: string): CssProp;
export declare function width(v: string): CssProp;
export declare function willChange(v: string): CssProp;
export declare function wordBreak(v: string): CssProp;
export declare function wordSpacing(v: string): CssProp;
export declare function wordWrap(v: string): CssProp;
export declare function writingMode(v: string): CssProp;
export declare function x(v: string): CssProp;
export declare function y(v: string): CssProp;
export declare function zIndex(v: string): CssProp;
export declare function zoom(v: string): CssProp;
/**
 * A selection of fonts for preferred monospace rendering.
 **/
export declare const monospaceFonts = "'Droid Sans Mono', 'Consolas', 'Lucida Console', 'Courier New', 'Courier', monospace";
/**
 * A selection of fonts for preferred monospace rendering.
 **/
export declare const monospaceFamily: CssProp;
/**
 * A selection of fonts that should match whatever the user's operating system normally uses.
 **/
export declare const systemFonts = "-apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif";
/**
 * A selection of fonts that should match whatever the user's operating system normally uses.
 **/
export declare const systemFamily: CssProp;
