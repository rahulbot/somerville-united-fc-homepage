
function validateYouTubeVideoId(potentialId) {
    // return if the string passed in is a valid YouTube video ID (11 characters, letters, numbers, - and _)
    const youtubeRegex = /^[a-zA-Z0-9_-]{11}$/;
    return youtubeRegex.test(potentialId);
}

export function gameHasYouTubeVideo(game) {
    return game.YouTubeId && validateYouTubeVideoId(game.YouTubeId);
}

