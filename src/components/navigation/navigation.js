import React, { useState } from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setSearchType, loadSubreddit, loadSearch } from '../../features/PostList/postsSlice';

export const Navigation = () => {

    const [radio, setRadio] = useState('query');
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        setRadio(e);
        dispatch(setSearchType({ type: e }));
    }

    const loadSearchValue = () => {
        if(radio === 'subreddit'){
            dispatch(loadSubreddit({query: search}))
        }
        else if (radio === 'query') {
            dispatch(loadSearch({query: search}));
        }
    }


    return (
        <nav>
            <div className='nav-wrapper'>
                <figure className='reddit-logo'>
                    <img src='AlienBlue_Icon.png' alt="" className='logo' />
                    <label className='reddit-text'>Reddit Client</label>
                </figure>
                <div className='search-section'>
                    <button
                        className='btn search'
                        onClick={() => loadSearchValue()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input
                        type='text'
                        name='searchBar'
                        className="searchBar"
                        placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Bookmark Functionality Here
                Conditions for solid when bookmarked and open when not in bookmarks
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                <FontAwesomeIcon icon="fa-regular fa-bookmark" />
            */}

                </div>

                <form> {/*Use onClick to handle switch of radio buttons */}
                    <input
                        type="radio"
                        name="subreddit"
                        value="subreddit"
                        checked={radio === 'subreddit'}
                        className="radio subreddit"

                    />
                    <label onClick={() => handleClick('subreddit')}>
                        Subreddit
                    </label>
                    <input
                        type="radio"
                        name="query"
                        value="query"
                        checked={radio === 'query'}
                        className="radio query"

                    />
                    <label onClick={() => handleClick('query')}>
                        Search Query
                    </label>
                </form>
            </div>
        </nav>
    );
}