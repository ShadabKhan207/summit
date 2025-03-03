import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ThankYou from "../../components/Thankyou/ThankyouMaster";
import UseThankyou from "../../hooks/order-listing-page-hook/order-list-hook";
import { CONSTANTS } from "../../services/config/app-config";
import MetaTag from "../../services/api/general_apis/meta-tag-api";

const Index = () => {
  const router = useRouter();

  const {} = UseThankyou();

  useEffect(() => {
    // ga.event({
    //     action: "page_view",
    //     params: {
    //       not_set:JSON.stringify(ecommerceData)
    //     },
    //   });
  }, []);

  return (
    <>
      <ThankYou />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const method = "get_meta_tags";
  const version = "v1";
  const entity = "seo";
  const params = `?version=${version}&method=${method}&entity=${entity}`;
  const url = `${context.resolvedUrl.split("?")[0]}`;
  console.log("context url", context.resolvedUrl);
  if (CONSTANTS.ENABLE_META_TAGS) {
    let meta_data: any = await MetaTag(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}&page_name=${url}`
    );
    if (meta_data !== null && Object.keys(meta_data).length > 0) {
      return { props: { meta_data } };
    } else {
      return { props: {} };
    }
  } else {
    return { props: {} };
  }
}

export default Index;
