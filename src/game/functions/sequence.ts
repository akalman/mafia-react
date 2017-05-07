export default function sequence<T>(...args: ((x: T) => T)[]): (x: T) => T {
    return (x: T) => {
        let t: T = x;
        args.forEach(arg => t = arg(t));
        return t;
    };
}
