import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 2fr));
  gap: 1rem;
`;

export const Item = styled.li`
  border: 1px transparent solid;

  img {
    max-width: 100%;
    height: fit-content;
    display: block;
    height: 420px;
    object-fit: cover;
  }
  div {
    position: relative;
    max-width: 100%;
    display: block;
    overflow: hidden;

    ::after {
      content: "Click For More Info";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateY(100%);
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: transform 200ms ease;
    }
  }
  :hover div::after {
    transform: translateY(0);
  }
`;

export const ItemLink = styled(Link)`
  color: #f0fffd;
  text-decoration: none;
  transition: color 200ms ease;
  :hover {
    color: #46d29b;
  }
`;

export const ItemText = styled.p`
  padding: 1rem 0.5rem;
  height: 25px;
  border-radius: 0 0 1rem 1rem;
  border: 1px #547e79 solid;
  border-top: none;
  display: flex;
  align-items: center;
  background-color: #5c8984;
`;
