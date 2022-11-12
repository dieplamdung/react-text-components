import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Import children components
import {
  IconDelete,
  IconCheckList,
  IconNextCard,
  IconMinus,
  IconPlus,
  IconNextSlide,
  IconPrevSlide,
  IconArrowRight,
  IconClose,
  IconInfoCircle,
  IconPencil,
  IconChecked,
  IconPlaceholder,
  IconArrowDown,
  IconAdd,
  IconShop,
  IconLanguage,
  IconUser,
  IconFb,
  IconTw,
  IconIns,
  IconYtb,
  IconLoading,
  IconSearch,
  IconMenu,
  IconShare,
  // IconFacebook,
  IconInstagram,
  IconTwitter,
  IconLink,
  IconBandaiNamco,
  IconPlayVideo,
  IconNextCircle,
  IconLocation,
  IconNitendo,
  IconPlaystation,
  IconXbox,
  IconPC,
  IconSteam,
  IconCalendar,
  IconWeibo,
  IconKakaoTalk,
  IconDiscountCodes,
  IconRefunds,
  IconShipping,
  IconOrders,
  IconTwitch,
  IconBlog,
  IconBiBi,
  IconDownload,
  IconFailed,
  IconCheckSuccess,
  IconVisa,
  IconEyeOff,
  IconEye,
  IconFreeGifts
} from './Icon';
import Container from '../Container';

export default {
  title: 'Atoms/Icon',
  component: IconCheckList,
  argTypes: {},
  parameters: {
    controls: { include: ['htmlColor'] },
  },
} as ComponentMeta<typeof IconCheckList>;

const TemplateIconFreeGifts: ComponentStory<typeof IconFreeGifts> = (args) => (
  <Container>
      <IconFreeGifts {...args}  />
  </Container>
);
export const FreeGifts = TemplateIconFreeGifts.bind({});
FreeGifts.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconDelete: ComponentStory<typeof IconDelete> = (args) => (
  <Container>
      <IconDelete {...args}  />
  </Container>
);
export const Delete = TemplateIconDelete.bind({});
Delete.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconEyeOff: ComponentStory<typeof IconEyeOff> = (args) => (
  <Container>
    <IconEyeOff {...args} />
  </Container>
);
export const EyeOff = TemplateIconEyeOff.bind({});

const TemplateIconEye: ComponentStory<typeof IconEye> = (args) => (
  <Container>
    <IconEye {...args} />
  </Container>
);
export const Eye = TemplateIconEye.bind({});

const IconVisaIconCheckSuccess: ComponentStory<typeof IconVisa> = (args) => (
  <Container>
    <IconVisa {...args} />
  </Container>
);
export const IVisa = IconVisaIconCheckSuccess.bind({});


const TemplateIconCheckSuccess: ComponentStory<typeof IconCheckSuccess> = (args) => (
  <Container>
    <IconCheckSuccess {...args} />
  </Container>
);
export const CheckSuccess = TemplateIconCheckSuccess.bind({});

const TemplateIconFailed: ComponentStory<typeof IconFailed> = (args) => (
  <Container>
    <IconFailed {...args} />
  </Container>
);
export const Failed = TemplateIconFailed.bind({});

const TemplateIconDownload: ComponentStory<typeof IconDownload> = (args) => (
  <Container>
    <IconDownload {...args} />
  </Container>
);
export const Download = TemplateIconDownload.bind({});
Download.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconBiBi: ComponentStory<typeof IconBiBi> = (args) => (
  <Container>
    <IconBiBi {...args} />
  </Container>
);
export const BiBiIcon = TemplateIconBiBi.bind({});
BiBiIcon.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconBlog: ComponentStory<typeof IconBlog> = (args) => (
  <Container>
    <IconBlog {...args} />
  </Container>
);
export const BlogIcon = TemplateIconBlog.bind({});
BlogIcon.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconTwitch: ComponentStory<typeof IconTwitch> = (args) => (
  <Container>
    <IconTwitch {...args} />
  </Container>
);
export const Twitch = TemplateIconTwitch.bind({});
Twitch.args = {
  htmlColor: '#1E1E1E',
};


