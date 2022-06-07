export default function Container({ children }) {
    return (
        <main className="grid md:grid-cols-2 max-w-7xl mx-auto relative">{children}</main>
    );
}