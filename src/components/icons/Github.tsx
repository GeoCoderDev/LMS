import React from "react";
import { IconProps } from "./Icons";

const Github = ({ title, className, color }: IconProps) => {
  return (
    <div title={title ?? "Github"}>
      <svg
        className={` ${className}`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0548 38.6495C16.0548 38.848 15.8323 39.0068 15.5516 39.0068C15.2323 39.0366 15.0097 38.8778 15.0097 38.6495C15.0097 38.451 15.2323 38.2922 15.5129 38.2922C15.8032 38.2624 16.0548 38.4212 16.0548 38.6495ZM13.0452 38.2029C12.9774 38.4014 13.171 38.6297 13.4613 38.6892C13.7129 38.7885 14.0032 38.6892 14.0613 38.4907C14.1194 38.2922 13.9355 38.0639 13.6452 37.9746C13.3935 37.9051 13.1129 38.0044 13.0452 38.2029ZM17.3226 38.0342C17.0419 38.1036 16.8484 38.2922 16.8774 38.5205C16.9065 38.719 17.1581 38.848 17.4484 38.7786C17.729 38.7091 17.9226 38.5205 17.8935 38.322C17.8645 38.1334 17.6032 38.0044 17.3226 38.0342ZM23.6903 0C10.2677 0 0 10.4515 0 24.218C0 35.2253 6.75484 44.6445 16.4032 47.9596C17.6419 48.1878 18.0774 47.4037 18.0774 46.7586C18.0774 46.1432 18.0484 42.7487 18.0484 40.6644C18.0484 40.6644 11.2742 42.1532 9.85161 37.7066C9.85161 37.7066 8.74839 34.8183 7.16129 34.0739C7.16129 34.0739 4.94516 32.5156 7.31613 32.5454C7.31613 32.5454 9.72581 32.7439 11.0516 35.1062C13.171 38.9374 16.7226 37.8356 18.1065 37.1806C18.329 35.5925 18.9581 34.4908 19.6548 33.8357C14.2452 33.2203 8.7871 32.4164 8.7871 22.8681C8.7871 20.1386 9.52258 18.7689 11.071 17.0221C10.8194 16.3769 9.99677 13.7169 11.3226 10.2827C13.3452 9.63757 18 12.9626 18 12.9626C19.9355 12.4068 22.0161 12.1189 24.0774 12.1189C26.1387 12.1189 28.2194 12.4068 30.1548 12.9626C30.1548 12.9626 34.8097 9.62764 36.8323 10.2827C38.1581 13.7268 37.3355 16.3769 37.0839 17.0221C38.6323 18.7789 39.5806 20.1486 39.5806 22.8681C39.5806 32.4462 33.8806 33.2104 28.471 33.8357C29.3613 34.6198 30.1161 36.1086 30.1161 38.4411C30.1161 41.786 30.0871 45.9249 30.0871 46.7387C30.0871 47.3839 30.5323 48.168 31.7613 47.9397C41.4387 44.6445 48 35.2253 48 24.218C48 10.4515 37.1129 0 23.6903 0ZM9.40645 34.2327C9.28064 34.332 9.30968 34.5603 9.47419 34.7488C9.62903 34.9077 9.85161 34.9771 9.97742 34.8481C10.1032 34.7488 10.0742 34.5206 9.90968 34.332C9.75484 34.1732 9.53226 34.1037 9.40645 34.2327ZM8.36129 33.4288C8.29355 33.5578 8.39032 33.7166 8.58387 33.8159C8.73871 33.9151 8.93226 33.8853 9 33.7464C9.06774 33.6173 8.97097 33.4585 8.77742 33.3593C8.58387 33.2997 8.42903 33.3295 8.36129 33.4288ZM11.4968 36.9622C11.3419 37.0912 11.4 37.389 11.6226 37.5776C11.8452 37.8059 12.1258 37.8356 12.2516 37.6768C12.3774 37.5478 12.3194 37.25 12.1258 37.0615C11.9129 36.8332 11.6226 36.8034 11.4968 36.9622ZM10.3935 35.5032C10.2387 35.6024 10.2387 35.8605 10.3935 36.0888C10.5484 36.3171 10.8097 36.4163 10.9355 36.3171C11.0903 36.188 11.0903 35.93 10.9355 35.7017C10.8 35.4734 10.5484 35.3741 10.3935 35.5032Z"
          fill={color ?? "black"}
        />
      </svg>
    </div>
  );
};

export default Github;
