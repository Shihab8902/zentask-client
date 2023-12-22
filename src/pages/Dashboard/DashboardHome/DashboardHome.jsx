import React, { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useTanstackGet from '../../../hooks/useTanStackGet';
import { UserContext } from '../../../context/AuthProvider';
import TaskCard from './TaskCard';
import useAxios from '../../../hooks/useAxios';

const DashboardHome = () => {
    const { user } = useContext(UserContext);
    const axiosInstance = useAxios();
    const { data: tasks, refetch } = useTanstackGet(
        ['tasks', user?.email],
        `/api/task?email=${user?.email}`
    );

    const [taskSections, setTaskSections] = useState({
        todo: [],
        ongoing: [],
        completed: [],
    });

    useEffect(() => {
        if (tasks) {
            setTaskSections({
                todo: tasks.filter((task) => task.status === 'todo'),
                ongoing: tasks.filter((task) => task.status === 'ongoing'),
                completed: tasks.filter((task) => task.status === 'completed'),
            });
        }
    }, [tasks]);



    const onDragEnd = async (result) => {
        if (!result.destination) return;

        const updatedSections = { ...taskSections };
        const [movedTask] = updatedSections[result.source.droppableId].splice(
            result.source.index,
            1
        );

        updatedSections[result.destination.droppableId].splice(
            result.destination.index,
            0,
            movedTask
        );


        const order = result.destination.index + 1;


        axiosInstance.patch("/api/task/update-order-status", {
            taskId: movedTask._id,
            order,
            status: result.destination.droppableId,
        })




    };



    return (
        <div className='mb-10'>
            <h3 className="text-center mt-10 text-3xl font-semibold">My Tasks</h3>
            <p className="text-center text-gray-400 mt-4 text-sm">
                Drag into different sections for organizing them.
            </p>

            {
                tasks?.length > 0 ? <DragDropContext onDragEnd={onDragEnd}>
                    <div className="grid lg:grid-cols-3 gap-6 mt-10">
                        {Object.keys(taskSections).map((sectionKey) => (
                            <div key={sectionKey} className='border-2 min-h-screen '>
                                <h3 className="text-center py-2 font-semibold text-lg bg-blue-600 text-white">
                                    {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                                </h3>
                                <Droppable droppableId={sectionKey} key={sectionKey} >
                                    {(provided) => (
                                        <ul
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="space-y-4 min-h-screen"
                                        >
                                            {taskSections[sectionKey].map((task, index) => (
                                                <Draggable
                                                    key={task._id}
                                                    draggableId={task._id}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <li
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={provided.innerRef}

                                                        >
                                                            <TaskCard task={task} refetch={refetch} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </div>
                        ))}
                    </div>
                </DragDropContext> :


                    <div className='my-24'>
                        <h3 className='text-center font-semibold text-3xl text-gray-500'>You don't have any active task!</h3>
                    </div>

            }




        </div>
    );
};

export default DashboardHome;
