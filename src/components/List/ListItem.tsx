interface IListItemProps {
  imgUrl: string;
  alt: string;
  mainText: string;
  secondaryText: string;
  badgeNumber: number | null;
  isOnline?: boolean;
}

const ListItem = ({
  alt,
  badgeNumber,
  imgUrl,
  mainText,
  secondaryText,
  isOnline,
}: IListItemProps) => {
  return (
    <div className="UserElem">
      <img src={imgUrl} alt={alt} />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className={`secondary__text ${isOnline === true ? "online" : ""}`}>
          {secondaryText}
        </p>
      </div>
      <span className={`${badgeNumber !== null ? "Badge" : ""}`}>
        {badgeNumber}
      </span>
    </div>
  );
};

export default ListItem;
