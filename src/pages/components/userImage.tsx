import { useEffect, useState } from "react";
import { Tooltip } from "reactstrap";
import "./assets/styles/userimg.css";
import UserInfoTooltip from "./userInfoTooltip";

type userImageProps = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xg?: boolean;
  id?: string;
  className?: string;
};

const UserImage: React.FC<userImageProps> = ({
  sm,
  md,
  lg,
  xg,
  id,
  className,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sm) {
      setHeight(45);
      setWidth(45);
    }
    if (md) {
      setHeight(50);
      setWidth(50);
    }
    if (lg) {
      setHeight(75);
      setWidth(75);
    }
    if (xg) {
      setHeight(100);
      setWidth(100);
    }
    if (!sm && !md && !lg && !xg) {
      setHeight(50);
      setWidth(50);
    }
  }, [sm, md, lg, xg]);

  return (
    <>
      <img
        src="https://i.ibb.co/dbYs1g1/image-2022-07-30-164237592.png"
        className={`user-image ${className}`}
        style={{ height: height, width: width }}
        id={id}
      />

      <Tooltip
        isOpen={tooltipOpen}
        target="tooltipOpener"
        toggle={toggle}
        placement="bottom"
        className="user-info-tooltip"
        style={{
          borderRadius: 16,
          minWidth: 350,
          boxShadow: "0px 0px 16px -9px rgba(255,255,255,0.19)",
          background: "#15202b",
          padding: 20,
        }}
      >
        <UserInfoTooltip />
      </Tooltip>
    </>
  );
};

export default UserImage;
