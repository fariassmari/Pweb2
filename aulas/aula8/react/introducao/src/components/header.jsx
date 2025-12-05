export default function Header({ title, value }) {
    console.log(`Título: ${title} - ${value}`);

    return (
        <div className="relative">
            <h1 className="text-center text-2xl my-12 font-bold">
                { title }
            </h1>
        </div>
    );
}