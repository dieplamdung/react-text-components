var _svg, _svg2, _svg3, _svg4, _svg5, _svg6;

import React, { memo, useMemo } from 'react';
import colors from "../../../theme/colors";
import { Box } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Platform(props) {
  const {
    isSelect,
    titleIcon,
    onClick
  } = props;
  const renderIcon = useMemo(() => {
    const listIcon = {
      ps4: _svg || (_svg = /*#__PURE__*/_jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/_jsxs("g", {
          clipPath: "url(#clip0_11418_23940)",
          children: [/*#__PURE__*/_jsx("path", {
            d: "M21.3285 12.5469H16.8645C15.5685 12.5469 14.9352 13.3562 14.9352 14.4015V17.5922C14.9352 18.2415 14.6285 18.7095 13.9858 18.7095H9.77652C9.76379 18.7095 9.75158 18.7146 9.74257 18.7236C9.73357 18.7326 9.72852 18.7448 9.72852 18.7575V19.3989C9.72852 19.4116 9.73357 19.4238 9.74257 19.4328C9.75158 19.4418 9.76379 19.4469 9.77652 19.4469H14.4618C15.7592 19.4469 16.3952 18.6375 16.3952 17.5935V14.4015C16.3952 13.7509 16.6992 13.2829 17.3418 13.2829H21.3285C21.3418 13.2829 21.3525 13.2775 21.3618 13.2695C21.3663 13.2649 21.3697 13.2595 21.372 13.2536C21.3743 13.2476 21.3754 13.2412 21.3752 13.2349V12.5949C21.3752 12.5824 21.3703 12.5704 21.3616 12.5614C21.3529 12.5524 21.341 12.5472 21.3285 12.5469Z",
            fill: "black"
          }), /*#__PURE__*/_jsx("path", {
            d: "M8.13341 12.5469H0.0520775C0.0457031 12.5467 0.0393544 12.5478 0.0334022 12.5501C0.02745 12.5524 0.0220137 12.5558 0.0174108 12.5602C0.00861997 12.5696 0.00383611 12.582 0.00407748 12.5949V13.2362C0.00407748 13.2496 0.00941082 13.2629 0.0187442 13.2709C0.0280775 13.2802 0.0400775 13.2842 0.0534108 13.2842H7.65074C8.29341 13.2842 8.59741 13.7509 8.59741 14.4016C8.59741 15.0509 8.29341 15.5202 7.65074 15.5202H1.63741C0.704077 15.5202 7.7482e-05 16.3109 7.7482e-05 17.3602V19.3962C-0.000295395 19.4027 0.000680429 19.4092 0.00294292 19.4152C0.00520542 19.4213 0.00870509 19.4268 0.0132195 19.4315C0.0177338 19.4361 0.0231642 19.4398 0.0291652 19.4422C0.0351663 19.4446 0.0416069 19.4458 0.0480775 19.4456H1.41741C1.42383 19.4456 1.43018 19.4443 1.43609 19.4418C1.44201 19.4393 1.44736 19.4356 1.45183 19.431C1.45631 19.4264 1.45981 19.421 1.46215 19.415C1.46448 19.409 1.46559 19.4026 1.46541 19.3962V17.3589C1.46541 16.7096 1.83874 16.2549 2.36941 16.2549H8.12941C9.42674 16.2549 10.0601 15.4456 10.0601 14.4016C10.0601 13.3576 9.42674 12.5469 8.13074 12.5469",
            fill: "black"
          }), /*#__PURE__*/_jsx("path", {
            d: "M31.9504 17.9722H30.5824C30.5692 17.9722 30.5565 17.967 30.547 17.9578C30.5376 17.9486 30.5321 17.9361 30.5317 17.9229V13.2802C30.5317 12.5655 30.0437 12.3335 29.3557 12.7615L21.1091 17.8749C20.7851 18.0762 20.6771 18.3015 20.7544 18.4695C20.8331 18.6375 20.9997 18.7135 21.3557 18.7135H29.0077C29.0179 18.7147 29.0276 18.7189 29.0354 18.7255C29.0432 18.7322 29.0489 18.741 29.0517 18.7509V19.4015C29.0517 19.4145 29.0567 19.427 29.0656 19.4364C29.0745 19.4459 29.0868 19.4515 29.0997 19.4522H30.4731C30.4863 19.4518 30.4988 19.4463 30.508 19.4369C30.5172 19.4274 30.5224 19.4147 30.5224 19.4015V18.7589C30.5224 18.7455 30.5277 18.7322 30.5357 18.7229C30.545 18.7137 30.5574 18.7084 30.5704 18.7082H31.9504C31.9637 18.7082 31.9771 18.7029 31.9851 18.6949C31.99 18.6902 31.994 18.6847 31.9967 18.6785C31.9995 18.6723 32.0009 18.6656 32.0011 18.6589V18.0189C32.0004 18.0059 31.9947 17.9937 31.9853 17.9847C31.9759 17.9758 31.9634 17.9708 31.9504 17.9709V17.9722ZM29.0637 17.9188C29.0637 17.9322 29.0584 17.9455 29.0504 17.9535C29.0414 17.9632 29.0289 17.9689 29.0157 17.9695H22.6024C22.5491 17.9695 22.5237 17.9562 22.5157 17.9375C22.5077 17.9189 22.5157 17.8842 22.5637 17.8575L28.9451 13.8909C28.9891 13.8629 29.0637 13.8682 29.0637 13.9562V17.9188Z",
            fill: "black"
          })]
        }), /*#__PURE__*/_jsx("defs", {
          children: /*#__PURE__*/_jsx("clipPath", {
            id: "clip0_11418_23940",
            children: /*#__PURE__*/_jsx("rect", {
              width: "32",
              height: "32",
              fill: "white"
            })
          })
        })]
      })),
      ps5: _svg2 || (_svg2 = /*#__PURE__*/_jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/_jsxs("g", {
          clipPath: "url(#clip0_11418_89065)",
          children: [/*#__PURE__*/_jsx("path", {
            d: "M16.2573 12.5789C14.916 12.5789 14.26 13.4029 14.26 14.4682V17.4335C14.26 18.0949 13.816 18.6815 13.1507 18.6815H9.68C9.66692 18.6815 9.65437 18.6867 9.64512 18.696C9.63587 18.7052 9.63067 18.7178 9.63067 18.7309V19.3842C9.63067 19.3973 9.63587 19.4098 9.64512 19.4191C9.65437 19.4283 9.66692 19.4335 9.68 19.4335H13.7693C15.1107 19.4335 15.7693 18.7269 15.7693 17.6629V14.4669C15.7693 13.8029 16.2533 13.3269 16.9187 13.3269H20.4067C20.4198 13.3269 20.4323 13.3217 20.4416 13.3124C20.4508 13.3032 20.456 13.2906 20.456 13.2775V12.6269C20.4562 12.614 20.4515 12.6016 20.4427 12.5922C20.4379 12.5875 20.4323 12.5838 20.4261 12.5813C20.42 12.5788 20.4133 12.5775 20.4067 12.5775H16.256L16.2573 12.5789ZM8.11467 12.5469H0.0533367C0.0402527 12.5469 0.0277046 12.5521 0.0184528 12.5613C0.009201 12.5706 0.0040034 12.5831 0.0040034 12.5962V13.3082C0.0040034 13.3349 0.0280034 13.3575 0.0546701 13.3575H7.61467C8.00667 13.3575 8.59467 13.6749 8.59467 14.4375C8.59467 15.1989 7.94134 15.5189 7.61467 15.5189H1.69334C0.72667 15.5189 3.39705e-06 16.3842 3.39705e-06 17.4522V19.4109C-0.000112948 19.4207 0.00276169 19.4302 0.0082424 19.4383C0.0137231 19.4464 0.0215483 19.4527 0.0306701 19.4562C0.0360034 19.4589 0.0440034 19.4602 0.0493367 19.4602H1.464C1.47059 19.4604 1.47715 19.4592 1.48329 19.4568C1.48943 19.4544 1.49503 19.4508 1.49975 19.4462C1.50448 19.4416 1.50823 19.4361 1.51079 19.4301C1.51335 19.424 1.51467 19.4175 1.51467 19.4109V17.4509C1.51467 16.7895 2.01467 16.2842 2.56267 16.2842L8.11067 16.3255C9.45067 16.3255 10.1053 15.5015 10.1053 14.4375C10.1053 13.3735 9.452 12.5469 8.11067 12.5469H8.11467Z",
            fill: "#000000"
          }), /*#__PURE__*/_jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.9641 12.5795H31.6348C31.6815 12.5795 31.7041 12.5968 31.7041 12.6328V13.2955C31.7041 13.3275 31.6815 13.3421 31.6348 13.3381H23.4455C23.4001 13.3381 23.3721 13.3541 23.3615 13.3835V14.9835C23.3615 15.1035 23.4628 15.4888 23.8548 15.4888H30.0041C30.7548 15.4888 32.0001 16.0115 32.0001 17.4581C32.0001 18.9048 30.6935 19.4421 30.1615 19.4421H21.9641C21.9241 19.4421 21.9055 19.4355 21.9055 19.3875C21.9055 19.3381 21.9028 18.7635 21.9055 18.7341C21.9081 18.7021 21.9188 18.6848 21.9641 18.6848H29.1975C29.6241 18.6848 30.4855 18.3621 30.4855 17.4581C30.4855 16.5555 29.5975 16.2848 29.3721 16.2848H22.8788C22.7468 16.2814 22.6169 16.2504 22.4975 16.1939C22.3782 16.1375 22.2719 16.0567 22.1855 15.9568C21.9415 15.6755 21.9055 15.5168 21.9055 15.1381V12.6315C21.9055 12.5968 21.9255 12.5781 21.9641 12.5781V12.5795Z",
            fill: "#000000"
          })]
        }), /*#__PURE__*/_jsx("defs", {
          children: /*#__PURE__*/_jsx("clipPath", {
            id: "clip0_11418_89065",
            children: /*#__PURE__*/_jsx("rect", {
              width: "32",
              height: "32",
              fill: "white"
            })
          })
        })]
      })),
      stream: _svg3 || (_svg3 = /*#__PURE__*/_jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          d: "M23.5332 12.0003C23.5332 18.4217 18.3772 23.6257 12.0145 23.6257C6.7372 23.6257 2.29454 20.0483 0.93187 15.1697L5.34654 17.011C5.49162 17.7529 5.88914 18.4217 6.47153 18.9037C7.05391 19.3857 7.78524 19.6512 8.5412 19.655C10.3599 19.655 11.8745 18.1363 11.7972 16.2097L15.7145 13.3883C18.1305 13.4483 20.1572 11.471 20.1572 9.00567C20.1572 6.58567 18.2105 4.62167 15.8132 4.62167C13.4145 4.62167 11.4665 6.591 11.4665 9.00567V9.06167L8.72254 13.079C8.00573 13.0378 7.29571 13.2372 6.7052 13.6457L0.533203 11.067C1.00654 5.08033 5.96387 0.375 12.0145 0.375C18.3772 0.375 23.5332 5.579 23.5332 12.0003ZM7.7532 18.0137L6.33987 17.4243C6.59854 17.9697 7.04654 18.399 7.59987 18.6337C7.89727 18.7578 8.21631 18.8218 8.53859 18.822C8.86086 18.8221 9.17997 18.7585 9.47749 18.6346C9.77502 18.5108 10.0451 18.3292 10.272 18.1004C10.499 17.8716 10.6784 17.6002 10.7999 17.3017C10.9247 17.0025 10.9892 16.6816 10.9899 16.3574C10.9906 16.0332 10.9274 15.7121 10.8039 15.4123C10.6829 15.1131 10.504 14.8407 10.2775 14.6107C10.051 14.3808 9.78126 14.1978 9.48387 14.0723C8.90856 13.8289 8.26112 13.8189 7.67854 14.0443L9.13987 14.6537C9.58252 14.8414 9.93291 15.1966 10.1145 15.6418C10.2962 16.0869 10.2942 16.5859 10.1092 17.0297C10.0204 17.25 9.88876 17.4505 9.72188 17.6196C9.55501 17.7887 9.35622 17.9229 9.13707 18.0146C8.91791 18.1062 8.68273 18.1535 8.44518 18.1535C8.20762 18.1536 7.97242 18.1065 7.7532 18.015V18.0137ZM15.8132 11.9257C14.2172 11.9257 12.9199 10.6123 12.9199 9.00567C12.9199 7.39767 14.2172 6.08567 15.8132 6.08567C17.4079 6.08567 18.7065 7.39767 18.7065 9.00567C18.7065 10.6123 17.4132 11.9257 15.8132 11.9257ZM15.8172 11.1937C17.0172 11.1937 17.9919 10.2097 17.9919 9.00033C17.9919 7.787 17.0185 6.807 15.8172 6.807C14.6172 6.807 13.6425 7.791 13.6425 9.00033C13.6422 9.5787 13.8704 10.1338 14.2775 10.5446C14.6846 10.9554 15.2375 11.1887 15.8159 11.1937H15.8172Z",
          fill: "black"
        })
      })),
      xboxx: _svg4 || (_svg4 = /*#__PURE__*/_jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/_jsx("path", {
          d: "M8.97467 23.9982H7.69467L5.49467 20.9569L3.28 23.9982H2L4.84 20.0809L2.23467 16.4769H3.51467L5.496 19.2076L7.47733 16.4769H8.75733L6.13333 20.0822L8.97333 23.9996L8.97467 23.9982ZM15.6227 21.8622C15.6227 22.5169 15.404 23.0476 14.9667 23.4222C14.5307 23.7956 13.9067 23.9996 13.0947 23.9996H9.584V20.6449H7.89867L8.60133 19.6769H9.584V16.4769H12.9547C13.7187 16.4769 14.296 16.6649 14.7013 17.0236C15.108 17.3836 15.3107 17.8676 15.3107 18.4449C15.3107 19.1622 14.9827 19.7249 14.328 20.0822C14.7493 20.2382 15.0613 20.4889 15.2787 20.7849C15.5133 21.0809 15.6227 21.4556 15.6227 21.8622ZM10.7227 19.6916H12.876C13.3133 19.6916 13.6413 19.5982 13.86 19.3942C14.0773 19.2076 14.1867 18.9116 14.1867 18.5209C14.1867 18.1929 14.0773 17.9276 13.844 17.7409C13.6253 17.5542 13.2973 17.4609 12.876 17.4609H10.7227V19.6916ZM14.468 21.8289C14.468 21.4382 14.3427 21.1262 14.108 20.9396C13.8747 20.7369 13.516 20.6436 13.048 20.6436H10.7227V22.9996H13.032C13.4853 22.9996 13.844 22.8902 14.0933 22.7022C14.3427 22.4996 14.4667 22.2036 14.4667 21.8289H14.468ZM23.3613 20.2369C23.3613 20.8142 23.284 21.3609 23.1133 21.8289C22.9474 22.2898 22.6928 22.7138 22.364 23.0769C22.02 23.4369 21.6307 23.7169 21.1933 23.8889C20.756 24.0756 20.2573 24.1542 19.696 24.1542C19.1493 24.1542 18.6347 24.0609 18.1973 23.8876C17.7499 23.697 17.347 23.4156 17.014 23.0612C16.6809 22.7069 16.4251 22.2872 16.2627 21.8289C16.0874 21.3168 16.0026 20.7781 16.012 20.2369C16.012 19.6596 16.092 19.1142 16.2627 18.6462C16.4347 18.1782 16.684 17.7396 17.0267 17.3822C17.3515 17.0277 17.7515 16.7503 18.1973 16.5702C18.6757 16.3898 19.1834 16.2999 19.6947 16.3049C20.2413 16.3049 20.7413 16.3982 21.1933 16.5716C21.6307 16.7422 22.036 17.0236 22.364 17.3822C22.6907 17.7409 22.9573 18.1782 23.1133 18.6462C23.2693 19.1129 23.3627 19.6449 23.3627 20.2369H23.3613ZM17.1987 20.2369C17.1987 21.1262 17.4333 21.8289 17.8853 22.3436C18.3387 22.8582 18.9307 23.1236 19.6947 23.1236C20.444 23.1236 21.0533 22.8596 21.5053 22.3436C21.9587 21.8289 22.176 21.1262 22.176 20.2369C22.176 19.3476 21.9573 18.6302 21.5053 18.1156C21.052 17.6009 20.444 17.3356 19.6947 17.3356C18.9467 17.3356 18.3373 17.6009 17.8853 18.1156C17.432 18.6462 17.1987 19.3476 17.1987 20.2369ZM26.9827 20.0809L29.604 16.4769H28.324L26.3427 19.2076L24.3613 16.4769H23.0813L25.7027 20.0809L22.8627 23.9982H24.1427L26.3427 20.9556L28.56 23.9982H29.84L26.984 20.0809H26.9827Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M15.9184 7.02413C17.8064 8.46013 21.005 11.9868 20.0384 12.9855C18.8988 13.9847 17.434 14.5342 15.9184 14.5308C14.4023 14.537 12.9365 13.9872 11.7984 12.9855C10.8157 11.9868 14.0304 8.46013 15.9024 7.04013C15.9024 7.02413 15.9184 7.02413 15.9184 7.02413ZM19.1797 2.92146C18.2016 2.31207 17.0708 1.99259 15.9184 2.00013C14.6544 2.00013 13.609 2.3428 12.657 2.92013C12.641 2.92013 12.641 2.93613 12.641 2.95213C12.641 2.96813 12.657 2.96813 12.6717 2.96813C13.889 2.70146 15.7304 3.74813 15.9024 3.85746H15.933C16.105 3.74813 17.9464 2.7028 19.1637 2.96813C19.1797 2.96813 19.1944 2.96813 19.1944 2.95213C19.1944 2.93613 19.1944 2.92146 19.1797 2.92146ZM11.533 3.7948C11.517 3.7948 11.517 3.8108 11.5024 3.8108C10.4276 4.88348 9.77821 6.30954 9.67475 7.82452C9.57128 9.33951 10.0207 10.8406 10.9397 12.0495C10.9397 12.0655 10.9557 12.0655 10.9717 12.0655C10.9864 12.0655 10.9864 12.0495 10.9717 12.0335C10.4877 10.5508 12.937 6.97746 14.201 5.48013L14.217 5.46413C14.217 5.44813 14.217 5.44813 14.201 5.44813C12.281 3.54546 11.641 3.74813 11.533 3.7948ZM17.6344 5.43346L17.6184 5.44813C17.6184 5.44813 17.6184 5.46413 17.6344 5.46413C18.8984 6.9628 21.333 10.5361 20.865 12.0188V12.0495C20.8797 12.0495 20.8957 12.0495 20.8957 12.0335C21.6917 10.9881 22.1757 9.66146 22.1757 8.24146C22.1757 6.50946 21.473 4.9348 20.3184 3.7948C20.3024 3.7788 20.3024 3.7788 20.2877 3.7788C20.1944 3.74813 19.5544 3.54546 17.6344 5.43213V5.43346Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M9.8639 27.421V27.0156H7.72656V30.0276H9.8639V29.6063H8.17856V28.6863H9.67723V28.2956H8.17856V27.4223H9.8639V27.421Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M6.25859 28.6228C6.10259 28.4828 5.85326 28.3735 5.51059 28.3108L5.24393 28.2482C5.06195 28.2197 4.8872 28.1563 4.72926 28.0615C4.63593 27.9988 4.58926 27.8895 4.58926 27.7495C4.58537 27.6883 4.59776 27.6273 4.62516 27.5724C4.65256 27.5176 4.694 27.4711 4.74526 27.4375C4.85459 27.3588 4.99459 27.3282 5.19859 27.3282C5.44793 27.3282 5.63459 27.3748 5.74526 27.4682C5.80261 27.5226 5.84862 27.5879 5.88066 27.6602C5.91269 27.7325 5.93012 27.8104 5.93193 27.8895H6.39859C6.40351 27.7565 6.37809 27.6241 6.32426 27.5024C6.27044 27.3806 6.18962 27.2727 6.08793 27.1868C5.88393 27.0162 5.58793 26.9375 5.19859 26.9375C4.87059 26.9375 4.60526 27.0162 4.41726 27.1562C4.32593 27.2249 4.2527 27.3148 4.20392 27.4182C4.15513 27.5216 4.13225 27.6353 4.13726 27.7495C4.13726 27.9988 4.21459 28.1868 4.37059 28.3268C4.52659 28.4668 4.76126 28.5762 5.07326 28.6388L5.32259 28.7015C5.57193 28.7642 5.75993 28.8255 5.85326 28.8882C5.94659 28.9668 5.99326 29.0602 5.99326 29.1855C5.99326 29.3402 5.93193 29.4655 5.82259 29.5588C5.66569 29.648 5.48693 29.6914 5.30659 29.6842C5.04259 29.6842 4.83993 29.6215 4.69859 29.5122C4.55859 29.4028 4.49593 29.2322 4.49593 29.0135H4.05859C4.05859 29.3562 4.16793 29.6215 4.40259 29.8095C4.62126 29.9962 4.93326 30.0748 5.32259 30.0748C5.68259 30.0748 5.97859 29.9962 6.18126 29.8402C6.28094 29.7628 6.36109 29.6632 6.41528 29.5493C6.46947 29.4353 6.49618 29.3103 6.49326 29.1842C6.49738 29.0794 6.47851 28.9749 6.43797 28.8782C6.39743 28.7814 6.33621 28.6947 6.25859 28.6242V28.6228Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M13.4825 29.653L13.4505 29.185C13.4518 29.0424 13.414 28.9022 13.3412 28.7796C13.2669 28.6748 13.1552 28.6023 13.0292 28.577C13.1779 28.5354 13.3061 28.4404 13.3892 28.3103C13.4859 28.1744 13.5351 28.0103 13.5292 27.8436C13.5358 27.7268 13.5136 27.6101 13.4645 27.5039C13.4155 27.3976 13.3411 27.3051 13.2479 27.2343C13.0612 27.0943 12.8105 27.0156 12.4839 27.0156H11.1719V30.0276H11.6252V28.7943H12.4985C12.6705 28.7943 12.7959 28.841 12.8732 28.9196C12.9519 28.9983 12.9985 29.1383 12.9985 29.325L13.0132 29.653C13.0132 29.825 13.0452 29.949 13.1065 30.0436H13.5759C13.5247 29.919 13.4932 29.7872 13.4825 29.653ZM11.6412 27.4063H12.4679C12.6234 27.3973 12.7775 27.441 12.9052 27.5303C12.9985 27.609 13.0612 27.733 13.0612 27.8903C13.0612 28.0463 13.0132 28.1863 12.9199 28.2636C12.865 28.3128 12.8009 28.3506 12.7314 28.3749C12.6618 28.3991 12.5881 28.4094 12.5145 28.405H11.6559V27.405H11.6412V27.4063Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M14.8906 27.0156H15.344V30.0276H14.8906V27.0156Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M19.0095 27.421V27.0156H16.8535V30.0276H19.0082V29.6063H17.3068V28.6863H18.8042V28.2956H17.3068V27.4223H19.0082L19.0095 27.421Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M22.4429 28.6228C22.2869 28.4828 22.0363 28.3735 21.6936 28.3108L21.4269 28.2482C21.2454 28.2195 21.0711 28.1561 20.9136 28.0615C20.8203 27.9988 20.7723 27.8895 20.7723 27.7495C20.7684 27.6883 20.7808 27.6273 20.8082 27.5724C20.8356 27.5176 20.877 27.4711 20.9283 27.4375C21.0376 27.3588 21.1789 27.3282 21.3816 27.3282C21.6309 27.3282 21.8176 27.3748 21.9283 27.4682C21.9856 27.5226 22.0316 27.5879 22.0637 27.6602C22.0957 27.7325 22.1131 27.8104 22.1149 27.8895H22.5683C22.5729 27.7563 22.547 27.6237 22.4927 27.502C22.4384 27.3802 22.3571 27.2725 22.2549 27.1868C22.0523 27.0162 21.7563 26.9375 21.3656 26.9375C21.0376 26.9375 20.7723 27.0162 20.5856 27.1562C20.4943 27.2249 20.421 27.3148 20.3723 27.4182C20.3235 27.5216 20.3006 27.6353 20.3056 27.7495C20.3056 27.9988 20.3829 28.1868 20.5389 28.3268C20.6949 28.4668 20.9283 28.5762 21.2403 28.6388L21.4909 28.7015C21.7403 28.7642 21.9269 28.8255 22.0216 28.8882C22.1149 28.9668 22.1616 29.0602 22.1616 29.1855C22.1616 29.3402 22.0989 29.4655 21.9896 29.5588C21.8331 29.6478 21.6548 29.6913 21.4749 29.6842C21.2083 29.6842 21.0069 29.6215 20.8656 29.5122C20.7256 29.4028 20.6629 29.2322 20.6629 29.0135H20.2109C20.2109 29.3562 20.3203 29.6215 20.5536 29.8095C20.7723 29.9962 21.0843 30.0748 21.4736 30.0748C21.8336 30.0748 22.1296 29.9962 22.3336 29.8402C22.4333 29.7628 22.5134 29.6632 22.5676 29.5493C22.6218 29.4353 22.6485 29.3103 22.6456 29.1842C22.6624 29.0813 22.6526 28.9758 22.6172 28.8778C22.5817 28.7798 22.5217 28.6924 22.4429 28.6242V28.6228Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M26.6065 28.4516L27.6531 27.0156H27.1371L26.3411 28.109L25.5611 27.0156H25.0465L26.0918 28.4516L24.9531 30.0276H25.4678L26.3411 28.8103L27.2318 30.0276H27.7465L26.6065 28.4516Z",
          fill: "black"
        })]
      })),
      xboxone: _svg5 || (_svg5 = /*#__PURE__*/_jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/_jsx("path", {
          d: "M16.9291 25.1571L15.3731 23.0704L13.8158 25.1571H13.1758L15.0464 22.6371L13.3371 20.3438H13.9771L15.3731 22.2144L16.7638 20.3451H17.4038L15.6971 22.6371L17.5691 25.1571H16.9291Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M4.79506 25.161L2.92039 22.641L4.62972 20.3477H3.98972L2.59772 22.2183L1.20306 20.349H0.565724L2.27372 22.641L0.400391 25.161H1.04039L2.59772 23.0743L4.15372 25.161H4.79372H4.79506Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M8.35887 22.8206C8.26554 22.7406 8.16287 22.6739 8.05221 22.6219C8.22568 22.5306 8.37156 22.3946 8.47472 22.2279C8.57788 22.0612 8.63455 21.8699 8.63887 21.6739C8.63887 21.3726 8.52287 20.3633 7.05487 20.3633H5.06021V22.4379H4.40021C4.31487 22.5499 4.12021 22.8113 4.04688 22.9206H5.06021V25.1766H7.04021C8.11087 25.1766 8.77621 24.6366 8.77621 23.7699C8.78274 23.5905 8.74859 23.4119 8.67632 23.2475C8.60405 23.0831 8.49553 22.9371 8.35887 22.8206ZM5.61221 20.8513H7.04554C7.43354 20.8513 8.08421 20.9473 8.08421 21.6166C8.08421 22.1233 7.70554 22.4233 7.04554 22.4233H5.61354V20.8513H5.61221ZM7.04554 24.6579H5.61354V22.9086H7.04687C7.59087 22.9086 8.24021 23.0553 8.24021 23.7459C8.23487 24.5406 7.48688 24.6579 7.04021 24.6579H7.04687H7.04554Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M11.3527 20.2422C9.98601 20.2422 9.02734 21.2742 9.02734 22.7529C9.02734 24.2329 9.98601 25.2675 11.3527 25.2675C12.7193 25.2675 13.6753 24.2342 13.6753 22.7529C13.6753 21.2715 12.7193 20.2422 11.3527 20.2422ZM11.3527 24.7595C10.3087 24.7595 9.57934 23.9329 9.57934 22.7529C9.57934 21.5729 10.3087 20.7475 11.3527 20.7475C12.3967 20.7475 13.122 21.5729 13.122 22.7529C13.122 23.9342 12.3927 24.7595 11.3527 24.7595Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M27.027 20.3464V24.2957L24.0803 20.3438H23.5977V25.1504H24.1377V21.2904L27.0243 25.1544H27.567V20.3464H27.027Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M20.6809 20.1406C19.3102 20.1406 18.3516 21.1766 18.3516 22.6553C18.3516 24.1353 19.3102 25.17 20.6809 25.17C22.0502 25.17 23.0022 24.138 23.0022 22.6553C23.0022 21.1753 22.0476 20.1406 20.6809 20.1406ZM20.6809 24.658C19.6369 24.658 18.9049 23.8326 18.9049 22.6526C18.9049 21.4726 19.6369 20.6473 20.6809 20.6473C21.7236 20.6473 22.4476 21.4726 22.4476 22.6526C22.4476 23.834 21.7209 24.662 20.6809 24.662V24.658Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M28.7244 24.6838V22.9077H31.4057V22.4344H28.7244V20.8171H31.5857V20.3438H28.1777V25.1544H31.6204V24.6838H28.7244Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M11.9765 8.85462C10.9795 9.81965 10.3733 11.1185 10.2742 12.5026C10.175 13.8866 10.5898 15.2587 11.4392 16.356C11.4435 16.3595 11.4489 16.3615 11.4545 16.3615C11.4601 16.3615 11.4656 16.3595 11.4699 16.356V16.3266C11.0339 14.9986 13.2832 11.7333 14.4365 10.3813C14.4378 10.3756 14.4378 10.3697 14.4365 10.364C14.4388 10.3579 14.4388 10.3513 14.4365 10.3453C12.4872 8.42129 11.9645 8.86662 11.9739 8.86129",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M20.0746 8.85516C21.0698 9.82126 21.6747 11.1199 21.7738 12.5034C21.8729 13.8868 21.4593 15.2584 20.6119 16.3565C20.6119 16.3565 20.5906 16.3725 20.5813 16.3565C20.5719 16.3432 20.5813 16.3392 20.5813 16.3272C21.0239 14.9845 18.7746 11.7285 17.6159 10.3645V10.3498C17.6143 10.3465 17.6134 10.3429 17.6133 10.3392C17.6133 10.3352 17.6133 10.3312 17.6159 10.3285C19.5679 8.42183 20.0866 8.86716 20.0813 8.86183",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M16.0296 7.21489C17.0892 7.21059 18.1293 7.49946 19.035 8.04956L19.039 8.05622L19.0416 8.06289L19.039 8.07089L19.035 8.07622H19.011C17.891 7.83889 16.1936 8.79089 16.0323 8.88689C15.6083 8.64689 14.0363 7.83356 13.0483 8.08289C13.0445 8.08592 13.0398 8.08757 13.035 8.08757C13.0301 8.08757 13.0254 8.08592 13.0216 8.08289C13.019 8.07894 13.0176 8.0743 13.0176 8.06956C13.0176 8.06481 13.019 8.06017 13.0216 8.05622C13.9275 7.50391 14.9686 7.21318 16.0296 7.21622V7.21489Z",
          fill: "black"
        }), /*#__PURE__*/_jsx("path", {
          d: "M16.0259 11.7852H16.0486C17.7726 13.0798 20.7286 16.2838 19.8259 17.2065C18.7684 18.1148 17.42 18.6135 16.0259 18.6118C14.6323 18.6132 13.2844 18.1145 12.2272 17.2065C11.3272 16.3025 14.2846 13.0945 16.0086 11.7998C16.0147 11.7981 16.0211 11.7981 16.0272 11.7998",
          fill: "black"
        })]
      })),
      nintendo: _svg6 || (_svg6 = /*#__PURE__*/_jsx("svg", {
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          d: "M14.408 0L13.4547 0.008H11.8213V19.8627H15.22C16.5539 19.8452 17.8275 19.3043 18.7663 18.3565C19.7051 17.4087 20.2339 16.13 20.2387 14.796V5.08267C20.2381 3.74589 19.7112 2.46309 18.7719 1.51188C17.8327 0.56066 16.5567 0.0175245 15.22 0L14.408 0ZM5.01867 0C3.68477 0.0174798 2.41115 0.558407 1.47235 1.50618C0.533562 2.45395 0.00478223 3.73266 0 5.06667V14.78C0.000586112 16.1168 0.52751 17.3996 1.46675 18.3508C2.40599 19.302 3.682 19.8451 5.01867 19.8627H9.716V0.008H5.832V0H5.01867ZM5.08133 1.64H8.07867V18.2253H5.13867C2.536 17.988 1.74 16.468 1.63467 14.388V5.892H3.15333V5.97867C3.15449 6.31169 3.24472 6.63834 3.41466 6.92475C3.5846 7.21115 3.82807 7.44687 4.11982 7.60747C4.41156 7.76807 4.74096 7.84769 5.07385 7.83808C5.40674 7.82847 5.73099 7.72998 6.01299 7.55282C6.29499 7.37567 6.52445 7.12629 6.67759 6.83056C6.83073 6.53483 6.90197 6.20352 6.88391 5.87098C6.86585 5.53845 6.75916 5.21679 6.5749 4.93939C6.39064 4.66198 6.13552 4.43892 5.836 4.29333C5.55758 4.15874 5.25008 4.09543 4.94113 4.1091C4.63219 4.12276 4.33148 4.21296 4.06602 4.3716C3.80056 4.53024 3.57868 4.75234 3.4203 5.01796C3.26192 5.28357 3.17202 5.58437 3.15867 5.89333H1.63733V5.50133C1.736 3.42267 2.516 1.90133 5.08533 1.63467L5.08133 1.64ZM15.772 8.92267C16.1697 8.92267 16.5584 9.04059 16.8891 9.26153C17.2197 9.48246 17.4774 9.79648 17.6296 10.1639C17.7818 10.5313 17.8216 10.9356 17.744 11.3256C17.6665 11.7156 17.475 12.0739 17.1938 12.3551C16.9126 12.6363 16.5543 12.8278 16.1643 12.9054C15.7742 12.9829 15.37 12.9431 15.0026 12.7909C14.6351 12.6388 14.3211 12.3811 14.1002 12.0504C13.8793 11.7197 13.7613 11.331 13.7613 10.9333C13.7599 10.669 13.8109 10.407 13.9114 10.1625C14.0118 9.91803 14.1598 9.69587 14.3466 9.5089C14.5335 9.32193 14.7555 9.17385 15 9.07323C15.2444 8.9726 15.5063 8.92143 15.7707 8.92267H15.772Z",
          fill: "#1E1E1E"
        })
      }))
    };
    return listIcon[titleIcon || ""] || "";
  }, [titleIcon]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: {
        xs: "76px",
        md: "80px"
      },
      minWidth: {
        xs: "76px",
        md: "80px"
      },
      height: "56px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid",
      borderColor: isSelect ? colors.secondary.bandaiNamcoBlue : colors.neutral.neutral5,
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s",
      "& path": {
        fill: isSelect ? `${colors.secondary.bandaiNamcoBlue}` : "#000000"
      },
      "&:hover": {
        borderColor: colors.secondary.bandaiNamcoBlue,
        "& path": {
          fill: `${colors.secondary.bandaiNamcoBlue}`
        }
      }
    },
    onClick: onClick,
    children: renderIcon
  });
}

export default /*#__PURE__*/memo(Platform);