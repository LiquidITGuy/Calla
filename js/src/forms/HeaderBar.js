﻿import { door, gear, questionMark, squareFourCourners, downRightArrow } from "../emoji/emoji.js";
import { alt, grid, id, role, src, style, title } from "../html/attrs.js";
import { onClick } from "../html/evts.js";
import { Button, Div, Img, Span } from "../html/tags.js";


function Run(...rest) {
    return Span(
        style({ margin: "auto" }),
        ...rest);
}

const toggleOptionsEvt = new Event("toggleOptions"),
    tweetEvt = new Event("tweet"),
    leaveEvt = new Event("leave"),
    toggleFullscreenEvt = new Event("toggleFullscreen"),
    toggleInstructionsEvt = new Event("toggleInstructions"),
    subelStyle = style({
        fontSize: "1.25em",
        width: "3em",
        height: "100%",
        pointerEvents: "all"
    });

export class HeaderBar extends EventTarget {
    constructor() {
        super();

        const _ = (evt) => () => this.dispatchEvent(evt);

        this.element = Div(
            id("headbar"),
            style({
                gridTemplateColumns: "auto auto auto 1fr auto auto",
                display: "grid",
                padding: "4px",
                width: "100%",
                columnGap: "5px",
                backgroundColor: "transparent",
                pointerEvents: "none"
            }),

            this.optionsButton = Button(
                title("Show/hide options"),
                onClick(_(toggleOptionsEvt)),
                subelStyle,
                grid(1, 1),
                Run(gear.value)),

            this.instructionsButton = Button(
                title("Show/hide instructions"),
                onClick(_(toggleInstructionsEvt)),
                subelStyle,
                grid(2, 1),
                Run(questionMark.value)),

            Button(
                title("Share your current room to twitter"),
                onClick(_(tweetEvt)),
                subelStyle,
                grid(3, 1),
                Img(src("https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"),
                    alt("icon"),
                    role("presentation"),
                    style({
                        height: "1.75em",
                        marginTop: "3px",
                        marginBottom: "-3px"
                    }))),


            this.fullscreenButton = Button(
                title("Toggle fullscreen"),
                onClick(_(toggleFullscreenEvt)),
                subelStyle,
                grid(5, 1),
                Run(squareFourCourners.value)),


            Button(
                title("Leave the room"),
                onClick(_(leaveEvt)),
                subelStyle,
                grid(6, 1),
                Run(door.value)));

        Object.seal(this);
    }

    get isFullscreen() {
        return document.fullscreenElement !== null;
    }

    set isFullscreen(value) {
        if (value) {
            document.body.requestFullscreen();
        }
        else {
            document.exitFullscreen();
        }
        this.fullscreenButton.updateLabel(
            value,
            downRightArrow.value,
            squareFourCourners.value);
    }

    get enabled() {
        return !this.instructionsButton.disabled;
    }

    set enabled(v) {
        for (let button of this.element.querySelectorAll("button")) {
            button.disabled = !v;
        }
    }
}