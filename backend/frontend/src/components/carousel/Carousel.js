import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import CarouselItem from './CarouselItem';

export default ({carouselItems}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 50;
    return (
      <div>
        <div style={{ padding: `${chevronWidth} ${chevronWidth}px`}}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

          {
            carouselItems.map(function(item){
              return <CarouselItem 
                key={item.id}
                cardName={item.name} 
                cardImage={`static/plan_images/plan-${item.plan}.jpg`}
                imageExpl={item.plan}
                cardDescription={item.description}
                onAction={`/checkout/${item.id}`}></CarouselItem>
            })
          }
          </ItemsCarousel>
        </div>
      </div>
    );
  };