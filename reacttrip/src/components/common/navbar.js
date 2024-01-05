export default function NavBar() {
    return (
        <div className="pt-14">
            <nav className="bg-white mx-auto px-6 py-3 fixed top-0 right-0 left-0 w-full">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-gray-800">MyWebsite</a>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-800">Home</a>
                        <a href="#" className="text-gray-800">About</a>
                        <a href="#" className="text-gray-800">Services</a>
                        <a href="#" className="text-gray-800">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}