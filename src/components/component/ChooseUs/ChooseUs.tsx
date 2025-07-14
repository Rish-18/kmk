import chooseusbg from '../../../assets/darkchooseus.png'

export default function ChooseUs() {
    return (
        <div>
            <section className="relative bg-[#f4f4f4] py-12 px-4 md:px-8 lg:px-20 text-center overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
                    style={{ backgroundImage: `url(${chooseusbg})` }}
                />

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-10 relative z-10">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 relative z-10">
                    {/* Card 1 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Safety First</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            Our park adheres to the highest safety standards, ensuring a secure environment for all our young visitors.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Clean and Hygienic</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            We maintain a clean and hygienic facility, regularly sanitizing all play areas and equipment.
                        </p>
                    </div>

                    {/* Card 3 (No border) */}
                    <div className="space-y-3 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Expert Staff</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            Our team of friendly and experienced staff is dedicated to making your child’s visit a joyful and enriching experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
