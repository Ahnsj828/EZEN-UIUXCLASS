import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactLis = () => {
  const { ContactLis, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      // 빈문자열이 아니다 => 사용자가 검색을했다
      const list = ContactLis.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
      // 사용자가 입력한 값만 배열로 찾아올거다
    } else {
      setFilteredList(ContactLis);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      {/* {contactLis.map((item) => (
        <ContactItem item={item} />
      ))} */}
      {filteredList.map((item, idx) => (
        <ContactItem key={idx} item={item} />
      ))}
      {/* 배열도 객체다 =>  배열은 {} 안에 쓸 수 있다 */}
    </div>
  );
};

export default ContactLis;
