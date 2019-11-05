import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hoc/withAuth';
import { fetchPosts } from '../../actions';

function Home(props) {
    const { fetchPosts, posts } = props;

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div>
            <h2>Home</h2>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <div><p>{post.body}</p></div>
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts());
        }
    }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Home));