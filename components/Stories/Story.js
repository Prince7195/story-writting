import React from 'react';

export const Story = ({ story }) => {
    return <>
        <div className="alert alert-secondary" role="alert">
            <h4 className="alert-heading">{story.Title}</h4>
            <p>{story.Description}</p>
            <hr />
            <p className="mb-0">{story.Username}</p>
        </div>
    </>;
}