export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container mx-auto flex justify-center items-center px-4">
                <p className="">Frieder Haase © {currentYear}</p>
            </div>
        </footer>
    )
}