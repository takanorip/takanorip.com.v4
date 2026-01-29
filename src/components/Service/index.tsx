import styles from "./styles.module.css";
import { FC } from "react";

const Service: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.serviceItem}>
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>開発・デザイン</h3>
          <p className={styles.serviceDescription}>
            デジタルプロダクトの企画から設計・デザイン・実装まで、一貫してサポートします。
            情報設計から開発プロセスのマネジメントまで対応し、ユーザーにとって使いやすく価値のあるプロダクトを一緒に作ります。
          </p>
        </div>
      </div>

      <div className={styles.serviceItem}>
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>デザインシステム開発支援</h3>
          <p className={styles.serviceDescription}>
            デザインシステムの構築・運用をサポートします。
            コンポーネント設計から実装、ドキュメント作成、運用プロセスの確立まで、一貫性のあるユーザー体験の実現を支援します。
          </p>
        </div>
      </div>

      <div className={styles.serviceItem}>
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>デザイン顧問</h3>
          <p className={styles.serviceDescription}>
            デザインプロセスの効率化や組織構築をサポートします。
            デザイナーの責任領域の定義、フィードバック体制の確立、品質と速度のバランス調整など、組織のデザイン力を高めるアドバイスを行います。
          </p>
        </div>
      </div>

      <div className={styles.serviceItem}>
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>
            デザイナーメンター・教育サポート
          </h3>
          <p className={styles.serviceDescription}>
            デザイナーやデザインエンジニアの成長をサポートするメンターサービスを提供します。
            スキルや経験に応じたフィードバックとキャリアサポート、登壇資料の添削、ワークショップ開催などに対応します。
          </p>
        </div>
      </div>

      <div className={styles.serviceItem}>
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>個人向け名刺制作支援</h3>
          <p className={styles.serviceDescription}>
            個人向けの名刺制作を支援します。
            デザインから用紙の選定・印刷まで、一貫してサポートします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
