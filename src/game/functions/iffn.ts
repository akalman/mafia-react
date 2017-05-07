export default function iffn<T>(
    predicate: (t: T) => boolean,
    conditional: (t: T) => T): (t: T) => T {

    return (t: T) => predicate(t) ? conditional(t) : t;
}
