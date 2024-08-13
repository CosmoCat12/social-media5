import { Heading } from "../UI";
import ListItem from "./ListItem";
import { listData } from "./data";

const { subscribes, music, closeFriends } = listData;

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends";
  isOnline?: boolean
}

const List = ({ listType}: ListProps) => {
  switch (listType) {
    case "subscribes":
      return (
        <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Близкие друзья" />
            <span className="count">{closeFriends ? closeFriends.length : ""}</span>
          </div>
          {closeFriends &&
            closeFriends.map((userElem) => (
              <ListItem
                isOnline={closeFriends.isOnline}
                imgUrl={userElem.imgUrl}
                alt={userElem.alt}
                badgeNumber={userElem.badgeNumber}
                mainText={userElem.mainText}
                secondaryText={userElem.secondaryText}
              />
            ))}
        </div>
      );
    case "music" :
    return(
      <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Музыка" />
            <span className="count">{subscribes ? subscribes.length : ""}</span>
          </div>
          {subscribes &&
            subscribes.map((userElem) => (
              <ListItem
                imgUrl={userElem.imgUrl}
                alt={userElem.alt}
                badgeNumber={userElem.badgeNumber}
                mainText={userElem.mainText}
                secondaryText={userElem.secondaryText}
              />
            ))}
        </div>
    )
    case "closeFriends":
      return (
        <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Подписки" />
            <span className="count">{music ? music.length : ""}</span>
          </div>
          {music &&
            music.map((userElem) => (
              <ListItem
                imgUrl={userElem.imgUrl}
                alt={userElem.alt}
                badgeNumber={userElem.badgeNumber}
                mainText={userElem.mainText}
                secondaryText={userElem.secondaryText}
              />
            ))}
        </div>
      );
    default:
      break;
  }
  return renderList();
};

export default List;
