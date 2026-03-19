import { FaMoneyBills } from "react-icons/fa6"

const StaffRoster = () => {
    return (
        <div className="bg-gray-100 rounded-box border border-base-content/5">
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl">Staff Roster</h3>

                <label className="input w-full bg-white sm:w-auto sm:min-w-[240px]">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search faculty..." />
                </label>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-black">
                            <th>FACULTY MEMBER</th>
                            <th>STAFF ID</th>
                            <th>STATUS</th>
                            <th>SALARY</th>
                            <th>WALLET ADDRESS</th>
                            <th>LAST PAID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className="flex gap-2">
                                <th>FY</th>
                                <div className="">
                                    <th>Dr. Fatima Yusuf </th>
                                    <span>Senior Lecturer</span>
                                </div>
                            </td>
                            <td>#0</td>
                            <td><span className="badge badge-accent">Active</span></td>
                            <td className="text-bold">$500.00</td>
                            <td className="text-gray-400">0xDeAd...bEeF</td>
                            <td>2025-02-28</td>
                            <td><FaMoneyBills /></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className="flex gap-2">
                                <th>FY</th>
                                <div className="">
                                    <th>Dr. Fatima Yusuf </th>
                                    <span>Senior Lecturer</span>
                                </div>
                            </td>
                            <td>#1</td>
                            <td><span className="badge badge-secondary">Suspended</span></td>
                            <td className="text-bold">$300.00</td>
                            <td className="text-gray-400">0xDeAd...bEeF</td>
                            <td>2025-02-28</td>
                            <td><FaMoneyBills /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm sm:text-base">Showing 2 of 2 faculty members</p>

                <div className="join w-full bg-transparent sm:w-auto">
                    <button className="join-item btn flex-1 bg-gray-200 border-none shadow-none text-black sm:flex-none">previous</button>
                    <button className="join-item btn flex-1 shadow-none sm:flex-none">1</button>
                    <button className="join-item btn flex-1 bg-gray-200 border-none shadow-none text-black sm:flex-none">next</button>
                </div>
            </div>
        </div>
    )
}

export default StaffRoster