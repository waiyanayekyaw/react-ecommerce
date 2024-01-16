import React from "react";

export default function Dashboard() {
    return (
        <div className="rounded-md overflow-hidden mx-40 my-10 ">
            <table className="w-full bg-gray-100 text-left text-sm text-gray-500">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="px-6 py-4 font-medium text-gray-900">#</th>
                        <th className="px-6 py-4 font-medium text-gray-900">Order ID</th>
                        <th className="px-6 py-4 font-medium text-gray-900">Product Name</th>
                        <th className="px-6 py-4 font-medium text-gray-900">Date</th>
                        <th className="px-6 py-4 font-medium text-gray-900">Price</th>
                        <th className="px-6 py-4 font-medium text-gray-900">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                Delivered
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                                Pending
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-rose-500 text-white text-xs rounded-full px-2 py-1">
                                Canceled
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                Delivered
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                                Pending
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-rose-500 text-white text-xs rounded-full px-2 py-1">
                                Canceled
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                Delivered
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                                Pending
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">111222</td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">15.1.2024</td>
                        <td className="px-6 py-4">$180</td>
                        <td className="px-6 py-4">
                            <span className="bg-rose-500 text-white text-xs rounded-full px-2 py-1">
                                Canceled
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
