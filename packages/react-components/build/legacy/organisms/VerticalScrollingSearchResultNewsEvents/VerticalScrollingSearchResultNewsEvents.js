// import { Box, Link } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// // Types
// import Typography from '~/atoms/Typography';
// import HorizontalNewsCard, { IHorizontalNewsCard } from '~/molecules/HorizontalNewsCard';
// import colors from '~/theme/colors';
// import useInfiniteScroll from 'react-infinite-scroll-hook';
// import { IPropsNewsEvents } from '~/organisms/SearchResult/types';
// import { IconLoading } from '~/atoms/Icon';
// import { RESPONSE_TIME_IN_MS } from '~/utils/constants';
// const VerticalScrollingSearchResultNewsEvents: React.FC<IPropsNewsEvents> = (props) => {
//     const { title = '', viewMore, listThumbnail, nextImage, numberShow } = props
//     const [loading, setLoading] = React.useState(false);
//     const [items, setItems] = React.useState<any[]>([]);
//     const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
//     const [error, setError] = React.useState<Error>();
//     const [numberSkip, setNumberSkip] = React.useState<number>(0);
//     const [totalItem, setTotalItem] = React.useState<number>(1);
//     const [getDataQueryTags, setGetDataQueryTags] = React.useState<string[]>(dataQueryTags);
//     const [dataQuGame, setDataQuGame] = React.useState<string>(dataQueryGame);
//     interface Response {
//         hasNextPage: boolean;
//         data: any[];
//     }
//     // Handle call api load item
//     const loadItems = (): Promise<Response> => {
//         return new Promise((resolve) => {
//             const newArray: any[] = [];
//             if (items.length < totalItem) {
//                 setTimeout(() => {
//                     handlerScroll(locale, getDataQueryTags, NUMBER_ITEMS, numberSkip * NUMBER_ITEMS, dataQuGame).then((dataItem: any) => {
//                         setTotalItem(dataItem.total)
//                         dataItem?.items?.forEach((item: IHorizontalNewsCard) => {
//                             newArray.push(item)
//                         })
//                         setNumberSkip(numberSkip + 1) // Increase number skip when each load
//                         // Handle hidden icon loading
//                         if ((newArray.length + items.length) >= dataItem.total) {
//                             if (typeof setDataFilterSelected === 'function') {
//                                 setDataFilterSelected(newArray)
//                             }
//                             resolve({ hasNextPage: false, data: newArray });
//                         } else {
//                             if (typeof setDataFilterSelected === 'function') {
//                                 setDataFilterSelected(newArray)
//                             }
//                             resolve({ hasNextPage: true, data: newArray });
//                         }
//                     })
//                 }, RESPONSE_TIME_IN_MS);
//             } else {
//                 resolve({ hasNextPage: false, data: newArray });
//             }
//         });
//     }
//     //  Handle load more
//     const loadMore = async () => {
//         setLoading(true);
//         try {
//             const { data, hasNextPage: newHasNextPage } = await loadItems();
//             setItems((current) => [...current, ...data]);
//             setHasNextPage(newHasNextPage);
//         } catch (err) {
//             setError(err as any);
//         } finally {
//             setLoading(false);
//         }
//     }
//     const [infiniteRef] = useInfiniteScroll({
//         loading,
//         hasNextPage,
//         onLoadMore: loadMore, // Some API call to fetch the next page
//         // When there is an error, we stop infinite loading.
//         // It can be reactivated by setting "error" state as undefined.
//         disabled: !!error,
//         // `rootMargin` is passed to `IntersectionObserver`.
//         // We can use it to trigger 'onLoadMore' when the sentry comes near to become
//         // visible, instead of becoming fully visible on the screen.
//         rootMargin: '0px 0px 200px 0px',
//     });
//     useEffect(() => {
//         setNumberSkip(0);
//         setTotalItem(1);
//         setHasNextPage(true);
//         setItems([])
//         if (!dataQueryTags?.length) {
//             setGetDataQueryTags([])
//         } else {
//             setGetDataQueryTags(dataQueryTags)
//         }
//         setDataQuGame(dataQueryGame);
//     }, [dataQueryTags, dataQueryGame])
//     return (
//         <Box>
//             {/* Content */}
//             <Box
//                 sx={{
//                     marginTop: {
//                         xs: '35px',
//                         md: '67px'
//                     }
//                 }}
//             >
//                 {
//                     !!dataItem.length && dataItem.map((item: IHorizontalNewsCard, idx: number) => (
//                         <Box
//                             key={idx}
//                             sx={{
//                                 marginTop: {
//                                     xs: '20px',
//                                     md: '36px'
//                                 },
//                                 '&:first-of-type': {
//                                     marginTop: '0px'
//                                 }
//                             }}
//                         >
//                             <HorizontalNewsCard nextImage={nextImage}  {...item} />
//                         </Box>
//                     ))
//                 }
//             </Box>
//             {hasNextPage && (
//                 <Box ref={infiniteRef}
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         margin: {
//                             xs: '80px 0px',
//                             md: '156px 0px',
//                         }
//                     }}
//                 >
//                     <IconLoading />
//                 </Box>
//             )}
//         </Box>
//     );
// }
// export default VerticalScrollingSearchResultNewsEvents;