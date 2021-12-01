import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function TrainerDetailStudents() {

    const navigate = useNavigate();

    const handleMoveToStudent = () => {
        navigate('/admin/customers')
    }

    return (
        <table className="trainer-students-table">
            <thead className="trainer-students-table-header">
                <tr >
                    <th>Thứ tự</th>
                    <th>Họ và tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="trainer-students-table-body">
                <tr onClick={handleMoveToStudent}>
                    <td>1</td>
                    <td>Nguyễn Văn Đương</td>
                    <td>29</td>
                    <td>Nam</td>
                    <td>0123455674</td>
                    <td><button className="trainer-delete-student">Xóa</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Nguyễn Văn Đương</td>
                    <td>29</td>
                    <td>Nam</td>
                    <td>0123455674</td>
                    <td><button className="trainer-delete-student">Xóa</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nguyễn Văn Đương</td>
                    <td>29</td>
                    <td>Nam</td>
                    <td>0123455674</td>
                    <td><button className="trainer-delete-student">Xóa</button></td>
                </tr><tr>
                    <td>4</td>
                    <td>Nguyễn Văn Đương</td>
                    <td>29</td>
                    <td>Nam</td>
                    <td>0123455674</td>
                    <td><button className="trainer-delete-student">Xóa</button></td>
                </tr>

            </tbody>
        </table>
    )
}

export default TrainerDetailStudents
