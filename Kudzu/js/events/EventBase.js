import { arrayRemoveAt } from "../arrays/arrayRemoveAt";
import { isFunction } from "../typeChecks";
export class EventBase {
    constructor() {
        this.listeners = new Map();
        this.options = new Map();
    }
    addEventListener(type, callback, options) {
        if (isFunction(callback)) {
            let listeners = this.listeners.get(type);
            if (!listeners) {
                listeners = new Array();
                this.listeners.set(type, listeners);
            }
            if (!listeners.find(c => c === callback)) {
                listeners.push(callback);
                if (options) {
                    this.options.set(callback, options);
                }
            }
        }
    }
    removeEventListener(type, callback) {
        if (isFunction(callback)) {
            const listeners = this.listeners.get(type);
            if (listeners) {
                this.removeListener(listeners, callback);
            }
        }
    }
    removeListener(listeners, callback) {
        const idx = listeners.findIndex(c => c === callback);
        if (idx >= 0) {
            arrayRemoveAt(listeners, idx);
            if (this.options.has(callback)) {
                this.options.delete(callback);
            }
        }
    }
    dispatchEvent(evt) {
        const listeners = this.listeners.get(evt.type);
        if (listeners) {
            for (const callback of listeners) {
                const options = this.options.get(callback);
                if (options && options.once) {
                    this.removeListener(listeners, callback);
                }
                callback.call(this, evt);
            }
        }
        return !evt.defaultPrevented;
    }
}
export class TypedEventBase extends EventBase {
    constructor() {
        super(...arguments);
        this.mappedCallbacks = new Map();
    }
    addEventListener(type, callback, options) {
        let mappedCallback = this.mappedCallbacks.get(callback);
        if (mappedCallback == null) {
            mappedCallback = (evt) => callback(evt);
            this.mappedCallbacks.set(callback, mappedCallback);
        }
        super.addEventListener(type, mappedCallback, options);
    }
    removeEventListener(type, callback) {
        const mappedCallback = this.mappedCallbacks.get(callback);
        if (mappedCallback) {
            super.removeEventListener(type, mappedCallback);
        }
    }
    dispatchEvent(evt) {
        return super.dispatchEvent(evt);
    }
}
//# sourceMappingURL=EventBase.js.map