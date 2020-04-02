import React from 'react';
import { getStories } from '../util';
import { Story } from './Story';

export const Stories = () => {
    const stories = getStories();
    return <div className="row">
        <div className="col-9">
            {
                stories.map((story, i) => <Story key={i} story={story} />)
            }
        </div>
    </div>;
}