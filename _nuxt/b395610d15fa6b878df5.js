(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{357:function(t,e,r){"use strict";r.r(e);var o=r(260),c=r(273),n=r(274),d=r(275),m=r(278),h=r(284),l=r(279),f=r(281),$=r(285),v=r(282),C={components:{ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:h.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:$.a,ConsultationDeskReportsNumberCard:v.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=c.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=c.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=n.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=d.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://okayama.stopcovid19.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは岡山県の新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("岡山県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")+" "+this.$t("(非公式)")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},k=r(4),component=Object(k.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):this._e(),this._v(" "),"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);