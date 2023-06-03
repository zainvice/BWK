import { useState, useCallback } from "react";
import PostedTipConfirmation from "../components/PostedTipConfirmation";
import PortalPopup from "../components/PortalPopup";
import styles from "./PostTipOverlay.module.css";
const PostTipOverlay = ({ onClose }) => {
  const [isPostedTipConfirmationOpen, setPostedTipConfirmationOpen] =
    useState(false);

  const openPostedTipConfirmation = useCallback(() => {
    setPostedTipConfirmationOpen(true);
  }, []);

  const closePostedTipConfirmation = useCallback(() => {
    setPostedTipConfirmationOpen(false);
  }, []);

  return (
    <>
      <div className={styles.postTipOverlay}>
        <div className={styles.postTipOverlayChild} />
        <div className={styles.postTipOverlayItem} />
        <div className={styles.enterNameOf}>Enter Name of the Match</div>
        <div
          className={styles.egAnyFootball}
        >{`E.g any football, soccer, basketball match `}</div>
        <div className={styles.egAnyFootball1}>
          E.g any football, soccer, basketball team
        </div>
        <div className={styles.addYourAnalysis}>Add your analysis comments</div>
        <div className={styles.eg7080}>E.g 70%, 80%</div>
        <div className={styles.postTipOverlayInner} />
        <div className={styles.addYourAnalysis1}>Add Your Analysis</div>
        <div className={styles.anyAdditionalComments}>
          Any additional comments for the viewers
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.addYourAdditional}>
          Add Your Additional Comments
        </div>
        <div className={styles.postTipOverlayChild1} />
        <div className={styles.enterNameOf1}>
          Enter Name of the Team winning
        </div>
        <div className={styles.postTipOverlayChild2} />
        <div className={styles.enterProbabilityFor}>
          Enter Probability for the win!
        </div>
        <div className={styles.probabilityOfThe}>Probability of the win</div>
        <div className={styles.div}>70%</div>
        <div className={styles.pertentageBar}>
          <div className={styles.pertentageBarChild} />
          <div className={styles.pertentageBarItem} />
        </div>
        <div className={styles.addNewBut}>
          <div
            className={styles.addNewButChild}
            onClick={openPostedTipConfirmation}
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <b className={styles.postNow}>Post Now</b>
          <div className={styles.addNewBut1}>
            <div className={styles.addNewButItem} />
            <b className={styles.cancel}>Cancel -</b>
          </div>
        </div>
      </div>
      {isPostedTipConfirmationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePostedTipConfirmation}
        >
          <PostedTipConfirmation onClose={closePostedTipConfirmation} />
        </PortalPopup>
      )}
    </>
  );
};

export default PostTipOverlay;
