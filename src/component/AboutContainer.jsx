import busicon from "../assets/bus-icon.svg";
export default function AboutContainer() {
    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row gap-2 lg:!gap-4 p-2 lg:items-center border-b border-gray-300 max-w-7xl mx-auto">
                <div>
                    <img src={busicon} alt="#" className="w-17 h-17" />
                </div>
                <div className="text-start text-gray-600 text-md">
                    redBus is the world's largest online bus ticket booking service trusted by over 56+ million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
                </div>
            </div>
        </div>
    )
}