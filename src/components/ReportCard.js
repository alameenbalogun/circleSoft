export default function ReportCard({ icon: Icon, title, description }) {
    return(
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition all cursor-pointer ">
            <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-white text-green-600 text-2xl mb-4 border-2 border-gray-300">
                {Icon && <Icon  />} 
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
    )
}