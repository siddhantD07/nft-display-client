import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { ethers } from "ethers";
import { QRCodeSVG } from "qrcode.react";

import { actionCreators } from "../state/index";
import { USER_DAPP_URL, OPENSEA_IMAGE_API, OS_PAGE_URL } from "../config";
import { CONTRACT_ADDRESS, ABI } from "../contract";
import { Grid } from "@mui/material";

const QRDisplay = ({ displayId }) => {
  const [imageSrc, setImageSrc] = useState("");

  const [displayExists, setDisplayExists] = useState(false);

  const osPageUrl = useRef("");

  const prevTxnHashRef = useRef(""); //useref to avoid unecessary re-render

  const displaySelected = useSelector((state) => state.displaySelected); //id of display selected

  const provider = useSelector((state) => state.provider);

  useEffect(() => {
    try {
      const ctr = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const checkForCurrentDisplay = async () => {
        const response = await ctr.display(displaySelected);
        const endTime = response.endTime.toString();
        const currentBlock = await provider.getBlockNumber();
        const blockNow = await provider.getBlock(currentBlock);
        const startTime = blockNow.timestamp;

        if (endTime < startTime) return;

        const url =
          OPENSEA_IMAGE_API +
          response.collectionAddress +
          "/" +
          response.tokenId;

        const osPage =
          OS_PAGE_URL + response.collectionAddress + "/" + response.tokenId;

        osPageUrl.current = osPage;

        const assetData = await axios.get(url);
        const imageSrcFull = await assetData.data.image_url;

        setImageSrc(imageSrcFull);
        setDisplayExists(true); //set display state to true

        const time = (endTime - startTime) * 1000; //calculate display time
        const timer = setTimeout(() => {
          setDisplayExists(false); //set display state to false
        }, time); //start a timer for duration of the calculated time
      };

      checkForCurrentDisplay(); //execute the async function which will display any existing NFT

      if (prevTxnHashRef.current === "") {
        //start an event only during initial render
        ctr.on("Display", async (displayId, struct, event) => {
          //listen to emitted "display" event
          prevTxnHashRef.current = event.transactionHash; //set the initial txn hash in the ref variable
          const startTime = struct.startTime.toString();
          const endTime = struct.endTime.toString();
          if (displayId.toString() !== displaySelected) return; //ignore if event emitted for another display
          if (struct.collectionAddress === "0x0000000000000000000000000000000000000000") {
            setDisplayExists(false);
            return;
          } else {
            const url =
              OPENSEA_IMAGE_API +
              struct.collectionAddress +
              "/" +
              struct.tokenId; //perepare OS API link

            const osPage =
              OS_PAGE_URL + struct.collectionAddress + "/" + struct.tokenId;

            osPageUrl.current = osPage;

            const asset_data = await axios.get(url);
            const imageSrcFull = await asset_data.data.image_url;

            setImageSrc(imageSrcFull);
            setDisplayExists(true);

            const time = (endTime - startTime) * 1000;

            const timer = setTimeout(() => {
              setDisplayExists(false);
            }, time);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Grid item xs={12}>
      {displayExists ? (
        <>
          <img alt="NFT" src={imageSrc} height="20%"></img>
        </>
      ) : (
        <QRCodeSVG value={USER_DAPP_URL + displaySelected} size={"70vh"} />
      )}
    </Grid>
  );
};

export default QRDisplay;
