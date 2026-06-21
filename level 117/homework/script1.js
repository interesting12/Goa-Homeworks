class TimeHelper {
    static Time = Date.now();

    static miliSeconds(ms) {
        const date = new Date(ms);
        return date.toLocaleString();
    }
}