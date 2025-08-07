import {FaCheck} from "react-icons/fa";
import {useState} from "react";

const SettingsDescription = () => {
    const [selected, setSelected] = useState(1);
    const templates = [
        {
            id: 1,
            title: "Sed ut perspiciatis unde omnis iste",
            desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        },
        {
            id: 2,
            title: "Sed ut perspiciatis unde omnis iste",
            desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        },
        {
            id: 3,
            title: "Sed ut perspiciatis unde omnis iste",
            desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        },
    ];

    return (
        <div className="overflow-x-auto no-scrollbar flex gap-6">
            {templates.map((template) => (
                <div key={template.id} className="flex flex-col">
                    <div onClick={() => setSelected(template.id)}
                         className={`w-[200px] rounded-xl cursor-pointer bg-[#F6F6F6] py-3 px-4
                                                ${
                             selected === template.id
                                 ? "border-2 border-[#1B74E4]"
                                 : "border-2 border-[#EBEBEB]"
                         }`}>
                        <div className="flex justify-between">
                            <div className="font-semibold text-xs text-[#333333] mb-3">
                                {template.title}
                            </div>
                            <div>
                                <div className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center 
                                   ${selected === template.id
                                    ? "bg-[#1B74E4] border-[#1B74E4]"
                                    : "bg-white border-[#00000033]"
                                }`}>
                                    {selected === template.id && (
                                        <FaCheck size={12} className="text-white"/>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="text-[#333333] text-xs">
                            {template.desc}
                        </div>
                    </div>
                    <div className="mt-3 text-sm font-medium text-[#333333]">
                        Template {template.id}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default SettingsDescription;