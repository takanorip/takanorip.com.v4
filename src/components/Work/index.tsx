import { FC } from "react";
import Button from "../Button/index";
import ExternalLink from "../Svg/ExternalLink";
import styles from "./styles.module.css";
import { format, addHours } from "date-fns";

type Props = {
  data: any;
  spekerdeckInfo: any;
};

const Work: FC<Props> = ({ data, spekerdeckInfo }) => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        {spekerdeckInfo ? (
          <iframe
            className="speakerdeck-iframe"
            src={spekerdeckInfo.link}
            title={spekerdeckInfo.title}
            allowFullScreen
          />
        ) : (
          <img className={styles.image} src={data.image.url} alt={data.title} />
        )}
      </figure>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.info}>
          <div className={styles.infoCategory}>
            {data.category.map((c) => (
              <p key={c} className={styles.infoCategoryItem}>
                {c}
              </p>
            ))}
          </div>
          <div className={styles.infoDate}>
            {format(addHours(new Date(data.publishDate), 9), "yyyy.MM.dd")}
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        {data.link && (
          <div className={styles.button}>
            <Button
              className={styles.detailButton}
              to={data.link}
              icon={<ExternalLink />}
            >
              View details
            </Button>
          </div>
        )}
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
    </div>
  );
};

export default Work;
