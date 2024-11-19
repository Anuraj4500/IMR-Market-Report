import React, { useState } from "react";
import Navbar from "../components/Navbar";
import 'font-awesome/css/font-awesome.min.css';


const Home = () => {
    const [projectTitle, setProjectTitle] = useState("");
    const [clientName, setClientName] = useState("");
    const [projectRate, setProjectRate] = useState("");
    const [projectType, setProjectType] = useState("Hourly");
    const [priority, setPriority] = useState("Low");
    const [projectSize, setProjectSize] = useState("Small");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [details, setDetails] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
    };

    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Navbar/>
            <div className="page-body-wrapper mt-5">
           
                <div className="page-body">
                    <div className="container-fluid">
                        <div className="page-title">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <h2>Project Create</h2>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa fa-home"></i>
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">Project</li>
                                        <li className="breadcrumb-item active">Project Create</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form theme-form basic-form">
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Project Title</h5>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Project name *"
                                                                value={projectTitle}
                                                                onChange={(e) => setProjectTitle(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Client name</h5>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Name client or company name"
                                                                value={clientName}
                                                                onChange={(e) => setClientName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Project Rate</h5>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Enter project Rate"
                                                                value={projectRate}
                                                                onChange={(e) => setProjectRate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Project Type</h5>
                                                            <select
                                                                className="form-select"
                                                                value={projectType}
                                                                onChange={(e) => setProjectType(e.target.value)}
                                                            >
                                                                <option>Hourly</option>
                                                                <option>Fix price</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Priority</h5>
                                                            <select
                                                                className="form-select"
                                                                value={priority}
                                                                onChange={(e) => setPriority(e.target.value)}
                                                            >
                                                                <option>Low</option>
                                                                <option>Medium</option>
                                                                <option>High</option>
                                                                <option>Urgent</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Project Size</h5>
                                                            <select
                                                                className="form-select"
                                                                value={projectSize}
                                                                onChange={(e) => setProjectSize(e.target.value)}
                                                            >
                                                                <option>Small</option>
                                                                <option>Medium</option>
                                                                <option>Big</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Starting date</h5>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                value={startDate}
                                                                onChange={(e) => setStartDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Ending date</h5>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                value={endDate}
                                                                onChange={(e) => setEndDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3">
                                                            <h5 className="f-w-600 mb-2">Enter some Details</h5>
                                                            <textarea
                                                                className="form-control"
                                                                placeholder="Write here"
                                                                value={details}
                                                                onChange={(e) => setDetails(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <h5 class="f-w-600 mb-2">Upload project file</h5>
                                                    <form class="dropzone" id="singleFileUpload" action="/upload.php">
                                                        <div class="dz-message needsclick"> <i
                                                                class="fa-solid fa-cloud-arrow-up"></i>
                                                            <h6>Drop files here or click to upload. </h6><span
                                                                class="note needsclick">(This is just a demo dropzone.
                                                                Selected files are<strong>not</strong> actually
                                                                uploaded.)</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="text-end"> <a class="btn btn-success me-3"
                                                        href="#">Add</a><a class="btn btn-danger" href="#">Cancel </a>
                                                </div>
                                            </div>
                                        </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
