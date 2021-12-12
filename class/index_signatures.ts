// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'femaile', alex: 'male', anna: 'femail'}

class Students {
  [index: string]: 'male' | 'female';
  
  mark: 'male' = 'male';
}

const aa = new Students();
aa.mark = "male";
aa.jade = "male";