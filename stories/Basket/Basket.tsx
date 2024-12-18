"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
// import { BasketStores } from "@/gcui-main/stores/BasketStore";
import Modal from "@/stories/Modal/Modal";
// import { Get, Remove } from "@/gcui-main/functions/Basket";
import { Paragraph } from "@/stories/Typo/Typo";
// import { getPayable } from "@/gcui-main/models/PayableModel";
import Language from "@/gcui-main/locales/Language";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Button from "@/stories/Button/Button";
import Login from "@/stories/Login/Login";
// import { AuthStores } from "@/gcui-main/stores/AuthStore";
import Loader from "@/stories/Loader/Loader";
import Empty from "@/stories/Empty/Empty";

const Basket = () => {
  // const open = useSyncExternalStore(
  //   BasketStores.subscribe,
  //   BasketStores.getSnapshot,
  //   BasketStores.getServerSnapshot
  // );
  // const auth = useSyncExternalStore(
  //   AuthStores.subscribe,
  //   AuthStores.getSnapshot,
  //   AuthStores.getServerSnapshot
  // );

  const [loadingContinue, setLoadingContinue] = useState(false);
  const [storageBasketItems, setStorageBasketItems] = useState([]);
  useEffect(() => {
    // const basketItems = Get();
    // setStorageBasketItems(basketItems);
  }, []); // Removed dependency on `open`

  //check in clientside to protect Hydration:
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  const PayableItem = ({ item }) => {
    const [payable, setPayable] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (!item) {
        return;
      }
      setLoading(true);
      // getPayable(parseInt(item)).then((res) => {
      //   setPayable(res);
      //   setLoading(false);
      // });
      setTimeout(() => setLoading(false), 1000); // Simulated loading
    }, [item]);

    return (
      <div>
        {payable && !loading && (
          <div className={"flex items-center gap-2 justify-between py-2"}>
            <div className={"text-green-400"}>
              {/* {payable.content ? payable.content.title : ""} */}
              Placeholder Title
            </div>
            <div className={"flex items-center"}>
              <div className={"text-slate-400"}>
                {/* {payable.title} */}Title
              </div>
              <div className={"px-1"}>/</div>
              <div className={"text-slate-400"}>
                {/* {payable.duration === "monthly" && (
                  <div className={""}>{Language().monthly}</div>
                )}
                {payable.duration === "yearly" && (
                  <div className={""}>{Language().yearly}</div>
                )}
                {payable.duration === "lifetime" && (
                  <div className={""}>{Language().lifetime}</div>
                )} */}
                Duration
              </div>
            </div>
            <div className={"flex gap-1"}>
              <span>
                {/* {new Intl.NumberFormat("fa-IR").format(payable.price)} */}
                1000
              </span>
              <span>{Language().price_unit}</span>
            </div>
            <div>
              <Button
                color={ColorTypes.danger}
                icon={<span className={"far fa-trash-alt"} />}
                onClick={() => {
                  // Remove(payable.id);
                  // const basketItems = Get();
                  // setStorageBasketItems(basketItems);
                }}
              />
            </div>
          </div>
        )}
        {loading && <Loader />}
      </div>
    );
  };
  return (
    <Modal
      open={true} // Static open state
      onClose={() => {
        // BasketStores.setBasket(false);
      }}
      name={"basket-modal"}
      zindex={10}
    >
      <div className={"p-4 flex flex-col gap-2"}>
        <div
          className={
            "text-slate-300 pb-2 border-b border-slate-600/20 text-xl font-bold"
          }
        >
          <div>{Language().basket}</div>
        </div>
        <div className={"pb-2 border-b border-slate-600/20"}>
          {true && // Static check for content
            storageBasketItems.map((item, index) => {
              return <PayableItem key={index} item={item.id} />;
            })}
          {storageBasketItems.length === 0 && (
            <Empty
              amplitude={24}
              frequency={1.2}
              message={Language().emptyBasket}
            />
          )}
        </div>
        {/* {!auth && <Login login-for-shopping={true} />}
        {auth && ( */}
        <div className={"flex justify-end"}>
          <Button
            onClick={() => {
              setLoadingContinue(true);
            }}
            loading={loadingContinue ? 1 : 0}
            color={ColorTypes.primary}
            tag={"a"}
            href={"/management/pay"}
            icon={<span className={"far fa-chevron-left"} />}
          >
            {Language().continue}
          </Button>
        </div>
        {/* )} */}
      </div>
    </Modal>
  );
};
export default Basket;
