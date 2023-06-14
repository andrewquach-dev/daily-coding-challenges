//https://www.codewars.com/kata/5810d8ce2956d78698000032/train/javascript

function getKthLastElement(head, k) {
    for (var tail=head,r=[];tail!=null;tail=tail.next) r.unshift(tail)
    return r[k]
  }