import React from 'react'

function TrainerDetailSchedule() {
    return (
        <table className="table">
            <thead className="head">
                <tr >
                    <th>Thứ</th>
                    <th>Thời gian</th>
                    <th>Học viên</th>
                    <th>Ghi chú</th>
                </tr>
            </thead>
            <tbody className="body">
                <tr>
                    <td rowspan="2">Thứ 2</td>
                    <td rowspan="2">8h-12h</td>
                    <td>Nguyễn Văn Đương</td>
                    <td rowspan="2">Ghi chú</td>
                </tr>
                <tr>
                    <td>Nguyễn Văn Đương</td>
                </tr>

                <tr>
                    <td rowspan="2">Thứ 2</td>
                    <td rowspan="2">8h-12h</td>
                    <td>Nguyễn Văn Đương</td>
                    <td rowspan="2">Ghi chú</td>
                </tr>
                <tr>
                    <td>Nguyễn Văn Đương</td>
                </tr>

                <tr>
                    <td rowspan="2">Thứ 2</td>
                    <td rowspan="2">8h-12h</td>
                    <td>Nguyễn Văn Đương</td>
                    <td rowspan="2">Ghi chú</td>
                </tr>
                <tr>
                    <td>Nguyễn Văn Đương</td>
                </tr>


            </tbody>
        </table>
    )
}

export default TrainerDetailSchedule