const TemplateIconDiscount: ComponentStory<typeof IconDiscountCodes> = (args) => (
  <Container>
    <IconDiscountCodes {...args} />
  </Container>
);
export const Discount = TemplateIconDiscount.bind({});
Discount.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconRefunds: ComponentStory<typeof IconRefunds> = (args) => (
  <Container>
    <IconRefunds {...args} />
  </Container>
);
export const Refunds = TemplateIconRefunds.bind({});
Refunds.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconShipping: ComponentStory<typeof IconShipping> = (args) => (
  <Container>
    <IconShipping {...args} />
  </Container>
);
export const Shipping = TemplateIconShipping.bind({});
Shipping.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconOrders: ComponentStory<typeof IconOrders> = (args) => (
  <Container>
    <IconOrders {...args} />
  </Container>
);
export const Orders = TemplateIconOrders.bind({});
Orders.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconKakaoTalk: ComponentStory<typeof IconKakaoTalk> = (args) => (
  <Container>
    <IconKakaoTalk {...args} />
  </Container>
);
export const KakaoTalk = TemplateIconKakaoTalk.bind({});
KakaoTalk.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconWeibo: ComponentStory<typeof IconWeibo> = (args) => (
  <Container>
    <IconWeibo {...args} />
  </Container>
);
export const Weibo = TemplateIconWeibo.bind({});
Weibo.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconPlaceholder: ComponentStory<typeof IconPlaceholder> = (args) => (
  <Container>
    <IconPlaceholder {...args} />
  </Container>
);
export const Placeholder = TemplateIconPlaceholder.bind({});
Placeholder.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconArrowDown: ComponentStory<typeof IconArrowDown> = (args) => (
  <Container>
    <IconArrowDown {...args} />
  </Container>
);

export const ArrowDown = TemplateIconArrowDown.bind({});
ArrowDown.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconCheckList: ComponentStory<typeof IconCheckList> = (args) => (
  <Container>
    <IconCheckList {...args} />
  </Container>
);
export const CheckList = TemplateIconCheckList.bind({});
CheckList.args = {
  htmlColor: '#FFF392',
};

const TemplateNextCard: ComponentStory<typeof IconNextCard> = (args) => (
  <Container>
    <IconNextCard {...args} />
  </Container>
);
export const NextCard = TemplateNextCard.bind({});
NextCard.args = {
  htmlColor: '#4D91DD',
};

const TemplateMinus: ComponentStory<typeof IconMinus> = (args) => (
  <Container>
    <IconMinus {...args} />
  </Container>
);
export const Minus = TemplateMinus.bind({});
Minus.args = {};

const TemplatePlus: ComponentStory<typeof IconPlus> = (args) => (
  <Container>
    <IconPlus {...args} />
  </Container>
);
export const Plus = TemplatePlus.bind({});
Plus.args = {};

const TemplateIconNextSlide: ComponentStory<typeof IconNextSlide> = (args) => (
  <Container>
    <IconNextSlide {...args} />
  </Container>
);
export const NextSlide = TemplateIconNextSlide.bind({});
NextSlide.args = {
  htmlColor: 'transparent',
};

const TemplateIconPrevSlide: ComponentStory<typeof IconPrevSlide> = (args) => (
  <Container>
    <IconPrevSlide {...args} />
  </Container>
);
export const PrevSlide = TemplateIconPrevSlide.bind({});
PrevSlide.args = {
  htmlColor: 'transparent',
};

const TemplateIconArrowRight: ComponentStory<typeof IconArrowRight> = (args) => (
  <Container>
    <IconArrowRight {...args} />
  </Container>
);
export const ArrowRight = TemplateIconArrowRight.bind({});
ArrowRight.args = {
  htmlColor: '#4D91DD',
};

const TemplateIconClose: ComponentStory<typeof IconClose> = (args) => (
  <Container>
    <IconClose {...args} />
  </Container>
);
export const Close = TemplateIconClose.bind({});
Close.args = {};

const TemplateInfoCircle: ComponentStory<typeof IconInfoCircle> = (args) => (
  <Container>
    <IconInfoCircle {...args} />
  </Container>
);
export const InfoCircle = TemplateInfoCircle.bind({});
InfoCircle.args = {};

const TemplateIconPencil: ComponentStory<typeof IconPencil> = (args) => (
  <Container>
    <IconPencil {...args} />
  </Container>
);
export const Pencil = TemplateIconPencil.bind({});
Pencil.args = {};

const TemplateIconChecked: ComponentStory<typeof IconChecked> = (args) => (
  <Container>
    <IconChecked {...args} />
  </Container>
);
export const Checked = TemplateIconChecked.bind({});
Checked.args = {
  htmlColor: '#36D56D',
};

const TemplateIconAdd: ComponentStory<typeof IconAdd> = (args) => (
  <Container>
    <IconAdd {...args} />
  </Container>
);
export const Add = TemplateIconAdd.bind({});
Add.args = {
  htmlColor: '#00B0B8',
};

const TemplateIconShop: ComponentStory<typeof IconShop> = (args) => (
  <Container>
    <IconShop {...args} />
  </Container>
);
export const Shop = TemplateIconShop.bind({});
Shop.args = {
  htmlColor: '#1E1E1E',
  notify: true,
};

const TemplateIconLanguage: ComponentStory<typeof IconLanguage> = (args) => (
  <Container>
    <IconLanguage {...args} />
  </Container>
);
export const Language = TemplateIconLanguage.bind({});
Language.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconUser: ComponentStory<typeof IconUser> = (args) => (
  <Container>
    <IconUser {...args} />
  </Container>
);
export const User = TemplateIconUser.bind({});
User.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconFb: ComponentStory<typeof IconFb> = (args) => (
  <Container>
    <IconFb {...args} />
  </Container>
);
export const Fb = TemplateIconFb.bind({});
Fb.args = {
  htmlColor: '#1E1E1E',
};

