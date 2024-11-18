"use client";
import { useState } from "react";
import Language from "./locales/Language";
import language from "./locales/Language";
import { H1, Paragraph } from "../stories/Typo/Typo";
import Button from "@/stories/Button/Button";
import ColorTypes from "./functions/ColorTypes";
import Add from "./functions/Basket";
import { BasketStores } from "./stores/BasketStore";

const Plans = ({ plans }) => {
  const [activePlan, setActivePlan] = useState("monthly");
  let dbPlansMonthly = [];
  let dbPlansYearly = [];
  let dbPlansLifetime = [];
  plans.map((item) => {
    let itemMeta = [];
    try {
      itemMeta = JSON.parse(item.meta);
      itemMeta = itemMeta.menu;
    } catch (e) {
      console.log(e);
    }
    item.checkList = itemMeta;

    if (item.duration === "monthly") {
      dbPlansMonthly.push(item);
    }
    if (item.duration === "yearly") {
      dbPlansYearly.push(item);
    }
    if (item.duration === "lifetime") {
      dbPlansLifetime.push(item);
    }
  });
  const DurationSelect = ({ duration, isActive }) => {
    return (
      <div
        onClick={() => {
          setActivePlan(duration);
        }}
        className={`box-border transition-all cursor-pointer bg-slate-900 bg-opacity-50 p-4 rounded-xl mt-4 group ${
          isActive === duration ? "active border border-indigo-500" : ""
        }`}
      >
        <div>
          <div
            className={
              "transition-all duration-500 group-[.active]:bg-indigo-500 bg-slate-500 w-4 h-4 rounded-full inline-block me-2"
            }
          ></div>
          {Language()[duration]}
        </div>
        <div className={"text-slate-400 text-sm"}>
          {Language()[`description_${duration}`]}
        </div>
      </div>
    );
  };
  const PlanItem = ({ item }) => {
    return (
      <div
        className={`bg-slate-900 bg-opacity-20 p-4 rounded-xl flex flex-col gap-4 ${
          activePlan !== item.duration ? "hidden" : ""
        } ${item._featured ? "animate-onTheEarth" : "animate-dropDown"}`}
      >
        <div className={"text-center"}>
          <H1 element={"div"}>{item.title}</H1>
          <Paragraph
            element={"div"}
            className={"leading-8 text-sm text-slate-400 pt-4"}
          >
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </Paragraph>
        </div>
        <div className={"flex-1 sm:min-h-[40dvh]"}>
          <div>
            {item.checkList.map((item, index) => {
              return (
                <div key={index} className={"flex gap-2 items-center"}>
                  <span
                    className={"far fa-check-circle text-indigo-500"}
                  ></span>
                  <span className={"text-slate-400"}>{item.feature}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"font-light"}>
          <span className={"pe-2"}>{language()["duration"]}</span>:
          <span className={"text-violet-400"}>{language()[item.duration]}</span>
        </div>
        <div
          className={
            "flex justify-between items-center pt-4 border-t border-slate-700"
          }
        >
          <div>
            {item._freemium == 1 && (
              <div className={"text-indigo-500"}>
                <div>
                  <span>{language()["freemium"]}</span>
                  <span className={"text-slate-500 line-through"}>
                    <span className={"pe-2"}>
                      {Intl.NumberFormat().format(item.price)}
                    </span>
                    <span className={"text-sm "}>
                      {language()["price_unit"]}
                    </span>
                  </span>
                </div>
                <div className={"text-sm text-slate-500"}>
                  {language()["freemium_description"]}
                </div>
              </div>
            )}
            {item._freemium == 0 && (
              <span className={"text-indigo-300"}>
                <span className={"text-lg font-bold pe-2"}>
                  {Intl.NumberFormat().format(item.price)}
                </span>
                <span className={""}>{language()["price_unit"]}</span>
              </span>
            )}
          </div>
          <div>
            {item._freemium == 0 && item.fake_price && (
              <span className={"text-slate-500 text-sm line-through"}>
                <span className={"pe-2"}>
                  {Intl.NumberFormat().format(item.fake_price)}
                </span>
                <span className={""}>{language()["price_unit"]}</span>
              </span>
            )}
          </div>
        </div>
        <div>
          <div className={"grid grid-cols-1"}>
            <Button
              particular={item._featured}
              color={ColorTypes.primary}
              className={"!justify-center"}
              icon={<span className={"far fa-shopping-cart"}></span>}
              onClick={() => {
                //add to cart
                Add(item.slug);
                BasketStores.setBasket(true);
              }}
            >
              <span>{language()["build_this_service"]}</span>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
        {dbPlansMonthly.length > 0 && (
          <DurationSelect duration={"monthly"} isActive={activePlan} />
        )}
        {dbPlansYearly.length > 0 && (
          <DurationSelect duration={"yearly"} isActive={activePlan} />
        )}
        {dbPlansLifetime.length > 0 && (
          <DurationSelect duration={"lifetime"} isActive={activePlan} />
        )}
      </div>
      <div className={"mt-12"}>
        <div
          className={`grid grid-cols-1 md:grid-cols-${
            dbPlansMonthly.length > 0 ? 3 : 2
          } gap-4`}
        >
          {dbPlansMonthly.map((item, index) => {
            return <PlanItem item={item} key={index} />;
          })}
          {dbPlansYearly.map((item, index) => {
            return <PlanItem item={item} key={index} />;
          })}
          {dbPlansLifetime.map((item, index) => {
            return <PlanItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Plans;
