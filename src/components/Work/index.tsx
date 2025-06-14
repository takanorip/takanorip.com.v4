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
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.info}>
          <p className={styles.infoDate}>
            <span className={styles.infoTitle}>Date:</span>
            {format(addHours(new Date(data.publishDate), 9), "yyyy.MM.dd")}
          </p>
          <div>
            <span className={styles.infoTitle}>Category:</span>
            <div className={styles.infoCategory}>
              {data.category.map((c, i) => (
                <p key={c} className={styles.infoCategoryItem}>
                  {c}
                  {i !== data.category.length - 1 && ","}
                </p>
              ))}
            </div>
          </div>
          {data.link && !spekerdeckInfo && (
            <div className={styles.button}>
              <Button
                className={styles.detailButton}
                to={data.link}
              >
                詳細を見る
              </Button>
            </div>
          )}
        </div>
      </div>
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
      <div className={styles.descriptionWrapper}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
      <a href="/works" className={styles.backToWorks}>
        一覧へ戻る
      </a>
    </div>
  );
};

export default Work;
