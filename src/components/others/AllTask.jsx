import React, { useContext } from 'react'
import { AuthContext } from './../../context/AuthProvider';
import CompleteTask from './../TaskList/CompleteTask';
import FailedTask from './../TaskList/FailedTask';

const AllTask = () => {
    const [userData, setuserData] = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
            <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-5">
                <h3 className='text-lg font-medium w-1/5 '>Employee Name</h3>
                <h2 className='text-lg font-medium w-1/5 '>New Task </h2>
                <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5 '>Complete Task</h5>
                <h5 className='text-lg font-medium w-1/5 '>Failed Task</h5>
            </div>
            <div className="overflow-auto">
                {userData.map((elem ,idx) => {
                    return <div key={idx} className="border-2  border-emerald-500 py-2 px-4 flex justify-between rounded mb-5">
                        <h2 className='w-1/5  text-lg'>{elem.firstName}</h2>
                        <h3 className='w-1/5 !text-blue-400 text-lg font-medium'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 !text-green-400 text-lg'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-xl'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 !text-red-600 text-lg'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask