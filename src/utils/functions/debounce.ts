export function debounce<Func extends Function>(
    callback: Func,
    waitMs: number,
    immediate: boolean = false
): Func {

    let timeout: ReturnType<typeof setTimeout> | null;

    //@ts-ignore
    return function executedFunction() {
        //@ts-ignore
        const context = this;
        const args: any = arguments;

        const later = function() {
            timeout = null;
            if (!immediate) callback.apply(context, args);
        };

        const callNow = immediate && !timeout;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(later, waitMs);

        if (callNow) callback.apply(context, args);
    }
}