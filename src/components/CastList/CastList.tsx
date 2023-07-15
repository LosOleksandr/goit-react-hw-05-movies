import { Credits } from "@interfaces/api";
import React from "react";

interface CastListProps {
  cast: Credits[];
}

const CastList: React.FC<CastListProps> = ({ cast }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {cast?.length === 0 ? (
        <h2>No info!</h2>
      ) : (
        <ul>
          {cast?.map(({ id, name, profile_path }) => (
            <li style={{ marginBottom: "1rem" }} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt=""
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastList;
