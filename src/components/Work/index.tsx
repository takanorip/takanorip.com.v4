import { FC } from "react";
import Button from "../Button/index";
import ExternalLink from "../Svg/ExternalLink";
import Styles from "./styles.module.css";
import { format, addHours } from "date-fns";

type Props = {
  data: any;
};

const Work: FC<Props> = ({ data }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.titleWrapper}>
        <h2 className={Styles.title}>{data.title}</h2>
        <div className={Styles.infoWrapper}>
          <div className={Styles.info}>
            <dl className={Styles.infoItem}>
              <dt className={Styles.infoTitle}>Date</dt>
              <dd className={Styles.infoDate}>
                {format(addHours(new Date(data.publishDate), 9), "MMM, yyyy")}
              </dd>
            </dl>
            <dl className={Styles.infoItem}>
              <dt className={Styles.infoTitle}>Category</dt>
              <dd className={Styles.infoCategory}>
                {data.category.map((c) => (
                  <p className={Styles.infoCategoryItem}>{c}</p>
                ))}
              </dd>
            </dl>
          </div>
          <div className={Styles.button}>
            <Button
              className={Styles.detailButton}
              to={data.link}
              icon={<ExternalLink />}
            >
              View details
            </Button>
          </div>
        </div>
      </div>
      <figure className={Styles.figure}>
        <img className={Styles.image} src={data.image.url} alt={data.title} />
      </figure>
      <div className={Styles.descriptionWrapper}>
        <div
          className={Styles.description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
    </div>
  );
};

export default Work;
