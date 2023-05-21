import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            Blog page.
        </div>
    );
};

export default Blog;