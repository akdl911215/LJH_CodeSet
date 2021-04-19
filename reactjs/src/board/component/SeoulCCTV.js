import React, { useState, useEffect } from 'react';
import 'article/style/Article.css';
import axios from 'axios';
import getAllCctvs from 'board/service/SeoulCCTV.service';

const SeoulCCTV = () => {
    const [cctvs, setCctvs] = useState([]);

    useEffect(() => {
        axios
            .get('/data/SeoulCCTV.json')
            .then((res) => {
                console.log(res);
                setCctvs(res.data.DATA);
            })
            .catch((err) => {});
    }, []);

    return (
        <>
            <div className="head_color">
                <h2>HTML Table</h2>
            </div>
            <table>
                <tr>
                    <th>No.</th>
                    <th style={{ width: '5%' }}>기준날짜</th>
                    <th style={{ width: '15%' }}>카메라코드</th>
                    <th style={{ width: '15%' }}>카메라명칭</th>
                    <th style={{ width: '15%' }}>설명</th>
                </tr>
                {cctvs.map((cctv, index) => {
                    return (
                        <tr key={index}>
                            <td style={{ width: '5%' }}>{index + 1}</td>
                            <td style={{ width: '15%' }}>{cctv.checktime}</td>
                            <td style={{ width: '15%' }}>{cctv.deviceid}</td>
                            <td style={{ width: '15%' }}>{cctv.devicename}</td>
                            <td style={{ width: '15%' }}>{cctv.description}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};
export default SeoulCCTV;
