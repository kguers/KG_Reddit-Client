import React, { useEffect, useState } from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectType } from '../../features/PostList/postsSlice';

export const Navigation = (props) => {
    const [radio, setRadio] = useState('query');
    const currentType = useSelector(selectType);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRadio(e);
        dispatch(selectType({ type: e }));
    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <figure className='reddit-logo'>
                    <img src='AlienBlue_Icon.png' alt="" className='logo' />
                    <label className='reddit-text'>Reddit Client</label>
                </figure>
                <div className='search-section'>
                    <button className='btn search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input type='text' className="searchBar" placeholder='Search' ></input>
                    {/* Bookmark Functionality Here
                Conditions for solid when bookmarked and open when not in bookmarks
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                <FontAwesomeIcon icon="fa-regular fa-bookmark" />
            */}

                </div>

                <form> {/*Use onChange to handle switch of radio buttons */}
                    <input
                        type="radio"
                        name="subreddit"
                        value="subreddit"
                        checked={radio === 'subreddit'}
                        className="radio subreddit"
                        onChange={(e) => handleChange(e.currentTarget.value)}
                    />
                    <label>
                        Subreddit
                    </label>
                    <input
                        type="radio"
                        name="query"
                        value="query"
                        checked={radio === 'query'}
                        className="radio query"
                        onChange={(e) => handleChange(e.currentTarget.value)}
                    />
                    <label>
                        Search Query
                    </label>
                </form>
            </div>
        </nav>
    );
}