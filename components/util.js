export const saveStory = (story) => {
    const stories = getStories();
    stories.push({
        ...story,
        CreatedDate: new Date()
    })
    localStorage.setItem('stories', JSON.stringify(stories));
}

export const getStories = () => {
    const storiesJsonStr = localStorage.getItem('stories');
    return storiesJsonStr ? JSON.parse(storiesJsonStr) : [];
}
