//https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

function inviteMoreWomen(L) {
    //coding and coding..
    return L.filter(e => e === -1).length < L.filter(e => e === 1).length ? true : false;


}