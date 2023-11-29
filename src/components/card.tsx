const Card = ({ title, description }: { title: string; description: string; }) => (
    <div className="bg-[#13162E] rounded-xl lg:w-1/2">
        <div className="flex flex-col py-8 items-center text-center justify-center">
            <h1 className="text-3xl xl:text-4xl font-bold text-white px-4">{title}</h1>
            <p className="mt-8 px-8 md:px-16 text-xl text-center text-[#666B73] font-medium">{description}</p>
        </div>
    </div>
)

export default Card;