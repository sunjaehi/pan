const postList = 
    [
    
        {
            "id": 1,
            "title":"첫번째 게시글",
            "content":"첫번째 내용입니다",
            "createDate":"2023-10-28",
            "readCount":2
        },
        {
            "id":2,
            "title":"두번째 게시글",
            "content":"두번째 내용입니다",
            "createDate":"2023-11-28",
            "readCount":3
        },
        {
            "id":3,
            "title":"세번째 게시글",
            "content":"첫번째 내용입니다",
            "createDate":"2023-12-28",
            "readCount":4
        },
        {
            "id":4,
            "title":"네번째 게시글",
            "content":"첫번째 내용입니다",
            "createDate":"2024-11-28",
            "readCount":5
        },
        {
            "id":5,
            "title":"다섯번째 게시글",
            "content":"디섯번째 내용입니다",
            "createDate":"2024-12-28",
            "readCount":6
        }
    ]
const getPostById=id=> {
    const array=postList.filter(p=>p.id==id);
    if(array.length==1) {
        return array[0];
    }
    return null;
}
export {
    postList,
    getPostById
};