
export const selectSong = song =>{
    return{
        type:'SONG_SELECTED',
        playload: song
    };
}