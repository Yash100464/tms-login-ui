import React from "react";
import { FaUserEdit } from "react-icons/fa";
import {TiUserDelete  } from "react-icons/ti";
import "./UserTable.css";



const TableRecordUsers=({userId="***",firstName="*******",lastName="*******",userName="*******",role="*****"})=>(

        <tbody>

                                <tr>

                                    <td>{userId}</td>

                                    <td>{firstName}</td>

                                    <td>{lastName}</td>

                                    <td>{userName}</td>

                                    <td>{role}</td>


                                    <td>

                                        <ul className="action-list">

                                            <li><a href="/#" data-tip="edit"><i className="fas fa-pen"></i></a></li>

                                            <li><a href="/#" data-tip="delete"><i className="fas fa-trash"></i></a></li>

                                        </ul>

                                    </td>

                                </tr>

            </tbody>

)



export default TableRecordUsers;