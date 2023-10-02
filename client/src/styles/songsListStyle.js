import styled from "@emotion/styled";

export const SongPreview = styled.div`
  *{
    color:white;
  }
  margin-top: 50px;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.1);
  }
  a {
    text-decoration: none;
  }
  
`;
export const List = styled.div`
  display: flex;
  width: 730px;
  p {
    padding-right: 15px;
  }
  a {
    display: flex;
  }
`;
export const EditUpdateButton = styled.div`
  margin-top: 20px;
`;
export const Button = styled.button`
  margin-left: 5px;
  text-decoration: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
`;