const TemplateIconTw: ComponentStory<typeof IconTw> = (args) => (
  <Container>
    <IconTw {...args} />
  </Container>
);
export const Tw = TemplateIconTw.bind({});
Tw.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconIns: ComponentStory<typeof IconIns> = (args) => (
  <Container>
    <IconIns {...args} />
  </Container>
);
export const Ins = TemplateIconIns.bind({});
Ins.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconYtb: ComponentStory<typeof IconYtb> = (args) => (
  <Container>
    <IconYtb {...args} />
  </Container>
);
export const Ytb = TemplateIconYtb.bind({});
Ytb.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconLoading: ComponentStory<typeof IconLoading> = (args) => (
  <Container>
    <IconLoading {...args} />
  </Container>
);
export const Loading = TemplateIconLoading.bind({});
Loading.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconSearch: ComponentStory<typeof IconSearch> = (args) => (
  <Container>
    <IconSearch {...args} />
  </Container>
);
export const Search = TemplateIconSearch.bind({});
Search.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconMenu: ComponentStory<typeof IconMenu> = (args) => (
  <Container>
    <IconMenu {...args} />
  </Container>
);
export const Menu = TemplateIconMenu.bind({});
Menu.args = {
  htmlColor: '#9F9F9F',
};

const TemplateIconShare: ComponentStory<typeof IconShare> = (args) => (
  <Container>
    <IconShare {...args} />
  </Container>
);
export const Share = TemplateIconShare.bind({});

// const TemplateIconFacebook: ComponentStory<typeof IconFacebook> = (args) => (
//   <Container>
//     <IconFacebook {...args} />
//   </Container>
// );
// export const Facebook = TemplateIconFacebook.bind({});

const TemplateIconInstagram: ComponentStory<typeof IconInstagram> = (args) => (
  <Container>
    <IconInstagram {...args} />
  </Container>
);
export const Instagram = TemplateIconInstagram.bind({});

const TemplateIconTwitter: ComponentStory<typeof IconTwitter> = (args) => (
  <Container>
    <IconTwitter {...args} />
  </Container>
);
export const Twitter = TemplateIconTwitter.bind({});

const TemplateIconLink: ComponentStory<typeof IconLink> = (args) => (
  <Container>
    <IconLink {...args} />
  </Container>
);
export const Link = TemplateIconLink.bind({});

const TemplateIconBandaiNamco: ComponentStory<typeof IconBandaiNamco> = (args) => (
  <Container>
    <IconBandaiNamco {...args} />
  </Container>
);
export const Logo = TemplateIconBandaiNamco.bind({});

const TemplateIconPlayVideo: ComponentStory<typeof IconPlayVideo> = (args) => (
  <Container>
    <IconPlayVideo {...args} />
  </Container>
);
export const PlayVideo = TemplateIconPlayVideo.bind({});

const TemplateIconNextCircle: ComponentStory<typeof IconNextCircle> = (args) => (
  <Container>
    <IconNextCircle {...args} />
  </Container>
);
export const NextCircle = TemplateIconNextCircle.bind({});

const TemplateIconLocation: ComponentStory<typeof IconLocation> = (args) => (
  <Container>
    <IconLocation {...args} />
  </Container>
);
export const Location = TemplateIconLocation.bind({});

const TemplateIconNitendo: ComponentStory<typeof IconNitendo> = (args) => (
  <Container>
    <IconNitendo {...args} />
  </Container>
);
export const Nitendo = TemplateIconNitendo.bind({});

const TemplateIconPlaystation: ComponentStory<typeof IconPlaystation> = (args) => (
  <Container>
    <IconPlaystation {...args} />
  </Container>
);
export const Playstation = TemplateIconPlaystation.bind({});

const TemplateIconXbox: ComponentStory<typeof IconXbox> = (args) => (
  <Container>
    <IconXbox {...args} />
  </Container>
);
export const Xbox = TemplateIconXbox.bind({});

const TemplateIconPC: ComponentStory<typeof IconPC> = (args) => (
  <Container>
    <IconPC {...args} />
  </Container>
);
export const PC = TemplateIconPC.bind({});

const TemplateIconSteam: ComponentStory<typeof IconSteam> = (args) => (
  <Container>
    <IconSteam {...args} />
  </Container>
);
export const Steam = TemplateIconSteam.bind({});


const TemplateIconCalendar: ComponentStory<typeof IconCalendar> = (args) => (
  <Container>
    <IconCalendar {...args} />
  </Container>
);
export const Calendar = TemplateIconCalendar.bind({});

