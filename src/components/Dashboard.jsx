// src/Dashboard.js
import React from "react";
// import { FiAlertCircle, FiTrash, FiSearch } from "react-icons/fi";
import speed from "../assets/speed.svg";
import search from "../assets/search.svg";
import trash from "../assets/trash.svg";
import person from "../assets/person.svg";
import notification from "../assets/notification.svg";
import dashboard from "../assets/dashboard.svg";
import live from "../assets/live.svg";
import report from "../assets/report.svg";
import geofence from "../assets/geofence.svg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">SpeedSense</div>
          <div className="flex items-center">
            <div className="relative w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={search} alt="Search icon" className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Enter plate number"
                className="border border-gray-300 w-full h-8 pl-10 pr-4 rounded-2xl text-gray-700"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img src={search} alt="search" className="w-4 h-4" />
            <img src={notification} alt="notif" className="w-4 h-4" />
            <img src={person} alt="Profile" className="rounded-full" />
            <span className="mr-4 text-gray-700">ISH Vainquer</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex">
        <nav className="w-1/4 bg-white shadow rounded p-4">
          <ul>
            <li className="mb-4">
              <img src={dashboard} alt="Profile" className="w-5 h-5" />
              <a href="#dashboard" className="text-blue-500 font-semibold">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <img src={report} alt="Profile" className="w-5 h-5" />
              <a href="#report" className="text-gray-700 hover:text-blue-500">
                Report
              </a>
            </li>
            <li className="mb-4">
              <img src={live} alt="Profile" className="w-5 h-5" />
              <a href="#live" className="text-gray-700 hover:text-blue-500">
                Live
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#statistics"
                className="text-gray-700 hover:text-blue-500"
              >
                Statistics
              </a>
            </li>
            <li className="mb-4">
              <img src={geofence} alt="Profile" className="w-5 h-5" />
              <a
                href="#geo-fence"
                className="text-gray-700 hover:text-blue-500"
              >
                Geo-Fence
              </a>
            </li>
          </ul>
        </nav>

        <main className="w-3/4 ml-6">
          <section id="general-analytics" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              General Analytics
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-4 shadow rounded">
                <div className="flex items-center">
                  <img src={speed} alt="Speed icon" className="w-16 h-16" />
                  <div className="text-gray-700">Overspeeding cases</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-gray-500">in the last hour</div>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="flex items-center">
                  {/* <FiAlertCircle className="text-blue-500 mr-2" size={24} /> */}
                  <img
                    src={speed}
                    alt="SpeedSense Logo"
                    className="w-16 h-16"
                  />
                  <div className="text-gray-700">Devices disconnected</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  23 / 12,445
                </div>
                <div className="text-gray-500">in the last hour</div>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="flex items-center">
                  <img src={speed} alt="Speed icon" className="w-16 h-16" />
                  <div className="text-gray-700">Total accidents</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-gray-500">in the last hour</div>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="flex items-center">
                  <img src={speed} alt="Speed icon" className="w-16 h-16" />
                  <div className="text-gray-700">Total accidents</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-gray-500">in the last hour</div>
              </div>
            </div>
          </section>

          <section id="graphs" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Violations and Recent Incidents
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow rounded h-64 flex items-center justify-center">
                {/* Insert bar graph here */}
                <div className="text-gray-400">Bar Graph Placeholder</div>
              </div>
              <div className="bg-white p-4 shadow rounded h-64 flex items-center justify-center">
                {/* Insert line graph here */}
                <div className="text-gray-400">Line Graph Placeholder</div>
              </div>
            </div>
          </section>

          <section id="notifications">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Notifications
            </h2>
            <div className="bg-white p-4 shadow rounded">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-gray-700">Content</th>
                    <th className="text-left text-gray-700">Time and date</th>
                    <th className="text-left text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Car with place RAD 445 R disconnected
                    </td>
                    <td className="text-gray-600">12/28/2023, 11:39:15 PM</td>
                    <td>
                      <button className="text-red-500">
                        <img
                          src={trash}
                          alt="trash icon"
                          className="w-16 h-16"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Car with place RAD 445 R disconnected
                    </td>
                    <td className="text-gray-600">12/28/2023, 11:39:15 PM</td>
                    <td>
                      <button className="text-red-500">
                        <img
                          src={trash}
                          alt="trash icon"
                          className="w-16 h-16"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Car with place RAD 445 R disconnected
                    </td>
                    <td className="text-gray-600">12/28/2023, 11:39:15 PM</td>
                    <td>
                      <button className="text-red-500">
                        <img
                          src={trash}
                          alt="trash icon"
                          className="w-16 h-16"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Car with place RAD 445 R disconnected
                    </td>
                    <td className="text-gray-600">12/28/2023, 11:39:15 PM</td>
                    <td>
                      <button className="text-red-500">
                        <img
                          src={trash}
                          alt="trash icon"
                          className="w-16 h-16"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Car with place RAD 445 R disconnected
                    </td>
                    <td className="text-gray-600">12/28/2023, 11:39:15 PM</td>
                    <td>
                      <button className="text-red-500">
                        <img
                          src={trash}
                          alt="trash icon"
                          className="w-16 h-16"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
