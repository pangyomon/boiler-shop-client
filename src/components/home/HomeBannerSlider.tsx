import React, { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { Banner, fetchBannerList } from '../../api';
import BannerItem from '../banner/BannerItem';
import styled from '@emotion/styled';
import oc from 'open-color';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeBannerSlider = () => {
  const [settings] = useState<Settings>({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const [bannerList, setBannerList] = useState<Banner[]>([]);

  useEffect(() => {
    const getBannerList = async () => {
      try {
        setBannerList(await fetchBannerList());
      } catch (e) {
        console.error(e);
      }
    };

    getBannerList();
  }, []);

  return (
    <BannerSliderBox>
      <BannerList {...settings}>
        {
          bannerList.map((banner: Banner, index: number) => {
            return (
              <BannerItem
                imageUrl={banner.imageUrl}
                key={index}
              />
            );
          })
        }
      </BannerList>
    </BannerSliderBox>
  );
};

const BannerSliderBox = styled.section`
  max-height: 500px;
`;

const BannerList = styled(Slider)`
  overflow: hidden;

  .slick-dots {
    left: 4rem;
    bottom: 1rem;
    z-index: 1;

    width: auto;

    // TODO: slick dots css refactor
    li {
      button {
        transition: all 250ms ease-in-out;
        width: 1rem;
        height: 1rem;

        border-radius: 50%;

        background-color: ${oc.white};
        opacity: 0.5;

        &:before {
          all: unset;
        }
      }

      &.slick-active {
        width: 3rem;

        button {
          width: 3rem;
          border-radius: 10px;
          opacity: 0.95;
        }
      }
    }
  }
`;

export default HomeBannerSlider;
