// split() 문자열을 찾아서 해당 문자열 값을 배열로 만드는거

export const split = (str: string, delim: string = "") => str.split(delim);
// delim 구분자로서 역할을할거다
// delim: string = ""  => 사용자가 값을 안주면 빈 문자열로 줄거다
// (str: string, delim: string = "")
// str: string=> 문자열
// delim: string = ""  =>  구분자로 주는데 없으면 빈 문자열
