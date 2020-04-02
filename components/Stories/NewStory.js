import React from 'react';
import { saveStory } from '../util';

export const NewStory = () => {
    const [story, setStory] = React.useState({Title: '', Description: '', Username: ''});
    const handleChanges = (key, event) => {
        setStory({...story, [key]: event.target.value});
    };
    const addStory = () => {
        saveStory(story);
        setStory({Title: '', Description: '', Username: ''});
    }
    return <div className="row">
        <div className="col-6">
            <div class="form-group">
                <label for="title">Title</label>
                <input class="form-control" value={story.Title} onChange={(e) => handleChanges('Title', e)} id="title" type="text" placeholder="Title" />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea value={story.Description} class="form-control" onChange={(e) => handleChanges('Description', e)} id="description" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" value={story.Username} onChange={(e) => handleChanges('Username', e)} type="text" id="username" placeholder="Username" />
            </div>
            <button type="button" onClick={addStory} class="btn btn-primary">Add Story</button>
        </div>
    </div>;
}