import { MdDragIndicator } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { LuShieldAlert } from "react-icons/lu";
import { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ActionType = "Delete" | "Update" | "Post";

const SortableItem = ({id, children}: { id: string, children: React.ReactNode, key?: ActionType }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        touchAction: 'none',
        userSelect: 'none'
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

const SettingsProcessing = () => {
    const defaultActions: ActionType[] = ["Delete", "Update", "Post"];

    const [actionOrder, setActionOrder] = useState<ActionType[]>(defaultActions);
    const [selectedActions, setSelectedActions] = useState<Record<ActionType, boolean>>({
        Delete: true,
        Update: true,
        Post: true
    });

    const toggleAction = (action: ActionType) => {
        setSelectedActions((prev) => ({
            ...prev,
            [action]: !prev[action]
        }));
    };

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    // const openConfirmModal = () => {
    //     setShowConfirmModal(true);
    // };
    const closeConfirmModal = () => {
        setShowConfirmModal(false);
    };

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = actionOrder.indexOf(active.id as ActionType);
            const newIndex = actionOrder.indexOf(over.id as ActionType);
            setActionOrder((items) => arrayMove(items, oldIndex, newIndex));
        }
    };

    return (
        <div>
            <div className="text-[#717171] text-sm font-light">
                Define the sequence in which actions are executed.
            </div>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={actionOrder} strategy={verticalListSortingStrategy}>
                    <div className="py-3 md:flex md:flex-wrap">
                        {actionOrder.map((action) => (
                            <SortableItem key={action} id={action}>
                                <div className="flex items-center justify-between px-4 md:px-3 py-2.5 rounded-lg border border-[#EBEBEB] mb-4 md:mb-0 md:w-[225px] md:mr-4 cursor-move bg-white">
                                    <div className="flex items-center">
                                        <div className="mr-3 md:mr-2">
                                            <MdDragIndicator size={25} className="text-[#05050580]" />
                                        </div>
                                        <label className="flex items-center space-x-2 md:space-x-1.5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedActions[action]}
                                                onChange={() => toggleAction(action)}
                                                className="accent-[#1B74E4] w-[14px] h-[14px] rounded cursor-pointer"
                                            />
                                            <span className="text-[#050505] text-sm">{action}</span>
                                        </label>
                                    </div>
                                </div>
                            </SortableItem>
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
            {showConfirmModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="bg-white rounded-lg w-90 p-5 relative border border-[#33333333] shadow-[0px_12px_128px_0px_rgba(0,40,11,0.2)] animate-[fadeZoomIn_0.3s_ease-out]">
                        <button
                            onClick={closeConfirmModal}
                            className="absolute top-3 right-3 border border-[#3333331A] rounded-md p-1 cursor-pointer">
                            <AiOutlineClose size={18}/>
                        </button>
                        <div className="bg-[#FFEAEA] w-fit p-2 rounded-full mx-auto mb-4">
                            <LuShieldAlert size={20} className="text-[#FF0000]"/>
                        </div>
                        <div className="font-medium text-center">
                            This action cannot be undone.
                        </div>
                        <div className="text-sm text-center text-[#0000008F] mb-5">
                            Are you sure you want to proceed
                        </div>
                        <button
                            onClick={closeConfirmModal}
                            className="text-sm bg-[#1B74E4] text-white rounded-md w-[90%] mx-auto block py-2 cursor-pointer"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default SettingsProcessing;