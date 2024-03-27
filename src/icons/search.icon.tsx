import styled from "styled-components";

export function SearchIcon() {
  const Svg = styled.svg`
    cursor: pointer;
  `;

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 20.9751L13.325 14.4001C12.825 14.8334 12.242 15.1709 11.576 15.4126C10.91 15.6543 10.2014 15.7751 9.45 15.7751C7.6473 15.7751 6.12163 15.1501 4.87298 13.9001C3.62433 12.6501 3 11.1418 3 9.3751C3 7.60843 3.625 6.1001 4.875 4.8501C6.125 3.6001 7.6375 2.9751 9.4125 2.9751C11.1875 2.9751 12.6958 3.6001 13.9375 4.8501C15.1792 6.1001 15.8 7.60968 15.8 9.37885C15.8 10.093 15.6833 10.7834 15.45 11.4501C15.2167 12.1168 14.8667 12.7418 14.4 13.3251L21 19.8751L19.9 20.9751ZM9.425 14.2751C10.7792 14.2751 11.9302 13.7959 12.8781 12.8376C13.826 11.8793 14.3 10.7251 14.3 9.3751C14.3 8.0251 13.826 6.87093 12.8781 5.9126C11.9302 4.95426 10.7792 4.4751 9.425 4.4751C8.05695 4.4751 6.8941 4.95426 5.93645 5.9126C4.97882 6.87093 4.5 8.0251 4.5 9.3751C4.5 10.7251 4.97882 11.8793 5.93645 12.8376C6.8941 13.7959 8.05695 14.2751 9.425 14.2751Z"
        fill="#2F2E41"
      />
    </Svg>
  );
}
