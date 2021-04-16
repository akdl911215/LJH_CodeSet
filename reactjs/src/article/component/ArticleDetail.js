import React from 'react';
const ArticleDetail = () => {
    return (
        <>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <h2>글 읽기</h2>
                    </thead>
                    <tbody>
                        <tr>
                            <th>제목 : </th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>작성 일자 : </th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>조회수 : </th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>작성자 : </th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>내용 : </th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <a className="btn btn-outline-primary" id="update_btn" href="/test/notice_board/update_write?idx=<?php echo $index;?>">
                    수정하기
                </a>
                <input type="button" className="btn btn-outline-primary" style={{ color: 'black' }} id="delete_btn" value="삭제하기" />
            </div>
        </>
    );
};
export default ArticleDetail;
