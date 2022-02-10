import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import PostFiltersForm from '../../components/PostFiltersForm';
import PostList from '../../components/PostList';

PostsPage.propTypes = {};

function PostsPage(props) {

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    });

    useEffect(() => {
        // async function fetchPostList() {
        //   try {
        //     const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        //     const response = await fetch(requestUrl);
        //     const responseJSON = await response.json();
        //     // console.log({ responseJSON });

        //     const { data } = responseJSON;
        //     setPostList(data);
        //   } catch (error) {
        //     console.log('Failed to fetch posts list: ', error.message);
        //   }
        // }
        // fetchPostList();

        // _limit=10&_page=1
        // npm i --save query-string
        const paramsString = queryString.stringify(filters);

        fetch(`http://js-post-api.herokuapp.com/api/posts?${paramsString}`)
            .then(res => res.json())
            .then(posts => {
                setPostList(posts.data);
                setPagination(posts.pagination);
            })
            .catch(err => {
                console.log('Failed to fetch posts list: ', err.message);
            })
    }, [filters])

    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

    function handleFiltersChange(newFilter) {
        console.log('New filter: ', newFilter);
        setFilters({
            ...filters,
            title_like: newFilter.searchTerm,
        })
    }

    return (
        <>
            <PostFiltersForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </>
    );
}

export default PostsPage;